import { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

// Passes a list of products to
const DisplayProducts = () => {
    const [products, setProducts] = useState([
      { id: 1, name: "T-Shirt", price: 29.99, desc: "Stylish white T-Shirt.", img: "src/assets/t-shirt.jpg" },
      { id: 2, name: "Shorts", price: 39.99, desc: "Comfortable shorts.", img: "src/assets/shorts.jpg" },
      { id: 3, name: "Tennis Shoes", price: 79.99, desc: "Durable tennis shoes.", img: "src/assets/tennis-shoes.jpg" },
      { id: 4, name: "Jeans", price: 59.99, desc: "Classic blue jeans.", img: "src/assets/jeans.jpg" },
      { id: 5, name: "Jacket", price: 89.99, desc: "Sleek jacket.", img: "src/assets/jacket.jpg" },
      { id: 6, name: "Hat", price: 19.99, desc: "Trendy baseball hat.", img: "src/assets/hat.jpg" },
    ]);
    
    return (
      <div className="display-products">
        <ProductList products={products} />
      </div>
    )
};

function App() {
  return (
  <DisplayProducts />
  )
};

export default App;
