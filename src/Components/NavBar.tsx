import React, { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import dark_logo from "../Images/Dark-Theme-logo.png";
import light_logo from "../Images/Light-Theme-logo.png";
import ThemeButton from "./Theme-Button/ThemeButton";
import { ThemeContextData } from "../Context/ThemeContext";

type Theme = "light" | "dark";

interface Props {
    mode?: Theme;
}

const NavBar: React.FC<Props> = () => {
    const { theme, setTheme } = useContext(ThemeContextData);


    const [open, setOpen] = useState(false);

    return (
        <nav className={`relative mx-2 md:mx-4 h-[80px] md:h-[105px] rounded-[20px] md:rounded-[25px] border-2   px-4 md:px-8 flex items-center justify-between  transition-all duration-300
            ${theme === "light"
                ? "bg-[#faecd3] border-[#111827] shadow-[0_0_20px_rgba(0,0,0,0.15) "
                : "bg-black border-[#1f1f1f] shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            }`}>

            {/* Logo */}
            <div
                className={`h-auto transition-all duration-500 ease-in-out
                ${open
                        ? "w-[10rem] sm:w-[13rem]"
                        : "w-[12rem] sm:w-[15rem] md:w-[18rem]"
                    }`}
            >
                <img
                    src={theme === "light" ? light_logo : dark_logo}


                    alt="Logo"
                    className="w-full object-contain transition-all duration-1000"
                />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
                <p className={`font-montserrat font-[600] tracking-[1px] uppercase text-sm border-r border-[#C89A3C] px-6  cursor-pointer transition-all duration-300
                    ${theme === "light"
                        ? "text-black hover:text-[#707070] "
                        : "text-white hover:text-[#F2E6CF]"
                    }`
                }>
                    Dashboard
                </p>

                <p className={`font-montserrat font-[600] tracking-[1px] uppercase text-sm border-r border-[#C89A3C] px-6  cursor-pointer transition-all duration-300
                ${theme === "light"
                        ? "text-black hover:text-[#707070] "
                        : "text-white hover:text-[#F2E6CF]"
                    }
                `}>
                    Watch Demo
                </p>

                <p className={`font-montserrat font-[600] tracking-[1px] uppercase text-sm border-r border-[#C89A3C] px-6  cursor-pointer  transition-all duration-300
                ${theme === "light"
                        ? "text-black hover:text-[#707070] "
                        : "text-white hover:text-[#F2E6CF]"
                    }
                `}>
                    View Testimonials
                </p>

                <p className={`font-montserrat font-[600] tracking-[1px] uppercase text-sm px-6  cursor-pointer transition-all duration-300
                ${theme === "light"
                        ? "text-black hover:text-[#707070] "
                        : "text-white hover:text-[#F2E6CF]"
                    }
                `}>
                    Features
                </p>

                <ThemeButton />
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center justify-center gap-4 lg:hidden h-full">
                <ThemeButton />

                <button
                    onClick={() => setOpen(!open)}
                    className="relative w-7 h-7 flex items-center justify-center"
                >
                    <Menu
                        size={28}
                        className={`absolute text-white transition-all duration-300
                        ${open
                                ? "rotate-90 opacity-0"
                                : "rotate-0 opacity-100"
                            }`}
                    />

                    <X
                        size={28}
                        className={`absolute text-white transition-all duration-300
                        ${open
                                ? "rotate-0 opacity-100"
                                : "-rotate-90 opacity-0"
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`absolute top-[100%] left-0 w-full mt-3 rounded-[20px]
                bg-black border border-[#1f1f1f]
                overflow-hidden
                transition-all duration-500 ease-in-out
                lg:hidden z-50
                ${open
                        ? "max-h-[320px] opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col py-3">

                    <p className={`px-6 py-4 text-white uppercase font-montserrat font-semibold tracking-[1px]
                    hover:bg-[#111]
                    transition-all duration-500 delay-75
                    ${open
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-10 opacity-0"
                        }`}>
                        Dashboard
                    </p>

                    <p className={`px-6 py-4 text-white uppercase font-montserrat font-semibold tracking-[1px]
                    hover:bg-[#111]
                    transition-all duration-500 delay-150
                    ${open
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-10 opacity-0"
                        }`}>
                        Watch Demo
                    </p>

                    <p className={`px-6 py-4 text-white uppercase font-montserrat font-semibold tracking-[1px]
                    hover:bg-[#111]
                    transition-all duration-500 delay-300
                    ${open
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-10 opacity-0"
                        }`}>
                        View Testimonials
                    </p>

                    <p className={`px-6 py-4 text-white uppercase font-montserrat font-semibold tracking-[1px]
                    hover:bg-[#111]
                    transition-all duration-500 delay-500
                    ${open
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-10 opacity-0"
                        }`}>
                        Features
                    </p>
                </div>
            </div>
        </nav >
    );
};

export default NavBar;