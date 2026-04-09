export default function HomePillTabs({
  pillCategories,
  activeCategory,
  setActiveCategory,
}) {
  return (
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
                className={`flex h-[66px] cursor-pointer items-center justify-center gap-3 rounded-full px-5 font-['Barlow'] text-[18px] font-medium transition ${
                  isActive
                    ? "bg-[#292929] text-white"
                    : "bg-white text-[#292929]"
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
  );
}