import React from "react";

const OurServices = () => {
  return (
    <section className="relative bg-[#0B0B12] py-16 px-4 overflow-hidden">

      {/* Top Glow */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="max-w-6xl mx-auto relative">

        {/* Heading */}
        <div className="mb-12">
          <h1 className="font-mono font-bold text-2xl md:text-4xl text-[#F2E6CF] uppercase tracking-wide">
            THE PRECISION TOOLKIT
          </h1>

          <p className="mt-3 text-[#F2E6CF]/70 font-mono text-xs md:text-sm max-w-xl leading-6">
            Advanced computational tools designed for systematic
            literature review and deep conceptual understanding.
          </p>

          <div className="mt-5 h-[3px] bg-[#F2E6CF] w-32 md:w-44" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-3">

          {/* Main Card */}
          <div className="col-span-12 lg:col-span-8 group bg-[#F2E6CF] border-4 border-black p-6 shadow-[7px_7px_0px_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#fff]">

            <div className="w-8 h-8 bg-[#F3AB0C] border-2 border-black flex items-center justify-center text-sm">
              ✺
            </div>

            <h2 className="mt-6 font-mono text-xl md:text-3xl font-bold uppercase text-black">
              NEURAL CONTEXT MAPPING
            </h2>

            <p className="mt-5 text-black/80 leading-7 font-mono text-xs md:text-sm">
              Our proprietary LLM logic doesn't just summarize:
              it maps citations and concepts across your entire
              library to find hidden correlations and methodology
              trends that others miss.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">

              <span className="border-2 border-black px-2 py-1 font-mono text-[10px]">
                SEMANTIC SEARCH
              </span>

              <span className="border-2 border-black px-2 py-1 font-mono text-[10px]">
                CITATION GRAPH
              </span>

              <span className="border-2 border-black px-2 py-1 font-mono text-[10px]">
                METHODOLOGY ANALYSIS
              </span>

            </div>

          </div>

          {/* Right Card */}
          <div className="col-span-12 lg:col-span-4 group bg-[#9DD1AF] border-4 border-black p-6 shadow-[7px_7px_0px_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#fff]">

            <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center text-sm">
              📄
            </div>

            <h2 className="mt-6 font-mono text-lg font-bold uppercase text-black">
              BULK BATCH ANALYSIS
            </h2>

            <p className="mt-4 text-black/80 leading-6 font-mono text-xs">
              Upload up to 100 PDFs at once.
              PaperMind will categorize, tag and
              cross-reference them in parallel.
            </p>

            <button className="mt-8 relative font-mono text-sm font-bold text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all group-hover:after:w-full">
              LEARN MORE
            </button>

          </div>

          {/* Bottom Left */}
          <div className="col-span-12 md:col-span-4 group bg-[#2BB4A0] border-4 border-black p-6 shadow-[7px_7px_0px_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#fff]">

            <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center text-sm">
              ✎
            </div>

            <h2 className="mt-6 font-mono text-lg font-bold uppercase text-black">
              SMART ANNOTATIONS
            </h2>

            <p className="mt-4 font-mono text-xs leading-6 text-black">
              AI-generated margin notes that explain formulas,
              variables and niche terminology in real time.
            </p>

            <button className="mt-8 font-bold text-sm font-mono text-black relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all group-hover:after:w-full">
              VIEW FEATURES
            </button>

          </div>

          {/* Bottom Center */}
          <div className="col-span-12 md:col-span-4 group bg-[#F2E6CF] border-4 border-black p-6 shadow-[7px_7px_0px_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#fff]">

            <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center text-sm">
              🛡
            </div>

            <h2 className="mt-6 font-mono text-lg font-bold uppercase text-black">
              DATA SOVEREIGNTY
            </h2>

            <p className="mt-4 font-mono text-xs leading-6 text-black">
              Your research remains yours. We ensure full ownership
              and local encryption for all processed manuscripts.
            </p>

            <button className="mt-8 font-bold text-sm font-mono text-black relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all group-hover:after:w-full">
              SECURITY DOCS
            </button>

          </div>

          {/* Bottom Right */}
          <div className="col-span-12 md:col-span-4 group bg-[#E9440A] text-white border-4 border-black p-6 shadow-[7px_7px_0px_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#fff]">

            <div className="w-8 h-8 bg-white text-black border-2 border-black flex items-center justify-center text-sm">
              ☁
            </div>

            <h2 className="mt-6 font-mono text-lg font-bold uppercase">
              ENTERPRISE CLOUD
            </h2>

            <p className="mt-4 font-mono text-xs leading-6 text-white/90">
              Air-gapped processing and private-cloud deployments
              tailored for large-scale university environments.
            </p>

            <button className="mt-8 bg-black px-4 py-2 text-sm font-mono font-bold border-2 border-black transition-all duration-300 hover:bg-white hover:text-black">
              ENTERPRISE PORTAL
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OurServices;