'use client'

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addItem } from "@/state/Cart/cartSlice";
import { useCartContext } from "@/context/CartContext";

export type Product = {
    id:number, 
    name:string, 
    category:string, 
    price:string,
    discountPrice:string,
    image:string,
    isBestSeller:boolean, 
    isPack:boolean
}

export default function ProductCard({product}:{product:Product}){
    
    const dispatch = useDispatch();
    const cart = useCartContext()
    return (
        <div className="flex w-full p-1 mxx-2 px-2 relative flex-col transition gap-2 items-center mb-6">
            <div className="relative md:min-h-[220px] min-h-[180px] sm:min-h-[200px] w-full ">
                <Image 
                    src={product.image} 
                    alt='' 
                    fill 
                    className="object-cover"
                />
            </div>
            <Link 
                href={`/shop/product?slug=${product.name}`} 
                className="md:text-sm font-medium text-center text-[13px] uppercase"
            >{product.name}</Link>
            <div className="flex flex-col md:flex-roww gap-1 px-1 justify-between items-center w-full ">
                <span className="text-green-500 font-medium text-sm md:text-base">{product.discountPrice.length>0?product.discountPrice:product.price}DA 
                    <del className="md:text-sm text-gray-500 ml-1 text-[13px]">{product.discountPrice&&product.price+'DA'}</del>
                </span>
                <button 
                    onClick={()=>{
                        dispatch(addItem({
                            id:product.id,
                            image:product.image,
                            price:product.discountPrice.length ? Number(product.discountPrice) : Number(product.price),
                            quantity:1,
                            title:product.name
                        }))
                        cart?.setIsOpen(true);
                    }} 
                    className="w-full md:max-w-fitt p-[6px] sm:px-2 text-white bg-[#890404] hover:bg-red-600 transition text-sm ">Ajouter
                    <span className='hidden md:inline-block ml-1'> au panier</span>
                </button>
            </div>
        </div>
    )
}