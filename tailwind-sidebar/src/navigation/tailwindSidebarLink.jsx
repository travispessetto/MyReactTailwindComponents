import React from "react";

function TailwindSidebarLink({href,display, padding, children, target})
{
    return(
        <a href={href} className={`flex flex-row w-full block ${padding ? `pl-${padding} pr-4` : 'pr-4 pl-4'} py-4 border-b items-center`} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
            {display}
            {children}
        </a>
    )
}

export default TailwindSidebarLink;