'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ContactInfo } from '../../../../lib/types'
import { useContactForm } from '../../../../lib/api'
import { useEffect } from 'react'
import { SpinnerCircular } from 'spinners-react'



const initialState:ContactInfo = {
    name:'',
    email:'',
    subject:'',
    message:'',
}

export function ContactForm(){


    


    return (
        <div className="">
            <input name='name' id='name'  type="text" className="mb-2 p-3 px-3 border border-gray-300 w-full outline-none bg-[#d6d6d617]" placeholder="Nom" />
            
            <input name='email' id='email' type="email" className="mb-2 p-3 px-3 border border-gray-300 w-full outline-none bg-[#d6d6d617]" placeholder="Email" />
            
            <input name='subject' id='subject'  type="text" className="mb-2 p-3 px-3 border border-gray-300 w-full outline-none bg-[#d6d6d617]" placeholder="Sujet" />
            
            <textarea name='message' id='message' className="mb-2 p-3 px-3 border min-h-28 resize-none border-gray-300 w-full outline-none bg-[#d6d6d617]" placeholder="Message" />
            
            
            <button className='h-[40px] p-2 bg-[#890404] hover:opacity-90 text-white font-medium text-center w-full'>
                
                    Envoyer Message
                
            </button>
        </div>
    )
}