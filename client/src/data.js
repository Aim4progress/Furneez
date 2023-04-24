// export const sliderItems = [
//   {
//     id: 1,
//     img: "./blue-sofa-chair.jpg",
//     title: "SUMMER SALE",
//     desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
//     bg: "f5fafd",
//   },
//   {
//     id: 2,
//     img: "./chair.jpg",
//     title: "AUTUMN COLLECTION",
//     desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
//     bg: "fcf1ed",
//   },
//   {
//     id: 3,
//     img: "./office-chair.jpg",
//     title: "LOUNGEWEAR LOVE",
//     desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
//     bg: "fbf0f4",
//   },
// ];

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

export const modifiedSliderItems = sliderItems;
