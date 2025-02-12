import "./ProductItem.css"

// This component represents a single product
// Receive product data from ProductList as a prop
// Display the name, price, and a description of the product

function ProductItem({ product }) {
    return (
        <div className="product-tile">
            <li key={product.id}>
                <h3 className="product-name">{product.name}</h3>
                <img className="product-img" src={product.img} alt="product image" />
                <p className="product-desc">{product.desc}</p>
                <p className="product-price">${product.price}</p>
            </li>
        </div>
    )
};

export default ProductItem;