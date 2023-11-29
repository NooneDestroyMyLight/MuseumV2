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

const backgroundImgs: string[] = [
  `url("/boxMenuImg/design-web.jpg")`,
  `url("/boxMenuImg/remont-web.jpg") `,
  `url("/boxMenuImg/remont-3.jpg")`,
  `url("/boxMenuImg/showroom.jpg")`,
];

// refactor it into function
export const boxMenuBackgroundDatas: IBoxMenuBackgroundDatas[] = [
  {
    position: positions[0],
    backgroundLink: backgroundImgs[0],
  },
  {
    position: positions[1],
    backgroundLink: backgroundImgs[1],
  },
  {
    position: positions[2],
    backgroundLink: backgroundImgs[2],
  },
  {
    position: positions[3],
    backgroundLink: backgroundImgs[3],
  },
];
