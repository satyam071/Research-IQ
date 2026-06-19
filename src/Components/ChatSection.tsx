import React, { useState } from "react";
import ChattingComponent from "./ChattingComponent";
import Button from "./Button/Button";

interface Props { }

const ChatSection: React.FC<Props> = () => {
    const [mode, setMode] = useState<
        "paper" | "explain" | "hybrid" | null
    >(null);

    return (


        <>
            {mode != null ? (
                <ChattingComponent />

            ) :
                <div className=" flex flex-col justify-evenly ">
                    <h1 className="font-archivo  text-2xl text-center mt-5">Select the Mode</h1>
                    <div className="m-1 flex justify-center items-center">
                        <button onClick={() => { setMode("paper") }} className="bg-bg-[var(--btn-bg)]
                    text-[var(--btn-text)]
                    border-[var(--btn-border)]

                    border-[3px]
                    rounded-xl
                    px-4 py-2.5

                    font-mono
                    text-sm
                    font-bold
                    tracking-[0.03em]

                    inline-flex
                    items-center
                    justify-center

                    shadow-[4px_4px_0_var(--btn-shadow)]

                    transition-all
                    duration-200

                    hover:-translate-x-[1px]
                    hover:-translate-y-[1px]
                    hover:shadow-[6px_6px_0_white]

                    active:translate-x-[2px]
                    active:translate-y-[2px]
                    active:shadow-[2px_2px_0_var(--btn-shadow)] uppercase cursor-pointer
                    m-2
                    hover:bg-[#F3AB0C]
                    hover:text-black
                    
                    ">Paper</button>
                        <button onClick={() => { setMode("explain") }} className="bg-bg-[var(--btn-bg)]
                    text-[var(--btn-text)]
                    border-[var(--btn-border)]

                    border-[3px]
                    rounded-xl
                    px-4 py-2.5

                    font-mono
                    text-sm
                    font-bold
                    tracking-[0.03em]

                    inline-flex
                    items-center
                    justify-center

                    shadow-[4px_4px_0_var(--btn-shadow)]

                    transition-all
                    duration-200

                    hover:-translate-x-[1px]
                    hover:-translate-y-[1px]
                    hover:shadow-[6px_6px_0_white]

                    active:translate-x-[2px]
                    active:translate-y-[2px]
                    active:shadow-[2px_2px_0_var(--btn-shadow)] uppercase cursor-pointer
                    m-2
                    hover:bg-[#2BB4A0]
                    hover:text-black
                    ">Explain</button>
                        <button onClick={() => { setMode("hybrid") }} className="bg-bg-[var(--btn-bg)]
                    text-[var(--btn-text)]
                    border-[var(--btn-border)]

                    border-[3px]
                    rounded-xl
                    px-4 py-2.5

                    font-mono
                    text-sm
                    font-bold
                    tracking-[0.03em]

                    inline-flex
                    items-center
                    justify-center

                    shadow-[4px_4px_0_var(--btn-shadow)]

                    transition-all
                    duration-200

                    hover:-translate-x-[1px]
                    hover:-translate-y-[1px]
                    hover:shadow-[6px_6px_0_white]

                    active:translate-x-[2px]
                    active:translate-y-[2px]
                    active:shadow-[2px_2px_0_var(--btn-shadow)] uppercase cursor-pointer
                    m-2
                    hover:bg-[#97002E]
                    hover:text-black">Hybrid</button>
                    </div>


                </div>

            }
        </>
    );
};

export default ChatSection;