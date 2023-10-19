export interface IPortfolioListData {
  imgSrc: string;
  category: string;
  name: string;
}

// export const allProjects: string = "All projects";

export const portfolioCategory = [
  "All projects",
  "Commercial real estate",
  "Residential Properties",
  "Architectural Engineering",
];

function shuffleArray(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const portfolioListData: IPortfolioListData[] = shuffleArray([
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/boutiqueLucir.jpg",
    category: portfolioCategory[1],
    name: "'Lucir' boutique",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/boutiqueClothes.jpg",
    category: portfolioCategory[1],
    name: "Сlothing boutique",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/restaurant.jpg",
    category: portfolioCategory[1],
    name: "Restaurant",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/boutiqueCafe.jpg",
    category: portfolioCategory[1],
    name: "Coffe boutique",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/restaurant (2).jpg",
    category: portfolioCategory[1],
    name: "Restaurant",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/polDanceStudio.jpg",
    category: portfolioCategory[1],
    name: "'Pol Dance' dance studio",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/boutiqueCharizma.jpg",
    category: portfolioCategory[1],
    name: "'Charizma' boutique",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/barbershop.jpg",
    category: portfolioCategory[1],
    name: "Barbershop",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/fitnessCentre.jpg",
    category: portfolioCategory[1],
    name: "Fitness centre",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/t.e.c.jpg",
    category: portfolioCategory[1],
    name: "Trading entertainment center",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/restaurant (3).jpg",
    category: portfolioCategory[1],
    name: "Restaurant",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/office.jpg",
    category: portfolioCategory[1],
    name: "Office",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/tselinogradskayaOffice.jpg",
    category: portfolioCategory[1],
    name: "Tselinogradskaya office",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/office (2).jpg",
    category: portfolioCategory[1],
    name: "Office",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Commercial real estate/restaurant (4).jpg",
    category: portfolioCategory[1],
    name: "Restaurant",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Architectural Engineering/royalClub.jpg",
    category: portfolioCategory[3],
    name: "Private house, cottage community “Royal Club”",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Architectural Engineering/royalClub (2).jpg",
    category: portfolioCategory[3],
    name: "Private house, cottage community “Royal Club”",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Architectural Engineering/royalClub (3).jpg",
    category: portfolioCategory[3],
    name: "Private house, cottage community “Royal Club”",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Architectural Engineering/t.e.c.jpg",
    category: portfolioCategory[3],
    name: "Trading entertainment center",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/privateHouseValencia.jpg",
    category: portfolioCategory[2],
    name: "Private house, Valencia Spain",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/privateHouseValencia (2).jpg",
    category: portfolioCategory[2],
    name: "Private house, Valencia Spain",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/loftApartment.jpg",
    category: portfolioCategory[2],
    name: "Loft Apartments",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/loftApartment (2).jpg",
    category: portfolioCategory[2],
    name: "Loft Apartments",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/houseOn Sumskaya.jpg",
    category: portfolioCategory[2],
    name: "Apartment in the residential complex 'House on Sumskaya'",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/houseOn Sumskaya (2).jpg",
    category: portfolioCategory[2],
    name: "Apartment in the residential complex 'House on Sumskaya'",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/whiteElephant.jpg",
    category: portfolioCategory[2],
    name: "Apartment residential complex 'White Elephant'",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/pavlovoPole.jpg",
    category: portfolioCategory[2],
    name: "Apartment residential complex 'Pavlovo Pole'",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/privateHouseKharkiv.jpg",
    category: portfolioCategory[2],
    name: "Private house Kharkov",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/privateHouseKharkiv (2).jpg",
    category: portfolioCategory[2],
    name: "Private house Kharkov",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/privateHouseKharkiv (3).jpg",
    category: portfolioCategory[2],
    name: "Private house Kharkov",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/privateHouse.jpg",
    category: portfolioCategory[2],
    name: "Private house ",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/residential ComplexFavorit.jpg",
    category: portfolioCategory[2],
    name: "Apartment residential сomplex Favorit",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/apartmentResidentialComplex PremierPalace.jpg",
    category: portfolioCategory[2],
    name: "Apartment Residential Complex Premier Palace",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/residential ComplexParkovy.jpg",
    category: portfolioCategory[2],
    name: "Apartment Residential Complex Parkovy",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/residentialcomplexEuropeCity.jpg",
    category: portfolioCategory[2],
    name: "Apartment Residential Complex 'Europe City'",
  },
  {
    imgSrc:
      "../../../../../public/InteriorDesignPage/gallery/Residential Properties/residentialcomplexVorobyovHouse.jpg",
    category: portfolioCategory[2],
    name: "Apartment Residential Complex 'Vorobyov House'",
  },
]);

export interface IReviewListData extends IPortfolioListData {
  videoSrc: string;
}

