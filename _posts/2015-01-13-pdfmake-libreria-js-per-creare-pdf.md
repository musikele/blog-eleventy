---
id: 68
title: 'Pdfmake : libreria JS per creare PDF'
date: 2015-01-13T13:30:46+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=68
permalink: /2015/01/pdfmake-libreria-js-per-creare-pdf/
dsq_thread_id:
  - "3966435152"
image: /wp-content/uploads/2015/01/pdfmake-825x396.png
categories:
  - Italiano
tags:
  - jasperreports
  - javascript
  - pdf
  - jspdf
  - pdfmake
---
[<img class="full-width alignnone wp-image-73 size-full" src="https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/01/pdfmake.png?fit=877%2C396" alt="pdfmake" srcset="https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/01/pdfmake.png?w=877 877w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/01/pdfmake.png?resize=300%2C135 300w" sizes="(max-width: 877px) 100vw, 877px" data-recalc-dims="1" />](https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/01/pdfmake.png)Ecco a voi il task della settimana: generare _on the fly_ un **pdf** con il contenuto di una tabella.

Quale libreria scegliere?

  * [**JasperReports**](https://community.jaspersoft.com/) non è adatto allo scopo: bisognerebbe spedire il contenuto della tabella sul backend, e far stampare il report al server; ma soprattutto, se l'applicazione contiene 100.000 tabelle, c'è il rischio di dover preparare 100.000 template? (Aiuto miei cari friends della community, sinceramente non sono un super esperto di JasperReports!). In ogni caso, i dati sono in genere già disponibili sul client; possibili che non ci sono soluzioni "native" in js?
  * [**jsPDF**](https://parall.ax/products/jspdf) è un'altra libreria presa in considerazione. E' Javascript, è frontend, è leggera. Il problema è che non è capace di renderizzare l'HTML, quindi per creare la tabella avrei dovuto disegnarla linea per linea. Non un compito banale. Ad esempio, per scrivere del testo in una certa posizione, bisogna specificare la posizione di ogni oggetto: <span class="lang:default decode:true  crayon-inline">doc.text(35, 25, "Paranyan loves jsPDF");</span> . Un delirio di numeri! E poi tutti quei problemi come spaziatura... proporzioni ... overflow del testo...  insomma è quasi una tesi di laurea! Scartato.
  * [**Pdfmake**](http://pdfmake.org/#/) l'ho scoperto per caso. Nella pagina web di [UI-Grid](http://ui-grid.info/) (una tabella per Angular) c'era questo import, ma non trovavo nessun riferimento sul sito. Così sono andato sul sito ufficiale e ho provato a capirci di più.

## pdfmake, wow

Iniziamo con i vantaggi. E' **javascript puro**, e funziona anche lato server con NodeJs anche se a noi interessa nel browser (quanta roba la community NodeJs sta rilasciando, cose utilissime sul backend, che però migliorano la vita del frontend!).

E' **dichiarativo**, ossia piuttosto che dire pixel per pixel dove andare ad inserire immagini, testo, linee e tabelle, il documento viene "preparato" quasi come se fosse un HTML. Ci si può dunque focalizzare sul contenuto, e dopo aver dato qualche generica istruzione di layout, il PDF è bello e servito.

Vi devo parlare anche degli svantaggi però. Uscire dal seminato è difficile: la cosa positiva è che a me non serve. Un'altra cosa veramente brutta è che se qualcosa non è stata configurata a dovere, non vi è alcuna eccezione in console, nè niente che faccia capire cosa è accaduto al nostro pdf. Semplicemente non si apre. (E una variabile viene impostata a false). Nei miei test ho creato per errore tabelle con 3 colonne header e 4 colonne dati, e il pdf non veniva generato (e neanche gli errori).

Ma ricordiamoci il nostro obiettivo. Noi vogliamo stampare il contenuto di una tabella html, renderizzata tramite la UI-Grid di Angular. Quindi l'applicazione che vi mostro è Angular based.

### test.html

<pre class="lang:default decode:true " title="test.html">&lt;!doctype html&gt;
&lt;html ng-app="app"&gt;
&lt;head&gt;
    &lt;script src="//code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;
    &lt;script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.js"&gt;&lt;/script&gt;
    &lt;script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular-touch.js"&gt;&lt;/script&gt;
    &lt;script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular-animate.js"&gt;&lt;/script&gt;
    &lt;script src="http://ui-grid.info/docs/grunt-scripts/csv.js"&gt;&lt;/script&gt;
    &lt;script src="http://ui-grid.info/docs/grunt-scripts/pdfmake.js"&gt;&lt;/script&gt;
    &lt;script src="http://ui-grid.info/docs/grunt-scripts/vfs_fonts.js"&gt;&lt;/script&gt;
    &lt;script src="http://ui-grid.info/release/ui-grid-unstable.js"&gt;&lt;/script&gt;
    &lt;link rel="stylesheet" href="http://ui-grid.info/release/ui-grid-unstable.css" type="text/css"&gt;
    &lt;link rel="stylesheet" href="main.css" type="text/css"&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;div ng-controller="MainCtrl"&gt;
    &lt;div id="grid1" ui-grid="{ data: myData }" class="grid"&gt;&lt;/div&gt;
    &lt;button ng-click="stampa()"&gt;stampiamo il pdf!&lt;/button&gt;
&lt;/div&gt;

&lt;script src="app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

Una semplice pagina HTML, come potete vedere sto importando <span class="lang:default decode:true  crayon-inline ">pdfmake.js</span>  e <span class="lang:default decode:true  crayon-inline ">vfs_fonts.js</span>  , necessari per renderizzare i pdf. Inoltre abbiamo aggiunto un bottone che chiama la funzione <span class="lang:default decode:true  crayon-inline ">stampa()</span> .

### main.css

<pre class="lang:default decode:true" title="main.css">.grid {
    width: 600px;
    height: 300px;
}
</pre>

Niente di particolare qui, stiamo semplicemente dando le definizioni della griglia.

### app.js

A riga 78 viene definito il documento PDF: vi conviene partire da lì, dalla variabile <span class="lang:default decode:true  crayon-inline ">dd</span> , e poi nelle funzioni <span class="lang:default decode:true  crayon-inline ">table(data, columns)</span>  e <span class="lang:default decode:true  crayon-inline ">buildTableColumns(data, columns)</span> .

<pre class="lang:default decode:true " title="app.js">var app = angular.module('app', ['ngTouch', 'ui.grid']);

app.controller('MainCtrl', ['$scope', function ($scope) {

    //questo array contiene degli oggetti che sono simili a quelli 
    //che solitamente si ricevono dal server. 
    $scope.myData = [
        {
            "firstName": "Cox",
            "lastName": "Carney",
            "company": "Enormo",
            "employed": true
        },
        {
            "firstName": "Lorraine",
            "lastName": "Wise",
            "company": "Comveyer",
            "employed": false
        },
        {
            "firstName": "Nancy",
            "lastName": "Waters",
            "company": "Fuelton",
            "employed": false
        }

    ];

    //questa è la funzione che genera il pdf, una volta cliccato
    $scope.stampa = function () {
        
        //headers contiene il titolo della tabella. Viene ripetuto su
        //più pagine, quindi è importante isolarlo. Vedete la funzione 
        //getHeaders() per dettagli.  
        var headers = getHeaders($scope.myData);

        //fingiamo di prendere i dati dal server... 
        var externalDataRetrievedFromServer = $scope.myData;

        //in questa funzione costruiamo il body della tabella (con i dati).
        function buildTableBody(data, columns) {
            var body = [];

            //aggiungiamo gli header, come prima riga della tabella
            body.push(columns);

            //per ogni riga... 
            data.forEach(function (row) {
                var dataRow = [];
                //aggiungiamo le colonne 
                columns.forEach(function (column) {
                    //nel mio caso, il nome delle proprietà è scritto nel 
                    //campo propertyName delle column. 
                    dataRow.push(row[column.propertyName].toString());
                })
                //costruita la riga, la aggiungiamo al body
                body.push(dataRow);
            });

            return body;
        }
        //in questa funzione creiamo la table. Notate che passiamo 
        //sia i dati, sia le colonne. 
        function table(data, columns) {
            return {
                table: {
                    //headerRows indica quante righe fanno parte  
                    //dell'header. 
                    headerRows: 1,
                    //qui chiamiamo la funzione a riga 41 per 
                    //costruire i dati contenuti nella tabella 
                    body: buildTableBody(data, columns)
                }
            };
        }

        //la variabile dd contiene tutto il documento da renderizzare
        var dd = {
            content: [
                { text: 'Tabella di prova', style: 'header' },
                table(externalDataRetrievedFromServer, headers)
            ],
            styles: {

                tableHeader: {
                    bold: true,
                    fontSize: 20,
                    color: 'black'
                }
            }
        }
        // Apre il PDF in una nuova finestra
        var outputCreatePdf = pdfMake.createPdf(dd).open();

        console.log(outputCreatePdf);

        // Stampa il PDF (Chrome-only)
        //pdfMake.createPdf(docDefinition).print();

        // download il PDF ( Chrome-only)
        //pdfMake.createPdf(docDefinition).download('optionalName.pdf');

    };
}]);

//sostituisce i nomi da camelCase a Camel case (non funziona troppo bene!)
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

//estrapola gli header dagli oggetti definiti sopra
function getHeaders(data) {
    var firstObject = data[0];
    var headers = [];
    for (var key in firstObject) {
        
        //metodo BARBARO per togliere 
        // questa property aggiunta da Angular  
        if (key !== '$$hashKey') 
            headers.push(
                {
                    text: toTitleCase(key),
                    style: 'tableHeader',
                    propertyName: key //contiene il nome della property
                });
    }
    console.table(headers);
    return headers;
}

//trasformo gli oggetti in array di dati 
function getData(data) {
    var firstObject = data[0];
    var newData = [];
    for (var key in firstObject) {
        if (key !== '$$hashKey') {
            for (var i = 0; i &lt; data.length; i++) {
                if (newData[i] === undefined)
                    newData[i] = [];
                newData[i].push(data[i][key]);
            }
        }
    }
    newData = $.makeArray(newData);
    console.table(newData);
    return newData;
}
</pre>

###  Conclusioni

Questo codice è quello che ho realizzato oggi per fare una piccola demo sulle capacità di questa libreria. Non è elegante, non è chiarissimo, ma mi è costato tanta fatica (e poi funziona). Penso che in futuro ritorno su questo esempio, specialmente ora che devo realizzare la vera e propria funzionalità, per tutte le tabelle del sistema!