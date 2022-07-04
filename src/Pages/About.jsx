import React from "react";
import "./About.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function About() {
  return (
    <div>
      <NavBar />

      <main className="container">
        {/* <!-- Header Section --> */}
        <section>
          <div className="row headerSection">
            <div className="col-md-12">
              <small>ABOUT KLEEKIT</small>
              <h1 className="headerTop">
                We provide revolutionary solutions for businesses. We create and
                manage custom websites for businesses. We also design and create
                content.
              </h1>
              <div className="headerTxtResponsive">
                <p>
                  We provide revolutionary solutions for businesses. We create
                  and manage custom websites for businesses. We also design and
                  create content.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <img className="img-fluid" src="media/about.png" alt="About" />
            </div>
          </div>
        </section>

        {/* <!-- Inner Sections --> */}

        <div
          id="sectionWho"
          className="row align-items-center justify-content-center text-center"
        >
          <div className="col-md-6">
            <div className="headerCase">
              <h2>Who We Are</h2>
              <span className="headerLine"></span>
            </div>
            <p>
              Kleekit is an IT and Digital Company that offers web and app
              development, and content creations to Businesses and Individuals.
              <br />
              <br />
              We are a team of top-tier developers, and designers who work in
              ally to solve problems and transform the digital experience of
              individuals, companies and governments.
              <br />
              <br />
              Kleekit provides software design and development as well as
              professional services and software deployment.
            </p>
          </div>
        </div>

        <div className="row align-items-center justify-content-center text-center sectionVision">
          <div className="col-md-6">
            <div className="headerCase">
              <h2>Our Vision</h2>
              <span className="headerLine"></span>
            </div>
            <p>
              To help African businesses to access the right technology for
              their business, make more sales, and grow exponentially.
            </p>
          </div>
        </div>

        <div className="row align-items-center justify-content-center text-center sectionDrive">
          <div className="col-md-6">
            <div className="headerCase">
              <h2>What Drives US</h2>
              <span className="headerLine"></span>
            </div>
            <p>
              The endless deisre to be better everyday and to help people
              achieve their goals.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;
