interface IHeaderNav {
  name: string;
  subMenu?: {
    name: string;
    link: string;
  }[];
  link: string;
}

export const headerNavData: IHeaderNav[] = [
  { name: "Projects", link: "/Projects" },
  {
    name: "Services",
    link: "/services",
    subMenu: [
      {
        name: "Interior Design",
        link: "/InteriorDesign",
      },
      {
        name: "Construction and renovation",
        link: "/ConstructionAndRenovation",
      },
      {
        name: "Architectural design",
        link: "/ArchitecturalDesign",
      },
    ],
  },
  { name: "About us", link: "/AboutUs" },
  { name: "Reviews", link: "/Reviews" },
  { name: "Contacts", link: "/Contacts" },
  { name: "RU", link: "/RU" },
  { name: "EU", link: "/EU" },
];

// Interior Design
// Construction and renovation
// Architectural design
