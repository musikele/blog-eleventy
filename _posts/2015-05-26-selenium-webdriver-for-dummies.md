---
id: 306
title: Selenium WebDriver for dummies
date: 2015-05-26T08:58:58+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=306
permalink: /2015/05/selenium-webdriver-for-dummies/
dsq_thread_id:
  - "4071409600"
categories:
  - Italiano
tags:
  - selenium
  - test automatici
  - webdriver
---
Esistono tool che permettono di scrivere i casi di test che simulano il comportamento dell'utente e di eseguirli all'infinito, cosa utile per individuare eventuali regressioni durante lo sviluppo.

Il più diffuso a livello globale, per i test di tipo funzionale, è **Selenium**, nelle sue varianti **Selenium IDE** e **Selenium Web Driver**. Abbiamo testato entrambi e alla fine abbiamo scelto WebDriver. (Ora esistono altri tool come Protractor, ma bisogna riconoscere che Selenium per anni è stato il più diffuso).

### Selenium IDE

Sulla carta era la scelta migliore per gli utenti-tester: permette di memorizzare i passaggi fatti dall'utente sulla pagina, memorizzando i click del mouse e le digitazioni sulla tastiera, senza scrivere codice.
  
I problemi riscontrati sono stati i seguenti:

  * **alta instabilità** del sistema con il nostro applicativo, dovuto all'elevato numero di componenti caricati e agli iframe ; ciò causava crash e stalli del browser;
  * il sistema "punta e clicca" spesso **non riconosce le azioni dell'utente**
  * per riuscire a far funzionare casi di test anche molto semplici era necessario **intervenire manualmente sul codice prodotto**;
  * **scarso supporto alle webapp moderne** che usano tecnologie come AJAX, per caricare pezzi di pagine dinamicamente.

### Selenium WebDriver

**Selenium WebDriver è il motore di Selenium IDE, tuttavia è decisamente più stabile e funzionale**. E' una libreria Java che, tramite la scrittura di semplici programmi, permette di automatizzare la navigazione (e il test) di pagine web. Lo svantaggio di questo approccio è che **figure non tecniche, che non hanno basi di programmazione, potrebbero essere titubanti all'idea di scrivere test in un linguaggio di programmazione** che non conoscono.

Per semplificare l'approccio alla scrittura dei casi di test ho pensato di creare una classe Java che semplifica le operazioni più comuni dei tester. Alcune funzionalità messe a disposizione sono:

  * **apertura e chiusura del browser**
  * **navigazione** verso un indirizzo specifico
  * **login** e **logout**
  * possibilità di **recuperare un oggetto dalla pagina** (per poterlo poi utilizzare, ad esempio per simulare un click, o inviare testo, etc)
  * possibilità di **navigare all'interno dei frame**, cosa che con Selenium IDE è risultata particolarmente difficile;
  * possibilità di **eseguire i test in batteria**, su un server remoto con accesso a un browser, e di ottenere un report dei casi di test che falliscono

Una delle funzioni più complesse che abbiamo dovuto realizzare, nell'ottica delle webapp asincrone, è di **aspettare che un componente venisse caricato e mostrato all'interno della pagina**. Il nostro approccio permette di aspettare (per un tempo prefissato) che un componente sia caricato e mostrato all'utente, e solo dopo renderlo disponibile al test. _Se non si seguisse questo approccio, si correrebbe il rischio di usare componenti non ancora caricati, o cliccare su elementi nascosti._

Tutto ciò che è stato descritto in questo semplice documento è in teoria possibile realizzarlo anche con Selenium IDE; a causa dei frequenti crash e stalli del sistema abbiamo notato come l'approccio WebDriver sia risultato più semplice sia per il tester sia per colui che dovrà eventualmente continuare l'evoluzione della libreria.

### Il codice

riporto la classe che abbiamo scritto per i nostri test. Questa classe va ereditata dai vostri test junit e i suoi metodi pubblici sono ciò che potrebbero servirvi di più.

Il metodo più utile, per noi, è <span class="lang:java decode:true crayon-inline">waitAndReturnTheObject</span> che aspetta che l'elemento venga creato nel DOM e mostrato all'utente, e una volta recuperato lo restituisce. Gli altri metodi hanno un javadoc che potreste trovare utile.

Essendo un JUnit non dovreste avere troppi problemi a eseguire i problemi con un tool come Maven.

<pre class="lang:java decode:true" title="SeleniumWebDriverBaseTest">package utils;

import static org.junit.Assert.fail;

