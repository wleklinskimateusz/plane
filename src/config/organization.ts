export const organizationConfig = {
  name: "AGH Solar Plane",
  founded: 2018,
  members: 60,
  activeProjects: 5,
  contact: {
    sponsorMail: "wspolpraca@aghsolarplane.pl",
    generalMail: "kontakt@aghsolarplane.pl",
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
      name: "inż. Róża Łopusiewicz",
      email: "roza.lopusiewicz@solarplane.agh.edu.pl",
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
      translationKey: "IDUB",
      image: "/partners/idub.jpg",
      href: "https://www.idub.agh.edu.pl/",
    },
    {
      translationKey: "MNiSW",
      image: "/partners/mnisw.png",
      href: "https://www.gov.pl/web/nauka/wsparcie-studentow-w-zakresie-podniesienia-ich-kompetencji-i-umiejetnosci",
    },
    {
      translationKey: "aeroklub",
      image: "/partners/aeroklub.png",
      href: "http://www.aeroklubpodhalanski.pl/Lotnisko",
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
  ],
} as const;
