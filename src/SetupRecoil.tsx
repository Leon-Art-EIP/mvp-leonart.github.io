import { atom } from "recoil";

export const exampleState = atom({
  key: "exampleState", // ID unique
  default: "Example", // valeur par défaut
});

export const isLargeScreenState = atom({
  key: "isLargeScreenState",
  default: false,
});

export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: true, // tmp
});
