import React from "react";
import AboutMe from "../Components/Martins/AboutMe";
import Avatar from "../Components/Martins/Avatar";
import AboutSection from "../Components/General/AboutSection";
import ConnectWithMe from "../Components/Martins/ConnectWithMe";
import Header from "../Components/General/Header";
import ImgLogo from "../Components/Martins/ImgLogo";
import IntroHeader from "../Components/Martins/IntroHeader";
import NavBar from "../Components/NavBar";
import OffCanvas from "../Components/General/OffCanvas";
import RikeeyMobileSection from "../Components/General/RikeeyMobileSection";
import RikeeyWebSection from "../Components/General/RikeeyWebSection";
import "./PortfolioStyles.css";

const Portfolio = () => {
  return (
    <div>
      {/* Navigation and Sidebar */}
      {/* <NavBar email={"martinsngene9@gmail.com"}>
        <ImgLogo />
      </NavBar> */}
      <NavBar />
      <Header>
        <IntroHeader />
      </Header>
      <main className="container zCustom">
        {/* Rikeey Mobile Section */}
        {/* <RikeeyMobileSection /> */}
        {/* Rikeey Website Section */}
        {/* <RikeeyWebSection /> */}
        {/* About Me Section */}
        <AboutSection avatar={<Avatar />}>
          <AboutMe />
        </AboutSection>
        {/* Connect With Me */}
        <ConnectWithMe
          instagramAddress={"https://www.instagram.com/martinium3/"}
          whatsappAddress={"https://wa.me/2348085878073"}
          githubAddress={"https://github.com/Martinsngene"}
          linkedInAddress={
            "https://www.linkedin.com/in/martins-ngene-0a0325198/"
          }
        />
      </main>
      {/* <!-- off-canvas --> */}
      <OffCanvas />
      {/* <!-- off-canvas End --> */}
    </div>
  );
};

export default Portfolio;
