import React from "react";
import AboutMe from "../Components/Tega/AboutMe";
import Avatar from "../Components/Tega/Avatar";
import AboutSection from "../Components/General/AboutSection";
import ConnectWithMe from "../Components/Tega/ConnectWithMe";
import Header from "../Components/General/Header";
import IntroHeader from "../Components/Tega/IntroHeader";
import NavBar from "../Components/NavBar";
import OffCanvas from "../Components/General/OffCanvas";

const Portfolio = () => {
  return (
    <div>
      {/* Navigation and Sidebar */}

      <NavBar />
      <Header>
        <IntroHeader />
      </Header>
      <main className="container">
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
          email={"mailto:uditegamelisa089@gmail.com"}
        />
      </main>
      {/* <!-- off-canvas --> */}
      <OffCanvas />
      {/* <!-- off-canvas End --> */}
    </div>
  );
};

export default Portfolio;
