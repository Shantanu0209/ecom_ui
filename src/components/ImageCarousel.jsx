import React, { useState } from "react";
import "../css/products.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="position-relative">
      <img
        src={images[currentIndex]}
        alt={`product ${currentIndex}`}
        className="img-fluid p-3"
        style={{ height: "250px", objectFit: "contain" }}
      />

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            className="carousel-arrow left"
            onClick={prevImage}
            style={arrowStyleLeft}
          >
            ‹
          </button>
          <button
            className="carousel-arrow right"
            onClick={nextImage}
            style={arrowStyleRight}
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      <div className="d-flex justify-content-center mt-3">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            style={{
              height: "7px",
              width: "7px",
              margin: "0 6px",
              backgroundColor: idx === currentIndex ? "#a0522d" : "#d2b48c", // active brown + tan
              borderRadius: "50%",
              display: "inline-block",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              marginBottom: "5px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const arrowBaseStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "#fff8f0",
  color: "#8b4513", // SaddleBrown
  border: "1px solid #d2b48c", // tan border
  borderRadius: "50%",
  fontSize: "20px",
  width: "30px",
  height: "30px",
  cursor: "pointer",
  zIndex: 1,
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

const arrowStyleLeft = {
  ...arrowBaseStyle,
  left: "10px",
};

const arrowStyleRight = {
  ...arrowBaseStyle,
  right: "10px",
};

export default ImageCarousel;
