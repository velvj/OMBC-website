import React from "react";

import Header from "../header/Header";
import "./home.css";
import Copy from "../copyRight/copyRight";
function Home() {
  return (
    <>
      <Header></Header>
      <div className="">
        <img
          className="entrance"
          src="https://www.ombc.in/static/customer_dashboard/assets/images/slider1.png"
        ></img>
        <div className="container">
          <div className="row py-5">
            <div className="col-6">
              <img
                className="adayar"
                src="https://thefirmdesign.co.in/wp-content/uploads/2020/04/OMBC7.jpg"
              ></img>
              <p className="old-madras">OLD MADRAS @ Adayar, Chennai in 2014</p>
              <p className="map">VIEW ON MAP</p>
            </div>
            <div className="col-6">
              <h1 className="para">Our Story</h1>
              <p className="para">
                We always dreamt of walking into a bakery where the aroma of
                freshly baked bread is wafting through the air. The smell and
                warmth of a freshly baked loaf of bread is a visceral
                experience. Unable to find the bakery of our dreams close to us
                we opened our own. We didn’t want to recreate European bakeries
                but, create something uniquely local and uniquely Madras. Thus
                began the journey of The Old Madras Baking Company. Established
                in 2014, our goal is to make preservative-free, freshly baked
                bread available to everyone. We cater to both the health
                conscious and the indulgent gourmand. Following the philosophy
                of artisanal baking, our bread is carefully handcrafted using
                traditional methods - be it a simple loaf of bread or a
                carefully constructed croissant.
              </p>
              <button className="readMore">READ MORE</button>
              <img
                className="ourStory"
                src="https://www.ombc.in/static/customer_dashboard/assets/images/slider2.png"
              ></img>
            </div>
          </div>
        </div>
      </div>

      {/* our products */}
      <div className="our-products">
        <div className="container pt-4">
          <h1 className="text-center">Our SOTRY</h1>
          <p className="text-center">
            Check our Product and categories and feel the great passion of food
          </p>
          <div className="row py-5">
            <div className="col-6">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://www.ombc.in/static/customer_dashboard/assets/images/slider2.png"
                ></img>
                <div className="product-title">
                  <p className="title1">Classic Bread</p>
                  <p className="title2">Starting $20</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://www.ombc.in/static/customer_dashboard/assets/images/slider2.png"
                ></img>
                <div className="product-title">
                  <p className="title1">Classic Bread</p>
                  <p className="title2">Starting $20</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://www.ombc.in/static/customer_dashboard/assets/images/slider2.png"
                ></img>
                <div className="product-title">
                  <p className="title1">Classic Bread</p>
                  <p className="title2">Starting $20</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://www.ombc.in/static/customer_dashboard/assets/images/slider2.png"
                ></img>
                <div className="product-title">
                  <p className="title1">Classic Bread</p>
                  <p className="title2">Starting $20</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://www.ombc.in/static/customer_dashboard/assets/images/slider2.png"
                ></img>
                <div className="product-title">
                  <p className="title1">Classic Bread</p>
                  <p className="title2">Starting $20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our products */}
      <div className="our-blogs">
        <div className="container pt-4">
          <h1 className="text-center">Our Blogs</h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="row py-5">
            <div className="col-4">
              <div className="blog-card">
                <img
                  className="blog-image"
                  src="https://www.ombc.in/static/customer_dashboard/assets/images/slider2.png"
                ></img>
                <div className="blog-title">
                  <p className="title1">
                    Loram ipsum dolor sit amet, co sed do euismod tempo
                  </p>
                  <p className="title2">Posted On 12 July, 2018</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="blog-card">
                <img
                  className="blog-image"
                  src="https://www.ombc.in/static/customer_dashboard/assets/images/slider2.png"
                ></img>
                <div className="blog-title">
                  <p className="title1">
                    Loram ipsum dolor sit amet, co sed do euismod tempo
                  </p>
                  <p className="title2">Posted On 12 July, 2018</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="blog-card">
                <img
                  className="blog-image"
                  src="https://www.ombc.in/static/customer_dashboard/assets/images/slider2.png"
                ></img>
                <div className="blog-title">
                  <p className="title1">
                    Loram ipsum dolor sit amet, co sed do euismod tempo
                  </p>
                  <p className="title2">Posted On 12 July, 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our store location */}
      <div className="our-store-location">
        <div className="container pt-4">
          <h1 className="text-center">Our Store Location</h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="seeallbranch">SEE ALL BRANCHES</button>
          <div className="row py-5">
            <div className="col-4">
              <div className="store-card">
                <img
                  src="https://www.ombc.in/static/customer_dashboard/images/hydrabad.png"
                  alt=""
                />
                <p className="text-center mt-2">Hydrabad</p>
              </div>
            </div>
            <div className="col-4">
              <div className="store-card">
                <img
                  src="https://www.ombc.in/static/customer_dashboard/images/chennai.png"
                  alt=""
                />
                <p className="text-center mt-2">Chennai</p>
              </div>
            </div>
            <div className="col-4">
              <div className="store-card">
                <img
                  src="https://www.ombc.in/static/customer_dashboard/images/hydrabad.png"
                  alt=""
                />
                <p className="text-center mt-2">Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Copy></Copy>
    </>
  );
}

export default Home;
