import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

import logo from "../../images/iteration-1-images/logo.svg";
import homeBanner from "../../images/iteration-1-images/home-banner.png";

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

const categories = [
  { icon: koreIcon, label: "YENİ! Kore" },
  { icon: pizzaIcon, label: "Pizza" },
  { icon: burgerIcon, label: "Burger" },
  { icon: friesIcon, label: "Kızartmalar" },
  { icon: fastFoodIcon, label: "Fast food" },
  { icon: drinkIcon, label: "Gazlı içecek" },
];
const pillCategories = [
  { icon: koreIcon, label: "Ramen" },
  { icon: pizzaIcon, label: "Pizza", active: true },
  { icon: burgerIcon, label: "Burger" },
  { icon: friesIcon, label: "French fries" },
  { icon: fastFoodIcon, label: "Fast food" },
  { icon: drinkIcon, label: "Soft drinks" },
];

const products = [
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
export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Pizza");

  const filteredProducts =
    activeCategory === "Ramen" ||
    activeCategory === "French fries" ||
    activeCategory === "Fast food" ||
    activeCategory === "Soft drinks"
      ? products
      : products.filter((product) => product.category === activeCategory);
  return (
    <div className="min-h-screen lg:min-w-[1080px] bg-[#FAF7F2]">
      <main>
        <section className="relative overflow-hidden bg-[#CE2829] text-center lg:h-[1080px] ">
          <div className="pointer-events-none absolute inset-x-0 bottom-[-10px] z-0 flex justify-center md:bottom-[-20px] lg:bottom-[-10px] ">
            <img
              src={homeBanner}
              alt="Pizza banner"
              className="w-[900px] max-w-none md:w-[1080px] lg:w-[1900px] "
            />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[854px] w-full max-w-[430px] flex-col items-center px-6 pt-20 text-center md:min-h-[930px] md:max-w-none md:px-6 md:pt-14">
            <img
              src={logo}
              alt="Teknolojik Yemekler"
              className="w-[270px] md:w-[363px]"
            />

            <p className="mt-7 hidden font-['Satisfy'] text-[32px] leading-none text-[#FDC913] md:block">
              fırsatı kaçırma
            </p>

            <h1 className="mt-13 mx-auto text-center font-['Roboto_Condensed'] font-thin leading-[0.92] tracking-[1px] text-white md:mt-3 md:max-w-[760px] md:leading-[0.95]">
              <span className="block text-[72px] md:hidden">
                KOD
                <br />
                ACIKTIRIR
                <br />
                PİZZA,
                <br />
                DOYURUR
              </span>

              <span className="hidden text-[86px] md:block">
                KOD ACIKTIRIR
                <br />
                PIZZA, DOYURUR
              </span>
            </h1>

            <Link
              to="/order"
              className="mt-8 inline-flex h-[66px] min-w-[198px] items-center justify-center rounded-full bg-[#FDC913] px-10 font-['Barlow'] text-[22px] font-semibold text-[#292929] md:mt-6 md:h-[56px] md:min-w-[193px] md:px-8 md:text-[18px]"
            >
              ACIKTIM
            </Link>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto w-full max-w-[1068px] px-0">
            <ul className="mx-auto grid w-fit grid-cols-2 gap-x-[34px] gap-y-6 px-8 py-6 md:flex md:w-full md:items-center md:justify-between md:gap-0 md:px-0 md:py-[26px]">
              {categories.map((item) => (
                <li
                  key={item.label}
                  className="flex w-[150px] items-center gap-4 md:w-[149px]"
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="h-[42px] w-[42px] shrink-0 object-contain"
                  />
                  <span className="font-['Barlow'] text-[18px] font-medium leading-none text-[#292929] md:text-[16px]">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CARD SECTION */}
        <section className="bg-[#FAF7F2] px-5 py-10 md:px-0 md:py-12">
          <div className="mx-auto flex max-w-[1068px] flex-col gap-4 md:grid md:grid-cols-[531px_1fr] md:grid-rows-[220px_220px]">
            <article className="relative min-h-[336px] overflow-hidden rounded-[12px] bg-[#CE2829] md:row-span-2 md:min-h-0">
              <div className="relative z-10 flex h-full max-w-[250px] flex-col px-5 pt-8 md:max-w-[290px] md:px-8 md:pt-14">
                <h2 className="font-['Quattrocento'] text-[56px] font-bold leading-[0.95] text-white md:text-[68px] md:leading-[72px]">
                  Özel
                  <br />
                  Lezzetus
                </h2>

                <p className="whitespace-nowrap mt-3 font-['Barlow'] text-[20px] font-normal leading-[1.3] text-white md:text-[20px]">
                  Position:Absolute Acı Burger
                </p>

                <button className="mt-6 inline-flex h-12 w-[138px] items-center justify-center rounded-full bg-white font-['Barlow'] text-[14px] font-semibold text-[#CE2829]">
                  SİPARİŞ VER
                </button>
              </div>

              <img
                src={ctaPizza}
                alt="Özel Lezzetus"
                className="absolute bottom-0 right-0 object-contain w-[570px] md:w-[570px] md:h-[450px]"
              />
            </article>

            <article className="relative overflow-hidden rounded-[12px] bg-[#292929] md:h-[270px] lg:h-[220px]">
              <div className="relative z-10 flex h-full flex-col justify-center px-5 py-6 md:px-6">
                <h3 className="max-w-[190px] font-['Barlow'] text-[24px] font-semibold leading-[1.1] text-white md:text-[32px] md:leading-[44px]">
                  Hackathlon
                  <br />
                  Burger Menü
                </h3>

                <button className="mt-5 inline-flex h-12 w-[138px] items-center justify-center rounded-full bg-white font-['Barlow'] text-[14px] font-semibold text-[#CE2829]">
                  SİPARİŞ VER
                </button>
              </div>

              <img
                src={ctaBurger}
                alt="Hackathlon Burger Menü"
                className="absolute right-4 top-1/2 w-[280px] -translate-y-1/2 object-contain md:right-5 md:w-[400px]"
              />
            </article>

            <article className="relative overflow-hidden rounded-[12px] bg-[#F7F3E9] md:h-[270px] lg:h-[220px]">
              <div className="relative z-10 flex h-full flex-col justify-center px-5 py-6 md:px-6">
                <h3 className="max-w-[220px] font-['Barlow'] text-[24px] font-semibold leading-[1.1] text-[#292929] md:text-[32px] md:leading-[44px]">
                  <span className="text-[#CE2829]">Çooook</span> hızlı
                  <br />
                  npm gibi kurye
                </h3>

                <button className="mt-5 inline-flex h-12 w-[138px] items-center justify-center rounded-full bg-white font-['Barlow'] text-[14px] font-semibold text-[#CE2829]">
                  SİPARİŞ VER
                </button>
              </div>

              <img
                src={ctaCourier}
                alt="Kurye kampanyası"
                className="absolute bottom-0 right-0 w-[530px] object-contain md:w-[530px]"
              />
            </article>
          </div>
        </section>

        {/* TEXT SECTION */}
        <section className="bg-[#FAF7F2] px-5 pb-8 text-center md:px-0 md:pb-10">
          <div className="mx-auto max-w-[1068px]">
            <p className="font-['Satisfy'] text-[32px] text-[#CE2829] md:text-[32px]">
              en çok paketlenen menüler
            </p>
            <h2 className="mt-2 font-['Barlow'] text-[32px] font-semibold leading-[1.2] text-[#292929] md:text-[42px] md:leading-[1.3]">
              <span className="block md:inline">Acıktıran </span>
              <span className="block md:inline">Kodlara Doyuran </span>
              <span className="block md:inline">Lezzetler</span>
            </h2>
          </div>
        </section>

        <section className="bg-[#FAF7F2] px-5 pb-8 md:px-0 md:pb-10">
          <div className="mx-auto max-w-[1068px]">
            <div className="mx-auto grid max-w-[378px] grid-cols-2 gap-x-4 gap-y-4 md:flex md:max-w-fit md:flex-wrap md:justify-center md:gap-9">
              {pillCategories.map((item) => {
                const isActive = activeCategory === item.label;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveCategory(item.label)}
                    className={`flex h-[66px] items-center justify-center gap-3 cursor-pointer rounded-full px-5 font-['Barlow'] text-[18px] font-medium transition md:h-[66px]
              ${
                isActive ? "bg-[#292929] text-white" : "bg-white text-[#292929]"
              }`}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="h-[28px] w-[28px] shrink-0 object-contain"
                    />
                    <span className="leading-none">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRODUCT CARD SECTION */}
        <section className="bg-[#FAF7F2] px-5 pb-12 md:px-0 md:pb-20">
          <div className="mx-auto grid max-w-[1068px] grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
            {products.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-[12px] bg-white px-5 pb-5 pt-6"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto h-[220px] w-auto object-contain md:h-[265px]"
                />

                <div className="mt-4">
                  <h3 className="font-['Barlow'] text-[18px] font-semibold leading-[1.3] text-[#292929] md:text-[22px]">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center justify-between font-['Barlow'] text-[16px] text-[#5F5F5F] md:text-[18px]">
                    <span>{product.rating}</span>
                    <span>{product.reviews}</span>
                    <span className="font-semibold text-[#292929]">
                      {product.price}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
