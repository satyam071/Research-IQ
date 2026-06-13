import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/NavBar";
import { Routes, Route , Navigate } from "react-router-dom";
import Error404 from "./Pages/Error404";
import ResearchPage from "./Pages/UploadPage/ResearchPage";
interface Props {

}

const App: React.FC<Props> = (props) => {
  return (
    <div className="bg-[#0B0B12] ">


      <NavBar />
      <Routes>
        <Route index element={<Navigate to="/home" replace/>} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/upload" element={<ResearchPage/>}/>
        <Route path="/*" element={<Error404/>}/>
        
      </Routes>
      {/* <HomePage /> */}
    </div>
  );
};

export default App;