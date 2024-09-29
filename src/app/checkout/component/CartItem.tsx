'use client'

import { CartItemState, addItem, removeItem } from "@/state/Cart/cartSlice"
import { ChevronDown, ChevronUp, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"



export default function CartItem({item}:{item:CartItemState}){

    const [quantity, setQuantity] = useState(item.quantity)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(addItem({...item,quantity}))
    },[dispatch, item, quantity])
    return (
        <tr  className="">
            <td className="p-1 py-[10px]">
                <Image width={40} height={40} className='bg-red-100 rounded-full ' src='' alt=''/>
            </td>
            <td className="p-1 py-[10px] text-gray-600">{item.title}</td>
            <td className="p-1 py-[10px] text-gray-600">
                <div className="flex gap-1 items-center">
                    <button onClick={()=>setQuantity(prev=>prev==1?1:prev-1)} className="rounded-full bg-slate-200 min-w-5 h-5 flex justify-center items-center">
                        <ChevronDown size={14}/>
                    </button>
                    <span className="block mx-1 font-bold text-sm">{quantity}</span>
                    <button onClick={()=>setQuantity(prev=>prev+1)} className=" rounded-full bg-slate-200 min-w-5 h-5 flex justify-center items-center">
                        <ChevronUp size={14}/>
                        
                    </button>
                </div>
            </td>
            <td className="p-1 py-[10px] text-gray-600">{item.price*item.quantity}DA</td>
            <td >
                <button onClick={()=>dispatch(removeItem(item.id))} className="p-1 py-[10px] text-red-600 w-7 h-7 rounded-full hover:bg-red-100 flex justify-center items-center">
                    <X size={16}/>
                </button>
            </td>
        </tr>
    )
}
