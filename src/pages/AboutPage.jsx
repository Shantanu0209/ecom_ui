import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to MuseMarket, your curated destination for handcrafted artistry, creative expression, and premium-quality goods. We are more than just an e-commerce store — we’re a vibrant community that connects passionate artists with appreciative buyers from around the world.
          At MuseMarket, we believe in celebrating originality. Every product featured on our platform is thoughtfully designed, ethically crafted, and artist-approved. Whether you're looking for timeless wall art, elegant décor, or one-of-a-kind handmade gifts, you'll find something truly special here.
          We are committed to sustainability, quality, and supporting independent creators. With a seamless shopping experience, secure payment gateways, and responsive customer service, MuseMarket ensures every step of your journey is inspired and hassle-free.
          Join us in redefining how the world discovers and supports creative talent — one masterpiece at a time.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://scenebooking.com/wp-content/uploads/2024/11/Untitled-design-1-2.png?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Pottery Paintings</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://www.tallengestore.com/cdn/shop/products/AcrylicArt-Ganesha_1_a0983c03-4f37-457d-afa1-59db818d2669_grande.jpg?v=1603783936?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Canvas Paintings</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/357428/pexels-photo-357428.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Pottery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i0.wp.com/micheleclamp.com/wp-content/uploads/2022/02/IMG_4321-scaled.jpg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Water Colour Paintings</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage