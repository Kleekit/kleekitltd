import React from "react";
import AboutMe from "../Components/Lead/AboutMe";
import Avatar from "../Components/Lead/Avatar";
import AboutSection from "../Components/General/AboutSection";
import ConnectWithMe from "../Components/Lead/ConnectWithMe";
import Header from "../Components/General/Header";
import IntroHeader from "../Components/Lead/IntroHeader";
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
          whatsappAddress={"https://wa.me/2347082571949"}
          githubAddress={"https://github.com/ekamanelly"}
          linkedInAddress={
            "https://www.linkedin.com/in/emmanuel-ekama-454a74143/"
          }
          email={"mailto:ekamanelly@gmail.com"}
        />
      </main>
      {/* <!-- off-canvas --> */}
      <OffCanvas />
      {/* <!-- off-canvas End --> */}
    </div>
  );
};

export default Portfolio;
