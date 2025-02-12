import ProductItem from './ProductItem'
import "./ProductList.css"

// Take a list of products from App.jsx
// Map through each product within the list
// For each product render a ProductItem component

function ProductList({ products }) {
    return (
        <div className="products-container">
            <h2 className="product-title">Products</h2>

            <ul className="product-list">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;