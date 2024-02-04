import React, {useState} from 'react'
import { MdExpandMore, MdExpandLess } from "react-icons/md";


function TailwindSidebarSubMenu({display, children})
{
    const [isSubMenuVisible,setSubMenuIsVisible] = useState(false);
    const toggleSubMenu = () =>
    {
        setSubMenuIsVisible(!isSubMenuVisible);
    }
    return(
        <div>
            <div className='flex p-4 border-b w-full'>
                <button className="block text-left grow" onClick={toggleSubMenu}>{display}</button>
                {!isSubMenuVisible && <button className='block text-center text-4xl' onClick={toggleSubMenu}><MdExpandMore /></button>}
                {isSubMenuVisible && <button className='block text-center text-4xl' onClick={toggleSubMenu}><MdExpandLess /></button>}
            </div>
            <div className={`overflow-hidden transition-max-height duration-700 ease-in-out ${isSubMenuVisible ? 'max-h-96' : 'max-h-0'}`}>
                {children}
            </div>
        </div>
    )
}

export default TailwindSidebarSubMenu;