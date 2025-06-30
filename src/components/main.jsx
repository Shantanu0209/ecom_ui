import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Discover MuseMarket’s Fresh Arrivals!
                Explore our latest collection of handcrafted art and lifestyle products, designed for the new season. 
                From unique decor to wearable art, each item is carefully curated to inspire. 
                Celebrate creativity and style with our newest arrivals — made with passion, precision, and a touch of elegance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
