export default function HomeProductGrid({ products }) {
  return (
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
  );
}