type Images = Record<
  string,
  {
    src: string;
    width?: string;
    height?: string;
    alt?: string;
  }
>;

export const szczerbatekConfig = {
  images: {
    ourSolutions: {
      design: {
        src: "/team.jpeg",
        width: "400px",
        height: "300px",
        alt: "Design",
      },
      laminating: {
        src: "/team.jpeg",
        width: "450px",
        height: "320px",
        alt: "Laminating",
      },
      onboardElectronics: {
        src: "/team.jpeg",
        width: "380px",
        height: "285px",
        alt: "Onboard Electronics",
      },
      "3DPrinting": {
        src: "/team.jpeg",
        width: "420px",
        height: "315px",
        alt: "3D Printing",
      },
      programming: {
        src: "/team.jpeg",
        width: "420px",
        height: "315px",
        alt: "Programming",
      },
      cncMilling: {
        src: "/team.jpeg",
        width: "420px",
        height: "315px",
        alt: "CNC Milling",
      },
    } satisfies Images,
    team: {
      all: {
        src: "/szczerbatek/team/all.jpg",
        width: "1200px",
        height: "800px",
        alt: "All",
      },
      iza: {
        src: "/team/iza.jpg",
        width: "400px",
        height: "600px",
        alt: "Izabella Rosikoń",
      },
    } satisfies Images,
  },
} as const;
