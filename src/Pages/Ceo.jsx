import React from "react";
import AboutMe from "../Components/Ceo/AboutMe";
import Avatar from "../Components/Ceo/Avatar";
import AboutSection from "../Components/General/AboutSection";
import ConnectWithMe from "../Components/Ceo/ConnectWithMe";
import Header from "../Components/General/Header";
import ImgLogo from "../Components/Ceo/ImgLogo";
import IntroHeader from "../Components/Ceo/IntroHeader";
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
          instagramAddress={"https://www.instagram.com"}
          whatsappAddress={"https://wa.me/2348162422212"}
          githubAddress={"https://github.com/Kayoneklein"}
          linkedInAddress={
            "https://www.linkedin.com/in/joshua-aghanti-81721572/"
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
