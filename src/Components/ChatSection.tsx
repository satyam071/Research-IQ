import React from "react";

interface Props {

}

const ChatSection: React.FC<Props> = (props) => {
    return (
        <>
            <div className="p-5 space-y-6 lg:flex-1 lg:overflow-y-auto">

                <div className="w-[80%] bg-white border-[3px] border-black shadow-[5px_5px_0px_black] p-4 text-[11px] leading-6">
                    Hello! I've fully indexed "Neural Architectures
                    2024". What would you like me to clarify?
                </div>

                <div className="w-[80%] ml-auto bg-[#F0C84A] border-[3px] border-black shadow-[5px_5px_0px_black] p-4 text-[11px] leading-6">
                    Can you explain how sparse attention differs
                    from traditional self-attention?
                </div>

                <div className="w-[80%] bg-white border-[3px] border-black shadow-[5px_5px_0px_black] p-4 text-[11px] leading-6">
                    Traditional self-attention has O(n²)
                    complexity. Sparse attention reduces the
                    number of token interactions, decreasing
                    memory usage while maintaining important
                    contextual relationships.
                </div>

            </div>

            {/* Input Area */}

            <div className="h-20 border-t-[3px] border-black bg-[#F1ECE2] p-3 flex gap-2">

                <input
                    placeholder="Ask..."
                    className="
                    flex-1
                    border-[3px]
                    border-black
                    bg-white
                    outline-none
                    px-3
                    text-sm
                  "
                />

                <button
                    className="
                    w-16
                    bg-[#9B780D]
                    border-[3px]
                    border-black
                    text-white
                    text-xl
                    font-bold
                  "
                >
                    ▶
                </button>

            </div>
        </>
    );
};

export default ChatSection;