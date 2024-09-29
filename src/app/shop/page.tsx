'use client'


import { SpinnerCircular } from "spinners-react";
import { PageContent } from "./components/PageContent";
import { Suspense } from "react";



export default function Page(){

    
    return (
        <Suspense fallback={<LoadingComponent />}>
            <PageContent />
        </Suspense>
    )
}

const LoadingComponent=()=>{
    return (
        <div className="h-[70vh] w-full flex items-center justify-center mb-36">
            <SpinnerCircular size={40} thickness={170} speed={100} color="#890404" secondaryColor="gray" />
        </div>
    )
}


