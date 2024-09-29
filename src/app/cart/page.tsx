'use client'

import Link from "next/link"
import CartItem from "./component/CartItem"
import Image from "next/image"
import { useSelector } from "react-redux"
import { RootState } from "@/state/store"




export default function Page(){

    const cart = useSelector((cart:RootState)=>cart.cart);
    let total = cart.reduce((prev,current)=>{
        return prev + current.price*current.quantity
    },0)

    return (
        <div className="">
            {cart.length ?
            <div className="flex gap-4 flex-col lg:flex-row">
                {/* products */}
                <div className="flex-1 flex-col flex gap-4">
                    <div className="border p-5 h-full">
                        <h2 className="font-medium text-xl mb-3">PANIER <span className="text-sm text-gray-500">({cart.length}produit{cart.length>1 && 's'})</span></h2>
                        <div className="overflow-x-auto max-w-full ">
                            <table className="w-full min-w-[450px]">
                                <thead className="">
                                    <tr className="">
                                        <th className="text-left py-3 p-1"></th>
                                        <th className="text-left py-3 p-1 ">Produit</th>
                                        <th className="text-left py-3 p-1">Quantity</th>
                                        <th className="text-left py-3 p-1">Total</th>
                                        <th className="text-left py-3 p-1"></th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {cart.map(e=>{
                                        return (
                                            <CartItem key={e.id} item={e}/>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
                {/* total pricing  */}
                <div className="border p-5 max-w-[450px] w-full sm:min-w-[400px] gap-6 flex flex-col justify-between">
                    <div className="">
                        <h2 className="font-medium text-xl mb-3">TOTAUX DU PANIER</h2>
                        <div className="flex justify-between mb-1">
                            <span className="block text-gray-700">Prix de produits</span>
                            <span className="block text-green-600 ">{total}DA</span>
                        </div>
                        <div className="flex justify-between ">
                            <span className="block text-gray-700">Livraison</span>
                            <span className="block text-green-600 ">200DA</span>
                        </div>
                        <div className="my-4 bg-gray-500 w-full h-[1px]"/>
                        <div className="flex justify-between ">
                            <span className="block text-gray-700">Total</span>
                            <span className="block text-green-600 ">{total+200}DA</span>
                        </div>
                    </div>
                    <Link href='/checkout' className="w-full text-center p-2 px-3 bg-[#890404] hover:opacity-70 text-white">Passer à la chaisse</Link>
                </div>
            </div>
            :
            <div className="flex flex-col gap-2 items-center mb-60 mt-10">
                <div className='relative w-[150px] h-[150px] '>
                    <Image src='/photos/shopping.png' alt='' fill/>
                </div>
                <h1 className="text-lg  sm:text-xl font-bold">Votre Panier est Vide</h1>
                <p className="text-gray-700 text-center md:max-w-[650px]">
                    Votre panier est actuellement vide. Parcourez notre collection pour découvrir de superbes produits et commencez à les ajouter à votre panier. Bon shopping !
                </p>
                <Link href='/shop' className="p-2 px-3 text-sm md:text-base font-medium bg-[#890404] hover:opacity-90 text-white">
                    Acheter maintenant
                </Link>
            </div>
            }
        </div>
    )
}