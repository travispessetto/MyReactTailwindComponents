import React, { useState, useEffect, useRef } from 'react';

function TailwindSidebar({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isCloseButtonVisible, setIsCloseButtonVisible] = useState(true);
  const sidebarRef = useRef(null);

  const toggleVisibility = () => {
    setIsTransitioning(true); // Start transition
    setIsSidebarVisible(!isSidebarVisible);
    // Only make the close button visible if opening the sidebar
    setIsCloseButtonVisible(!isSidebarVisible);
  };

  useEffect(() => {
    // Function to adjust sidebar visibility based on window width
    const checkWindowSize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarVisible(false);
        setIsCloseButtonVisible(false);
      } else {
        setIsSidebarVisible(true);
        setIsCloseButtonVisible(true); // Assuming you want the button hidden when sidebar is visible on larger screens
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
        if (!isSidebarVisible) {
          setIsCloseButtonVisible(false);
        }
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
    <div className={`sidebar border-r min-h-screen transition-width duration-500 ease-in-out ${isSidebarVisible ? 'w-96' : 'w-12'} max-w-full`} ref={sidebarRef}>
      <div className={`flex justify-end border-b`}>
        <button className={`mr-2 text-4xl ${isCloseButtonVisible ? '' : 'hidden'}`} onClick={toggleVisibility}>&times;</button>
      </div>
      <div className={`flex ${!isCloseButtonVisible ? '' : 'hidden'} justify-center min-h-screen`}>
        <button className={`text-4xl min-h-screen`} onClick={toggleVisibility}>&#x2AA2;</button>
      </div>
      <div className={`${!isTransitioning ? '' : 'overflow-x-hidden'} ${isSidebarVisible || !isCloseButtonVisible ? '' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
}

export default TailwindSidebar;
