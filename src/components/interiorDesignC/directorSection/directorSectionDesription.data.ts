export interface ITextFormat {
  text: string;
  isBold?: boolean;
}
export interface IDirectorSectionDesription {
  title: string[];
  description: string;
  topic: ITextFormat[];
  author: ITextFormat[];
  buttonText: string;
}

export const directorSectionDesription: IDirectorSectionDesription = {
  title: ["We bet $1,000", "that we can do the repair in 90 days?"],
  description:
    "We have developed a turnkey solution that we can implement in 90 days. These are two projects that are calculated on a turnkey basis. We take care of all the pain of repair and the complexity of communicating with contractors. If something goes wrong, we will compensate it at our own expense.",
  topic: [
    {
      text: "I am personally responsible for the quality and terms.",
      isBold: true,
    },
  ],
  author: [{ text: "Artur Shutko", isBold: true }, { text: "CEO" }],
  buttonText: "Escribir una carta al director",
};

// topic: {
//   text: ["I am personally responsible for the quality and terms."],
//   isBold: true,
// },
