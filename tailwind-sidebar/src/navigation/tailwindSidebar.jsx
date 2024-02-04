import React, {useEffect, useRef} from 'react';
import { useTailwindSidebar } from './tailwindSidebarContext';
import { IoMdClose } from "react-icons/io";


function TailwindSidebar({ children }) {
  const {isToggleButtonVisible, isSidebarVisible,toggleVisibility,isTransitioning, setIsSidebarVisible, setIsToggleButtonVisible, setIsTransitioning} = useTailwindSidebar();

  const sidebarRef = useRef(null);

  useEffect(() => {
      // Function to adjust sidebar visibility based on window width
      const checkWindowSize = () => {
        if (window.innerWidth < 1024) {
          setIsSidebarVisible(false);
          setIsToggleButtonVisible(true);
        } else {
          setIsSidebarVisible(true);
          setIsToggleButtonVisible(false); // Assuming you want the button hidden when sidebar is visible on larger screens
        }
      };
  
      // Check window size immediately on mount and add resize listener
      checkWindowSize();
      window.addEventListener('resize', checkWindowSize);
  
      // Cleanup resize listener on component unmount
      return () => {
        window.removeEventListener('resize', checkWindowSize);
      };
    }, []);
  
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
    <div className={`flex flex-col bg-white border-r min-h-screen max-h-screen transition-width duration-500 ease-in-out ${isSidebarVisible ? 'w-96' : 'w-0'} max-w-full fixed lg:relative top-0 left-0 h-full z-index-50`} ref={sidebarRef}>
      <div className={`flex justify-end border-b h-16`}>
        <button className={`mr-2`} onClick={toggleVisibility}><IoMdClose className='text-4xl'/></button>
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

export default TailwindSidebar;
