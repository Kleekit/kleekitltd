import React from "react";
import AboutMe from "../Components/Collins/AboutMe";
import Avatar from "../Components/Collins/Avatar";
import AboutSection from "../Components/General/AboutSection";
import ConnectWithMe from "../Components/Collins/ConnectWithMe";
import Header from "../Components/General/Header";
import IntroHeader from "../Components/Collins/IntroHeader";
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
          twitterAddress="https://twitter.com/alsoknownaszac"
          whatsappAddress="https://wa.me/2348122683190"
          githubAddress="https://github.com/alsoknownaszac"
          linkedInAddress="https://www.linkedin.com/in/collins-amayo-aaa5a1216/"
        />
      </main>
      {/* <!-- off-canvas --> */}
      <OffCanvas />
      {/* <!-- off-canvas End --> */}
    </div>
  );
};

export default Portfolio;
