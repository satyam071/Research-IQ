// ResponsePage.tsx

import React, { useContext, useState } from "react";
import { ThemeContextData } from "../../Context/ThemeContext";
import SummerySection from "../../Components/SummerySection";
import ChatSection from "../../Components/ChatSection";

const ResponsePage: React.FC = () => {
    const [tab, setTab] = useState<"chat" | "summary">("summary");
    const { theme } = useContext(ThemeContextData);

    return (
        <div className="min-h-screen p-3">
            <div
                className={`
                    min-h-[calc(100vh-24px)]
                    border-[3px]
                    flex
                    flex-col
                    lg:flex-row

                    lg:h-full
                    lg:overflow-hidden

                    ${theme === "light"
                        ? "bg-[#F2E6CF] text-black border-black"
                        : "bg-[#0B0B12] text-[#F2E6CF] border-[#F1ECE2]"
                    }
                `}
            >
                {/* PDF SECTION */}
                <div
                    className="
                        w-full
                        lg:w-[52%]

                        flex
                        flex-col
                        min-h-0

                        border-b-[3px]
                        lg:border-b-0
                        lg:border-r-[3px]

                        border-black
                    "
                >
                    {/* Header */}
                    <div className="h-10 border-b-[3px] border-black px-3 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-[#C79A1B] border-2 flex items-center justify-center text-[9px] font-bold">
                                AI
                            </div>

                            <h1 className="text-xs font-bold tracking-wide uppercase">
                                Paper Analysis: Neural Architectures 2024
                            </h1>
                        </div>

                        <div className="flex gap-3 text-xs">
                            ○ ○ ■
                        </div>
                    </div>

                    {/* File Bar */}
                    <div className="h-8 border-b-[3px] border-black flex items-center justify-between px-2 text-[10px] font-semibold shrink-0">
                        PAPER_DRAFT_V2.PDF

                        <div className="flex gap-1">
                            <button className="w-4 h-4 border border-black text-[8px]">
                                -
                            </button>

                            <button className="w-4 h-4 border border-black text-[8px]">
                                +
                            </button>
                        </div>
                    </div>

                    {/* PDF Area */}
                    <div className="p-6 lg:flex-1 lg:min-h-0 lg:overflow-y-auto">
                        <div className="border-[3px] min-h-[850px] max-w-[650px] mx-auto p-8">
                            <div className="space-y-3">
                                <div className="h-2 bg-gray-200 w-48"></div>
                                <div className="h-2 bg-gray-200 w-72"></div>

                                <div className="h-56 border border-dashed border-gray-400 mt-10 flex justify-center items-center text-gray-400">
                                    IMAGE
                                </div>

                                <div className="space-y-3 mt-10">
                                    <div className="h-2 bg-gray-200"></div>
                                    <div className="h-2 bg-gray-200"></div>
                                    <div className="h-2 bg-gray-200"></div>
                                    <div className="h-2 bg-gray-200"></div>
                                    <div className="h-2 bg-gray-200"></div>
                                </div>
                            </div>
                        </div>
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
                <div className="flex-1 flex flex-col lg:min-h-0 lg:overflow-hidden">
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

                    {/* SUMMARY */}
                    {tab === "summary" && <SummerySection />}

                    {/* CHAT */}
                    {tab === "chat" && <ChatSection />}
                </div>
            </div>
        </div>
    );
};

export default ResponsePage;