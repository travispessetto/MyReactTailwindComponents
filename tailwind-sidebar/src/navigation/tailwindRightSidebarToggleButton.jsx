import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";


import { useTailwindRightSidebar } from "./tailwindRightSidebarContext";

const TailwindRightSidebarToggleButton = ({icon}) => {
    const {toggleVisibility, isSidebarVisible} = useTailwindRightSidebar();

    const  setTextSize = (icon) => {
          return React.cloneElement(icon, {
            className: 'text-4xl'
          });
    };

    return(
        <button onClick={toggleVisibility} className={`${isSidebarVisible ? 'hidden' : ''} pr-2`}>
            {!icon && <HiMenuAlt1 className="text-4xl" />}
            {icon && setTextSize(icon) }
        </button>
    );
};

export default TailwindRightSidebarToggleButton;