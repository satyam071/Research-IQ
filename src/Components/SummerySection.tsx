import React, { useContext } from "react";
import ThemeContext, { ThemeContextData } from "../Context/ThemeContext";

interface Props {

}

const SummerySection: React.FC<Props> = (props) => {
    const {theme} = useContext(ThemeContextData)
    return (
        <div className="p-6 font-semibold lg:flex-1 lg:min-h-0 lg:overflow-y-auto font-league">

            <h2 className=" tracking-[3px] text-xs mb-2">
                THESIS CORE
            </h2>

            <p className="text-[11px] leading-7 mb-5">
                The paper proposes a novel transformer-based
                architecture utilizing sparse attention
                mechanisms to reduce computational overhead by
                40% while maintaining high accuracy.
            </p>

            <h2 className=" tracking-[3px] text-xs mb-5">
                KEY FINDINGS
            </h2>

            <div className="space-y-5">

                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                        key={i}
                        className={`
                    
                                                    border-[3px]
                                                    
                                                    
                                                    p-4
                                                    text-[11px]

                                                    ${theme === "light" ?
                                "border-black" :
                                "border-[#4d4d4d]"



                            }
                                                    `}

                    >
                        <span className="mr-3">
                            {String(i).padStart(2, "0")}.
                        </span>

                        Attention sparsity improves zero-shot
                        performance and lowers memory consumption.
                    </div>
                ))}
            </div>

            <div className="mt-10 space-y-5 text-[11px] leading-7">

                <p>
                    Extensive benchmark evaluations reveal
                    superior scaling characteristics for long
                    sequence processing.
                </p>

                <p>
                    Sparse connectivity enables substantial memory
                    savings without sacrificing global context.
                </p>

                <p>
                    Results indicate strong applicability to
                    large-scale language models and efficient
                    inference systems.
                </p>

            </div>
        </div>
    );
};

export default SummerySection;