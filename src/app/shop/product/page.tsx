'use client'

import ProductTabs from "./components/ProductTabs";

import { AddingOptions } from "./components/AddingOptions";
import { useProduct } from "../../../../lib/api";
import { ProductType } from "../../../../lib/types";
import { Images } from "./components/Images";
import PageContent from "./components/PageContent";
import { Suspense } from "react";
import LoadingFallBack from "./components/LoadingFallBack";


export default function Page(){

    
    

    // return (
    //     <div className="max-w-[1200px] mx-auto px-4 my-28">
    //         {/* product details */}
    //         {
    //         isFetching 
    //         ?
    //         // loading skelton
    //         <div />
    //         :
    //         (product && 
    //             <div className="flex flex-col gap-5 md:flex-row">
    //                 {/* images */}
    //                 <Images product={product}/>
    //                 {/* details */}
    //                 <div className="flex-1">
    //                     <h1 className="text-xl md:text-2xl font-medium">{product?.attributes.title}</h1>
    //                     <div className="flex gap-1 mt-2 items-end">
    //                         <span className="text-green-600 text-xl ">DA{product?.attributes.discount_price || product?.attributes.price}</span>
    //                         <del className="md:text-sm text-gray-500">{product?.attributes.discount_price ?product?.attributes.discount_price+'DA' : ''}</del>
    //                     </div>
    //                     <p className="my-9 text-gray-700">
    //                         {product?.attributes.description}
    //                     </p>
    //                     <div className="">
    //                         <div className="flex ">
    //                             <span className="font-bold block min-w-[120px] ">Category</span>
    //                             <span className="text-gray-600">{product?.attributes?.category?.data?.attributes?.name}</span>
    //                         </div>
    //                     </div>
    //                     {/* buttons */}
    //                     <AddingOptions isFetching={isFetching} product={product}/>
    //                 </div>
    //             </div>
    //         )
    //         }

    //         {/* Tabs */}
    //         <ProductTabs detailed_description={product?.attributes.detailed_description || null}/>
    //         {/* Tabs */}


    //         {/* related products */}
    //         {product?.id && <RelatedProducts id={product?.id}/>}
    //     </div>
    // )
    return (
        <Suspense fallback={<LoadingFallBack />}>
            <PageContent />
        </Suspense>
    )
}