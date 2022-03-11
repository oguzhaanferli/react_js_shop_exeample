import { BrowserRouter, Routes, Route } from "react-router-dom";
import  ProductListing  from "./pages/ProductListing";
import  ProductDetail  from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import  OrderCompleted  from "./pages/OrderCompleted";
import  Layout  from "./pages/Layout";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<ProductListing />} />
          <Route path="product-detail" element={<ProductDetail />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="completed" element={<OrderCompleted />} />
      </Route>
    </Routes>
  </BrowserRouter>


)
