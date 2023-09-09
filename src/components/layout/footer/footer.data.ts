export interface IFooterData {
  text: string;
  link: string;
}

export const contact: IFooterData[] = [
  {
    text: "+34 641 528 689",
    link: "",
  },
  {
    text: "+38 067 111 1120",
    link: "",
  },
  {
    text: "artur@museum-interior.com",
    link: "",
  },
];

export const footerDatas: IFooterData[][] = [
  [
    {
      text: "Project",
      link: "/Project",
    },
    {
      text: "Service",
      link: "/Service",
    },
    {
      text: "About us",
      link: "/AboutUs",
    },
  ],
  [
    {
      text: "Reviews",
      link: "/Reviews",
    },
    {
      text: "Contacts",
      link: "/Contacts",
    },
    {
      text: "RU",
      link: "/RU",
    },
    {
      text: "ES",
      link: "/ES",
    },
  ],
  [
    {
      text: "Valencia",
      link: "",
    },
    ...contact,
  ],
];
