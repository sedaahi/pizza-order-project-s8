import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SuccessPage({ orderData, orderResponse }) {
  if (!orderData) {
    return <Navigate to="/order" replace />;
  }

  const ingredientsText =
    orderData.malzemeler && orderData.malzemeler.length > 0
      ? orderData.malzemeler.join(", ")
      : "Seçilmedi";

  return (
    <div className="min-h-screen bg-[#CE2829] text-white">
      <Header />

      <main className="bg-[#CE2829]">
        <section className="mx-auto flex min-h-[1080px] max-w-[1440px] flex-col items-center px-5 pb-24 pt-10 text-center">
          <p className="font-satisfy text-[32px] leading-none text-[#FDC913]">
            lezzetin yolda
          </p>

          <h1 className="mt-4 font-roboto-condensed text-[72px] font-light uppercase leading-none tracking-[1.5px] text-white md:text-[86px]">
            SİPARİŞ ALINDI
          </h1>

          <div className="mt-10 h-px w-full max-w-[530px] bg-[#FAF7F2]/60"></div>

          <h2 className="mt-10 text-[22px] font-semibold text-white">
            Position Absolute Acı Pizza
          </h2>

          <div className="mt-8 w-full max-w-[230px] space-y-3 text-left text-[15px] leading-6 text-white">
            <p>
              <span className="font-normal">Boyut:</span>{" "}
              <span className="font-semibold">{orderData.boyut}</span>
            </p>
            <p>
              <span className="font-normal">Adet:</span>{" "}
              <span className="font-semibold">{orderData.adet}</span>
            </p>
            <p>
              <span className="font-normal">Hamur:</span>{" "}
              <span className="font-semibold">{orderData.hamur}</span>
            </p>

            <p>
              <span className="font-normal">Ek Malzemeler:</span>{" "}
              <span className="font-semibold">{ingredientsText}</span>
            </p>
            <p>
              <span className="font-normal">Müşteri Adı:</span>{" "}
              <span className="font-semibold">{orderData.isim}</span>
            </p>

            {orderData.ozel && orderData.ozel !== "" && (
              <p>
                <span className="font-normal">Sipariş Notu:</span>{" "}
                <span className="font-semibold">{orderData.ozel}</span>
              </p>
            )}
          </div>

          <div className="mt-12 w-full max-w-[350px] rounded-[6px] border border-[#FAF7F2] px-8 py-10 text-left">
            <h3 className="text-[22px] font-semibold text-white">
              Sipariş Toplamı
            </h3>

            <div className="mt-8 space-y-4 text-[18px]">
              <div className="flex items-center justify-between text-white">
                <span>Seçimler</span>
                <span>
                  {(orderData.malzemeler.length * 5 * orderData.adet).toFixed(
                    2,
                  )}
                  ₺
                </span>
              </div>

              <div className="flex items-center justify-between font-semibold text-white">
                <span>Toplam</span>
                <span>{Number(orderData.toplam).toFixed(2)}₺</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
