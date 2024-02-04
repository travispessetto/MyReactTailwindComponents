import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";


import { useTailwindSidebar } from "./tailwindSidebarContext";

const TailwindSidebarToggleButton = () => {
    const {toggleVisibility, isSidebarVisible} = useTailwindSidebar();

    return(
        <button onClick={toggleVisibility} className={isSidebarVisible ? 'hidden' : ''}>
            <HiMenuAlt1 className="text-4xl" />
        </button>
    );
};

export default TailwindSidebarToggleButton;