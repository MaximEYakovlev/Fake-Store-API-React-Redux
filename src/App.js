import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductListing } from "./components/ProductListing";
import { ProductDetails } from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
