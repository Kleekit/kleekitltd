import React from "react";

function RikeeyMobileSection() {
  return (
    <div
      className="row align-items-center justify-content-center"
      id="mobileSection"
    >
      <div className="col-md-6">
        <div className="mobileImgContainer">
          <img
            className="img-fluid mobileImg"
            src="media/rikeey_2.png"
            alt="Rikeey Mobile"
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="mobileTxtContainer">
          <p className="pyCustom clientHead">CLIENT PROJECT</p>
          <h2 className="rikeeyHead">Rikeey Mobile</h2>
          <p className="pyCustom">
            A tiny website to help Japanese language learners on their journey.
            Built with love using Webflow.
          </p>
          <p>
            <a className="seeMore" href="/">
              see more &nbsp;{" "}
              <img className="img-fluid line" src="media/line.png" alt="line" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RikeeyMobileSection;
