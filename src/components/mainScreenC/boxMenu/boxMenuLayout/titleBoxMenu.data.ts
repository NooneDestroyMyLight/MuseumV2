["Interior", "design"];
["Construction", "and renovation"];
["Architectural", "design"];
["Our", "projects"];

interface ITitleLayoutData {
  text: string[];
  backgroundImg: string;
}

export const titleBoxMenuDatas: ITitleLayoutData[] = [
  {
    text: ["Interior", "design"],
    backgroundImg: `url("/boxMenuImg/design-web.jpg") `,
  },
  {
    text: ["Construction", "and renovation"],
    backgroundImg: `url("/boxMenuImg/remont-web.jpg") `,
  },
  {
    text: ["Architectural", "design"],
    backgroundImg: `url("/boxMenuImg/remont-3.jpg")`,
  },
  {
    text: ["Our", "projects"],
    backgroundImg: `url("/boxMenuImg/showroom.jpg")`,
  },
];
