import React from "react";
import Button from "../Components/Button/Button.tsx";
import book from "../Images/rainbow.png";

interface Props {

}

const HomePage: React.FC<Props> = (props) => {
  return (
    <section className="min-h-screen bg-[#0B0B12] text-white px-4 sm:px-6 md:px-8 py-10 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Left */}
          <div>

            {/* Badge */}
            <div className="inline-block border-2 border-black bg-[#9DD1AF] text-black px-3 py-1 font-mono text-xs sm:text-sm tracking-wide shadow-[4px_4px_0px_#000]">
              RESEARCH REDEFINED
            </div>

            {/* Heading */}
            <div className="mt-6 font-mono uppercase leading-none">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                UNDERSTAND ANY
              </h1>

              <div className="inline-block bg-[#F3AB0C] text-black px-2 sm:px-3 py-1 border-2 border-black shadow-[6px_6px_0px_#000] mt-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  RESEARCH PAPER
                </h1>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2 text-white">
                IN MINUTES
              </h1>
            </div>

            {/* Description */}
            <div className="mt-8 max-w-lg text-[#F2E6CF] font-mono text-sm sm:text-base leading-7 sm:leading-8">
              <p>
                Stop drowning in academic jargon. PaperMind AI deconstructs
                complex PDFs into actionable insights, clear summaries, and
                interactive knowledge graphs.
              </p>

              <p className="mt-4">
                Built for high-performance researchers.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <Button
                className="bg-[#E9440A] text-black border-2 border-[#484848] px-8 py-3 font-mono font-bold shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition rounded-none"
              >
                START NEW RESEARCH
              </Button>

              <Button
                className="border-2 border-white text-white bg-transparent px-8 py-3 font-mono font-bold shadow-[6px_6px_0px_#000] hover:bg-transparent hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition rounded-none"
              >
                WATCH DEMO
              </Button>

            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center mt-10 lg:mt-0">

            {/* Decorative Square */}
            <div className="absolute right-0 top-0 w-20 h-20 sm:w-28 sm:h-28 bg-[#2BB4A0] border-4 border-black" />

            {/* Frame */}
            <div className="relative bg-[#F2E6CF] border-4 border-black p-3 mt-6 sm:p-4 shadow-[8px_8px_0px_#000] z-10 w-fit">

              {/* Image */}
              <div className="border-4 border-black overflow-hidden w-[260px] sm:w-[340px] md:w-[430px] h-[200px] sm:h-[270px] md:h-[340px]">
                <img
                  src={book}
                  alt="Research Paper"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Analysis Card */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-white text-black border-4 border-black px-4 py-2 sm:px-5 sm:py-3 shadow-[6px_6px_0px_#000]">

                <div className="font-mono font-bold text-xs sm:text-sm">
                  ✨ ANALYSIS COMPLETE
                </div>

                <div className="mt-2 h-2 bg-[#F3AB0C] w-24 sm:w-36 border border-black" />

              </div>

            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          <div className="bg-[#F2E6CF] text-black border-4 border-black p-5 shadow-[6px_6px_0px_#fff]">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              12M+
            </h2>
            <p className="font-mono text-sm">
              PAPERS INDEXED
            </p>
          </div>

          <div className="bg-[#F3AB0C] text-black border-4 border-black p-5 shadow-[6px_6px_0px_#fff]">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              98%
            </h2>
            <p className="font-mono text-sm">
              ACCURACY RATE
            </p>
          </div>

          <div className="bg-[#9DD1AF] text-black border-4 border-black p-5 shadow-[6px_6px_0px_#fff]">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              &lt;2m
            </h2>
            <p className="font-mono text-sm">
              AVG SUMMARY TIME
            </p>
          </div>

          <div className="bg-[#2BB4A0] text-black border-4 border-black p-5 shadow-[6px_6px_0px_#fff]">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              50k+
            </h2>
            <p className="font-mono text-sm">
              ACTIVE RESEARCHERS
            </p>
          </div>

        </div>

      </div>
    </section>

  );
};

export default HomePage;