'use client'

import { BlurImage } from "@/components/image/BlurImage"
import { useState } from "react";
import { Product } from "@/components/Product/ProductCard";
import Image from "next/image";



export function Images({product}:{product:Product}){

    const [image, setImage] = useState({src:'',blurhash:''})


    return (
        <div className="flex-1 ">
            <div className=" min-h-[300px] lg:min-h-[450px] w-full relative" >
                {/* <Image src={image.src} alt='' fill /> */}
                <Image
                    src={product.image}
                    alt=''
                    className='object-cover w-full h-full'
                    fill
                />
            </div>
        </div>
    )
}


