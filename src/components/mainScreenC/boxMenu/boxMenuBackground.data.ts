interface IBoxMenuBackgroundDatas {
  position: string;
  backgroundLink: string;
}

//Can see it inside scss in this folder
const positions: string[] = [
  "topLeftImg",
  "topRightImg",
  "bottomLeftImg",
  "bottomRightImg",
];

const backgroundLinks: string[] = [
  `url("/boxMenuImg/design-web.jpg")`,
  `url("/boxMenuImg/remont-web.jpg") `,
  `url("/boxMenuImg/remont-3.jpg")`,
  `url("/boxMenuImg/showroom.jpg")`,
];

// refactor it into function
export const boxMenuBackgroundDatas: IBoxMenuBackgroundDatas[] = [
  {
    position: positions[0],
    backgroundLink: backgroundLinks[0],
  },
  {
    position: positions[1],
    backgroundLink: backgroundLinks[1],
  },
  {
    position: positions[2],
    backgroundLink: backgroundLinks[2],
  },
  {
    position: positions[3],
    backgroundLink: backgroundLinks[3],
  },
];
