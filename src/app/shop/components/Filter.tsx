'use client'

import { X } from "lucide-react"
import {  Dispatch, SetStateAction } from "react"
import Category from "./Category"
import { API_URL, STRAPI_API_TOKEN } from "../../../../utils"
import { useQuery } from "react-query"
import { useCategories } from "../../../../lib/api"
import { CategoryType } from "../../../../lib/types"



type Props = {
    filter:boolean, 
    setFilter:Dispatch<SetStateAction<boolean>>,
    updateFelteringOptions:()=>void,
    setCategories:Dispatch<SetStateAction<number[]>>
    setPriceRange:Dispatch<SetStateAction<{
        min: number;
        max?: number | undefined;
    }>>
    resetFilter:(search?:string)=>void
    categories:number[]
}
export default function Filter({categories:categoriesFilter, filter, setFilter, updateFelteringOptions, setCategories, setPriceRange, resetFilter}:Props){
    
    const {data:categories, isLoading} = useCategories(false);
    

    return (
        <>
            {filter && <div onClick={()=>setFilter(false)} className={`lg:hidden z-[8] px-4 md:px-0 bg-black fixed w-full h-[100vh] opacity-65 top-0 left-0 `} />}
            <div style={{transition:'ease 0.3s'}}
                className={`p-2 px-5 lg:px-2  fixed z-[9] top-0  lg:left-0 ${filter ? 'left-0' : '-left-[500px]'} h-[100vh] w-[340px] lg:relative bg-[#f5fafd] lg:bg-transparent`}>
                <div className="lg:hidden text-right flex justify-end">
                    <button 
                        className=" hover:opacity-80 hover:bg-gray-100 flex justify-center items-center w-10 h-10 rounded-full  font-medium "
                        onClick={()=>setFilter(false)}
                    >
                        <X size={25}/>
                    </button>
                </div>
                {/* categories */}
                <div className="my-5">
                    <div className="">
                        <h1 className="pb-3 border-b-2 border-b-[#890404d7] font-medium text-2xl text-gray-800">Category</h1>
                    </div>
                    <div className="my-4">
                        {isLoading 
                        ? 
                        [1,2,3,4].map(e=><div key={e} className="animate-pulse mb-2 rounded-lg bg-gray-300 h-[22px] w-[150px]"/>)
                        : 
                        categories?.data.map((e:CategoryType)=>{
                            return <Category categoriesFilter={categoriesFilter} key={e.id} id={e.id} name={e.attributes.name} setCategories={setCategories}/>
                        })}
                    </div>
                </div>
                {/* price */}
                <div className="my-5">
                    <div className="">
                        <h1 className="pb-3 border-b-2 border-b-[#890404d7] font-medium text-2xl text-gray-800">Prix</h1>
                    </div>
                    <div className="my-4">
                        <div className="my-2">
                            <h2 className="mb-1 ml-2">Minimum</h2>
                            <input type="number" min={0} onChange={(e)=>setPriceRange(prev=>({...prev,min:Number(e.target.value)}))} step={100} defaultValue={0} className="p-2 outline-none border border-gray-300 rounded-lg" />
                        </div>
                        <div className="my-2">
                            <h2 className="mb-1 ml-2">Maximum</h2>
                            <input type="number" min={0} onChange={(e)=>setPriceRange(prev=>({...prev,max:Number(e.target.value)}))} step={100} defaultValue={100000} className="p-2 outline-none border border-gray-300 rounded-lg" />
                        </div>
                    </div>
                </div>
                {/* buttons */}
                <div className="flex gap-2 my-4">
                    <button onClick={()=>resetFilter()} className="bg-black hover:opacity-90 text-white font-medium py-2 text-center flex-1">Réinitialiser</button>
                    <button onClick={updateFelteringOptions} className="bg-[#890404] hover:opacity-90 text-white font-medium py-2 text-center flex-1">Appliquer</button>
                </div>
                
            </div>
        </>
    )
}