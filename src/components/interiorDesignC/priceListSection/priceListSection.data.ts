export interface priceListSectionData {
  priceLvl: string;
  priceSummary: string;
  discription: string[];
  priceCost: string;
}

const discriptionLvl = (planeVariant: string, VizEditing: string): string[] => {
  return [
    "development of planning",
    "measurement plan",
    `solutions (${planeVariant})`,
    "dismantling/installation plan",
    "furniture arrangement plan",
    "binding plan",
    "plumbing equipment",
    "flooring plan",
    "ceiling plan",
    "sections of complex ceiling assemblies",
    "luminaire connection plan",
    "switch connection plan",
    "indicating light groups",
    "plan for connecting sockets and electrical outlets",
    "heated floor plan",
    "door plan",
    "wall layouts by room",
    "furniture sketches",
    "specification of finishing materials",
    `3D visualization of each room (${VizEditing})`,
  ];
};

export const priceListSectionData: priceListSectionData[] = [
  {
    priceLvl: "«SILVER»",
    priceSummary: "For those who know what they want",
    discription: [...discriptionLvl("1 option", "1 option")],
    priceCost: "90",
  },
  {
    priceLvl: "«GOLD»",
    priceSummary: "Maximum result",
    discription: [...discriptionLvl("3 option", "3 times editing")],
    priceCost: "100",
  },
  {
    priceLvl: "«PLATINUM»",
    priceSummary: "Complete turnkey package",
    discription: [
      ...discriptionLvl("∞ count of options", "unlimited number of edits"),
    ],
    priceCost: "120",
  },
];
