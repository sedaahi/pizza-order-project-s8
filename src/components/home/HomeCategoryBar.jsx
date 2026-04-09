export default function HomeCategoryBar({ categories }) {
  return (
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
  );
}