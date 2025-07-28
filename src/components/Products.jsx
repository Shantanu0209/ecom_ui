import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProductCard from "./productComponent";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [filterHeadings, setFilterHeadings] = useState([]);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    console.log("Adding product to cart:", product);

    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        let data = await response.json();
        for (let i = 0; i < data.length; i++) {
          data[i]["image"] = [data[i].image];
        } // Assigning image from product_data
        console.log(data);
        setData(data);
        setFilter(data);
        setFilterHeadings([...new Set(data.map((item) => item.category))]);
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          {filterHeadings.map((filter) => {
            return (
              <button
                className="btn btn-outline-dark btn-sm m-2"
                onClick={() => filterProduct(filter)}
              >
                {filter}
              </button>
            );
          })}
          {/* <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("men's clothing")}
          >
            men's clothing
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Canvas Paintings")}
          >
            Canvas Paintings
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Pottery")}
          >
            Pottery
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Acrylic Paintings")}
          >
            Acrylic Paintings
          </button> */}
        </div>

        {filter.map((product) => {
          return (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
              key={product.id}
            >
              {/* <div className="product-wrapper text-center">
                <div className="product-img position-relative">
                  <Link to={`/product/${product.id}`} className="d-block">
                    {product.image && Array.isArray(product.image) ? (
                      <ImageCarousel images={product.image} />
                    ) : (
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{ height: "250px", objectFit: "contain" }}
                        className="img-fluid p-3"
                      />
                    )}
                  </Link>
                  <span>${product.price}</span>

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
                          addProduct(product);
                        }}
                      >
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-2 px-2">
                  <h6
                    className="fw-bold text-dark mb-1 text-truncate"
                    title={product.title}
                  >
                    {product.title}
                  </h6>
                  <p className="small text-muted mb-0">
                    {product.description.substring(0, 65)}...
                  </p>
                </div>
              </div> */}

              <ProductCard product={product} addToCart={addProduct} />
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
