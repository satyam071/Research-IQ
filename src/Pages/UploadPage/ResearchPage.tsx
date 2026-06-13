import React, { useState } from "react";
import { UploadCloud, FileText, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const ResearchPage = () => {
    const [dragging, setDragging] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [isUploaded, setIsUploaded] = useState(false)

    const handleFiles = (incomingFiles: FileList | null) => {
        if (!incomingFiles) return;

        const selectedFile = incomingFiles[0];

        if (selectedFile.type !== "application/pdf") {
            alert("Please upload a PDF file.");
            return;
        }

        setFile(selectedFile);
    };

    const removeFile = () => {
        setFile(null);
    };
    const Uploaded =(elem)=>{
        setIsUploaded(true)
        console.log(elem)
    }




    return (
        <section className="bg-black min-h-screen flex items-center justify-center px-5 py-16 text-[#F2E6CF]">

            <div className="max-w-5xl w-full">

                {/* Heading */}
                <div className="mb-8">
                    <h1 className="font-archivo text-3xl md:text-4xl uppercase tracking-[3px] mb-3">
                        INGEST RESEARCH
                    </h1>

                    <p className="text-sm text-gray-400 leading-6 max-w-xl">
                        Upload your PDF manuscripts for deep neural processing and
                        semantic analysis. Our AI extracts core insights and citations
                        instantly.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">

                    {/* Upload Area */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.25 }}
                        onDragOver={(e) => {
                            e.preventDefault();
                            setDragging(true);
                        }}
                        onDragLeave={() => setDragging(false)}
                        onDrop={(e) => {
                            e.preventDefault();
                            setDragging(false);
                            handleFiles(e.dataTransfer.files);
                        }}
                        className={`
              flex-1 min-h-[280px]
              border-2 border-dashed
              relative overflow-hidden
              flex flex-col items-center justify-center
              p-5 transition-all duration-300
              ${dragging
                                ? "border-[#2BB4A0] shadow-[0_0_35px_rgba(43,180,160,.35)]"
                                : "border-[#666]"
                            }
            `}
                    >
                        {/* Animated Glow */}
                        <motion.div
                            animate={{ opacity: [0.1, 0.25, 0.1] }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                            }}
                            className="absolute inset-0 bg-[#2BB4A0]/10"
                        />

                        <div className="relative text-center">

                            <motion.div
                                whileHover={{
                                    rotate: [-8, 8, -8],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1,
                                }}
                                className="
                  w-12 h-12
                  mx-auto mb-5
                  bg-[#F3AB0C]
                  border-[3px]
                  border-black
                  shadow-[5px_5px_0px_black]
                  flex items-center justify-center
                "
                            >
                                <UploadCloud size={24} className="text-black" />
                            </motion.div>

                            <h3 className="font-archivo uppercase text-lg tracking-[2px] mb-3">
                                Drop Research Paper Here
                            </h3>

                            <p className="text-xs text-gray-400 mb-6">
                                Drag & Drop PDF up to 50MB
                            </p>

                            <label
                                className="
                cursor-pointer
                bg-[#CFA7E8]
                text-black
                text-sm
                px-5 py-2
                uppercase
                font-bold
                border-[3px]
                border-black
                shadow-[5px_5px_0px_black]
                hover:translate-x-[3px]
                hover:translate-y-[3px]
                hover:shadow-none
                duration-200
              "
                            >
                                Browse File

                                <input
                                    type="file"
                                    accept=".pdf"
                                    hidden
                                    onChange={(e) => handleFiles(e.target.files)}
                                />
                            </label>

                            {/* Uploaded File */}
                            {file && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="
                    mt-8
                    flex items-center justify-between
                    bg-[#111]
                    border-2 border-[#2BB4A0]
                    p-2
                  "
                                >
                                    <div className="flex items-center gap-2">

                                        <FileText
                                            size={18}
                                            className="text-[#F3AB0C]"
                                        />

                                        <div>
                                            <p className="text-xs text-[#F2E6CF] max-w-[150px] truncate">
                                                {file.name}
                                            </p>

                                            <p className="text-[10px] text-gray-500">
                                                {(file.size / 1024 / 1024).toFixed(2)} MB
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={removeFile}
                                        className="text-red-500 hover:text-red-400"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                    <label
                                        className="
                                                        cursor-pointer
                                                        bg-[#F3AB0C]
                                                        text-[black]
                                                        text-sm
                                                        px-5 py-2
                                                        uppercase
                                                        font-bold
                                                        border-[3px]
                                                        border-black
                                                        shadow-[5px_5px_0px_black]
                                                        hover:border-[#F2E6CF]
                                                        transition-all
                                                        ease-in-out
                                                        hover:shadow-none
                                                        duration-200
              "
                                    >
                                        Upload

                                        <input
                                            // type="file"
                                            // accept=".pdf"
                                            hidden
                                            onClick={()=>Uploaded(file)}
                                        />
                                    </label>
                                </motion.div>

                            )}

                        </div>
                    </motion.div>

                    {/* Right Cards */}
                    <div className="w-full lg:w-[220px] flex flex-col gap-4">

                        {/* Guide Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="
                bg-[#9FD3F8]
                text-black
                p-4
                border-[4px]
                border-black
                shadow-[7px_7px_0px_#444]
              "
                        >
                            <h2 className="font-archivo uppercase text-base mb-4">
                                Ingestion Guide
                            </h2>

                            <div className="space-y-3 text-xs leading-5">
                                <p>
                                    <span className="font-bold">01.</span> Ensure PDFs contain selectable text.
                                </p>

                                <p>
                                    <span className="font-bold">02.</span> Multi-column layouts supported.
                                </p>

                                <p>
                                    <span className="font-bold">03.</span> Files are encrypted and removed.
                                </p>
                            </div>
                        </motion.div>

                        {/* Model Card */}
                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            className="
                bg-[#D3A7E9]
                text-black
                p-4
                border-[4px]
                border-black
                shadow-[7px_7px_0px_#444]
              "
                        >
                            <div className="flex items-center gap-3">

                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 10,
                                        ease: "linear",
                                    }}
                                >
                                    ✦
                                </motion.div>

                                <div>
                                    <p className="text-[10px] uppercase tracking-[2px]">
                                        Active Model
                                    </p>

                                    <h3 className="font-archivo text-lg">
                                        MODEL V4.2
                                    </h3>
                                </div>
                            </div>
                        </motion.div>

                        {/* PDF Support Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="
                bg-[#9DD1AF]
                text-black
                p-4
                border-[4px]
                border-black
                shadow-[7px_7px_0px_#444]
              "
                        >
                            <div className="flex items-center gap-3">

                                <FileText size={20} />

                                <div>
                                    <h3 className="font-archivo text-base">
                                        PDF Support
                                    </h3>

                                    <p className="text-xs mt-1">
                                        Single PDF upload enabled.
                                    </p>
                                </div>

                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ResearchPage;