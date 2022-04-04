import React from "react";
import AboutMe from "../Components/Tega/AboutMe";
import Avatar from "../Components/Tega/Avatar";
import AboutSection from "../Components/General/AboutSection";
import ConnectWithMe from "../Components/Tega/ConnectWithMe";
import Header from "../Components/General/Header";
import ImgLogo from "../Components/Tega/ImgLogo";
import IntroHeader from "../Components/Tega/IntroHeader";
import NavBar from "../Components/General/NavBar";
import OffCanvas from "../Components/General/OffCanvas";
import RikeeyMobileSection from "../Components/General/RikeeyMobileSection";
import RikeeyWebSection from "../Components/General/RikeeyWebSection";

const Portfolio = () => {
  return (
    <div>
      {/* Navigation and Sidebar */}
      <NavBar email={"tegakleekit@gmail.com"}>
        <ImgLogo />
      </NavBar>
      <Header>
        <IntroHeader />
      </Header>
      <main className="container">
        {/* Rikeey Mobile Section */}
        <RikeeyMobileSection />
        {/* Rikeey Website Section */}
        <RikeeyWebSection />
        {/* About Me Section */}
        <AboutSection avatar={<Avatar />}>
          <AboutMe />
        </AboutSection>
        {/* Connect With Me */}
        <ConnectWithMe
          instagramAddress={"https://www.instagram.com/uditegalisa/"}
          whatsappAddress={"https://wa.me/2348075750476"}
          githubAddress={"https://github.com/Uditega"}
          linkedInAddress={
            "https://www.linkedin.com/in/oghenetega-melisa-udi-85566319b/"
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
