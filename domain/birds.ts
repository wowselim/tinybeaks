export const BirdIds = [
  "great_tit",
  "blue_tit",
  "european_robin",
  "goldfinch",
  "black_redstart",
  "long_tailed_tit",
  "chaffinch",
  "sparrow",
  "treecreeper",
] as const;
export type BirdId = (typeof BirdIds)[number];

export type StaticBirdData = {
  title: string;
  details: string;
  latinName: string;
  location: string;
  locationsInIstanbul: string;
  xenoCantoIds: number[];
};

export const BirdData: Record<BirdId, StaticBirdData> = {
  great_tit: {
    title: "Büyük Baştankara",
    details:
      "Büyük baştankara, baştankaragiller (Paridae) familyasından bir baştankara türüdür. Bu kuşun başı koyu mavi-siyah, yanağındaki beyazlık ovaldir. Siyah gıdısı sarı renkli alt tarafının ortasına kadar geniş bir çizgi şeklinde uzar (erkeğinde geniş, dişisinde dardır)",
    latinName: "Parus major",
    location: "İstanbul, Türkiye",
    locationsInIstanbul: "Yıldız Parkı, Gülhane Parkı, Belgrad Ormanı",
    xenoCantoIds: [946921, 922370, 929202],
  },
  blue_tit: {
    title: "Mavi Baştankara",
    details:
      "Mavi baştankara, baştankaragiller (Paridae) familyasında yer alan bir kuş türüdür. Vücudu mavi ve sarı renkte, başı ise belirgin bir şekilde mavi-siyah renkte olup, yanaklarında beyaz benekler bulunur. Dişi ve erkek arasında belirgin farklar yoktur, ancak dişinin renkleri genellikle daha soluktur.",
    latinName: "Cyanistes caeruleus",
    location: "Frankfurt am Main, Almanya",
    locationsInIstanbul: "Yıldız Parkı, Belgrad Ormanı",
    xenoCantoIds: [903167, 880622, 864122],
  },
  european_robin: {
    title: "Kızılgerdan",
    details:
      "Kızılgerdan, turuncu renkteki göğsüyle tanınan, küçük ve sevimli bir kuştur. Avrupa'nın birçok bölgesinde yaygın olarak bulunur ve genellikle bahçelerde, ormanlık alanlarda ve parklarında görülür. Erkek ve dişi benzer görünüme sahiptir, ancak erkeklerin göğüs renkleri daha canlıdır.",
    latinName: "Erithacus rubecula",
    location: "Rüdesheim am Rhein, Almanya",
    locationsInIstanbul: "Yıldız Parkı, Belgrad Ormanı",
    xenoCantoIds: [943954, 919240, 840563],
  },
  goldfinch: {
    title: "Saka",
    details:
      "Saka, ince yapılı, canlı renklerdeki tüylere sahip bir kuştur. Baş kısmı siyah, kanatlarında sarı çizgiler bulunur ve vücutları kırmızımsı kahverengindedir. Saka, genellikle tohumlarla beslenir ve hızlı uçuşlarıyla bilinir. Bahçelerde ve açık alanlarda sıkça görülür.",
    latinName: "Carduelis carduelis",
    location: "Rüdesheim am Rhein, Almanya",
    locationsInIstanbul: "İstanbul'da henüz göremedim",
    xenoCantoIds: [945796, 819266],
  },
  black_redstart: {
    title: "Kara Kızılkuyruk",
    details:
      "Kara kızılkuyruk, genellikle kayalık bölgelerde ve şehirlerin çevresinde bulunan, karasal alanda yaşayan bir kuştur. Erkeği, vücudunun üst kısmında gri-kahverengi tonlarına sahipken, alt kısmında kırmızımsı bir kuyruk rengiyle dikkat çeker. Dişi ise daha soluk renklidir.",
    latinName: "Phoenicurus ochruros",
    location: "Rüdesheim am Rhein, Almanya",
    locationsInIstanbul: "İstanbul'da henüz göremedim",
    xenoCantoIds: [914573, 844325, 891721],
  },
  long_tailed_tit: {
    title: "Uzunkuyruk",
    details:
      "Uzunkuyruk, küçük, yuvarlak vücutlu ve çok uzun kuyruğa sahip bir kuştur. Genellikle ormanlık alanlarda ve çalılıklarda bulunur. Kuyruğu, vücudunun iki katı kadar uzun olup, bu özelliğiyle dikkat çeker. Üstü gri-beyaz, altı ise pembemsi renktedir.",
    latinName: "Aegithalos caudatus",
    location: "Rüdesheim am Rhein, Almanya",
    locationsInIstanbul: "Fethipaşa Korusu",
    xenoCantoIds: [947331, 612743, 523603],
  },
  chaffinch: {
    title: "İspinoz",
    details:
      "İspinoz, yuvarlak hatları ve canlı renkleriyle bilinen bir kuştur. Erkeklerinin sırtı kahverengi, göğsü ise kırmızımsı-pembe tonlarındadır. Dişileri daha soluk renklidir. İspinozlar, genellikle ormanlık alanlar, bahçeler ve parklar gibi yerlerde yaşar ve tohumlarla beslenir.",
    latinName: "Fringilla coelebs",
    location: "Denizli, Türkiye",
    locationsInIstanbul: "Belgrad Ormanı",
    xenoCantoIds: [944589, 936719, 930041],
  },
  sparrow: {
    title: "Serçe",
    details:
      "Serçe, en yaygın ve tanınan kuş türlerinden biridir. Küçük, yuvarlak bir vücuda sahip olup, kahverengi ve gri tonlarında tüyleri vardır. Genellikle insanlar tarafından yerleşim alanlarında beslenen serçeler, hızlı hareket eden ve gürültücü kuşlardır. Erkeklerin kafası daha koyu renklidir, dişileri ise daha soluk ve nötrdür.",
    latinName: "Passer domesticus",
    location: "Obertshausen, Almanya",
    locationsInIstanbul: "İnsanların olduğu her yerde",
    xenoCantoIds: [349814, 659845],
  },
  treecreeper: {
    title: "Orman Tırmaşıkkuşu",
    details:
      "Orman tırmaşıkkuşu, ormanlık alanlarda ağaç gövdelerinde ve dallarda tırmanarak yaşayan bir kuştur. İnce ve uzun gagası, ağaç kabuğundan böcekler ve diğer küçük yaratıkları yakalamak için idealdir. Üst tarafı kahverenginden, alt kısmı ise beyazdır. Kuyruğu sert ve dik olarak durur.",
    latinName: "Certhia familiaris",
    location: "İstanbul, Türkiye",
    locationsInIstanbul: "Belgrad Ormanı",
    xenoCantoIds: [914069, 904077, 893580],
  },
};
