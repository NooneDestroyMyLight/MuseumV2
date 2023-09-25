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

function shuffleArray(array: IPortfolioListData[]) {
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
