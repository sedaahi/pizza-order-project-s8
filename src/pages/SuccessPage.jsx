import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SuccessPage({ orderData, orderResponse }) {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#292929]">
      <Header />

      <main className="mx-auto max-w-[900px] px-5 py-16">
        <h1 className="text-3xl font-bold">Sipariş Alındı</h1>

        <div className="mt-6 rounded-md border border-[#E5E5E5] bg-white p-6">
          <p className="text-sm text-[#5F5F5F]">
            Success page içeriğini bir sonraki adımda yapacağız.
          </p>

          {orderData && (
            <pre className="mt-4 overflow-auto rounded bg-[#FAF7F2] p-4 text-sm">
              {JSON.stringify(orderData, null, 2)}
            </pre>
          )}

          {orderResponse && (
            <pre className="mt-4 overflow-auto rounded bg-[#FAF7F2] p-4 text-sm">
              {JSON.stringify(orderResponse, null, 2)}
            </pre>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}