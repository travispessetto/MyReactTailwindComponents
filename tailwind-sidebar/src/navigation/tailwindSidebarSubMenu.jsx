import React, {useState} from 'react'
import { MdExpandMore, MdExpandLess } from "react-icons/md";


function TailwindSidebarSubMenu({display, children})
{
    const [isSubMenuVisible,setSubMenuIsVisible] = useState(false);
    const toggleSubMenu = () =>
    {
        setSubMenuIsVisible(!isSubMenuVisible);
    }

    const  paddedChildren = (children) => {
        return React.Children.map(children, child => 
          React.cloneElement(child, {
            padding: 8
          })
        );
    };

    return(
        <div>
            <div className='flex p-4 border-b w-full flex-row items-center'>
                <button className="flex flex-row items-center block text-left grow" onClick={toggleSubMenu}>{display}</button>
                <button className={`transition-transform duration-500 block text-center text-4xl ${isSubMenuVisible ? 'rotate-180' : 'rotate-0'}`} onClick={toggleSubMenu}><MdExpandMore /></button>
            </div>
            <div className={`overflow-hidden transition-max-height duration-700 ease-in-out ${isSubMenuVisible ? 'max-h-96' : 'max-h-0'}`}>
                {paddedChildren(children)}
            </div>
        </div>
    )
}

export default TailwindSidebarSubMenu;