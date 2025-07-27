export type AnimationsProps = {
  title: string;
  description: string;
  path: string;
};

export const animations: AnimationsProps[] = [
  {
    title: "GSAP To",
    description:
      "The to() method is used to animate a single element from a starting state to an ending state.",
    path: "/gsapto",
  },
  {
    title: "GSAP From",
    description:
      "The from() method is used to animate a single element from an ending state to a starting state.",
    path: "/gsapfrom",
  },
  {
    title: "GSAP FromTo",
    description:
      "The fromTo() method is used to animate a single element from a starting state to an ending state and vice versa.",
    path: "/gsapfromto",
  },
  {
    title: "GSAP Timeline",
    description:
      "The timeline() method is used to create a timeline to manage multiple animations.",
    path: "/gsaptimeline",
  },
  {
    title: "GSAP Stagger",
    description:
      "The stagger() method is used to animate multiple elements with a stagger effect.",
    path: "/gsapstagger",
  },
  {
    title: "GSAP ScrollTrigger",
    description:
      "The ScrollTrigger plugin is used to trigger animations based on the scroll position.",
    path: "/gsapscrolltrigger",
  },
  {
    title: "GSAP Text",
    description: "Learn how to animate text with GSAP.",
    path: "/gsaptext",
  },
];

export type NavProps = {
  id: string;
  title: string;
};
export const navLinks: NavProps[] = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "work",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export type CocktailsProps = {
  name: string;
  country: string;
  detail: string;
  price: string;
};

export const cocktailLists: CocktailsProps[] = [
  {
    name: "Chapel Hill Shiraz",
    country: "AU",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Caten Malbee",
    country: "AU",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Rhino Pale Ale",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Irish Guinness",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

export const mockTailLists: CocktailsProps[] = [
  {
    name: "Tropical Bloom",
    country: "US",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Passionfruit Mint",
    country: "US",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Citrus Glow",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Lavender Fizz",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

export type ProfileProp = {
  imgPath: string;
};

export const profileLists: ProfileProp[] = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

export const featureLists = [
  "Perfectly balanced blends",
  "Garnished to perfection",
  "Ice-cold every time",
  "Expertly shaken & stirred",
];

export const goodLists = [
  "Handpicked ingredients",
  "Signature techniques",
  "Bartending artistry in action",
  "Freshly muddled flavors",
];

export const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
};

export type OpeningProps = {
  day: string;
  time: string;
};

export const openingHours: OpeningProps[] = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
];

export type SocialProps = {
  name: string;
  icon: string;
  url: string;
};

export const socials: SocialProps[] = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

export type SliderProps = {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
};

export const sliderLists: SliderProps[] = [
  {
    id: 1,
    name: "Classic Mojito",
    image: "/images/drink1.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 2,
    name: "Raspberry Mojito",
    image: "/images/drink2.png",
    title: "A Zesty Classic That Never Fails",
    description:
      "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drink3.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 4,
    name: "Curacao Mojito",
    image: "/images/drink4.png",
    title: "Crafted With Care, Poured With Love",
    description:
      "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
  },
];
