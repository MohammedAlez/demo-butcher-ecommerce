'use client'

import { useEffect } from "react";
import { useProduct } from "../../../../../lib/api";
import { ProductType } from "../../../../../lib/types";
import { AddingOptions } from "./AddingOptions";
import { Images } from "./Images";
import LoadingFallBack from "./LoadingFallBack";
import ProductTabs from "./ProductTabs";
import { useSearchParams } from "next/navigation";
import { PRODUCTS_DATA } from "@/data";



export default function PageContent(){

    const searchParams = useSearchParams();
    const slug = searchParams.get('slug')
    const product = PRODUCTS_DATA.find(e=>e.name===slug)
    

    return (
        <div className="max-w-[1200px] mx-auto px-4 my-28">
            {/* product details */}
            {
            (product && 
                <div className="flex flex-col gap-5 md:flex-row">
                    {/* images */}
                    <Images product={product}/>
                    {/* details */}
                    <div className="flex-1">
                        <h1 className="text-xl md:text-2xl font-medium">{product.name}</h1>
                        <div className="flex gap-1 mt-2 items-end">
                            <span className="text-green-600 text-xl ">DA{product.discountPrice.length>0 ? product.discountPrice : product.price}</span>
                            <del className="md:text-sm text-gray-500">{product.discountPrice.length>0 ? product.price+'DA' : ''}</del>
                        </div>
                        <p className="my-9 text-gray-700">
                            {product.description}
                        </p>
                        <div className="">
                            <div className="flex ">
                                <span className="font-bold block min-w-[120px] ">Category</span>
                                <span className="text-gray-600">{product.category}</span>
                            </div>
                        </div>
                        {/* buttons */}
                        <AddingOptions  product={product}/>
                    </div>
                </div>
            )
            }

            {/* Tabs */}
            {/* <ProductTabs detailed_description={product?.attributes.detailed_description || null}/> */}
            {/* Tabs */}


            {/* related products */}
            {/* {product?.id && <RelatedProducts id={product?.id}/>} */}
        </div>
    )
}