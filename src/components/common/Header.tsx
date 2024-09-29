'use client'


import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { AlignRight, CircleUser, ShoppingCart, X } from "lucide-react";
import { useCartContext } from "@/context/CartContext";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";


export default function Header({type}:{type:string}){

    const cart = useCartContext();
    const cartItems = useSelector((state:RootState)=>state.cart)

    return (
        <div className="bg-blackd  text-white bg-contain bg-redd-500 bfg-[url(https://t3.ftcdn.net/jpg/05/85/57/42/360_F_585574231_y4zLP2gfy4EuxfjviOCjvMTSKGF6ToEk.jpg)]" >
            <div className={`max-w-[1200px] mx-auto ${type==='home' ? 'p-6' : 'p-6 py-3'} flex justify-between items-center`}>
                

                {/* ****************** Socail Media Links **************** */}
                {type==='home' && <ul className="md:flex gap-2 backdrop: flex-1 hidden">
                    <li className=" bg-[#890404] hover:scale-90 transition  ">
                        <Link href={'https://web.facebook.com/selectabeef'} className="w-8 h-8 flex justify-center items-center">
                            <FacebookIcon />
                        </Link>
                    </li>
                    <li className=" bg-[#890404] hover:scale-90 transition  ">
                        <Link href={'https://www.instagram.com/selecta.beef'} className="w-8 h-8 flex justify-center items-center">
                            <InstagramIcon />
                        </Link>
                    </li>
                </ul>}
                {/* ****************** Socail Media Links **************** */}

                {/* ****************** Logo **************** */}
                <div className={`${type=='home' && 'flex-1'}`}>
                    <Link href='/' className={`block w-16 h-16 relative ${type==='home' && 'md:mx-auto md:w-28 md:min-h-28'} rounded-full overflow-hidden`}>
                        <Image src='/logo.png' fill alt='' className="scale-[1.4]" />
                    </Link>
                </div>
                {/* ****************** Logo **************** */}
                
                {/* ********** Booking ********** */}
                
                
                {/* ********** Booking ********** */}
                
                {/* cart and profile icons with the brwosing links */}

                <div className="flex-1 flex gap-8 items-center justify-end"> 
                    {type==='other' && <ul className="justify-center gap-4 hidden md:flex">
                        <li className="">
                            <Link href='/' className={`hover:text-[#d72929] duration-300  lg:text-baase font-bold text-[15px] text-gray-700 transition `}>Principal</Link>
                        </li>
                        <li className="">
                            <Link href='/shop' className={`hover:text-[#d72929] duration-300  lg:text-baase font-bold text-[15px] text-gray-700 transition `}>Boutique</Link>
                        </li>
                        <li className="">
                            <Link href='/' className={`hover:text-[#d72929] duration-300  lg:text-baase font-bold text-[15px] text-gray-700 transition `}>Services</Link>
                        </li>
                        <li className="">
                            <Link href='/about' className={`hover:text-[#d72929] duration-300  lg:text-baase font-bold text-[15px] text-gray-700 transition `}>Notre histoire</Link>
                        </li>
                        <li className="">
                            <Link href='/contact' className={`hover:text-[#d72929] duration-300  lg:text-baase font-bold text-[15px] text-gray-700 transition `}>Contactez nous</Link>
                        </li>
                    </ul>}
                    <div className="flex justify-end gap-4 items-center">
                        {/* <button className={`${type==='home' ? 'text-white' : 'text-black'} hidden md:block hover:text-[#d72929]`}>
                            <CircleUser size={26}/>
                        </button> */}
                        <button onClick={()=>cart?.setIsOpen(true)} className={`relative ${type==='home' ? 'text-white' : 'text-black'} hidden md:block hover:text-[#d72929]`}>
                            <ShoppingCart size={26} />
                            <span className="absolute text-[11px] rounded-full  bg-[#d72929] text-white w-4 h-4 flex justify-center items-center -top-1 -right-1">{cartItems.length}</span>
                        </button>
                    </div>
                </div>
                {/* cart and profile icons with the brwosing links */}

                {/* ********** Menu ********** */}
                    <Menu type={type}/>
                {/* ********** Menu ********** */}
            </div>
            {/* ************** separator ***************** */}
            <div className="px-6 hidden md:block ">
                <div className="h-[1px] w-full bg-gray-300 max-w-[1200px] mx-auto " />
            </div>
            {/* ************** separator ***************** */}

            {/*  ***************** Browsing Links * *************** */}  
            {type==='home' && <ul className="hidden py-4 md:flex justify-center gap-6">
                <li className="">
                    <Link href='/' className={`text-white hover:text-[#890404] transition `}>Principal</Link>
                </li>
                <li className="">
                    <Link href='/shop' className={`text-white hover:text-[#890404] transition `}>Boutique</Link>
                </li>
                <li className="">
                    <Link href='' className={`text-white hover:text-[#890404] transition `}>Services</Link>
                </li>
                <li className="">
                    <Link href='/about' className={`text-white hover:text-[#890404] transition `}>Notre histoire</Link>
                </li>
                <li className="">
                    <Link href='/contact' className={`text-white hover:text-[#890404] transition `}>Contactez nous</Link>
                </li>
            </ul>}
            {/*  ***************** Browsing Links * *************** */}
        
        
        </div>
    )
}



