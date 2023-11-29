export interface IProcessSectionData {
  iconSrc: string;
  label: string[];
  isWide?: boolean;
}

export const processSectionInteriorDesignPageData: IProcessSectionData[] = [
  {
    iconSrc:
      "https://museum-interior.com/wp-content/uploads/2020/10/ICON-8.svg",
    label: ["Встреча с клиентом,", " составление ТЗ"],
  },
  {
    iconSrc:
      "https://museum-interior.com/wp-content/uploads/2020/10/ICON-7.svg",
    label: ["Замер помещения,", "обмерный план"],
  },
  //
  {
    iconSrc:
      "https://museum-interior.com/wp-content/uploads/2020/10/ICON-6.svg",
    label: ["Предоплата за ", "разработку дизайна"],
    isWide: true,
  },
  {
    iconSrc:
      "https://museum-interior.com/wp-content/uploads/2020/10/ICON-5.svg",
    label: ["Разработка дизайна ", "и планировочных решений"],
  },
  //
  {
    iconSrc:
      "https://museum-interior.com/wp-content/uploads/2020/10/ICON-3.svg",
    label: ["Составление сметы,", "выбор материалов"],
  },
  {
    iconSrc:
      "https://museum-interior.com/wp-content/uploads/2020/10/ICON-2.svg",
    isWide: true,
    label: ["Предоплата ", "за ремонтные работы"],
  },
  //
  {
    iconSrc:
      "https://museum-interior.com/wp-content/uploads/2020/10/ICON-1.svg",
    label: ["Выполнение ремонта ", "и комплектация объекта"],
  },
  {
    iconSrc:
      "https://museum-interior.com/wp-content/uploads/2020/10/ICON-4.svg",
    label: ["Сдача готового ", "объекта под ключ"],
  },
];

export const processSectionArchitecturalDesignPageData: IProcessSectionData[] =
  [
    {
      iconSrc:
        "https://museum-interior.com/wp-content/uploads/2020/10/ICON-8.svg",
      label: [
        "Meeting with the customer,",
        "drawing up technical specifications",
      ],
    },
    {
      iconSrc:
        "https://museum-interior.com/wp-content/uploads/2020/10/ICON-12.svg",
      label: ["Conclusion of an agreement", "for project development"],
    },
    //
    {
      iconSrc:
        "https://museum-interior.com/wp-content/uploads/2020/10/ICON-13.svg",
      label: [
        "Development of planning",
        "decisions and general plan of the site",
      ],
    },
    {
      iconSrc:
        "https://museum-interior.com/wp-content/uploads/2020/10/ICON-14.svg",
      label: ["Execution of geodetic surveys", "and geological works"],
    },
    //
    {
      iconSrc:
        "https://museum-interior.com/wp-content/uploads/2020/10/ICON-3.svg",
      label: ["Setting a Budget", "and selection of materials"],
    },
    {
      iconSrc:
        "https://museum-interior.com/wp-content/uploads/2020/10/ICON-15.svg",
      label: ["3D visualization", "object"],
    },
    //
    {
      iconSrc:
        "https://museum-interior.com/wp-content/uploads/2020/10/ICON-16.svg",
      label: ["Worker preparation", "project and drawings"],
    },
    {
      iconSrc:
        "https://museum-interior.com/wp-content/uploads/2020/10/ICON-17.svg",
      label: ["Delivery of approved", "project"],
      isWide: true,
    },
  ];

// const processSectionAboutUsPageData: IProcessSectionData[] = [

// ];
