'use client'

import { useCartContext } from "@/context/CartContext";
import { removeItem } from "@/state/Cart/cartSlice";
import { RootState } from "@/state/store";
import { X, Trash2 } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { SERVER_URL } from "../../../utils";



export default function SideCart(){

    const cart = useCartContext();
    const router = useRouter()
    const cartItems = useSelector((cart:RootState)=>cart.cart)
    const dispatch = useDispatch();

    const total = cartItems.reduce((prev,current)=>{
        return prev + current.quantity*current.price
    },0)

    return <div className="">
        {/* overlayout */}
        {cart?.isOpen && <div onClick={()=>cart?.setIsOpen(false)} className="w-full h-[150vh] fixed opacity-65 bg-black top-0 left-0 z-[99999] " />}
        <div 
            style={{right:cart?.isOpen ? '0px' : '-500px', transition:'all 0.5s ease 0s'}} 
            className={`h-[150vh] w-[330px] bg-white sm:w-[400px] top-0  fixed z-[99999] p-4 pb-40`}
        >
            <div className="my-4 mt-2 text-right">
                <button onClick={()=>cart?.setIsOpen(false)} className="hover:opacity-50">
                    <X size='25'/>
                </button>
            </div>
            {cartItems.length ?
            <>
                <div className={`${cartItems.length>3 && 'overflow-y-scroll'} h-[60vh] sidecart pr-2`}>
                    {cartItems.map((e,i,arr)=>{
                        // console.log(e.image)
                        return <div key={e.id} className={`${arr.length-1!==i && 'border-b'} flex gap-2 py-4 pr-2`}>
                            <Image width={60} height={60} src={e.image} alt="" className="rounded-md"/>
                            <div className="flex flex-col justify-between flex-1">
                                {/* <span >{e.title}</span> */}
                                <Link 
                                    className="font-medium "
                                    href={`/shop/product?slug=${e.title}`}
                                >{e.title}</Link>
                                <div className="flex justify-between ">
                                    <div className="">
                                        <span className="text-sm font-medium">{e.quantity} X </span>
                                        <span className="text-green-600 font-medium">DA{e.price}.00</span>
                                    </div>
                                    <button onClick={()=>dispatch(removeItem(e.id))} className=" text-red-600 hover:text-red-400 ">
                                        <Trash2 size='20' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="absolutte md:bottom-6  right-2 w-[95%]">
                    <div className="flex justify-between p-2 border-b my-5">
                        <span className="font-bold text-lg">Total</span>
                        <span className="text-green-600 text-lg font-medium">DA{total}.00</span>
                    </div>
                    <div className="flex gap-2">
                        <Link onClick={()=>{
                            cart?.setIsOpen(false)
                            router.push('/cart')
                        }} href='/cart' className="text-center p-3 px-2 flex-1 bg-[#890404] hover:bg-[#890404c9] transition text-white font-medium">Voir le panier</Link>
                        <Link  onClick={()=>{
                            cart?.setIsOpen(false)
                            router.push('/checkout')
                        }} href='/checkout' className="text-center p-3 px-2 flex-1 bg-[#890404] hover:bg-[#890404c9] transition text-white font-medium">Commandez</Link>
                    </div>
                </div>
            </>
            :
            <div className="my-10 flex flex-col gap-4 items-center ">
                <div className='relative w-[150px] h-[150px] '>
                    <Image src='/photos/shopping.png' alt='' fill/>
                </div>
                <h1 className="text-lg font-bold">Votre Panier est Vide</h1>
                <p className="text-gray-700 text-center mb-3 font-medium">
                    Ajoutez des produits pour commencer votre shopping. Bon shopping !
                </p>
                <button onClick={()=>{
                    cart?.setIsOpen(false)
                    router.push('/shop')
                }} className="p-2 px-3 text-sm md:text-base font-medium bg-[#890404] hover:opacity-90 text-white">
                    Acheter maintenant
                </button>
            </div>
            }
        </div>
    </div>
}