const Menu=({type}:{type:string})=>{
    const [open, setOpen] = useState(false);
    return (
        <div className="md:hidden">
            <button className={`cursor-pointer  hover:opacity-60 focus:scale-90 ${type==='other' && 'text-black'}`} onClick={()=>{
                console.log(open)
                setOpen(!open)
            }}>
                <AlignRight size='35'/>
            </button>
            {<div
                style={{top:open ? '0' : '-1000vh',transition:'all 0.5s ease 0s'}}
                className={"fixed z-[99999] transition right-0 backdrop-blur-xss bg-black w-full h-[100vh] "}
            >
                <div className="flex justify-end p-4 text-white hover:opacity-70 cursor-pointer"
                    onClick={()=>setOpen(!open)}
                >
                    <X size='35'/>
                </div>
                <ul className="pt-10">
                    <li className="text-center ">
                        <Link  href='/' className='text-2xl transition hover:text-[#890404] mb-6 hover:scale-90 block'>
                            Principal
                        </Link>
                    </li>
                    <li className="text-center ">
                        <Link  href='/shop' className='text-2xl transition hover:text-[#890404] mb-6 hover:scale-90 block'>
                            Boutique
                        </Link>
                    </li>
                    <li className="text-center ">
                        <Link  href='/' className='text-2xl transition hover:text-[#890404] mb-6 hover:scale-90 block'>
                            Services
                        </Link>
                    </li>
                    <li className="text-center ">
                        <Link  href='/about' className='text-2xl transition hover:text-[#890404] mb-6 hover:scale-90 block'>
                            Notre histoire 
                        </Link>
                    </li>
                    <li className="text-center ">
                        <Link  href='/contact' className='text-2xl transition hover:text-[#890404] mb-6 hover:scale-90 block'>
                            Contactez nous
                        </Link>
                    </li>
                    <li className="text-center ">
                        <Link  href='/cart' className='text-2xl transition hover:text-[#890404] mb-6 hover:scale-90 block'>
                            Panier
                        </Link>
                    </li>
                </ul>
                <ul className="flex gap-2  flex-1 justify-center mt-10">
                    <li className=" bg-[#890404] hover:scale-90 transition  ">
                        <Link href={'https://web.facebook.com/selectabeef'} className="w-8 h-8 flex justify-center items-center">
                            <FacebookIcon />
                        </Link>
                    </li>
                    <li className=" bg-[#890404] hover:scale-90 transition  ">
                        <Link href={'https://www.instagram.com/selecta.beef/'} className="w-8 h-8 flex justify-center items-center">
                            <InstagramIcon />
                        </Link>
                    </li>
                </ul>
            </div>}
        </div>
    )
}