export const reviewListData: IReviewListData[] = [
  {
    imgSrc:
      "../../../../../public/review/previewList/x1-1-.png.pagespeed.ic.n2mZD4bsx-.png",
    category: "Частный клиент",
    name: "Мария Лазарева",
    videoSrc:
      "https://www.youtube.com/watch?v=7JLaLHVaLsc&embeds_widget_referrer=https%3A%2F%2Fmuseum-interior.com%2Fru%2Freviews%2F&embeds_referring_origin=https%3A%2F%2Fmuseum-interior.com&feature=emb_yt_watermark",
  },
  {
    imgSrc:
      "../../../../../public/review/previewList/x2.png.pagespeed.ic.EIaag1Pawh.png",
    category: "Владелец ТРЦ БОШЕ",
    name: "Игорь Барщук",
    videoSrc:
      "https://www.youtube-nocookie.com/embed/2zsK068ITso?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fmuseum-interior.com%2Fru%2Freviews%2F&noCookie=true&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fmuseum-interior.com&widgetid=5",
  },
  {
    imgSrc:
      "../../../../../public/review/previewList/x3-2.png.pagespeed.ic.IcNJvpuAoN.png",
    category: 'Ресторатор(рестораны "Веретено", "Сосновка")',
    name: "Александр Бондарь",
    videoSrc:
      "https://www.youtube-nocookie.com/embed/Ekj8kAHsuGc?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fmuseum-interior.com%2Fru%2Freviews%2F&noCookie=true&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fmuseum-interior.com&widgetid=6",
  },
  {
    imgSrc:
      "../../../../../public/review/previewList/x4-2.png.pagespeed.ic.jjxK3Nlqku.png",
    category: "Арт-директор ресторана-курорта Дубровкий",
    name: "Оксана Яценко",
    videoSrc:
      "https://www.youtube-nocookie.com/embed/ZB-ehsNiS-Y?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fmuseum-interior.com%2Fru%2Freviews%2F&noCookie=true&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fmuseum-interior.com&widgetid=7",
  },

  {
    imgSrc:
      "../../../../../public/review/previewList/x5.png.pagespeed.ic.IpU4LzjzbI.png",
    category: "Руководитель компании «ОВИС»",
    name: "Сергей Иванович",
    videoSrc:
      "https://www.youtube-nocookie.com/embed/MwhGntOumzs?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fmuseum-interior.com%2Fru%2Freviews%2F&noCookie=true&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fmuseum-interior.com&widgetid=8",
  },
  {
    imgSrc:
      "../../../../../public/review/previewList/x6.png.pagespeed.ic.mIbkfIk4WF (1).png",
    category: 'Генеральный директор хлебозавода "Ново Баварский"',
    name: "Валерий Фандер",
    videoSrc:
      "https://www.youtube-nocookie.com/embed/EdJbpj_JOBk?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fmuseum-interior.com%2Fru%2Freviews%2F&noCookie=true&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fmuseum-interior.com&widgetid=9",
  },
  {
    imgSrc:
      "../../../../../public/review/previewList/x6.png.pagespeed.ic.mIbkfIk4WF.png",
    category: "Генеральный директор сети кофеен и турагенств",
    name: "Ирина Мишина",
    videoSrc:
      "https://www.youtube-nocookie.com/embed/y031hUXS2GU?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fmuseum-interior.com%2Fru%2Freviews%2F&noCookie=true&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fmuseum-interior.com&widgetid=10",
  },
  {
    imgSrc:
      "../../../../../public/review/previewList/x8.png.pagespeed.ic.xNJ953pbMV.png",
    category: "Директор салона красоты",
    name: "Эльмира Гончарова",
    videoSrc:
      "https://www.youtube-nocookie.com/embed/ngGY7aFXPTI?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fmuseum-interior.com%2Fru%2Freviews%2F&noCookie=true&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fmuseum-interior.com&widgetid=11",
  },

  {
    imgSrc:
      "../../../../../public/review/previewList/x9.png.pagespeed.ic.xKTyZPH9FB.png",
    category: 'Мер города "Мерефа"',
    name: "Вениамин Ситов",
    videoSrc:
      "https://www.youtube-nocookie.com/embed/HHZGKLQeaoM?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fmuseum-interior.com%2Fru%2Freviews%2F&noCookie=true&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fmuseum-interior.com&widgetid=13",
  },
];

export const teamListData: IPortfolioListData[] = [
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
  //
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
  //
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
  //
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
  //
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
  {
    imgSrc:
      "https://museum-interior.com/wp-content/uploads/2021/06/%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A8%D1%83%D1%82%D1%8C%D0%BA%D0%BE3.jpg",
    category: "CEO",
    name: "Artur Shutko",
  },
];
