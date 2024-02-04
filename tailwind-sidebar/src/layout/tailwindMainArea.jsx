import React from 'react';

function TailwindMainArea({children})
{
    return (<div className="flex flex-col min-h-full w-full">
        {children}
    </div>);
};

export default TailwindMainArea;