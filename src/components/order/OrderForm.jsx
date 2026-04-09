import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ingredientsList } from "../../data/ingredients";
import { validateForm, calculateTotalPrice } from "../../utils/helpers";
import { postOrder } from "../../services/api";

export default function OrderForm({ orderForm, setOrderForm, setOrderResult }) {
  const navigate = useNavigate();

  const [isBusy, setIsBusy] = useState(false);
  const [ingredientError, setIngredientError] = useState("");

  const errors = validateForm(orderForm);
  const isValid = Object.keys(errors).length === 0;

  // Genel state güncelleme fonksiyonu (DRY)
  const updateForm = (field, value) => {
    setOrderForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateForm(name, value);
  };

  const handleIngredientChange = (ingredient) => {
    if (isBusy) return;

    const isSelected = orderForm.ingredients.includes(ingredient);

    if (isSelected) {
      updateForm(
        "ingredients",
        orderForm.ingredients.filter((item) => item !== ingredient),
      );
      setIngredientError("");
      return;
    }

    if (orderForm.ingredients.length >= 10) {
      setIngredientError("En fazla 10 malzeme seçebilirsiniz.");
      return;
    }

    updateForm("ingredients", [...orderForm.ingredients, ingredient]);
    setIngredientError("");
  };

  // Adet kontrolü tek bir fonksiyonda birleştirildi
  const handleQuantity = (amount) => {
    if (isBusy) return;
    const newQuantity = orderForm.quantity + amount;
    if (newQuantity >= 1) {
      updateForm("quantity", newQuantity);
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (isBusy || !isValid) return;

  //   // Payload hazırlarken spread operatörü kullanıldı ve toplam eklendi
  //   const payload = {
  //     ...orderForm,
  //     toplam: calculateTotalPrice(orderForm.ingredients, orderForm.quantity),
  //   };

  //   try {
  //     setIsBusy(true);

  //     const responseData = await postOrder(payload);

  //     setOrderData(payload);
  //     setOrderResponse(responseData);

  //     toast.success("Siparişiniz alındı!", {
  //       autoClose: 1200,
  //       pauseOnHover: false,
  //       onClose: () => navigate("/success"),
  //     });
  //   } catch (error) {
  //     toast.error("Sipariş gönderilemedi. Lütfen bağlantını kontrol et.", {
  //       autoClose: 1800,
  //       pauseOnHover: false,
  //       onClose: () => setIsBusy(false),
  //     });
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isBusy || !isValid) return;

    // Tek bir payload objesi oluşturuyoruz
   const payload = {
      isim: orderForm.name,
      boyut: orderForm.size,
      hamur: orderForm.dough,
      malzemeler: orderForm.ingredients,
      ozel: orderForm.note,
      adet: orderForm.quantity,
      toplam: calculateTotalPrice(orderForm.ingredients, orderForm.quantity),
    };

    try {
      setIsBusy(true);
      const responseData = await postOrder(payload);

      // Hem API cevabını hem de kendi hazırladığımız veriyi tek state'e gömüyoruz
      setOrderResult({ ...payload, response: responseData });
console.log("Sipariş özeti:", payload);
      console.log("API cevabı:", responseData);
      toast.success("Siparişiniz alındı!", {
        onClose: () => navigate("/success"),
      });
    } catch (error) {
      console.error("İstek Hatası:", error);
      setIsBusy(false);
      toast.error("Sipariş gönderilemedi.");
    }
  };
  // Fiyat hesaplamaları
  const selectionsPrice = (
    orderForm.ingredients.length *
    5 *
    orderForm.quantity
  ).toFixed(2);
  const totalPrice = calculateTotalPrice(
    orderForm.ingredients,
    orderForm.quantity,
  ).toFixed(2);

  const isButtonDisabled = !isValid || isBusy;
  const disabledClass = isBusy ? "pointer-events-none opacity-70" : "";

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="grid gap-6 md:gap-8">
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <fieldset>
            <legend className="mb-2 text-[22px] font-semibold text-[#292929] md:mb-3 md:text-[20px]">
              Boyut Seç <span className="text-[#CE2829]">*</span>
            </legend>

            <div className="flex flex-col gap-4 md:flex-row md:gap-3">
              {["S", "M", "L"].map((size) => (
                <label
                  key={size}
                  className={`flex cursor-pointer items-center gap-3 md:justify-center ${disabledClass}`}
                >
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={orderForm.size === size}
                    onChange={handleChange}
                    className="hidden"
                    disabled={isBusy}
                  />
                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-medium transition-all
            md:h-14 md:w-14 md:text-[18px] md:font-semibold 
            ${
              orderForm.size === size
                ? "border-[#FDC913] bg-[#FDC913]"
                : "border-[#E5E5E5] bg-[#FAF7F2]"
            }`}
                  >
                    {size}
                  </div>
                  <span className="text-[16px] font-medium text-[#5F5F5F] md:hidden">
                    {size === "S" ? "Küçük" : size === "M" ? "Orta" : "Büyük"}
                  </span>
                </label>
              ))}
            </div>

            <p className="mt-2 min-h-[16px] text-[10px] text-[#CE2829] md:min-h-[20px] md:text-sm">
              {errors.size || ""}
            </p>
          </fieldset>

          <div>
            <label
              htmlFor="dough"
              className="mb-2 block font-semibold text-[#292929] md:mb-3 text-[22px] md:text-[20px]"
            >
              Hamur Seç <span className="text-[#CE2829]">*</span>
            </label>

            <select
              id="dough"
              name="dough"
              value={orderForm.dough}
              onChange={handleChange}
              disabled={isBusy}
              className="h-10 w-full rounded-[4px] border border-[#D9D9D9] bg-[#FAF7F2] px-3 text-[14px] outline-none focus:border-[#CE2829] md:h-14 md:rounded-md md:px-4 md:text-[18px]"
            >
              <option value="">Hamur Kalınlığı</option>
              {["İnce Hamur", "Orta Hamur", "Kalın Hamur"].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <p className="mt-2 min-h-[16px] text-[12px] text-[#CE2829] md:min-h-[20px] md:text-sm">
              {errors.dough || ""}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[22px] font-semibold text-[#292929] md:text-[20px]">
            Ek Malzemeler
          </h2>
          <p className="mt-2 mb-6 text-[20px] text-[#5F5F5F] md:text-[16px]">
            En Fazla 10 malzeme seçebilirsiniz. 5₺
          </p>

          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 md:mt-6 md:grid-cols-3 md:gap-x-8 md:gap-y-4">
            {ingredientsList.map((ingredient) => {
              const checked = orderForm.ingredients.includes(ingredient);
              return (
                <label
                  key={ingredient}
                  className={`flex min-h-[16px] cursor-pointer items-center gap-2 text-[10px] font-medium text-[#5F5F5F] md:min-h-[45px] md:gap-3 md:text-[16px] md:font-semibold ${disabledClass}`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleIngredientChange(ingredient)}
                    className="hidden"
                    disabled={isBusy}
                    data-cy="ingredient-checkbox"
                  />
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border text-[12px] font-bold md:h-[45px] md:w-[45px] md:rounded-[4px] md:text-[22px] ${
                      checked
                        ? "border-[#FDC913] bg-[#FDC913]"
                        : "border-[#E5E5E5] bg-[#FAF7F2]"
                    }`}
                  >
                    {checked ? "✓" : ""}
                  </span>
                  <span className="text-[14px] leading-tight font-medium md:text-[16px] md:font-semibold md:w-[140px]">
                    {ingredient}
                  </span>
                </label>
              );
            })}
          </div>

          <p className="mt-3 min-h-[16px] text-[12px] text-[#CE2829] md:mt-4 md:min-h-[24px] md:text-[16px]">
            {errors.ingredients || ingredientError}
          </p>
        </div>

        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[22px] font-semibold text-[#292929] md:text-[20px]"
          >
            İsim
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={orderForm.name}
            onChange={handleChange}
            placeholder="Adınızı girin"
            disabled={isBusy}
            data-cy="name-input"
            className="w-full h-[69px] md:h-[56px] bg-white md:bg-[#FAF7F2] border border-[#D9D9D9] md:border-none rounded-[7px] md:rounded-[4px] px-3 md:px-4 text-[18px] md:text-[16px] outline-none placeholder:text-[#5F5F5F] disabled:opacity-70"
          />
          <p className="mt-2 min-h-[16px] text-[12px] text-[#CE2829] md:min-h-[20px] md:text-sm">
            {errors.name || ""}
          </p>
        </div>

        <div>
          <label
            htmlFor="note"
            className="mb-2 block text-[22px] font-semibold text-[#292929] md:text-[20px]"
          >
            Sipariş Notu
          </label>
          <input
            id="note"
            name="note"
            value={orderForm.note}
            onChange={handleChange}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            disabled={isBusy}
            className="w-full h-[69px] md:h-[56px] bg-white md:bg-[#FAF7F2] border border-[#D9D9D9] md:border-none rounded-[7px] md:rounded-[4px] px-3 md:px-4 text-[17px] md:text-[16px] outline-none placeholder:text-[#5F5F5F] disabled:opacity-70"
          />
        </div>

        <div className="flex flex-col border-t border-[#D9D9D9] pt-4 md:flex-row md:items-start md:justify-between md:gap-6 md:pt-6">
          <div className="order-1 w-full overflow-hidden rounded-[5px] border border-[#D9D9D9] bg-white md:order-2 md:max-w-[300px] md:rounded-[6px]">
            <div className="px-12 py-6 md:px-6 md:pb-6 md:pt-8">
              <h3 className="text-[16px] font-semibold text-[#292929] md:text-[24px]">
                Sipariş Toplamı
              </h3>
              <div className="mt-4 space-y-2 text-[14px] md:mt-8 md:space-y-4 md:text-[18px]">
                <div className="flex items-center justify-between text-[#5F5F5F]">
                  <span>Seçimler</span>
                  <span className="font-medium">{selectionsPrice}₺</span>
                </div>
                <div className="flex items-center justify-between font-semibold text-[#CE2829]">
                  <span>Toplam</span>
                  <span className="text-[16px] md:text-[18px]">
                    {totalPrice}₺
                  </span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              data-cy="submit-button"
              disabled={isButtonDisabled}
              className={`hidden md:block h-[62px] w-full text-[18px] font-semibold text-[#292929] transition-colors ${
                isButtonDisabled
                  ? "bg-[#F3E7A0] cursor-not-allowed"
                  : "bg-[#FDC913]"
              }`}
            >
              {isBusy ? "Gönderiliyor..." : "SİPARİŞ VER"}
            </button>
          </div>

          <div className="order-2 mt-4 mb-12 flex items-center gap-3 w-full md:order-1 md:mt-0 md:w-fit">
            <div className="flex h-[45px] flex-1 overflow-hidden rounded-[4px] border border-[#D9D9D9] md:h-auto md:w-fit md:flex-none md:rounded-[3px]">
              <button
                type="button"
                onClick={() => handleQuantity(-1)}
                disabled={isBusy}
                className="flex-1 bg-[#FDC913] text-[18px] font-semibold md:px-5 md:py-3"
              >
                -
              </button>
              <span className="flex flex-1 min-w-0 items-center justify-center bg-white text-[16px] font-semibold md:min-w-[56px] md:text-base">
                {orderForm.quantity}
              </span>
              <button
                type="button"
                onClick={() => handleQuantity(1)}
                disabled={isBusy}
                className="flex-1 bg-[#FDC913] text-[18px] font-semibold md:px-5 md:py-3"
              >
                +
              </button>
            </div>
            <button
              type="submit"
              data-cy="submit-button"
              disabled={isButtonDisabled}
              className={`md:hidden flex-1 h-[45px] rounded-[4px] text-[14px] font-bold text-[#292929] transition-colors ${
                isButtonDisabled ? "bg-[#F3E7A0]" : "bg-[#FDC913]"
              }`}
            >
              {isBusy ? "GÖNDERİLİYOR..." : "SİPARİŞ VER"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
