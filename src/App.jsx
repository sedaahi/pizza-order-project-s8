import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import SuccessPage from "./pages/SuccessPage";

import { initialOrderForm } from "./data/ingredients";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  const [orderForm, setOrderForm] = useState(initialOrderForm);
  const [orderResult, setOrderResult] = useState(null);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/order"
          element={
            <OrderPage
              orderForm={orderForm}
              setOrderForm={setOrderForm}
              setOrderResult={setOrderResult} // Burası setOrderResult olmalı
            />
          }
        />
        <Route
          path="/success"
          element={<SuccessPage orderResult={orderResult} />} // SuccessPage'e orderData olarak gönderiyoruz
        />
      </Routes>

      <ToastContainer position="top-center" autoClose={1000} theme="light" />
    </>
  );
}
