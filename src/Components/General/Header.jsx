import React from "react";

function Header(props) {
  return (
    <header className="header container">
      {/* Hero Section */}
      <div
        className="row align-items-center justify-content-center heroSection"
        id="heroSection"
      >
        <div className="col-md-6 hero">
          <div className="headerTxtContainer">
            {props.children}
            <div className="boxOne">
              <img className="img-fluid" src="media/med-rec.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6 fingerCase">
          <div className="scrollContainer">
            <img
              className="img-fluid scroll"
              src="media/scroll.png"
              alt="scroll"
            />
          </div>
          <div className="fingerContainer">
            <img className="img-fluid heroImg" src="media/two.png" alt="two" />
          </div>
          <div className="boxTwo">
            <img className="img-fluid" src="media/big-rec.png" alt="" />
          </div>
          <div className="boxFive">
            <img className="img-fluid" src="media/half.png" alt="half" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
