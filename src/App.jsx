import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCart } from "./hooks/useCart";
import { useOrders } from "./hooks/useOrders";
import { StorePage } from "./pages/StorePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { AuthProvider } from "./contexts/AuthContext";

function AppRoutes() {
  const cart = useCart();
  const orders = useOrders();

  return (
    <Routes>
      <Route path="/" element={<StorePage cart={cart} orders={orders} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} orders={orders} />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}