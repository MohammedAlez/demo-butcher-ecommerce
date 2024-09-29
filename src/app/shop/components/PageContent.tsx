'use client'

import ProductCard from "@/components/Product/ProductCard"
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useProducts } from "../../../../lib/api";
import Filter from "./Filter";
import SearchComponent from "./Search";
import { ProductType } from "../../../../lib/types";
import PaginationComponent from "./Pagination";
import Image from "next/image";
import { filteringOptions } from "../types";
import { PRODUCTS_DATA } from "@/data";


export function PageContent(){

    const params = useSearchParams();
    const initialCategory:number[] = params.get('category') ? [Number(params.get('category'))] : []
    // console.log(initialCategory)
    const [filter, setFilter] = useState(false); 
    const [categories, setCategories] = useState<number[]>(initialCategory)
    const [priceRange, setPriceRange] = useState<{min:number,max?:number}>({min:0})
    const [filteringOptions, setFilteringOptions] = useState<filteringOptions>({categories,priceRange:{min:0},search:'',pageSize:12,pageNumber:1})
    const products = PRODUCTS_DATA
    
    // console.log(products);
    

    const resetFilter=(search?:string)=>{
        setFilteringOptions({
            search:search||'',
            categories:[],
            priceRange:{min:0},
            pageNumber:1,
            pageSize:12
        })
    }

    const updateFelteringOptions=()=>{
        // console.log(search);
        setFilteringOptions(prev=>({
            ...prev,
            categories,
            priceRange,
        }))
    }
    // console.log(products);
    return (
            <div className="mb-32">
                <div className="max-w-[1200px] px-8 mx-auto">
                </div>
                <div className="relative sm:h-[200px] md:h-[220px] h-[170px] w-full bg-redd-600 flex justify-center items-center mb-7">
                    <Image src={'/copy-space-raw-meat-baking-pan.jpg'} className='object-cover' alt='' fill/>
                    <div className="absolute top-0 left-0 h-full w-full bg-[#890404] opacity-65" />
                    <h1 className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl font-medium text-white">BOUTIQUE</h1>
                </div>
                <div className="lg:hidden text-left max-w-[1200px] px-8 mx-auto mb-4 flex justify-end">
                    {/* <button 
                        className="bg-black text-white font-medium px-3 p-2 "
                        onClick={()=>setFilter(true)}
                    >Filter</button> */}
                </div>
                <div className="max-w-[1200px] px-4 mx-auto flex gap-4">
                    {/* filter */}
                    {/* <Filter  /> */}
                    {/* products */}
                    <div className="w-full">
                        <div className="flex gap-2 justify-between mb-6 flex-colf sm:fflex-row">
                            <button 
                                className="lg:hidden bg-black text-white font-medium px-3 p-2 w-fit rounded-md"
                                onClick={()=>setFilter(true)}
                            >Filter</button>
                            <SearchComponent  
                                resetFilter={resetFilter}
                            />
                        </div>
                        <div className="flex gap-4">
                            <Filter 
                                filter={filter} 
                                setFilter={setFilter} 
                                setCategories={setCategories} 
                                setPriceRange={setPriceRange} 
                                updateFelteringOptions={updateFelteringOptions}
                                resetFilter={resetFilter}
                                categories={categories}
                            />
                            {
                                
                                <div className='flex-1 '>
                                    <div className=" grid grid-cols-2 sm:grid-cols-3">
                                        {products.map((product)=>{
                                            return (
                                                <ProductCard key={product.id} product={product} />
                                            )
                                        })}
                                    </div>
                                    {/* <div className="my-40 max-w-[1200px] mx-auto justify-center flex">
                                        {products?.meta && <PaginationComponent pageNumber={filteringOptions.pageNumber} itemsLength={products.meta.pagination.total as number}  setFilteringOptions={setFilteringOptions}/>}
                                    </div>  */}
                                </div> 
                            }  
                                    
                        </div>
                    </div>
                </div>
                
            </div>
    )
}





