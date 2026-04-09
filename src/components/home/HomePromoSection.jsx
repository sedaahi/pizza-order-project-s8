export default function HomePromoSection({ ctaCards }) {
  return (
    <section className="bg-[#FAF7F2] px-5 py-10 md:px-0 md:py-12">
      <div className="mx-auto flex max-w-[1068px] flex-col gap-4 md:grid md:grid-cols-[531px_1fr] md:grid-rows-[220px_220px]">
        <article className="relative min-h-[336px] overflow-hidden rounded-[12px] bg-[#CE2829] md:row-span-2 md:min-h-0">
          <div className="relative z-10 flex h-full max-w-[250px] flex-col px-5 pt-8 md:max-w-[290px] md:px-8 md:pt-14">
            <h2 className="font-['Quattrocento'] text-[56px] font-bold leading-[0.95] text-white md:text-[68px] md:leading-[72px]">
              Özel
              <br />
              Lezzetus
            </h2>

            <p className="mt-3 whitespace-nowrap font-['Barlow'] text-[20px] font-normal leading-[1.3] text-white">
              {ctaCards.featured.description}
            </p>

            <button className="mt-6 inline-flex h-12 w-[138px] items-center justify-center rounded-full bg-white font-['Barlow'] text-[14px] font-semibold text-[#CE2829]">
              {ctaCards.featured.buttonText}
            </button>
          </div>

          <img
            src={ctaCards.featured.image}
            alt={ctaCards.featured.title}
            className="absolute bottom-0 right-0 w-[570px] object-contain md:h-[450px] md:w-[570px]"
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
              {ctaCards.burgerMenu.buttonText}
            </button>
          </div>

          <img
            src={ctaCards.burgerMenu.image}
            alt={ctaCards.burgerMenu.title}
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
              {ctaCards.courier.buttonText}
            </button>
          </div>

          <img
            src={ctaCards.courier.image}
            alt={ctaCards.courier.title}
            className="absolute bottom-0 right-0 w-[530px] object-contain md:w-[530px]"
          />
        </article>
      </div>
    </section>
  );
}