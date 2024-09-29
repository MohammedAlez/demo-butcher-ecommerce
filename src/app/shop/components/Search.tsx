'use client'

import { Search } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";


type Props = {
    resetFilter:(s:string)=>void
}

export default function SearchComponent({resetFilter}:Props){
    
    const [localSearch, setLocalSearch] = useState('');
    
    useEffect(()=>{
        // console.log('rerendred');
    },[])
    const makeSearch=()=>{
        resetFilter(localSearch)
    }

    return (
        <div className="flex gap-2 px-2 justify-end flex-1">
            <input value={localSearch} onChange={(e)=>setLocalSearch(e.target.value)} type="text" className="px-3 p-2 w-full md:max-w-[450px] outline-none flex-1 text-sm ms:text-base" placeholder="Rechercher des produits"/>
            <button onClick={makeSearch} disabled={localSearch.length===0} className={`rounded-md w-11 h-11 flex justify-center items-center text-white bg-gray-800  ${localSearch.length===0 ? 'opacity-65 cursor-not-allowed' : 'hover:bg-black'}`}>
                <Search size={22}/>
            </button>
        </div>
    )
}