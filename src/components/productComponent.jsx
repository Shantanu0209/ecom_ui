// ProductCard.js
import React from "react";
import { Link } from "react-router-dom";
import "../css/ProductCard.css"; // Make sure to create this
import "../css/products.css"
import toast from "react-hot-toast";
const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="custom-card">
      <div className="img-container">
        <span className="price-badge">${product.price}</span>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="product-action">
          <div className="product-action-style">
            <Link to={`/product/${product.id}`} title="View">
              <i className="fa fa-plus"></i>
            </Link>
            <a
              title="Add to Cart"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toast.success("Added to cart");
                addToCart(product);
              }}
            >
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="card-content">
        <h6 className="product-title text-truncate" title={product.title}>
          {product.title}
        </h6>
        <p className="product-desc text-truncate">
          {product.description.substring(0, 60)}...
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
