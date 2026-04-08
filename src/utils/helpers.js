export const BASE_PRICE = 85.5;
export const INGREDIENT_PRICE = 5;

export const validateForm = (form) => {
  const errors = {};

  if (form.name.trim().length < 3) {
    errors.name = "İsim en az 3 karakter olmalı.";
  }

  if (!form.size) {
    errors.size = "Boyut seçmelisiniz.";
  }

  if (!form.dough) {
    errors.dough = "Hamur seçmelisiniz.";
  }

  if (form.ingredients.length < 4) {
    errors.ingredients = "En az 4 malzeme seçmelisiniz.";
  }

  if (form.ingredients.length > 10) {
    errors.ingredients = "En fazla 10 malzeme seçebilirsiniz.";
  }

  return errors;
};

export const calculateSelectionsPrice = (ingredients, quantity) => {
  return ingredients.length * INGREDIENT_PRICE * quantity;
};

export const calculateTotalPrice = (ingredients, quantity) => {
  return (BASE_PRICE + ingredients.length * INGREDIENT_PRICE) * quantity;
};