import React, {useEffect, useRef} from 'react';
import { useTailwindRightSidebar } from './tailwindRightSidebarContext';
import { IoMdClose } from "react-icons/io";


function TailwindRightSidebar({ children }) {
  const {isToggleButtonVisible, isSidebarVisible,toggleVisibility,isTransitioning, setIsSidebarVisible, setIsToggleButtonVisible, setIsTransitioning} = useTailwindRightSidebar();

  const sidebarRef = useRef(null);
  
    useEffect(() => {
      if (sidebarRef.current) {
        const handleTransitionEnd = () => {
          setIsTransitioning(false);
          setIsToggleButtonVisible(!isToggleButtonVisible);
        };
  
        const currentSidebar = sidebarRef.current;
        currentSidebar.addEventListener('transitionend', handleTransitionEnd);
  
        // Cleanup event listener
        return () => {
          currentSidebar.removeEventListener('transitionend', handleTransitionEnd);
        };
      }
    }, [isSidebarVisible]);

  return (
    <div className={`flex flex-col bg-white border-l min-h-screen max-h-screen transition-width duration-500 ease-in-out ${isSidebarVisible ? 'w-96' : 'w-0'} max-w-full fixed top-0 right-0 h-full z-index-50`} ref={sidebarRef}>
      <div className={`flex justify-end border-b h-16`}>
        <button className={`mr-2 overflow-x-hidden w-96 max-w-screen`} onClick={toggleVisibility}><IoMdClose className='text-4xl'/></button>
      </div>
      <div className='flex flex-col flex-grow overflow-y-auto'>
        <div className={`${isTransitioning ? 'overflow-x-hidden' : ''} ${isSidebarVisible || isTransitioning ? '' : 'hidden'}`}>
          <div className={`${isTransitioning ? 'w-96 w-max-screen' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TailwindRightSidebar;
