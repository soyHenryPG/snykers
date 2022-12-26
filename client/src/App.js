import React from "react";
import { Routes, Route } from "react-router-dom";
//Providers
import { AuthProvider } from "./context/authContext";
//JSX
import Home from "./components/Home/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Details from "./components/Details/Details";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CancelPayment from "./components/Paypal/CancelPayment";
import CapturePayment from "./components/Paypal/CapturePayment";
import Cart from "./components/Cart/Cart";
import Dashboard from "./components/Dashboard/Dashboard";
import Preview from "./components/Paypal/Preview/Preview";
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51MHXZUEgY6MBu39VFoEgCPs7p60pA9GRQ50lY1Tt0g8KDajCchKvX33hZ3QUBrEkOr3N2wUr2Z3Sved9g6YdhbgM00knycrACa"
);

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order-canceled" element={<CancelPayment />} />
          <Route path="/order-completed" element={<CapturePayment />} />
          <Route path="/cart" element={<Elements stripe={stripePromise}><Cart /></Elements>} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/home/:id" element={<Details />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </AuthProvider>
    </div >
  );
}

export default App;