import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.logging.Logger;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * Classe statica che aiuta a sviluppare test con Selenium Web driver.
 */
public class SeleniumWebDriverBaseTest {

    protected WebDriver driver;
    protected String baseUrl;
    private StringBuffer verificationErrors = new StringBuffer();
    private final ExecutorService service = Executors.newSingleThreadExecutor();
    public static final int TIMEOUT = 30;
    private static final Logger LOGGER = Logger.getLogger(
        SeleniumWebDriverBaseTest.class.getSimpleName());


    @Before
    public void setUp() throws Exception {
        driver = new FirefoxDriver();
        baseUrl = "http://localhost:8080/";
        driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
        driver.get(baseUrl);
        LOGGER.info("connecting to " + baseUrl);
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
        String verificationErrorString = verificationErrors.toString();
        if (!"".equals(verificationErrorString)) {
            fail(verificationErrorString);
        }
    }

    /**
     * Checks if the element is present into the DOM.
     * Caution: it will answer true even if the element is present, but not visible. @see
     * waitForLoadedAndDisplayed
     *
     * @param by     the selector to reach the element
     * @return true if the element is found
     */
    public boolean isElementPresent(By by) {
        try {
            driver.findElement(by);
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    /**
     * checks that the element is shown on video
     *
     * @param by     the selector
     * @return true if the element is shown on video
     */
    public boolean isElementDisplayed(By by) {
        try {
            return driver.findElement(by).isDisplayed();
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    /**
     * Stops the test for some time; useful to check if everything is going good.
     *
     * @param milliseconds
     */
    public static void pause(long milliseconds) {
        try {
            Thread.sleep(milliseconds);
        } catch (InterruptedException e) {
        }
    }

    /**
     * This method checks that the element has been loaded into the DOM and shown.
     *
     * @param by the element selector
     */
    public void waitForLoadedAndDisplayed(final By by) {
        LOGGER.info("waiting for " + by.toString());

        final Future&lt;Void&gt; future = service.submit(new Callable&lt;Void&gt;() {

            public Void call() throws Exception {
                while (true) {
                    if (isElementPresent(by) && isElementDisplayed(by)) {
                        LOGGER.info(by + " found");
                        return null;
                    }
                }
            }
        });

        try {
            future.get(TIMEOUT, TimeUnit.SECONDS);
        } catch (InterruptedException | ExecutionException | TimeoutException e) {
            fail("search for " + by + " went timeout!");
        }
    }

    /**
     * utility method to move to other frames. 
     * beware: it will always return to the parent frame first.
     *
     * @param url url to check if the frame contains it.
     */
    public void switchToFrame(String url) {
        driver.switchTo().defaultContent();
        LOGGER.info("Switchig to frame " + url);
        List&lt;WebElement&gt; framesList = driver.findElements(By.xpath("//iframe"));

        WebElement selectedFrame = null;

        for (WebElement frame : framesList) {
            if (frame.getAttribute("src").contains(url)) {
                selectedFrame = frame;
            }
        }
        LOGGER.info("Selected Frame: " + selectedFrame.getAttribute("src"));

        driver.switchTo().frame(selectedFrame);
        LOGGER.info("switched!");
    }

    /**
     * go back to the default frame (the main document)
     *
     */
    public void switchToDefaultFrame() {
        driver.switchTo().defaultContent();
    }

    /**
     * calls "waitForLoadedAndDisplayed(by)" and returns the element found, 
     * that can be used easily.
     * @param by element the selector.
     * @return the WebElement chosen
     */
    public WebElement waitAndReturnTheObject(By by) {
        waitForLoadedAndDisplayed(by);
        WebElement element = driver.findElement(by);
        LOGGER.info(element + " found!");
        return element;
    }
}
</pre>

### Dipendenze Maven

Queste sono le dipendenze necessarie:

<pre class="lang:xhtml decode:true" title="maven dependencies ">&lt;dependency&gt;
    &lt;groupId&gt;org.seleniumhq.selenium&lt;/groupId&gt;
    &lt;artifactId&gt;selenium-java&lt;/artifactId&gt;
    &lt;version&gt;2.45.0&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;junit&lt;/groupId&gt;
    &lt;artifactId&gt;junit&lt;/artifactId&gt;
    &lt;version&gt;4.12&lt;/version&gt;
&lt;/dependency&gt;</pre>

### Cosa manca?

  * sostituire la classe di logging con una più seria
  * caricare un progetto di esempio e un esempio di utilizzo
  * scrivere questa pagina in inglese