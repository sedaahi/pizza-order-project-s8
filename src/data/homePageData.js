import koreIcon from "../../images/iteration-2-images/icons/1.svg";
import pizzaIcon from "../../images/iteration-2-images/icons/2.svg";
import burgerIcon from "../../images/iteration-2-images/icons/3.svg";
import friesIcon from "../../images/iteration-2-images/icons/4.svg";
import fastFoodIcon from "../../images/iteration-2-images/icons/5.svg";
import drinkIcon from "../../images/iteration-2-images/icons/6.svg";

import ctaPizza from "../../images/iteration-2-images/cta/kart-1.png";
import ctaBurger from "../../images/iteration-2-images/cta/kart-2.png";
import ctaCourier from "../../images/iteration-2-images/cta/kart-3.png";

import productPizza1 from "../../images/iteration-2-images/pictures/food-1.png";
import productPizza2 from "../../images/iteration-2-images/pictures/food-2.png";
import productBurger from "../../images/iteration-2-images/pictures/food-3.png";

export const homeCategories = [
  { icon: koreIcon, label: "YENİ! Kore" },
  { icon: pizzaIcon, label: "Pizza" },
  { icon: burgerIcon, label: "Burger" },
  { icon: friesIcon, label: "Kızartmalar" },
  { icon: fastFoodIcon, label: "Fast food" },
  { icon: drinkIcon, label: "Gazlı içecek" },
];

export const pillCategories = [
  { icon: koreIcon, label: "Ramen" },
  { icon: pizzaIcon, label: "Pizza" },
  { icon: burgerIcon, label: "Burger" },
  { icon: friesIcon, label: "French fries" },
  { icon: fastFoodIcon, label: "Fast food" },
  { icon: drinkIcon, label: "Soft drinks" },
];

export const ctaCards = {
  featured: {
    title: "Özel Lezzetus",
    description: "Position:Absolute Acı Burger",
    buttonText: "SİPARİŞ VER",
    image: ctaPizza,
  },
  burgerMenu: {
    title: "Hackathlon Burger Menü",
    buttonText: "SİPARİŞ VER",
    image: ctaBurger,
  },
  courier: {
    title: "Çooook hızlı npm gibi kurye",
    buttonText: "SİPARİŞ VER",
    image: ctaCourier,
  },
};

export const products = [
  {
    id: 1,
    category: "Pizza",
    image: productPizza1,
    name: "Terminal Pizza",
    rating: "4.9",
    reviews: "(200)",
    price: "60₺",
  },
  {
    id: 2,
    category: "Pizza",
    image: productPizza2,
    name: "Position Absolute Acı Pizza",
    rating: "4.9",
    reviews: "(200)",
    price: "60₺",
  },
  {
    id: 3,
    category: "Burger",
    image: productBurger,
    name: "useEffect Tavuklu Burger",
    rating: "4.9",
    reviews: "(200)",
    price: "60₺",
  },
];