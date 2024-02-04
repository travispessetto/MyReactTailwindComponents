import React from "react";

function TailwindSidebarLink({href,display, padding, children, target})
{

    // so purge css can recognize values
    const paddingClasses = {
        '4': 'pl-4',
        '8': 'pl-8',
        // Add more mappings as needed
    };

    const paddingLeftClass = paddingClasses[padding] || 'pl-4';

    return(
        <a href={href} className={`flex flex-row w-full block pr-4 ${paddingLeftClass} py-4 border-b items-center`} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
            {display}
            {children}
        </a>
    )
}

export default TailwindSidebarLink;