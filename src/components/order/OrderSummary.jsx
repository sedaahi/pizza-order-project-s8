import {
  calculateSelectionsPrice,
  calculateTotalPrice,
} from "../utils/helpers";

export default function OrderSummary({ orderForm }) {
  const selectionsPrice = calculateSelectionsPrice(
    orderForm.ingredients,
    orderForm.quantity
  );

  const totalPrice = calculateTotalPrice(
    orderForm.ingredients,
    orderForm.quantity
  );

  return (
    <aside className="h-fit rounded-md border border-[#D9D9D9] bg-white p-6">
      <h2 className="text-xl font-semibold text-[#292929]">Sipariş Toplamı</h2>

      <div className="mt-5 space-y-3 text-sm">
        <div className="flex items-center justify-between text-[#5F5F5F]">
          <span>Seçimler</span>
          <span>{selectionsPrice.toFixed(2)}₺</span>
        </div>

        <div className="flex items-center justify-between font-semibold text-[#CE2829]">
          <span>Toplam</span>
          <span>{totalPrice.toFixed(2)}₺</span>
        </div>
      </div>
    </aside>
  );
}