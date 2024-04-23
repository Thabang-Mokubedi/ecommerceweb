/*
This App.js file represents the main component of a React e-commerce store application. 
It sets up the routing configuration using react-router-dom and manages the state with 
the help of Redux and the AppleStoreContext context provider.
*/

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./components/cart/cart";
import { AppleStoreContextProvider } from "./components/context/AppleStoreContext";
import Dashboard from "./pages/Dashboard";
import Bag from "./pages/Bag";
import Checkout from "./pages/Checkout";
import ItemView from "./pages/ItemView";
import PaymentPage from "./pages/Payment";
import ShippingAddress from "./pages/AddAddress";
import PaymentConfirm from "./components/paymentconfirm/paymentconfirm";

function App() {
  return (
    <div className="App">
      {/* The AppleStoreContextProvider wraps the entire app and provides the application state */}
      <AppleStoreContextProvider>
        {/* The Router component enables client-side routing */}
        <Router>
          {/* The Routes component is used to define the routes */}
          <Routes>
            {/* Home Page/Dashboard Page */}
            {/* When the path matches "/", the Dashboard component will be rendered */}
            <Route path="/" element={<Dashboard />} />

            {/* Bag */}
            {/* When the path matches "/bag", the Bag component will be rendered */}
            <Route path="/bag" element={<Bag />} />

            {/* Cart Page */}
            {/* When the path matches "/cart", the Cart component will be rendered */}
            <Route path="/cart" element={<Cart />} />

            {/* Checkout Page */}
            {/* When the path matches "/checkout", the Checkout component will be rendered */}
            <Route path="/checkout" element={<Checkout />} />

            {/* Item-View */}
            {/* When the path matches "/item1", the ItemView component will be rendered */}
            <Route path="/item1" element={<ItemView />} />

            {/* Shipping Address Form */}
            {/* When the path matches "/address", the ShippingAddress component will be rendered */}
            <Route path="/address" element={<ShippingAddress />} />

            {/* Payment Method Form */}
            {/* When the path matches "/payment", the Payment component will be rendered */}
            <Route path="/payment" element={<PaymentPage />} />

            {/* Order Successful Page */}
            {/* When the path matches "/paymentconfirm", the PaymentConfirm component will be rendered */}
            <Route path="/paymentconfirm" element={<PaymentConfirm />} />
          </Routes>
        </Router>
      </AppleStoreContextProvider>
    </div>
  );
}

export default App;
