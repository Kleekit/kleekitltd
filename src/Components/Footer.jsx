import React from 'react'
import '../index.css';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div>
            <footer class="container-fluid">

            <div class="row">
            <div class="col-md-6">          
                <div class="footer-logo-case">
                    <div>
                    <a href="/start" class="footer-btn">
                    Start a Project
                    </a>
                    </div>

                    <div>
                    <img class="img-fluid logo-footer" src="media/logo-footer.png" alt="img" />
                    </div>
                </div>
                </div>

            <div class="col-md-6">
                <ul class="contact">
                <li class="detail-top">Contact</li>
                <li><img class="footerIcon" src="media/map-pin.png" alt="footer icon" /> &nbsp; Almarence Plaza, 111 Jakpa Rd, Effurun, Warri.</li>
                <li><img class="footerIcon" src="media/mail.png" alt="footer icon" /> &nbsp; KleekitLTD@gmail.com</li>
                <li><img class="footerIcon" src="media/phone-call.png" alt="footer icon" /> &nbsp; 08102676031</li>
                <li>
                    <ul class="social">
                    <li> <img class="footerIcon" src="media/linkedin.png" alt="footer icon" /> </li>
                    <li> <img class="footerIcon" src="media/twitter.png" alt="footer icon" /> </li>
                    <li> <img class="footerIcon" src="media/facebook.png" alt="footer icon" /> </li>
                    </ul>
                </li>
                </ul>   
            </div>
            </div>

            </footer>
        </div>
    )
}

export default Footer

