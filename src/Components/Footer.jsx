import React from "react";
import "../index.css";
import { FaLinkedin, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <footer className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-logo-case">
              {/* <div>
                <a href="/start" className="footer-btn">
                  Start a Project
                </a>
              </div> */}

              <div>
                <img
                  className="img-fluid logo-footer"
                  src="media/logo-footer.png"
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <ul className="contact">
              <li className="detail-top">Contact</li>
              <li>
                <img
                  className="footerIcon"
                  src="media/map-pin.png"
                  alt="footer icon"
                />{" "}
                &nbsp; Almarence Plaza, 111 Jakpa Rd, Effurun, Warri.
              </li>
              <li>
                <img
                  className="footerIcon"
                  src="media/mail.png"
                  alt="footer icon"
                />{" "}
                &nbsp; k.kleekit@gmail.com
              </li>
              <li>
                <img
                  className="footerIcon"
                  src="media/phone-call.png"
                  alt="footer icon"
                />{" "}
                &nbsp; 08162422212
              </li>
              <li>
                <ul className="social">
                  <li>
                    <FaLinkedin size={"25px"} />
                  </li>
                  <li>
                    {" "}
                    <FaTwitterSquare size={"25px"} />
                  </li>
                  <li>
                    {" "}
                    <FaFacebookSquare size={"25px"} />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
