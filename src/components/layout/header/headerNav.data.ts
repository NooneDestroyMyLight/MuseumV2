export interface IHeaderNav {
  name: string;
  subMenu?: {
    name: string;
    link: string;
  }[];
  link: string;
}

export const headerNavData: IHeaderNav[] = [
  { name: "Projects", link: "/projects" },
  {
    name: "Services",
    link: "/services",
    subMenu: [
      {
        name: "Interior Design",
        link: "/services/interior-design",
      },
      {
        name: "Construction and renovation",
        link: "/services/construction-and-renovation",
      },
      {
        name: "Architectural design",
        link: "/services/architectural-design",
      },
    ],
  },
  { name: "About us", link: "/about-us" },
  { name: "Reviews", link: "/reviews" },
  { name: "Contacts", link: "/Contacts" },
  { name: "RU", link: "/RU" },
  { name: "EU", link: "/EU" },
];

// Interior Design
// Construction and renovation
// Architectural design
