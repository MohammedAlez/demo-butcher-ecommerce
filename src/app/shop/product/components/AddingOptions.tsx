'use client'

import { useDispatch } from "react-redux";
import { addItem } from "@/state/Cart/cartSlice";
import { useState } from "react";
import { ProductType } from "../../../../../lib/types";
import { useCartContext } from "@/context/CartContext";
import { Product } from "@/components/Product/ProductCard";

type Props = {
    
    product:Product
}

export function AddingOptions({product}:Props){
    const [quantity, setQuantity] = useState(1);
    const [weigth, setWeigth] = useState('')

    const dispatch = useDispatch();
    const cart = useCartContext()


    const addProduct=()=>{
        let obj:any = {
            id:product?.id!,
            price:product.discountPrice ? Number(product.discountPrice) : Number(product.price),
            quantity,
            title:product.name,
            image:product.image,
        }
        if(weigth!==''){
            obj.weigth=  weigth
        }
        dispatch(addItem(obj))
        cart?.setIsOpen(true);
    }
    return (
        <>
            {
            <>
                <div className="mt-6 flex gap-3">
                    <div className="flex gap-2 items-center">
                        <button onClick={()=>setQuantity(prev=>prev===1?prev:prev-1)} className="w-10 h-10 text-lg bg-gray-200 rounded-full flex justify-center items-center">
                            -
                        </button>
                        <span className="rounded-lg p-2 border min-w-10 block text-center">{quantity}</span>
                        <button onClick={()=>setQuantity(prev=>prev+1)} className="w-10 h-10 text-lg bg-gray-200 rounded-full flex justify-center items-center">
                            +
                        </button>
                    </div>
                    <button onClick={addProduct}
                        className="p-2 w-full bg-[#890404] text-white transition hover:opacity-85"
                    >Ajouter au panier</button>
                </div>
            </>
            }
        </>
    )
}