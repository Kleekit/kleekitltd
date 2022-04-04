import React from "react";
import "./Team.css";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import TeamProfileTemp from "../Components/TeamProfileTemp";

const Team = () => {
  return (
    <div>
      <NavBar />
      <main class="container">
        {/* <!-- Header Section --> */}
        <div class="row align-items-center justify-content-center headerProfile boxCase">
          <div class="col-md-4 text-center">
            <div class="boxFluid boxFirst">
              <img class="img-fluid" src="media/small-rec.png" alt="" />
            </div>
            <div class="boxFluid boxSecond">
              <img class="img-fluid" src="media/rec-ash.png" alt="" />
            </div>
            <h1>Meet the Team</h1>
            <img class="img-fluid imgCustom" src="media/ceo.png" alt="CEO" />
            <div>
              <h5 class="titleCustom">CEO</h5>
              <div class="headerUnderlineCase">
                <a href="/kay" className="nameLink">
                  Joshua Aghanti
                </a>
                <span class="headerUnderline"></span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Other team members --> */}

        <div class="row align-items-center justify-content-center text-center memberProfile">
          <TeamProfileTemp
            name="Ekama Emmanuel"
            title="Lead Developer"
            pic="media/lead.png"
            href="/ekama"
          />
          <TeamProfileTemp
            name="Aghaibie Abigail"
            title="Lead UI/UX Designer"
            pic="media/uiux.png"
            href="/abbie"
          />

          <TeamProfileTemp
            name="Udi Tega"
            title="Flutter Developer"
            pic="media/front-end.png"
            href="/tega"
          />

          <div class="col-md-4 boxCase">
            <div class="boxFluid boxThird">
              <img class="img-fluid" src="media/small-rec.png" alt="" />
            </div>
            <div class="boxFluid boxFourth">
              <img class="img-fluid" src="media/rec-ash.png" alt="" />
            </div>
          </div>
        </div>
        <div class="row align-items-center justify-content-center text-center memberProfile">
          <TeamProfileTemp
            name="Collins Amayo"
            title="Frontend Developer"
            pic="media/collins_profile.jpg"
            href="/collins"
          />
          <TeamProfileTemp
            name="Martins Ngene"
            title="Frontend Developer"
            pic="media/martins_profile.jpg"
            href="/martins"
          />

          <TeamProfileTemp
            name="Kelvin Aigbe"
            title="Flutter Developer"
            pic="media/front-end.png"
            href="kelvin"
          />
        </div>
      </main>
    </div>
  );
};

export default Team;
