import { imgLinks } from "../assets/assetLinks";

type ImageName = {
  id: number;
  name: string;
  image: string;
  sponsored: boolean;
  about?: string;
};

export const pageData: ImageName[] = [
  {
    id: 1,
    name: "Raul Brito",
    image: imgLinks.raul,
    sponsored: false,
    about:
      "A portfolio built around restraint — heavy type, almost no colour, and long stretches of empty space doing the work.",
  },
  {
    id: 2,
    name: "Lazy",
    image: imgLinks.lazy,
    sponsored: false,
    about:
      "A note-taking tool for people who think in fragments. Capture first, organise never.",
  },
  {
    id: 3,
    name: "Yoin",
    image: imgLinks.yoin,
    sponsored: false,
    about:
      "Payments infrastructure with a deliberately plain interface. The design gets out of the way of the numbers.",
  },
  {
    id: 4,
    name: "Mobin",
    image: imgLinks.mobin,
    sponsored: true,
    about:
      "A reference library of mobile UI patterns, screenshotted from apps in the wild and sorted by flow.",
  },
  {
    id: 5,
    name: "Loaf",
    image: imgLinks.loaf,
    sponsored: false,
    about:
      "A small studio site with an oversized serif wordmark and a grid that quietly breaks on scroll.",
  },

  {
    id: 6,
    name: "Github",
    image: imgLinks.github,
    sponsored: false,
    about:
      "The dark theme that made dark themes standard. Worth studying for how it handles contrast across dense text.",
  },
  {
    id: 7,
    name: "Michal Piszczek",
    image: imgLinks.micheal,
    sponsored: false,
    about:
      "A personal site that reads more like a notebook than a portfolio — long-form writing sitting next to shipped work.",
  },
  {
    id: 8,
    name: "Longtitude",
    image: imgLinks.longtitude,
    sponsored: false,
    about:
      "A mapping product where the interface is nearly invisible. Controls surface only when you reach for them.",
  },
  {
    id: 9,
    name: "Tiny Computer Co.",
    image: imgLinks.tiny,
    sponsored: false,
    about:
      "A hardware shop for very small machines, with product photography carrying the entire layout.",
  },
];
