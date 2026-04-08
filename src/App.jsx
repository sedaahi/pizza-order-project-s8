import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import SuccessPage from "./pages/SuccessPage";

const initialOrderForm = {
  name: "",
  size: "M",
  dough: "",
  ingredients: [],
  note: "",
  quantity: 1,
};

export default function App() {
  const [orderData, setOrderData] = useState(null);
  const [orderResponse, setOrderResponse] = useState(null);
  const [orderForm, setOrderForm] = useState(initialOrderForm);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/order"
        element={
          <OrderPage
            orderForm={orderForm}
            setOrderForm={setOrderForm}
            setOrderData={setOrderData}
            setOrderResponse={setOrderResponse}
          />
        }
      />
      <Route
        path="/success"
        element={
          <SuccessPage
            orderData={orderData}
            orderResponse={orderResponse}
          />
        }
      />
    </Routes>
  );
}