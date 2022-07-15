---
eleventyExcludeFromCollections: false
layout: post
title: Install Samsung ML-2165w printer on newest Macs
description: Basically, ignore whatever its written on their support site and follow
  my advice...
permalink: "/samsung-ml-2165w-printers-mac/"
date: 2022-07-15T00:00:00+02:00
tags:
- drivers
- mac
- ml-2165w
- printer
- samsung
headerImg: "/images/ml2165w-stampante-laser-samsung_10051.jpg"

---
I bought this little piece of hardware centuries ago: 

![Samsung ML-2165w](/images/ml2165w-stampante-laser-samsung_10051.jpg)

It's a **Samsung ML-2165w**, and it had a lot of advantages for a home user like me: 

* it's a **laser printer**. The toner takes _ages_ to run out. 
* It costed something around 70€ at the time, probably 2017. 
* It's small.
* It's wireless. I can print from my android phone! 

So, it has a lot of nice things, but being that old there are also some disadvantages: **official mac drivers do not work anymore** and there's no support from Samsung/HP. 

If you navigate to the printer's website (it's an HP website nowadays, because at the time HP bought the whole Samsung printers division) you'll find that the latest available driver is for Mac 10.15. We are - at the moment of this blog post - at Mac 12.4! 

Another issue with this printer's driver is that the driver is unsigned. This means that on newer macs you'll get a lot of security warnings and you may think that the printer driver is not installing because of these issues. 

No! The reccomended printer driver, simply, does not work. 

***

Some years ago, however, Samsung issued a new driver called **Samsung universal printer driver**. It contains drivers for all samsung printers. 

So here's the solution: 

* download the **Mac v11 driver** from [this page](https://driverfresh.com/en/printers/samsung/3-universal-driver.html) . Note that on the same page there's also the driver for Mac 10.15. Don't download that one. 

  If your concern is that the driver is not from Samsung website, I hear you, but that's what actually worked for me. Probably there's a better source out there that comes from a trusted domain. Let me know if you find one. 
* So, the driver you'll be downloading should be version 3.93.01. This driver is signed so there won't be any security warnings. 
* How to install? Open the dmg, click on **MAC_Printer**, then **Printer Driver.pkg** and follow the steps. 
* At some point the driver will ask you to connect the printer. here comes another magic step that nobody tells you. 

![](/images/schermata-2022-07-15-alle-10-25-14.png)

Sorry if my screenshots are in italian; however, you must **select the driver from the list** instead of using the proposed one. Why? The proposed one does't work! 

* From the list, select the driver for the Samsung M2060 series: 

![](/images/schermata-2022-07-15-alle-10-24-49.png)

Voilà! This super old printer now works fine with your new mac. 

***

_I made this article in the spirit of the first web - to help others that may be having my same issue. There's no ned to replace the printer if it still works. Don't fall into the consumism trap!_