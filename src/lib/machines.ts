// Makine parkuru listesi: ana sayfa ve Makine Parkuru sayfası buradan okur.
export type Machine = { name: string; image: string; detail: string };
export type MachineGroup = { category: string; items: Machine[] };

export const MACHINE_PARKS: MachineGroup[] = [
  {
    category: "CNC Dik İşleme Merkezleri",
    items: [
      { name: "NEWAY CNC Dik İşleme", image: "/images/cnc-dik-isleme-neway-kart.webp", detail: "X:1100 mm / Y:600 mm / Z:600 mm" },
      { name: "HAAS VF2 CNC İşleme", image: "/images/cnc-dik-isleme-haas-kart.webp", detail: "X:800 mm / Y:400 mm / Z:500 mm" }
    ]
  },
  {
    category: "Universal Torna Tezgahları",
    items: [
      { name: "Çap 1200 x 5000 Torna", image: "/images/cap-1200x5000-torna-kart.webp", detail: "Büyük çaplı ve uzun parça işleme" },
      { name: "Çap 660 x 3000 Torna", image: "/images/cap-600x3000-torna-kart.webp", detail: "Universal işleme kapasitesi" }
    ]
  },
  {
    category: "Universal Freze, Planya ve Ekipman",
    items: [
      { name: "Universal Freze Tezgahı", image: "/images/universal-freze-tezgah-kart.webp", detail: "Dişli ve kanal açma işlemleri" },
      { name: "200'lük Dik Planya", image: "/images/dikplanya-200-kart.webp", detail: "Hassas kama kanalı açma" },
      { name: "320'lik Dik Planya", image: "/images/dikplanya-320-kart.webp", detail: "Geniş kapasite kama kanalı açma" },
      { name: "Easy-Laser Kaplin Ayar Cihazı", image: "/images/easylaser-kaplin-kart.webp", detail: "Profesyonel kaplin ayar ve ölçüm sistemi" }
    ]
  }
];
