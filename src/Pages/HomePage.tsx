import React from "react";
// import Button from "../Components/Button/Button.tsx";
// import book from "../Images/rainbow.png";
import HeroSection from "./HeroSection.tsx";
import OurServices from "./OurServices.tsx";
import Testimonials from "./Testimonials.tsx";
import Footer from "./Footer.tsx";

interface Props {

}

const HomePage: React.FC<Props> = (props) => {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <Testimonials/>
      <Footer/>
    </div>

  );
};

export default HomePage;