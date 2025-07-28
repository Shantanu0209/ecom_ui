import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../css/addProduct.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    images: [],
  });
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProduct(prev => ({
      ...prev,
      images: files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert images to base64 or send via multipart/form-data based on your backend
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("price", product.price);
    formData.append("description", product.description);
    product.images.forEach((img, i) => {
      formData.append(`images`, img);
    });

    try {
      const res = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        navigate("/product");
      } else {
        toast.error("Failed to add product");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container my-5">
      <div className="add-product-card p-4">
        <h3 className="mb-4">Add New Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              required
              value={product.title}
              onChange={(e) => setProduct({ ...product, title: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              required
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <label>Description</label>
            <textarea
              className="form-control"
              rows={4}
              required
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label>Upload Images (Multiple)</label>
            <input
              type="file"
              className="form-control"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
