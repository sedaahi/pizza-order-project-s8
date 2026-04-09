import { Link } from "react-router-dom";

import logo from "../../../images/iteration-1-images/logo.svg";
import homeBanner from "../../../images/iteration-1-images/home-banner.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#CE2829] text-center lg:h-[1080px]">
      <div className="pointer-events-none absolute inset-x-0 bottom-[-10px] z-0 flex justify-center md:bottom-[-20px] lg:bottom-[-10px]">
        <img
          src={homeBanner}
          alt="Pizza banner"
          className="w-[900px] max-w-none md:w-[1080px] lg:w-[1900px]"
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

        <h1 className="mx-auto mt-[52px] text-center font-['Roboto_Condensed'] font-thin leading-[0.92] tracking-[1px] text-white md:mt-3 md:max-w-[760px] md:leading-[0.95]">
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
          data-cy="hero-order-button"
          className="mt-8 inline-flex h-[66px] min-w-[198px] items-center justify-center rounded-full bg-[#FDC913] px-10 font-['Barlow'] text-[22px] font-semibold text-[#292929] md:mt-6 md:h-[56px] md:min-w-[193px] md:px-8 md:text-[18px]"
        >
          ACIKTIM
        </Link>
      </div>
    </section>
  );
}