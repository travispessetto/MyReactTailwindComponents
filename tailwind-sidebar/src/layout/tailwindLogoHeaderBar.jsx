import React from 'react';

function TailwindLogoHeaderBar({ left, right, logoUrl, children }) {
    return (
        <div className="border-b text-3xl p-1 flex flex-row justify-between h-16 items-center">
            <div className="w-1/3">{left}</div>
            <div className="h-full max-h-full flex items-center w-1/3 justify-center"> {/* Ensure div constrains height */}
                {children}
                {logoUrl && <img src={logoUrl} className="max-h-full max-w-full" alt="Logo"></img>}
            </div>
            <div className="flex w-1/3 justify-end">{right}</div>
        </div>
    );
}

export default TailwindLogoHeaderBar;