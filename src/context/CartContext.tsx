'use client'

import { initializeCart } from "@/state/Cart/cartSlice"
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react"
import { useDispatch } from "react-redux"

type CartContextProps = {
    isOpen:boolean,
    setIsOpen:Dispatch<SetStateAction<boolean>>
}

const Cart = createContext<CartContextProps | null>(null)

export default function CartContext({children}:{children:ReactNode}){

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(initializeCart());
    },[dispatch])

    return (
        <Cart.Provider value={{isOpen, setIsOpen}}>
            {children}
        </Cart.Provider>
    )
}


export const useCartContext=()=>{
    
    return useContext(Cart);
} 