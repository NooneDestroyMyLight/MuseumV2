interface IProcessSection {
  iconSrc: string;
  label: string[];
  isWide?: boolean;
}

export const processSectionData: IProcessSection[] = [
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
