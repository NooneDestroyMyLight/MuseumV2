["Interior", "design"];
["Construction", "and renovation"];
["Architectural", "design"];
["Our", "projects"];

export interface ITitleLayoutData {
  text: string[];
  link: string;
  backgroundImg: string;
}

export const titleBoxMenuDatas: ITitleLayoutData[] = [
  {
    text: ["Interior", "design"],
    link: "/services/interior-design",
    backgroundImg: `url("/boxMenuImg/design-web.jpg") `,
  },
  {
    text: ["Construction", "and renovation"],
    link: "/services/construction-and-renovation",
    backgroundImg: `url("/boxMenuImg/remont-web.jpg") `,
  },
  {
    text: ["Architectural", "design"],
    link: "/services/architectural-design",
    backgroundImg: `url("/boxMenuImg/remont-3.jpg")`,
  },
  {
    text: ["Our", "projects"],
    link: "/projects",
    backgroundImg: `url("/boxMenuImg/showroom.jpg")`,
  },
];
