'use client'

import Link from "next/link"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/state/store"
import { usePlaceOrder } from "../../../lib/api"
import { useState } from "react"
import { Cuppon } from "./component/Cuppon"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { CupponType, UserInfoType } from "../../../lib/types"
import { resetCart } from "@/state/Cart/cartSlice"
import { SpinnerCircular } from "spinners-react"


const initialState:UserInfoType = {
    first_name:'',
    last_name:'',
    company:'',
    email:'', 
    phone_number:'',
    address:'',
    note:'',
}


export default function Page(){

    const [cuppon, setCuppon] = useState<CupponType>({value:'',isChecked:false, discount:undefined});
    
    const dispatch = useDispatch();
    const cart = useSelector((cart:RootState)=>cart.cart);
    let total = cart.reduce((prev,current)=>{
        return prev + current.price*current.quantity
    },0)

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    // console.log(data);

    const formik = useFormik({
        initialValues:initialState,
        validationSchema:Yup.object({
            first_name:Yup.string().required('Le prénom est requis'),
            last_name:Yup.string().required('Le nom est requis'),
            email:Yup.string().required('Email est requis').email('Email invalide'),
            phone_number:Yup.string().required('Le numéro de téléphone est requis'),
            address:Yup.string().required("L'address est requis"),
            company:Yup.string().optional(),
            note:Yup.string().optional()
        }),
        onSubmit:(values)=>{
            setIsLoading(true);
            setTimeout(()=>{
                setIsSuccess(true);
                setIsLoading(false);
            },2000)          
        }
    })
    
    if(isSuccess){
        dispatch(resetCart())
        // console.log('Successed');
        window.scroll({
            top:0
        })
    }

    return (
        <div className="">
            {isSuccess 
            ?
            <div className="flex py-[20px] mb-56 flex-col items-center gap-2">
                <div className="w-[100px] h-[100px] relative mb-3">
                    <Image  src='/animation/place-order.gif' alt='' fill/>
                </div>
                <h1 className="font-bold text-2xl ">Commande confirmée</h1>
                <p className="text-gray-700 text-center md:max-w-[650px] mb-3">
                    Votre commande a été passée avec succés
                </p>
                <Link href='/shop' className="p-2 px-3 text-sm md:text-base font-medium bg-[#890404] hover:opacity-90 text-white">
                    Continuer vos achats
                </Link>
            </div>
            :
            cart.length 
            ?
            <div className="flex gap-4 flex-col lg:flex-row">
                {/* user info */}
                <div className="flex-1 flex-col flex gap-4">
                    <div className="border p-5">
                        <h2 className="font-medium text-xl mb-5">Détails de la livraison</h2>
                        <form action="" className="flex flex-col gap-3">
                            <div className="flex gap-2 flex-col md:flex-row">
                                <div className="flex gap-2 flex-col flex-1">
                                    <label htmlFor="first-name" className="">Prénom<span className='text-red-600'>*</span></label>
                                    <input
                                        value={formik.values.first_name}
                                        onChange={formik.handleChange}
                                        name="first_name" id='first-name' type="text" className="outline-none p-2 px-3 border" placeholder='Prénom'/>
                                    {formik.errors.first_name && formik.touched.first_name && 
                                        <span className='text-sm font-medium -mt-1 text-red-500 inline-block ml-3 '>{formik.errors.first_name}</span>
                                    }
                                </div>
                                <div className="flex gap-2 flex-col flex-1">
                                    <label htmlFor="last-name" className="">Nom<span className='text-red-600'>*</span></label>
                                    <input 
                                        value={formik.values.last_name}
                                        onChange={formik.handleChange}
                                        name="last_name" id='last-name' type="text" className="outline-none p-2 px-3 border" placeholder='Nom'/>
                                    {formik.errors.last_name && formik.touched.last_name && 
                                        <span className='text-sm font-medium -mt-1 text-red-500 inline-block ml-3 '>{formik.errors.last_name}</span>
                                    }
                                </div>
                            </div>
                            <div className="flex gap-2 flex-col flex-1">
                                <label htmlFor="company" className="">Nom de l&#39;entreprise<span className='text-[12px] text-gray-600 font-bold'> (FACULTATIF)</span></label>
                                <input 
                                    value={formik.values.company}
                                    onChange={formik.handleChange}
                                    name="company" id='company' type="text" className="outline-none p-2 px-3 border" placeholder="Nom de l'entreprise"/>
                            </div>
                            <div className="flex gap-2 flex-col flex-1">
                                <label htmlFor="email" className="">Email<span className='text-red-600'>*</span></label>
                                <input 
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    name='email' id='email' type="email" className="outline-none p-2 px-3 border" placeholder="Email"/>
                                    {formik.errors.email && formik.touched.email && 
                                        <span className='text-sm font-medium -mt-1 text-red-500 inline-block ml-3 '>{formik.errors.email}</span>
                                    }
                            </div>
                            <div className="flex gap-2 flex-col flex-1">
                                <label htmlFor="phone-number" className="">Numéro de téléphone<span className='text-red-600'>*</span></label>
                                <input
                                    value={formik.values.phone_number}
                                    onChange={formik.handleChange} 
                                    name="phone_number" id='phone-number' type="text" className="outline-none p-2 px-3 border" placeholder='Numéro de téléphone'/>
                                    {formik.errors.phone_number && formik.touched.phone_number && 
                                        <span className='text-sm font-medium -mt-1 text-red-500 inline-block ml-3 '>{formik.errors.phone_number}</span>
                                    }
                            </div>
                            <div className="flex gap-2 flex-col flex-1">
                                <label htmlFor="address" className="">Address<span className='text-red-600'>*</span></label>
                                <input 
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    name='address' id='address' type="text" className="outline-none p-2 px-3 border" placeholder="Address"/>
                                    {formik.errors.address && formik.touched.address && 
                                        <span className='text-sm font-medium -mt-1 text-red-500 inline-block ml-3 '>{formik.errors.address}</span>
                                    }
                            </div>
                            <div className="flex gap-2 flex-col flex-1">
                                <label htmlFor="note" className="">Remarque<span className='text-[12px] text-gray-600 font-bold'> (FACULTATIF)</span></label>
                                <textarea 
                                    value={formik.values.note}
                                    onChange={formik.handleChange}
                                    name="note" id='note' className="outline-none p-2 px-3 border resize-none min-h-24" placeholder="Remarque sur la commande"/>
                            </div>
                        </form>
                    </div>
                </div>
                {/* total pricing  */}
                <div className="border p-5 max-w-[450px] w-full sm:min-w-[400px] gap-6 flex flex-col justify-between">
                    <div className="">
                        <h2 className="font-medium text-xl mb-3">TOTAUX DU PANIER</h2>
                        <div className="flex justify-between mb-1">
                            <span className="block text-gray-700">Prix de prodiuts</span>
                            <span className="block text-green-600 ">{total}DA</span>
                        </div>
                        <div className="flex justify-between ">
                            <span className="block text-gray-700">Livraison</span>
                            <span className="block text-green-600 ">200DA</span>
                        </div>
                        <div className="my-4 bg-gray-500 w-full h-[1px]"/>
                        <div className="flex justify-between ">
                            <span className="block text-gray-700">Total</span>
                            {/* <span className="block text-green-600 ">{total+200}DA</span> */}
                            {<div className="flex gap-2 items-end">
                                {cuppon.discount && <del className='text-gray-500 text-sm'>{cuppon.discount && total}DA</del>}
                                <span className="block text-green-600 ">
                                    {total}DA
                                </span>
                            </div>}
                        </div>
                        
                    </div>
                    <div className="">
                        <button disabled={isLoading} onClick={()=>formik.submitForm()} className={`min-h-[40px] flex justify-center items-center w-full text-center p-2 px-3 bg-[#890404] hover:opacity-70 ${isLoading && 'opacity-70'} text-white`}>
                            {isLoading 
                            ? 
                            <SpinnerCircular size={20} thickness={170} speed={100} color="white" secondaryColor="gray" />
                            : 'Passer la commande'
                            }
                        </button>
                    </div>

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