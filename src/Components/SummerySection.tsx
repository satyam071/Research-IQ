import React, { useContext, useEffect, useState } from "react";
import ThemeContext, { ThemeContextData } from "../Context/ThemeContext";
import { getSummary } from "../API/GetSummary.api";
import LoadingPage from "./LoadingPage";






// const response = {
//     "title": "An Area-Efﬁcient FPGA Implementation of a Real-Time Multi-Class Classiﬁer for Binary Images",
//     "authors": [
//         "Narges Attarmoghaddam",
//         "Kin Fun Li"
//     ],
//     "keywords": [
//         "HOG",
//         "SVM",
//         "FPGA",
//         "hardware implementation",
//         "image classiﬁcation",
//         "binary image"
//     ],
//     "objective": "Developing an area-efﬁcient FPGA implementation of a real-time multi-class classiﬁer for binary images using HOG feature extractor and SVM classiﬁer",
//     "section_summaries": {
//         "abstract": "Developing image classiﬁcation modules in embedded systems is a complex task due to limited resources. A multi-class image classiﬁer using HOG feature extractor and SVM classiﬁer is proposed for binary images, improving processing speed and area efﬁciency.",
//         "introduction": "Image classiﬁcation has many applications, including self-driving vehicles and surveillance systems. However, neural network architectures have high accuracy performance but challenging issues in hardware implementation. Feature-based techniques, such as HOG, are popular but slow due to compute-intensive nature.",
//         "methodology": "The proposed system combines HOG feature extractor and SVM classiﬁer with two steps of binarization to simplify feature extraction and classiﬁcation computations, reducing hardware resource utilization.",
//         "results": "Experimental results show that the proposed system speeds up the classiﬁcation process while utilizing fewer hardware resources, with an 11.4% higher classiﬁcation accuracy using the same setting.",
//         "conclusion": "The proposed area-efﬁcient FPGA implementation of a real-time multi-class classiﬁer for binary images using HOG feature extractor and SVM classiﬁer achieves high accuracy performance and real-time processing speed, overcoming the bottlenecks in hardware implementation."
//     },
//     "datasets": [],
//     "models": [],
//     "metrics": [],
//     "key_results": [
//         "11.4% higher classiﬁcation accuracy using the same setting"
//     ],
//     "key_contributions": [
//         "Proposed two steps of binarization to simplify feature extraction and classiﬁcation computations",
//         "Combined HOG feature extractor and SVM classiﬁer for high accuracy performance and real-time processing speed"
//     ],
//     "limitations": [],
//     "future_work": []
// }



interface Props {

}

const SummerySection: React.FC<Props> = (props) => {
    const [response, setResponse] = useState({})
    const [isGettingSummery, setIsGettingSummery] = useState(false)

    useEffect(() => {
        console.log("SummarySection mounted");

        const paperId = localStorage.getItem("paper_id");

        console.log("paperId from localStorage:", paperId);

        if (!paperId) return;
        setIsGettingSummery(true)
        getSummary()
            .then((data) => {
                console.log("Summary received:", data);
                setResponse(data);
            })
            .catch((err) => {
                console.log("Summary error:", err);
            }).finally(() => {
                setIsGettingSummery(false)
            });

    }, []);
    const { theme } = useContext(ThemeContextData)

    console.log(response)
    return (
        <>
            {isGettingSummery ? (
                <LoadingPage >
                    LOADING SUMMERY

                </LoadingPage>
            ) : (
                <div className="p-6 font-semibold lg:flex-1 lg:min-h-0 lg:overflow-y-auto font-league">
                    {/* Title */}
                    {response.title && (
                        <h2 className="tracking-[1px] text-xl mb-2 text-center">
                            {response.title}
                        </h2>
                    )}

                    {/* Authors */}
                    {response.authors && (
                        <div className="text-[11px] leading-7 mb-5 flex flex-row justify-center gap-1 flex-wrap">
                            {response.authors.map((authors) => (
                                <div key={authors} className="px-2 border-1 border-white">
                                    {authors}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Keywords */}
                    {response.keywords && (
                        <h2 className="tracking-[3px] text-xs mb-5 text-center">
                            KEYWORDS
                        </h2>
                    )}
                    {response.keywords && (
                        <div className="space-y-5">
                            {response.keywords.map((keywords) => (
                                <div
                                    key={keywords}
                                    className={`border-[3px] p-4 text-[11px] ${theme === "light" ? "border-black" : "border-[#4d4d4d]"
                                        }`}
                                >
                                    {keywords}
                                </div>
                            ))}
                        </div>
                    )}

                    {response.section_summaries && (
                        <div>
                            <h2 className="font-archivo tracking-[1px] text-xl mt-10 mb-3 uppercase font-extrabold text-center">
                                Summary
                            </h2>
                            <div className="space-y-10 text-[11px] leading-5">
                                {Object.entries(response.section_summaries).map(
                                    ([key, value]) => (
                                        <div key={key}>
                                            <h3 className="font-bold uppercase text-center border-b-1">
                                                {key}
                                            </h3>
                                            <p className="text-center tracking-normal">{value}</p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )}

                    {response.datasets && response.datasets.length > 0 && (
                        <>
                            <h3 className="font-archivo tracking-[1px] text-xl mt-10 mb-3 uppercase font-extrabold text-center">
                                Datasets
                            </h3>
                            <div>
                                <ul className="text-xs items-center justify-center mt-2 list-disc flex flex-row flex-wrap gap-3">
                                    {response.datasets.map((datasets) => (
                                        <li className="ml-2" key={datasets}>
                                            {datasets}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}

                    {response.models && response.models.length > 0 && (
                        <>
                            <h2 className="tracking-[1px] text-xl mt-5 mb-3 text-center">
                                MODELS
                            </h2>
                            <div className="text-[11px] leading-7 mb-5 flex flex-row justify-center gap-1 flex-wrap">
                                {response.models.map((models) => (
                                    <div key={models} className="px-2 border-1 border-white">
                                        {models}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default SummerySection;




