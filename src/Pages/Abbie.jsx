import React from "react";
import AboutMe from "../Components/Abbie/AboutMe";
import Avatar from "../Components/Abbie/Avatar";
import AboutSection from "../Components/General/AboutSection";
import ConnectWithMe from "../Components/Abbie/ConnectWithMe";
import Header from "../Components/General/Header";
import ImgLogo from "../Components/Abbie/ImgLogo";
import IntroHeader from "../Components/Abbie/IntroHeader";
import NavBar from "../Components/General/NavBar";
import OffCanvas from "../Components/General/OffCanvas";
// import RikeeyMobileSection from "../Components/General/RikeeyMobileSection";
import RikeeyWebSection from "../Components/General/RikeeyWebSection";

const Abbie = () => {
  return (
    <div>
      {/* Navigation and Sidebar */}
      <NavBar email={"aibieabigail@gmail.com"}>
        <ImgLogo />
      </NavBar>
      <Header>
        <IntroHeader />
      </Header>
      <main className="container">
        {/* Rikeey Mobile Section */}
        {/* <RikeeyMobileSection /> */}
        {/* Rikeey Website Section */}
        <RikeeyWebSection />
        {/* About Me Section */}
        <AboutSection avatar={<Avatar />}>
          <AboutMe />
        </AboutSection>
        {/* Connect With Me */}
        <ConnectWithMe
          instagramAddress={"https://www.instagram.com/uix.abigail/"}
          twitterAddress={"https://twitter.com"}
          behanceAddress={"https://www.behance.net/aibieabigail"}
          linkedInAddress={
            "https://www.linkedin.com/in/abigail-aghaibie-0375591b4/"
          }
        />
      </main>
      {/* <!-- off-canvas --> */}
      <OffCanvas />
      {/* <!-- off-canvas End --> */}
    </div>
  );
};

export default Abbie;
