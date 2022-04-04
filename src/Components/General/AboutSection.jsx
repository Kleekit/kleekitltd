import React from "react";

function AboutSection(props) {
  return (
    <div className="row" id="aboutMeSection">
      <div className="col-md-6 innerContainer">
        {props.children}
        <div className="boxFour">
          <img className="img-fluid" src="media/mini-rec.png" alt="" />
        </div>
        <div className="boxThree">
          <img className="img-fluid" src="media/big-rec.png" alt="" />
        </div>
      </div>
      <div className="col-md-6 innerContainer2">
        <div className="aboutImgContainer">
          <div></div>
          <div className="avatar">{props.avatar}</div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
