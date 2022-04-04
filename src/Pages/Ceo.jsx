import React from "react";
import AboutMe from "../Components/Ceo/AboutMe";
import Avatar from "../Components/Ceo/Avatar";
import AboutSection from "../Components/General/AboutSection";
import ConnectWithMe from "../Components/Ceo/ConnectWithMe";
import Header from "../Components/General/Header";
import IntroHeader from "../Components/Ceo/IntroHeader";
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
          instagramAddress={"https://www.instagram.com"}
          whatsappAddress={"https://wa.me/2348162422212"}
          githubAddress={"https://github.com/Kayoneklein"}
          linkedInAddress={
            "https://www.linkedin.com/in/joshua-aghanti-81721572/"
          }
          email={"mailto:kayoneklein@gmail.com"}
        />
      </main>
      {/* <!-- off-canvas --> */}
      <OffCanvas />
      {/* <!-- off-canvas End --> */}
    </div>
  );
};

export default Portfolio;
