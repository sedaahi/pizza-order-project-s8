import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderForm from "../components/OrderForm";
import pizzaImage from "../../images/iteration-2-images/pictures/form-banner.png";

export default function OrderPage({
  setOrderData,
  setOrderResponse,
  orderForm,
  setOrderForm,
}) {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#292929]">
      <Header />

      <main>
        <section className="bg-[#FAF7F2]">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex justify-center">
              <img
                src={pizzaImage}
                alt="Position Absolute Acı Pizza"
                className="w-full max-w-[420px] object-contain md:max-w-[520px]"
              />
            </div>

            <div className="mx-auto max-w-[532px] px-3 pb-15 pt-5">
              <p className="mb-3 text-s text-[#5F5F5F] text-base/8">
                Anasayfa -{" "}
                <span className="text-[#CE2829] font-normal ">
                  Sipariş Oluştur
                </span>
              </p>

              <h1 className="text-[22px]/8 font-semibold leading-[1.1] text-[#292929]">
                Position Absolute Acı Pizza
              </h1>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-[28px] font-bold text-[#292929]">85.50₺</p>

                <div className="flex gap-4 text-[16px] text-[#5F5F5F] text-base/8">
                  <span>4.9</span>
                  <span>(200)</span>
                </div>
              </div>

              <p className="mt-6 text-[16px] font-light leading-8 text-[#5F5F5F]">
                Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
                acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
                çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel
                olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
                genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan
                oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir
                pizzaya bazen pizzetta denir.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[532px] px-5 py-10">
            <OrderForm
              orderForm={orderForm}
              setOrderForm={setOrderForm}
              setOrderData={setOrderData}
              setOrderResponse={setOrderResponse}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
