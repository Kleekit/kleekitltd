import React from "react";
import AboutMe from "../Components/Lead/AboutMe";
import Avatar from "../Components/Lead/Avatar";
import AboutSection from "../Components/General/AboutSection";
import ConnectWithMe from "../Components/Lead/ConnectWithMe";
import Header from "../Components/General/Header";
import ImgLogo from "../Components/Lead/ImgLogo";
import IntroHeader from "../Components/Lead/IntroHeader";
import NavBar from "../Components/General/NavBar";
import OffCanvas from "../Components/General/OffCanvas";
import RikeeyMobileSection from "../Components/General/RikeeyMobileSection";
import RikeeyWebSection from "../Components/General/RikeeyWebSection";

const Portfolio = () => {
  return (
    <div>
      {/* Navigation and Sidebar */}
      <NavBar email={"martinsngene9@gmail.com"}>
        <ImgLogo />
      </NavBar>
      <Header>
        <IntroHeader />
      </Header>
      <main className="container">
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
