import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ingredientsList } from "../data/ingredients";
import { validateForm, calculateTotalPrice } from "../utils/helpers";
import { postOrder } from "../services/api";

export default function OrderForm({
  orderForm,
  setOrderForm,
  setOrderData,
  setOrderResponse,
}) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [ingredientError, setIngredientError] = useState("");

  const errors = useMemo(() => validateForm(orderForm), [orderForm]);
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setOrderForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleIngredientChange = (ingredient) => {
    const isSelected = orderForm.ingredients.includes(ingredient);

    if (isSelected) {
      setOrderForm((prev) => ({
        ...prev,
        ingredients: prev.ingredients.filter((item) => item !== ingredient),
      }));

      setIngredientError("");
      return;
    }

    if (orderForm.ingredients.length >= 10) {
      setIngredientError("En fazla 10 malzeme seçebilirsiniz.");
      return;
    }

    setOrderForm((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ingredient],
    }));

    setIngredientError("");
  };

  const decreaseQuantity = () => {
    if (orderForm.quantity <= 1) return;

    setOrderForm((prev) => ({
      ...prev,
      quantity: prev.quantity - 1,
    }));
  };

  const increaseQuantity = () => {
    setOrderForm((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const currentErrors = validateForm(orderForm);
    if (Object.keys(currentErrors).length > 0) return;

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
      setIsSubmitting(true);
      setSubmitError("");

      const responseData = await postOrder(payload);

      console.log("Sipariş özeti:", payload);
      console.log("API cevabı:", responseData);

      setOrderData(payload);
      setOrderResponse(responseData);

      navigate("/success");
    } catch (error) {
      setSubmitError(
        "Sipariş gönderilemedi. Lütfen internet bağlantını kontrol et."
      );
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectionsPrice = (
    orderForm.ingredients.length *
    5 *
    orderForm.quantity
  ).toFixed(2);

  const totalPrice = calculateTotalPrice(
    orderForm.ingredients,
    orderForm.quantity
  ).toFixed(2);

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="grid gap-8">
        <div className="grid gap-6 md:grid-cols-2">
          <fieldset>
            <legend className="mb-3 text-[20px] font-semibold text-[#292929]">
              Boyut Seç <span className="text-[#CE2829]">*</span>
            </legend>

            <div className="flex gap-3">
              {["S", "M", "L"].map((size) => (
                <label
                  key={size}
                  className={`flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border text-[18px] font-semibold ${
                    orderForm.size === size
                      ? "border-[#FDC913] bg-[#FDC913]"
                      : "border-[#E5E5E5] bg-[#FAF7F2]"
                  }`}
                >
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={orderForm.size === size}
                    onChange={handleChange}
                    className="hidden"
                  />
                  {size}
                </label>
              ))}
            </div>

            <p className="mt-2 min-h-[20px] text-sm text-[#CE2829]">
              {errors.size || ""}
            </p>
          </fieldset>

          <div>
            <label
              htmlFor="dough"
              className="mb-3 block text-[20px] font-semibold text-[#292929]"
            >
              Hamur Seç <span className="text-[#CE2829]">*</span>
            </label>

            <select
              id="dough"
              name="dough"
              value={orderForm.dough}
              onChange={handleChange}
              className="h-14 w-full rounded-md border border-[#D9D9D9] bg-[#FAF7F2] px-4 text-[18px] outline-none focus:border-[#CE2829]"
            >
              <option value="">--Hamur Kalınlığı Seç--</option>
              <option value="İnce Hamur">İnce Hamur</option>
              <option value="Orta Hamur">Orta Hamur</option>
              <option value="Kalın Hamur">Kalın Hamur</option>
            </select>

            <p className="mt-2 min-h-[20px] text-sm text-[#CE2829]">
              {errors.dough || ""}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[20px] font-semibold text-[#292929]">
            Ek Malzemeler
          </h2>

          <p className="mt-2 text-[16px] text-[#5F5F5F]">
            En Fazla 10 malzeme seçebilirsiniz. 5₺
          </p>

          <div className="mt-6 grid grid-cols-3 gap-x-8 gap-y-4">
            {ingredientsList.map((ingredient) => {
              const checked = orderForm.ingredients.includes(ingredient);

              return (
                <label
                  key={ingredient}
                  className="flex min-h-[45px] cursor-pointer items-center gap-3 text-[16px] font-semibold text-[#5F5F5F]"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleIngredientChange(ingredient)}
                    className="hidden"
                  />

                  <span
                    className={`flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[4px] border text-[22px] font-bold ${
                      checked
                        ? "border-[#FDC913] bg-[#FDC913]"
                        : "border-[#E5E5E5] bg-[#FAF7F2]"
                    }`}
                  >
                    {checked ? "✓" : ""}
                  </span>

                  <span className="w-[140px] leading-[1.2]">{ingredient}</span>
                </label>
              );
            })}
          </div>

          <p className="mt-4 min-h-[24px] text-[16px] text-[#CE2829]">
            {errors.ingredients || ingredientError}
          </p>
        </div>

        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[20px] font-semibold text-[#292929]"
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
            className="w-full rounded-md bg-[#FAF7F2] px-4 py-3 outline-none"
          />

          <p className="mt-2 min-h-[20px] text-sm text-[#CE2829]">
            {errors.name || ""}
          </p>
        </div>

        <div>
          <label
            htmlFor="note"
            className="mb-2 block text-[20px] font-semibold text-[#292929]"
          >
            Sipariş Notu
          </label>

          <input
            id="note"
            name="note"
            value={orderForm.note}
            onChange={handleChange}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            className="h-[56px] w-full rounded-[4px] bg-[#FAF7F2] px-4 py-[16px] text-[16px] font-light text-[#292929] outline-none placeholder:text-[16px] placeholder:text-[#5F5F5F]"
          />
        </div>

        <div className="flex flex-col gap-6 border-t border-[#D9D9D9] pt-6 md:flex-row md:items-start md:justify-between">
          <div className="flex w-fit overflow-hidden rounded-md border border-[#D9D9D9]">
            <button
              type="button"
              onClick={decreaseQuantity}
              className="bg-[#FDC913] px-5 py-3 text-lg font-semibold"
            >
              -
            </button>

            <span className="flex min-w-[56px] items-center justify-center bg-white px-4 py-3">
              {orderForm.quantity}
            </span>

            <button
              type="button"
              onClick={increaseQuantity}
              className="bg-[#FDC913] px-5 py-3 text-lg font-semibold"
            >
              +
            </button>
          </div>

          <div className="w-full max-w-[300px] overflow-hidden rounded-[6px] border border-[#D9D9D9] bg-white">
            <div className="px-6 pb-6 pt-8">
              <h3 className="text-[24px] font-semibold text-[#292929]">
                Sipariş Toplamı
              </h3>

              <div className="mt-8 space-y-4 text-[18px]">
                <div className="flex items-center justify-between text-[#5F5F5F]">
                  <span>Seçimler</span>
                  <span>{selectionsPrice}₺</span>
                </div>

                <div className="flex items-center justify-between font-semibold text-[#CE2829]">
                  <span>Toplam</span>
                  <span>{totalPrice}₺</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`block h-[62px] w-full text-[18px] font-semibold text-[#292929] ${
                !isValid || isSubmitting
                  ? "cursor-not-allowed bg-[#F3E7A0]"
                  : "bg-[#FDC913]"
              }`}
            >
              {isSubmitting ? "Gönderiliyor..." : "SİPARİŞ VER"}
            </button>
          </div>
        </div>

        <p className="min-h-[24px] text-sm font-medium text-[#CE2829]">
          {submitError || ""}
        </p>
      </div>
    </form>
  );
}