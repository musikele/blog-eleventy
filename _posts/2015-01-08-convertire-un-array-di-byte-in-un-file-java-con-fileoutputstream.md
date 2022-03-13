---
id: 32
title: 'JAVA - Convertire un array di byte in un file con FileOutputStream'
date: 2015-01-08T10:49:51+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=32
permalink: /2015/01/convertire-un-array-di-byte-in-un-file-java-con-fileoutputstream/
dsq_thread_id:
  - "3974718099"
image: /wp-content/uploads/2015/01/Sun-Java-JDK_1.jpg
categories:
  - Italiano
tags:
  -  FileOutputStream
  - java
---
Ok, JasperReports mi pemette di creare un report in pdf anche come array di byte, cosa utile visto che poi il report va a finire nel db. Ma per fare dei test, come faccio a trasformare l'array di byte in file?

Voilà:

<pre class="lang:default decode:true">FileOutputStream fos = new FileOutputStream("pathname");
fos.write(myByteArray);
fos.close();
</pre>

Vantaggi: non servono librerie aggiuntive per questa operazione.

Svantaggi: qualcuno dice che [Apache Commons](http://commons.apache.org/proper/commons-io/apidocs/org/apache/commons/io/FileUtils.html#writeByteArrayToFile%28java.io.File,%20byte%5B%5D%29) si fa tutto con una istruzione.

fonte: [Stack Overflow - byte[] to file in Java](http://stackoverflow.com/questions/4350084/byte-to-file-in-java)