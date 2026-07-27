import React, { useEffect } from "react";
import { useOption } from "../Context/OptionsContext";
import { AnimatePresence, motion } from "framer-motion";

import ResponsePage from "../Pages/Features Page/Summary_Chat";
import Button from "../Components/Button/Button";
import MindMap from "../Pages/Features Page/MindMap";
import ResearchPage from "../Pages/UploadPage/ResearchPage";
// import MindMap from "../Pages/UploadPage/MindMap";
// import CitationExtraction from "../Pages/UploadPage/CitationExtraction";
// import MultiPaperComparison from "../Pages/UploadPage/MultiPaperComparison";

const OptionsMiddleware = () => {
  const { selectedOption, setSelectedOption } = useOption();

  const pages = {
    "Summary & Chat AI": <ResponsePage/>,
    "Mind Map": <MindMap/>, // Replace later
    "Citation Extraction": <ResponsePage />,
    "Multi-Paper Comparison": <ResponsePage />,
  };



  return (
    <>
      {!selectedOption ? (
        <motion.div
          key="options"
          initial={{
            opacity: 0,
            filter: "blur(10px)"
          }}

          animate={{
            opacity: 1,
            filter: "blur(0px)"
          }}

          exit={{
            opacity: 0,
            filter: "blur(10px)"
          }}
          transition={{ duration: 0.3 }}
          className="flex justify-center items-center flex-wrap flex-col md:flex-row gap-4 mb-2 min-h-[75vh]"
        >

          <div className="flex justify-center items-center flex-wrap  flex-col md:flex-row  gap-4 mb-2 min-h-[75vh]">
            <Button className="bg-purple-400 cursor-pointer hover:shadow-blue-500/50" onClick={() => setSelectedOption("Mind Map")}>
              Summary & Chat AI
            </Button>

            <Button className="bg-purple-400 cursor-pointer hover:shadow-cyan-500/50" onClick={() => setSelectedOption("Mind Map")}>
              Mind Map
            </Button>

            <Button className="bg-purple-400 cursor-pointer hover:shadow-cyan-500/50" onClick={() => setSelectedOption("Citation Extraction")}>
              Citation Extraction
            </Button>

            <Button className="bg-purple-400 cursor-pointer hover:shadow-cyan-500/50" onClick={() => setSelectedOption("Multi-Paper Comparison")}>
              Multi-Paper Comparison
            </Button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key={selectedOption}
          initial={{
            opacity: 0,
            filter: "blur(10px)"
          }}

          animate={{
            opacity: 1,
            filter: "blur(0px)"
          }}

          exit={{
            opacity: 0,
            filter: "blur(10px)"
          }}
        >
          {pages[selectedOption]}
        </motion.div>
      )}
    </>
  );
};

export default OptionsMiddleware;