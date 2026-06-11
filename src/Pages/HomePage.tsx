import React from "react";
// import Button from "../Components/Button/Button.tsx";
// import book from "../Images/rainbow.png";
import HeroSection from "./HeroSection.tsx";
import OurServices from "./OurServices.tsx";

interface Props {

}

const HomePage: React.FC<Props> = (props) => {
  return (
    <div>
      <HeroSection />
      <OurServices />
    </div>

  );
};

export default HomePage;