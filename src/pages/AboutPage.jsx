import React from "react";
import { Footer, Navbar } from "../components";
import "../css/products.css"; 
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to MuseMarket, your curated destination for handcrafted
          artistry, creative expression, and premium-quality goods. We are more
          than just an e-commerce store — we’re a vibrant community that
          connects passionate artists with appreciative buyers from around the
          world. At MuseMarket, we believe in celebrating originality. Every
          product featured on our platform is thoughtfully designed, ethically
          crafted, and artist-approved. Whether you're looking for timeless wall
          art, elegant décor, or one-of-a-kind handmade gifts, you'll find
          something truly special here. We are committed to sustainability,
          quality, and supporting independent creators. With a seamless shopping
          experience, secure payment gateways, and responsive customer service,
          MuseMarket ensures every step of your journey is inspired and
          hassle-free. Join us in redefining how the world discovers and
          supports creative talent — one masterpiece at a time.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row g-4">
          {[
            {
              title: "Pottery Paintings",
              img: "https://scenebooking.com/wp-content/uploads/2024/11/Untitled-design-1-2.png?auto=compress&cs=tinysrgb&w=600",
            },
            {
              title: "Canvas Paintings",
              img: "https://www.tallengestore.com/cdn/shop/products/AcrylicArt-Ganesha_1_a0983c03-4f37-457d-afa1-59db818d2669_grande.jpg?v=1603783936?auto=compress&cs=tinysrgb&w=600",
            },
            {
              title: "Pottery",
              img: "https://images.pexels.com/photos/357428/pexels-photo-357428.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              title: "Water Colour Paintings",
              img: "https://i0.wp.com/micheleclamp.com/wp-content/uploads/2022/02/IMG_4321-scaled.jpg?auto=compress&cs=tinysrgb&w=600",
            },
          ].map((item, idx) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={idx}>
              <div className="category-card h-100 shadow-sm rounded-4">
                <div className="category-image-container">
                  <img src={item.img} alt={item.title} className="img-fluid" />
                </div>
                <div className="p-3">
                  <h5 className="text-center text-dark fw-semibold m-0">
                    {item.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
