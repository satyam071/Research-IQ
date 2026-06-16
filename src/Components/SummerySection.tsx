import React, { useContext } from "react";
import ThemeContext, { ThemeContextData } from "../Context/ThemeContext";


const response = {
    "title": "Pseudo Ship-radiated Noise Generation Based on Adversarial Learning",
    "authors": [
        "Yanmiao Li",
        "Feng-Xiang Ge",
        "Yanyu Bai",
        "Mengjia Li",

    ],
    "keywords": [
        "Ship-radiated Noise",
        "Generative Adversarial Networks (GAN)",
        "Convolutional Neural Networks (CNN)"
    ],
    "objective": "To generate pseudo ship-radiated noises using adversarial learning and evaluate their quality using a 1D convolutional network for classification.",
    "section_summaries": {
        "abstract": "The paper proposes a method for generating pseudo ship-radiated noises using adversarial learning and evaluates their quality using a 1D convolutional network for classification. The proposed solution is effective in generating pseudo ship-radiated noises.",
        "introduction": "The identification and classification of ship-radiated noises are militarily important for underwater acoustics countermeasure. However, it is difficult to obtain a large amount of ship-radiated noises, making it important to generate qualified ship-radiated noises.",
        "methodology": "The proposed solution consists of a preprocessing module, a classification module, and a generation module. The preprocessing module formats the collected ship-radiated noises for the deep neural network through normalization and sliding window. The classification module uses a 1D convolutional neural network to evaluate the quality of the generated pseudo ship-radiated noises. The generation module uses a generative model and a discriminative model to generate pseudo ship-radiated noises.",
        "results": "The experimental results show that the proposed solution is effective in generating pseudo ship-radiated noises. The generated pseudo ship-radiated noises can be better identified using the 1D convolutional network for classification.",
        "conclusion": "The proposed solution is effective in generating pseudo ship-radiated noises and evaluating their quality using a 1D convolutional network for classification."
    },
    "datasets": [
        "Shipsear dataset",
        "Shipsear dataset",
        "Shipsear dataset",
        "Shipsear dataset",
        "Shipsear dataset",
        "Shipsear dataset",
        "Shipsear dataset",
        "Shipsear dataset",
        "Shipsear dataset",
        "Shipsear dataset",
        "Shipsear dataset",
        "Shipsear dataset",
        "Shipsear dataset",
        "Shipsear dataset",
    ],
    "models": [
        "Generative Adversarial Networks (GAN)",
        "Convolutional Neural Networks (CNN)"
    ],
    "metrics": [],
    "key_results": [
        "The proposed solution is effective in generating pseudo ship-radiated noises."
    ],
    "key_contributions": [
        "A method for generating pseudo ship-radiated noises using adversarial learning is proposed."
    ],
    "limitations": [],
    "future_work": []
}


interface Props {

}

const SummerySection: React.FC<Props> = (props) => {
    console.log(response.section_summaries.value)
    const { theme } = useContext(ThemeContextData)
    return (
        <div className="p-6 font-semibold lg:flex-1 lg:min-h-0 lg:overflow-y-auto font-league">
            {/* {Title} */}
            {response.title &&

                <h2 className=" tracking-[1px] text-xl mb-2 text-center">
                    {response.title}
                </h2>}
            {/* {Authors} */}
            {response.authors && <div className="text-[11px] leading-7 mb-5 flex flex-row justify-center gap-1 flex-wrap">
                {response.authors.map((authors) => (
                    <div key={authors}
                        className="px-2 border-1 border-white">
                        {authors}

                    </div>

                ))}

            </div>}

            {/*{Keywords}*/}
            {response.keywords &&
                <h2 className=" tracking-[3px] text-xs mb-5 text-center">
                    KEY FINDINGS
                </h2>}
            {response.keywords && <div className="space-y-5">

                {response.keywords.map((keywords) => (
                    <div
                        key={keywords}
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
                        {/* <span className="mr-3">
                            {String(keywords).padStart(2, "0")}.
                        </span> */}

                        {keywords}
                    </div>
                ))}
            </div>}

            {response.section_summaries &&
                <div>
                    <h2 className="font-archivo tracking-[1px] text-xl mt-10 mb-3 uppercase font-extrabold text-center">
                        Summery
                    </h2>
                    <div className=" space-y-10 text-[11px] leading-5">
                        {Object.entries(response.section_summaries).map(([key, value]) => (
                            <div key={key}>
                                <h3 className="font-bold uppercase text-center border-b-1">{key}</h3>
                                <p className="text-center tracking-normal">{value}</p>
                            </div>
                        ))}


                    </div>
                </div>
            }
            <h3 className="font-archivo tracking-[1px] text-xl mt-10 mb-3 uppercase font-extrabold text-center">Datasets</h3>
            {response.datasets &&
                <div>
                    <ul className="text-xs items-center justify-center mt-2 list-disc flex flex-row flex-wrap gap-3 ">
                        {response.datasets.map((datasets) => (
                        <li key={datasets}>{datasets}</li>
                    ))}

                    </ul>
                </div>
                
            }
        </div>
    );
};

export default SummerySection;