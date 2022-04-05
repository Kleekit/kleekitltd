import React from "react";
import AboutMe from "../Components/Kelvin/AboutMe";
import Avatar from "../Components/Kelvin/Avatar";
import AboutSection from "../Components/General/AboutSection";
import ConnectWithMe from "../Components/Kelvin/ConnectWithMe";
import Header from "../Components/General/Header";
import IntroHeader from "../Components/Kelvin/IntroHeader";
import NavBar from "../Components/NavBar";
import OffCanvas from "../Components/General/OffCanvas";
import "./PortfolioStyles.css";

const Portfolio = () => {
  return (
    <div>
      {/* Navigation and Sidebar */}

      <NavBar />
      <Header>
        <IntroHeader />
      </Header>
      <main className="container zCustom">
        {/* About Me Section */}
        <AboutSection avatar={<Avatar />}>
          <AboutMe />
        </AboutSection>
        {/* Connect With Me */}
        <ConnectWithMe
          instagramAddress={"https://www.instagram.com"}
          whatsappAddress={"https://wa.me/2347067582810"}
          githubAddress={"https://github.com/worldkaizen001"}
          linkedInAddress={
            "https://www.linkedin.com/in/kelvin-aigbe-810b12225/"
          }
          email={"mailto:aigbekelvin@gmail.com"}
        />
      </main>
      {/* <!-- off-canvas --> */}
      <OffCanvas />
      {/* <!-- off-canvas End --> */}
    </div>
  );
};

export default Portfolio;
