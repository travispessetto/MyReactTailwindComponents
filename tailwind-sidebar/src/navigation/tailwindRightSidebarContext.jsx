import React, {useState, createContext, useContext,useEffect, useRef } from 'react';

const TailwindRightSidebarContext = createContext();

export const TailwindRightSidebarProvider = ({ children }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const toggleVisibility = () => {
        setIsTransitioning(true);
        setIsSidebarVisible(!isSidebarVisible)
    };
    const [isToggleButtonVisible, setIsToggleButtonVisible] = useState(false);
    

    return(
        <TailwindRightSidebarContext.Provider value={{ isSidebarVisible, toggleVisibility, isTransitioning, setIsTransitioning, isToggleButtonVisible, setIsToggleButtonVisible, setIsSidebarVisible }}>
            {children}
        </TailwindRightSidebarContext.Provider>
    );
};

export const useTailwindRightSidebar = () => useContext(TailwindRightSidebarContext);