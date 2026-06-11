import React from "react";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";

interface Props {

}

const App: React.FC<Props> = (props) => {
  return (
    <div className="bg-[#0B0B12] h-screen">
      <NavBar />
      <HomePage />
    </div>
  );
};

export default App;