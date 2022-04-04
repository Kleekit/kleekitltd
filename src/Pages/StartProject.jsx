import React from "react";
import "./StartProject.css";

import NavBar from "../Components/NavBar";

const StartProject = () => {
  return (
    <div>
      <NavBar />
      <main className="container">
        <div className="row align-items-center justify-content-center fluidBoxCase">
          <div className="col-md-6">
            <div className="fluidBox oneBox">
              <img className="img-fluid" src="media/small-rec.png" alt="" />
            </div>
            <div className="fluidBox twoBox">
              <img className="img-fluid" src="media/rec-ash.png" alt="" />
            </div>
            <div className="formCustom">
              <h1> Start a Project </h1>
              <form action="/kleekit">
                <label className="label" for="name">
                  Full Name
                </label>
                <br />
                <input className="formItem" type="text" name="name" id="name" />
                <br />

                <label className="label" for="email">
                  Email Address
                </label>
                <br />
                <input
                  className="formItem"
                  type="email"
                  name="email"
                  id="email"
                />
                <br />

                <label className="label" for="services">
                  Services
                </label>
                <br />
                <input
                  className="formItem"
                  type="text"
                  name="services"
                  id="services"
                />
                <br />

                <label className="label" for="message">
                  Message
                </label>
                <br />
                <textarea
                  className="formItem comment"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
                <br />

                <button type="submit" className="btnCustom">
                  Submit
                </button>
              </form>
            </div>
            <div className="fluidBox threeBox">
              <img className="img-fluid" src="media/rec-ash.png" alt="" />
            </div>
            <div className="fluidBox fourBox">
              <img className="img-fluid" src="media/small-rec.png" alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartProject;
