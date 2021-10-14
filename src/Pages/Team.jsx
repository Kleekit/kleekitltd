
import React from 'react';
import './Team.css';
import { Link } from "react-router-dom";
import NavBar from '../Components/NavBar';



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
                    <p>Joshua Aghanti</p>
                    <span class="headerUnderline"></span>
                    </div>
                </div>
                </div>
                
            </div>

            {/* <!-- Other team members --> */}

            <div class="row align-items-center justify-content-center text-center memberProfile">
                <div class="col-md-4">
                <img class="img-fluid imgCustom" src="media/lead.png" alt="Lead" />
                <div>
                    <h5 class="titleCustom">Lead Developer</h5>
                    <div class="headerUnderlineCase">
                    <p>Ekama Emmanuel</p>
                    <span class="headerUnderline"></span>
                    </div>
                </div>
                </div>

                <div class="col-md-4">
                <img class="img-fluid imgCustom" src="media/uiux.png" alt="UI/UX" />
                <div>
                    <h5 class="titleCustom">Lead UI/UX Designer</h5>
                    <div class="headerUnderlineCase">
                    <p>Aghaibie Abigail</p>
                    <span class="headerUnderline"></span>
                    </div>
                </div>
                </div>

                <div class="col-md-4 boxCase">
                <img class="img-fluid imgCustom" src="media/front-end.png" alt="Front-End" />
                <div>
                    <h5 class="titleCustom"> Front-End Developer</h5>
                    <div class="headerUnderlineCase">
                    <p>Udi Tega</p>
                    <span class="headerUnderline"></span>
                    </div>
                </div>
                <div class="boxFluid boxThird">
                    <img class="img-fluid" src="media/small-rec.png" alt="" />
                </div>
                <div class="boxFluid boxFourth">
                    <img class="img-fluid" src="media/rec-ash.png" alt="" />
                </div>
                </div>
            </div>
            </main>
        
        </div>
    )
}

export default Team
