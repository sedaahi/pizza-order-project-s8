import { useState } from "react";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/home/HeroSection";
import HomeCategoryBar from "../components/home/HomeCategoryBar";
import HomePromoSection from "../components/home/HomePromoSection";
import HomeSectionHeading from "../components/home/HomeSectionHeading";
import HomePillTabs from "../components/home/HomePillTabs";
import HomeProductGrid from "../components/home/HomeProductGrid";

import {
  homeCategories,
  pillCategories,
  ctaCards,
  products,
} from "../data/homePageData";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Fast food");

  const noFilterCategories = [
    "Ramen",
    "French fries",
    "Fast food",
    "Soft drinks",
  ];

  const filteredProducts = noFilterCategories.includes(activeCategory)
    ? products
    : products.filter((product) => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAF7F2] lg:min-w-[1080px]">
      <main>
        <HeroSection />
        <HomeCategoryBar categories={homeCategories} />
        <HomePromoSection ctaCards={ctaCards} />
        <HomeSectionHeading />
        <HomePillTabs
          pillCategories={pillCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <HomeProductGrid products={filteredProducts} />
      </main>

      <Footer />
    </div>
  );
}