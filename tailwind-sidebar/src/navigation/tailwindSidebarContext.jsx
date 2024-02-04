import React, {useState, createContext, useContext,useEffect, useRef } from 'react';

const TailwindSidebarContext = createContext();

export const TailwindSidebarProvider = ({ children }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const toggleVisibility = () => {
        setIsTransitioning(true);
        setIsSidebarVisible(!isSidebarVisible)
    };
    const [isToggleButtonVisible, setIsToggleButtonVisible] = useState(false);
    

    return(
        <TailwindSidebarContext.Provider value={{ isSidebarVisible, toggleVisibility, isTransitioning, setIsTransitioning, isToggleButtonVisible, setIsToggleButtonVisible, setIsSidebarVisible }}>
            {children}
        </TailwindSidebarContext.Provider>
    );
};

export const useTailwindSidebar = () => useContext(TailwindSidebarContext);