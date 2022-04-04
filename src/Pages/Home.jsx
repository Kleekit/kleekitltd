import React from "react";
import "../bootstrap.css";
import "./Home.css";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <main class="container">
        {/* Header Section */}
        <div class="row headerSection align-items-center justify-content-center">
          <div class="col-md-6">
            <div class="textCase">
              <h1 class="head-top"> Let’s Build Something Great </h1>
              <p>
                {" "}
                Share your challenges with our team and we’ll provide you
                revolutionary solutions.{" "}
              </p>
            </div>
          </div>

          <div class="col-md-6 headerImgContainer">
            <img
              class="img-fluid headerImg"
              src="media/header-img.png"
              alt="img"
            />
          </div>
        </div>

        {/* <!-- Who are We Section --> */}
        <div id="whoWeAre" class="row">
          <div class="col-md-6">
            <h2>Who are we ?</h2>
          </div>

          <div class="col-md-6">
            <div class="inner-1">
              <div class="line-container-1">
                <div class="line-1"></div>
                <div class="line-2"></div>
              </div>
              <p>
                We provide revolutionary solutions for businesses. We create and
                manage custom websites for businesses. We also design and create
                content.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Our Recent Work --> */}
        {/* <div class="row ourRecentWork align-items-center justify-content-center">
          <div class="col-md-4 ourWorkTxt">
            <div class="inner-3">
              <h2 class="top-recent">Our recent work</h2>
              <div class="line-container-2">
                <div class="line-recent-1"></div>
                <div class="line-recent-2"></div>
              </div>
            </div>
          </div>

          <div class="col-md-8 d-flex align-items-center justify-content-center">
            <img
              class="img-fluid portfolio-img"
              src="media/portfolio-img-1.png"
            />
          </div>
        </div> */}

        {/* <!-- Our Services --> */}
        <div class="row ourServices align-items-center justify-content-center">
          <div class="col-md-6 ourServicesInner">
            <h2 id="servicesTop" class="services-top">
              Our Services
            </h2>
            <p class="services-txt">
              Whether you would like a simple search focussed website or a
              technically demanding web project, we’d love to demonstrate that
              we’re the perfect fit.
            </p>
          </div>

          <div class="col-md-6">
            <div class="inner-2">
              <div class="line-container-3">
                <div class="line-1"></div>
                <div class="line-2"></div>
              </div>
              <ul>
                <li>Web Design</li>
                <li>App Development</li>
                <li>Ecommerce</li>
                <li>Design</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
