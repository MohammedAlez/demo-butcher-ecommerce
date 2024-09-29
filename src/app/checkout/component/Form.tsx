'use client'

import { useFormik } from "formik"

export type UserInfoType = {
    first_name:string,
    last_name:string,
    company:string,
    email:string, 
    phone_number:string,
    address:string,
    note:string,
}
const initialState:UserInfoType = {
    first_name:'',
    last_name:'',
    company:'',
    email:'', 
    phone_number:'',
    address:'',
    note:'',
}

export function Form({}){

    const formik = useFormik({
        initialValues:initialState,
        onSubmit:(values)=>{
            console.log(values)
        }
    })

    return (
        <form action="" className="flex flex-col gap-3">
            <div className="flex gap-2 flex-col md:flex-row">
                <div className="flex gap-2 flex-col flex-1">
                    <label htmlFor="first-name" className="">Prénom<span className='text-red-600'>*</span></label>
                    <input name="first_name" id='first-name' type="text" className="outline-none p-2 px-3 border" placeholder='Prénom'/>
                </div>
                <div className="flex gap-2 flex-col flex-1">
                    <label htmlFor="last-name" className="">Nom<span className='text-red-600'>*</span></label>
                    <input name="last_name" id='last-name' type="text" className="outline-none p-2 px-3 border" placeholder='Nom'/>
                </div>
            </div>
            <div className="flex gap-2 flex-col flex-1">
                <label htmlFor="company-name" className="">Nom de l&#39;entreprise<span className='text-[12px] text-gray-600 font-bold'> (FACULTATIF)</span></label>
                <input name="compnay" id='company-name' type="text" className="outline-none p-2 px-3 border" placeholder="Nom de l'entreprise"/>
            </div>
            <div className="flex gap-2 flex-col flex-1">
                <label htmlFor="email" className="">Email<span className='text-red-600'>*</span></label>
                <input name='email' id='email' type="email" className="outline-none p-2 px-3 border" placeholder="Email"/>
            </div>
            <div className="flex gap-2 flex-col flex-1">
                <label htmlFor="phone-number" className="">Numéro de téléphone<span className='text-red-600'>*</span></label>
                <input name="phone_number" id='phone-number' type="text" className="outline-none p-2 px-3 border" placeholder='Numéro de téléphone'/>
            </div>
            <div className="flex gap-2 flex-col flex-1">
                <label htmlFor="address" className="">Address<span className='text-red-600'>*</span></label>
                <input name='address' id='address' type="text" className="outline-none p-2 px-3 border" placeholder="Address"/>
            </div>
            <div className="flex gap-2 flex-col flex-1">
                <label htmlFor="note" className="">Remarque<span className='text-[12px] text-gray-600 font-bold'> (FACULTATIF)</span></label>
                <textarea name="note" id='note' className="outline-none p-2 px-3 border resize-none min-h-24" placeholder="Remarque sur la commande"/>
            </div>
        </form>
    )
}