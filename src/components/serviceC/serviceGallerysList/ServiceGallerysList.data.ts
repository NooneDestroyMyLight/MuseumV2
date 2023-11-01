interface IServiceGallerysListData {
  title: string;
  link: string;
  description: string;
  arrowButtonText: string;
}

export const serviceGallerysListData: IServiceGallerysListData[] = [
  {
    title: "Interior Design",
    link: "",
    description: `Our strength is quality.
     When others simply promise, we deliver and take responsibility for every centimeter of the finished project.
     We create a room that will shape you in the future.`,
    arrowButtonText: "More detail",
  },

  {
    title: "Construction and repair",
    link: "",
    description: `We build turnkey projects. We take on all the pain of repairs and the difficulties of communicating with contractors. Our experienced craftsmen and foremen know how to implement any design project without missing deadlines or additional estimates.`,
    arrowButtonText: "More detail",
  },

  {
    title: "Architectural Engineering",
    link: "",
    description: `We prepare design documentation for objects of any complexity. Geodesy, site and premises plans, drawings, diagrams, components - everything that is necessary for the quality implementation of the project.`,
    arrowButtonText: "More detail",
  },
];
