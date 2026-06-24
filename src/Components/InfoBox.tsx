import React from "react";

interface Props {
    logo?: React.ReactNode
    description: React.ReactNode
    title: React.ReactNode
    button_title: React.ReactNode
    className?: string
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    button_line_color?:React.ReactNode


}

const InfoBox: React.FC<Props> = ({ logo, description, title, button_title, button_line_color="after:bg-black",onClick, className }) => {
    return (
        <button onClick={onClick} className={`m-3 col-span-12 lg:col-span-4 group  border-4 border-black p-6 shadow-[7px_7px_0px_#000] transition-all duration-300 cursor-pointer ${className} `}>


            <h2 className=" font-mono text-lg  tracking-wide font-bold uppercase  text-center items-center">
                {title}
            </h2>


            <p className="mt-2 text-[0.8rem] leading-5 font-mono text-xs  ">
                {description}
            </p>

            <button className={`mt-3 uppercase relative font-mono text-sm font-bold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0  after:transition-all group-hover:after:w-full
            ${button_line_color}
                
                `}>
                {button_title}
            </button>

        </button>
    );
};

export default InfoBox;