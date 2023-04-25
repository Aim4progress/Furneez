const sliderItems = [
  {
    img: "./blue-sofa-chair.jpg",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    img: "./chair.jpg",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    img: "./office-chair.jpg",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
  {
    img: "./yellow-sofa-chair-accessories.jpg",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    img: "./chair.jpg",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
];

// Clone 1st and last object
sliderItems.push(sliderItems[0]);
sliderItems.unshift(sliderItems[sliderItems.length - 2]);

const dealsItems = [
  {
    img: "./deals/bed/bed-2.jpg",
    desc: "Huwen Queen Size Bed in Grey Colour",
    newPrice: "46,499",
    oldPrice: "72,999",
    discount: "36%",
  },
  {
    img: "./deals/chair/chair-2.jpg",
    desc: "Sweng Plastic Chair in Black Colour",
    newPrice: "3999",
    oldPrice: "7499",
    discount: "46%",
  },
  {
    img: "./deals/cushion-covers/cushion-covers-4.jpg",
    desc: "Black & Khaki Coloured Multi-Design Cushion Set of 3",
    newPrice: "999",
    oldPrice: "1999",
    discount: "50%",
  },
  {
    img: "./deals/dining-table/dining-table-2.jpg",
    desc: "Hareku 8 seater Dining Set",
    newPrice: "84,999",
    oldPrice: "1,19,499",
    discount: "28%",
  },
  {
    img: "./deals/floor-lamps/floor-lamps-2.jpg",
    desc: "Avion Metal Shade Floor Lamp",
    newPrice: "5399",
    oldPrice: "9499",
    discount: "43%",
  },
  {
    img: "./deals/lamps/lamp-2.jpg",
    desc: "Brown Adjustable Study Lamp",
    newPrice: "699",
    oldPrice: "999",
    discount: "30%",
  },
  {
    img: "./deals/mat/floor-mat.jpg",
    desc: "Multicolor Polyester Machine Made Carpet",
    newPrice: "1600",
    oldPrice: "2999",
    discount: "46%",
  },
  {
    img: "./deals/sofa/sofa-4.jpg",
    desc: "Leather 3 Seater Sofa",
    newPrice: "42,499",
    oldPrice: "66,999",
    discount: "36%",
  },
  {
    img: "./deals/table/table-4.jpg",
    desc: "Round End Table",
    newPrice: "6,999",
    oldPrice: "10,999",
    discount: "36%",
  },
  {
    img: "./deals/table-chair/table-chair-3.jpg",
    desc: "Office Table Chair Combo",
    newPrice: "40,699",
    oldPrice: "60,999",
    discount: "32%",
  },
  {
    img: "./deals/wardrobe/wardrobe-3.jpg",
    desc: "2 Door Wardrobe",
    newPrice: "15,499",
    oldPrice: "25,999",
    discount: "40%",
  },
];
export const modifiedSliderItems = sliderItems;
