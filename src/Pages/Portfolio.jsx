
import React from 'react'
import './Portfolio.css';
import { Link } from "react-router-dom";
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';


const Portfolio = () => {
    return (
        <div>
        <NavBar />
        <main class="container">
            {/* <!-- Header Section --> */}
            <section class="heroSection">
                <div class="row">
                <div class="col-md-6 box">
                    <h1 class="Top">Looking for a revolutionary
                    Solution for your business??</h1>
                    <h4>
                        <a class="projectLink" href="#">Share your challenges with us.</a>
                    </h4>
                    <div class="boxResponsive secondBox">
                        <img class="img-fluid" src="media/small-rec.png" alt="" />
                    </div>
                </div>
                <div class="col-md-6 box">
                    <div class="boxResponsive firstBox">
                    <img class="img-fluid" src="media/rec-ash.png" alt="" />
                    </div>
                </div>
                </div>
            </section>

            {/* <!-- First Project --> */}
            <section class="firstProject">
                <div class="row align-items-center justify-content-center">
                <div class="col-md-6">
                    <h2 class="subHead">Mora Clothing</h2>
                    <h5><a class="projectLink" href="#">Ecommerce Website</a></h5>
                    <p>Mora clothing is an ecommerce business that deals on male fashion,
                    to expand their customer reach they needed a webite that displays all available products in sizes,
                        colour and prize,
                    take orders and also make payments.</p>
                </div>
                <div class="col-md-6 box">
                    <img class="img-fluid" src="media/mora.png" alt="mora" />
                    <div class="boxResponsive thirdBox">
                    <img class="img-fluid" src="media/rec-red.png" alt="" />
                    </div>
                </div>
                </div>
            </section>

            {/* <!-- Second Project --> */}
            <section class="secondProject">
                <div class="row align-items-center justify-content-center">
                <div class="col-md-6 order-2 order-md-1 box">
                    <img class="img-fluid" src="media/doc.png" alt="doc" />
                    <div class="boxResponsive fourthBox">
                    <img class="img-fluid" src="media/rec-ash.png" alt="" />
                    </div>
                </div>
                <div class="col-md-6 order-1 order-md-2">
                    <h2 class="subHead">EasyDoc</h2>
                    <h5><a class="projectLink" href="#">Doctors Consultancy</a></h5>
                    <p>EasyDoc is an application that connects patients with doctors, this app allows patients to book appointments with various doctors and directly consult with these doctors, get prescriptions, diagnosis and treatments.
                    </p>
                </div>
                </div>
            </section>

            {/* <!-- Third Project --> */}
            <section class="thirdProject">
                <div class="row align-items-center justify-content-center">
                <div class="col-md-6 box">
                    <h2 class="subHead">VOREM</h2>
                    <h5><a class="projectLink" href="#">Cryptocurrency and Digital Asset Exchange</a></h5>
                    <p>VOREM is a cryptocurrency and digital asset exchange platform that allows users to buy, sell and exchange cryptocurrency by creating a market place for all users to sell and buy giving them the chance to decide who they want to buy from and also allow sellers to set their individual rates.
                    </p>
                    <div class="boxResponsive sixthBox">
                    <img class="img-fluid" src="media/rec-ash.png" alt="" />
                    </div>
                </div>
                <div class="col-md-6 box">
                    <div class="boxResponsive fifthBox">
                    <img class="img-fluid" src="media/rec-red.png" alt="" />
                    </div>
                    <img class="img-fluid" src="media/vorem.png" alt="doc" />
                </div>
                </div>
            </section>
            </main>
            <Footer />
        </div>
    )
}

export default Portfolio
