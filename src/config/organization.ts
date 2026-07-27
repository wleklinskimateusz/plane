export const organizationConfig = {
  name: "AGH Solar Plane",
  founded: 2018,
  members: 60,
  activeProjects: 5,
  contact: {
    sponsorMail: "wspolpraca@solarplane.agh.edu.pl",
    generalMail: "kontakt@solarplane.agh.edu.pl",
    location: "AGH UST, Kraków",
    building: "D-9, 117",
  },
  socials: {
    facebook: "https://www.facebook.com/SolarPlane",
    instagram: "https://www.instagram.com/aghsolarplane",
    linkedin: "https://www.linkedin.com/company/agh-solar-plane",
    youtube: "https://www.youtube.com/@aghsolarplane",
  },
  personel: {
    president: {
      name: "inż. Izabella Rosikoń",
      email: "izabella.rosikon@solarplane.agh.edu.pl",
      phone: "+48 790 697 577",
    },
    vicePresident: {
      name: "Marta Łopusiewicz",
      email: "marta.lopusiewicz@solarplane.agh.edu.pl",
      phone: "+48 728 931 428",
    },
    advisor: {
      name: "dr hab. inż. Krzysztof Sornek",
      email: "ksornek@agh.edu.pl",
    },
  },
  partners: [
    {
      translationKey: "AGH",
      image: "/partners/agh.jpg",
      href: "https://www.agh.edu.pl/",
    },
    {
      translationKey: "EU",
      image: "/partners/eu.png",
      href: "https://european-union.europa.eu/index_en",
    },
    {
      translationKey: "MNiSW",
      image: "/partners/mnisw.png",
      href: "https://www.gov.pl/web/nauka/wsparcie-studentow-w-zakresie-podniesienia-ich-kompetencji-i-umiejetnosci",
    },
    {
      translationKey: "WIMIR",
      image: "/partners/wimir.png",
      href: "https://imir.agh.edu.pl/",
    },
    {
      translationKey: "WEiP",
      image: "/partners/weip.png",
      href: "https://www.weip.agh.edu.pl/",
    },
    {
      translationKey: "WEAIiB",
      image: "/partners/eaiib.png",
      href: "https://www.eaiib.agh.edu.pl/",
    },
    {
      translationKey: "Elektrobot",
      image: "/partners/elektrobot.png",
      href: "https://elektrobot.pl/",
    },
    {
      translationKey: "Promienie",
      image: "/partners/promienie.png",
      href: "https://www.promienieslonca.pl/",
    },
    {
      translationKey: "BMC",
      image: "/partners/bmc.png",
      href: "https://www.bm-chemie.com/",
    },
    {
      translationKey: "Drony",
      image: "/partners/drony.png",
      href: "https://drony.net/",
    },
    {
      translationKey: "DS",
      image: "/partners/ds.svg",
      href: "https://www.3ds.com/",
    },
    {
      translationKey: "Orlen",
      image: "/partners/orlen.png",
      href: "https://fundacja.orlen.pl/pl",
    }
  ],
} as const;
