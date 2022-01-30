---
id: 356
title: Informatica Antincendio
date: 2015-07-26T19:25:19+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=356
permalink: /2015/07/informatica-antincendio/
dsq_thread_id:
  - "3973298639"
categories:
  - Italiano
---
Si: l'articolo che sto per scrivere parla proprio di questo: **Informatica Antincendio**.

E' che dietro casa mia ci sono almeno 2 incendi all'anno, e la collina che sovrasta casa mia è praticamente brulla e senza alberi.

<div id="attachment_357" style="width: 310px" class="wp-caption aligncenter">
  <a href="https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/07/11717487_10207324270535115_1576077260777951752_o.jpg"><img class="wp-image-357 size-medium" src="https://i0.wp.com/michelenasti.com/wp-content/uploads/2015/07/11717487_10207324270535115_1576077260777951752_o-300x199.jpg?fit=300%2C199" alt="Foto del vero incendio del castello di Castel San Giorgio. Scattata magistralmente da Elio di Pace. " srcset="https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/07/11717487_10207324270535115_1576077260777951752_o.jpg?resize=300%2C199 300w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/07/11717487_10207324270535115_1576077260777951752_o.jpg?resize=1024%2C678 1024w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/07/11717487_10207324270535115_1576077260777951752_o.jpg?w=1840 1840w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></a>
  
  <p class="wp-caption-text">
    Foto del vero incendio del castello di Castel San Giorgio. Scattata magistralmente da <a href="https://m.facebook.com/profile.php?id=261569987211930">Elio di Pace</a>.
  </p>
</div>

Così ho pensato, forse è possibile tirare fuori un _modello predittivo per gli incendi_ che, basandosi sul passato, riesca a dirmi quando ci saranno i prossimi roghi.

Sembra fantascienza, però ci ho pensato e non è un'idea tanto campata in aria. In fondo riusciamo a prevedere che tempo farà domani, forse possiamo prevedere anche gli incendi!

Ecco tutto quello che so a riguardo, avendone spenti almeno due all'anno negli ultimi dieci.

  * sono di matrice umana, c'è un piromane e tutti stiamo aspettando che muoia.
  * Il piromane guarda il meteo e sceglie sempre il giorno migliore per farlo.
  * Quando si sviluppa un incendio, in genere il meteo è 
      * ventoso
      * caldo
      * non dovrà piovere il giorno sucessivo

Potremmo creare un database con gli ultimi incendi e memorizzare queste info:

  * data e ora di quando è partito l'incendio
  * temperatura
  * direzione e forza del vento
  * meteo del giorno successivo.

L'idea è che se il giorno successivo piove non ha senso appiccare un incendio. Le informazioni sulla direzione del vento sono utili per predire dove sarà appiccato il fuoco: se il vento soffia a Nord conviene appiccare l'incendio a Sud.

A questo punto, dovrebbe essere piuttosto semplice tirare fuori una correlazione statistica del passato. La mia idea è che tre cose le conosceremo in anticipo, ossia la temperatura e il vento di un dato giorno e il meteo del giorno successivo; questo ci permetterebbe di localizzare da dove partirà l'incendio e ci potrebbe permettere di pattugliare le aree sensibili.

Purtroppo mi rendo conto che serve l'aiuto delle istituzioni per conoscere i dati degli ultimi incendi (ma potrei usare la montagna dietro casa mia come banco di prova). E poi ci sarebbe da lavorare un po' sulla probabilità degli eventi ... Insomma potrebbe essere un ennesimo strumento utile contro gli incendi.

Voi che ne pensate?