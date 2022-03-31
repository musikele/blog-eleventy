---
id: 336
title: 'Tutti i modi per generare ID in Hibernate &#038; JPA'
date: 2015-11-27T10:00:50+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=336
permalink: /2015/11/tutti-modi-generare-id-hibernate-jpa/
dsq_thread_id:
  - "4354879780"
categories:
  - Italiano
tags:
  - db
  - generare id
  - hibernate
  - jpa
  - mysql
  - oracle
---
[<img class="size-full wp-image-456 alignleft" src="https://i0.wp.com/michelenasti.com/uploads/2015/11/hibernate.jpg?fit=200%2C195" alt="Veramente brutto il logo di Hibernate, vero? " data-recalc-dims="1" />](https://i0.wp.com/michelenasti.com/uploads/2015/11/hibernate.jpg)Siccome dovevo creare ID con alcune proprietà particolari per alcuni oggetti, ho iniziato a cercare tutti i vari modi in cui si potevano assegnare ID a oggetti JPA e Hibernate.

Avevo questo articolo nelle bozze da un bel po'; f<span style="line-height: 1.5;">ondamentalmente sono un programmatore Full-Stack ma, quando una cosa non ti piace, tendi a </span><span style="line-height: 1.5;">non memorizzarla 🙂 quindi mi segno molte cose che faccio qui, sul blog, che magari poi diventano articoli. </span>

## JPA

(vedi [https://en.wikibooks.org/wiki/Java\_Persistence/Identity\_and_Sequencing#Sequencing](https://en.wikibooks.org/wiki/Java_Persistence/Identity_and_Sequencing#Sequencing))

  * **table sequencing**, ossia prende il prossimo ID da una tabella appositamente configurata sul proprio DB. Portabile, ma lento. Esempio: <pre class="lang:java decode:true">@Entity
public class Employee {
    @Id
    @TableGenerator(name="TABLE_GEN", table="SEQUENCE_TABLE", pkColumnName="SEQ_NAME",
        valueColumnName="SEQ_COUNT", pkColumnValue="EMP_SEQ")
    @GeneratedValue(strategy=GenerationType.TABLE, generator="TABLE_GEN")
    private long id;
    ...
}</pre>

  * <span class="mw-headline"><strong>Sequence objects</strong>, usati solo sui DB che li supportano, tipo Oracle. Sono degli oggetti che contengono il prossimo ID da utilizzare. Funziona bene ma non è portabile (MySql non ce l'ha). </span> <pre class="lang:java decode:true">...
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="EMP_SEQ")
    @SequenceGenerator(name="EMP_SEQ", sequenceName="EMP_SEQ", allocationSize=100)
    private long id;
    ...
}</pre>

  * <span class="mw-headline"><strong>Identity sequencing</strong>, incrementa di 1 l'ID ad ogni passo. Dipende dal DB purtroppo, ad esempio Oracle non lo supporta. </span> <pre class="lang:java decode:true ">...
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;
    ...
}</pre>
    
     </li> </ul> 
    
    ## HIBERNATE
    
    Con Hibernate vi sono altre alternative possibili, alcune sono piccole variazioni di quelle viste in precedenza (e vi consiglio di utilizzare JPA piuttosto che legarvi a Hibernate). Quasi sempre, al posto di SequenceGenerator useremo GenericGenerator che è proprio di Hibernate.
    
      * **HiLo** : un algoritmo per generare ID numerici (Long, Int) che fa poche chiamate al DB per conoscere la sequenza corrente; se due transazioni concorrenti provano ad avere lo stesso ID, allora otterranno due numeri profondamente diversi. Esempio di uso: <http://vladmihalcea.com/2014/06/23/the-hilo-algorithm/>
      * Se la chiave è di tipo Stringa, si può usare un **generatore di UUID** : <pre class="lang:java decode:true">@Id
@GeneratedValue(generator = "system-uuid")
@GenericGenerator(name = "system-uuid", strategy = "uuid")
private String id;</pre>
    
      * &#8220;**assigned**&#8221; : il programmatore si deve preoccupare di generare un ID (univoco) prima di memorizzare l'entità
      * &#8220;**increment**&#8221; : in Hibernate equivale sempre a max(id) +1 (diverso da JPA!)
      * **custom id generator** : questo sembra essere ciò che mi serve ma l'articolo risale al 2011 e la configurazione è descritta in xml. Devo trovare la versione con le annotazioni. [http://learningviacode.blogspot.it/2011/11/creating-custom-id-generator.html?showComment=1436277811662#c1961377562249766537
  
](http://learningviacode.blogspot.it/2011/11/creating-custom-id-generator.html?showComment=1436277811662#c1961377562249766537) Su stack overflow c'è una versione che utilizza le annotations: <http://stackoverflow.com/questions/11631800/hibernate-how-specify-custom-sequence-generator-class-name-using-annotations>
    
     