import React from "react";

function TailwindSidebarLink({href,display})
{
    return(
        <a href={href} className="w-full block p-4 border-b">{display}</a>
    )
}

export default TailwindSidebarLink;