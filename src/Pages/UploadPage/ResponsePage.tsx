// ResponsePage.tsx

import React, { useContext, useState, useEffect } from "react";
import { ThemeContextData } from "../../Context/ThemeContext";
import SummerySection from "../../Components/SummerySection";
import ChatSection from "../../Components/ChatSection";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

import { UploadProviderContextData } from "../../Context/UploadProviderContext";



// import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

interface Props {
    pdfFile: File;
}
// function PdfViewer() {
//     return (
//         <Document file={pdfFile}>
//             <Page pageNumber={1} />
//         </Document>
//     );
// }

const ResponsePage: React.FC = () => {
    const { pdfFile } = useContext(UploadProviderContextData);
    const [tab, setTab] = useState<"chat" | "summary">("summary");
    const { theme } = useContext(ThemeContextData);
    // console.log(pdfFile)
    const [numPages, setNumPages] = useState(0);
    const [scale, setScale] = useState(0.8);
    const [pageWidth, setPageWidth] = useState(300);

    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth < 640) {
                setPageWidth(window.innerWidth - 30);
            } else if (window.innerWidth < 1024) {
                setPageWidth(550);
            } else {
                setPageWidth(700);
            }
        };

        updateWidth();

        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);


    return (
        <div className="min-h-full lg:h-full flex-1 overflow-auto p-3">
            <div
                className={`
                    min-h-[calc(100vh-24px)]
                    lg:h-[calc(100vh-24px)]
                    px-5
                    pt-9
                    flex-col
                    lg:flex-row
                    lg:overflow-hidden
                    w-full 
                    h-full 
                    flex 
                    justify-center

                    ${theme === "light"
                        ? "bg-[#F2E6CF] text-black border-black"
                        : "bg-[#0B0B12] text-[#F2E6CF] border-[#F1ECE2]"
                    }
                `}
            >
                {/* PDF SECTION */}
                <div className="flex flex-col

                        w-full
                        lg:w-[50%]

                        min-h-[400px]
                        max-h-[500px]

                        lg:h-full
                        lg:max-h-none

                        overflow-hidden">

                    {/* Toolbar */}
                    <div className="sticky top-0 z-10  border-b p-2 flex items-center justify-center gap-4">

                        <button
                            className="border px-3 py-1"
                            onClick={() =>
                                setScale(prev => Math.max(0.5, prev - 0.1))
                            }
                        >
                            −
                        </button>

                        <span>{Math.round(scale * 100)}%</span>

                        <button
                            className="border px-3 py-1"
                            onClick={() =>
                                setScale(prev => Math.min(3, prev + 0.1))
                            }
                        >
                            +
                        </button>

                    </div>

                    {/* PDF */}
                    <div className="flex flex-col items-center overflow-scroll p-4
                          flex-1
                            overflow-auto
                            bg-[#696969]
                            [&_.textLayer]:hidden
                            [&_.react-pdf__Page__textContent]:hidden
                            [&_.annotationLayer]:hidden
                            [&_.react-pdf__Page__annotations]:hidden
                    ">

                        <Document
                            file={pdfFile}
                            onLoadSuccess={({ numPages }) =>
                                setNumPages(numPages)
                            }
                        >
                            {Array.from(
                                new Array(numPages),
                                (_, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-center mb-5"
                                    >
                                        <Page
                                            pageNumber={index + 1}
                                            width={pageWidth}
                                            scale={scale}
                                            className="max-w-full shadow-2xl"
                                        />
                                    </div>
                                )
                            )}
                        </Document>

                    </div>
                </div>

                {/* TOGGLE BAR */}
                <div
                    className="
                        w-full
                        lg:w-10

                        h-12
                        lg:h-auto

                        flex
                        flex-row
                        lg:flex-col

                        border-y-[3px]
                        lg:border-y-0
                        lg:border-r-[3px]

                        border-black
                        bg-[#F1ECE2]

                        sticky
                        top-0
                        z-20
                        shrink-0
                    "
                >
                    <button
                        onClick={() => setTab("chat")}
                        className={`
                            flex-1
                            text-[10px]
                            font-bold
                            tracking-[3px]

                            lg:[writing-mode:vertical-rl]
                            lg:rotate-180

                            transition-all
                            duration-300
                            cursor-pointer
                            text-black

                            ${tab === "chat"
                                ? "bg-[#D9B4EB]"
                                : "bg-[#F1ECE2]"
                            }
                        `}
                    >
                        CHAT
                    </button>

                    <button
                        onClick={() => setTab("summary")}
                        className={`
                            flex-1
                            text-[10px]
                            font-bold
                            tracking-[3px]

                            lg:[writing-mode:vertical-rl]
                            lg:rotate-180

                            transition-all
                            duration-300
                            cursor-pointer
                            text-black

                            ${tab === "summary"
                                ? "bg-[#F0C84A]"
                                : "bg-[#F1ECE2]"
                            }
                        `}
                    >
                        SUMMARY
                    </button>
                </div>

                {/* RIGHT PANEL */}
                <div className="flex-1 flex flex-col min-h-0 lg:overflow-hidden">
                    {/* Top Bar */}
                    <div
                        className={`
                            h-10
                            border-b-[3px]
                            border-black
                            flex items-center
                            px-4
                            text-xs
                            uppercase
                            font-bold
                            tracking-[2px]
                            transition-all
                            duration-300
                            ease-in-out
                            text-black
                            shrink-0

                            ${tab === "chat"
                                ? "bg-[#D9B4EB]"
                                : "bg-[#F0C84A]"
                            }
                        `}
                    >
                        {tab === "chat"
                            ? "Ask The Paper"
                            : "Executive Summary"}
                    </div>

                    {/* CONTENT AREA */}
                    <div className="lg:flex-1 lg:min-h-0 lg:overflow-y-auto">
                        {tab === "summary" && <SummerySection />}
                        {tab === "chat" && <ChatSection />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsePage;