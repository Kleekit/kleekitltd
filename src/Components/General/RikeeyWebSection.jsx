import React from "react";

function RikeeyWebSection() {
  return (
    <div
      className="row align-items-center justify-content-center websiteSection"
      id="websiteSection"
    >
      <div className="col-md-6 webResponsiveOne">
        <div className="websiteTxtContainer">
          <p className="pyCustom clientHead">CLIENT PROJECT</p>
          <h2>Rikeey Website</h2>
          <p className="pyCustom">
            A tiny website to help Japanese language learners on their journey.
            Built with love using Webflow.
          </p>
          <p>
            <a href="/" className="seeMore">
              see more&nbsp;{" "}
              <img className="img-fluid line" src="media/line.png" alt="line" />
            </a>
          </p>
        </div>
      </div>
      <div className="col-md-6 webResponsiveTwo">
        <div className="websiteImgContainer">
          <img
            className="img-fluid websiteImg"
            src="media/rikeey.png"
            alt="Rikeey Website"
          />
        </div>
      </div>
    </div>
  );
}

export default RikeeyWebSection;
