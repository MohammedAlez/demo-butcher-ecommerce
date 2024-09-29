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


    const formik = useFormik({
        initialValues:initialState,
        validationSchema:Yup.object({
            name:Yup.string().required('Le nom et prénom sont obligatoires'),
            email:Yup.string().required('Email est requis').email('Email invalide'),
            subject:Yup.string().required('Le sujet est requis'),
            message:Yup.string().required("Le message est requis"),
        }),
        onSubmit:(values)=>{
            mutate(values)
            // console.log(values)
        }
    })

    const {data,mutate,isSuccess,isError,isLoading} = useContactForm()

    useEffect(()=>{
        if(isSuccess){
            formik.resetForm();
        }
    },[isSuccess])
    // console.log(data);


    return (
        <div className="">
            <input name='name' id='name' value={formik.values.name} onChange={formik.handleChange} type="text" className="mb-2 p-3 px-3 border border-gray-300 w-full outline-none bg-[#d6d6d617]" placeholder="Nom" />
            {formik.errors.name && formik.touched.name && 
                <span className='text-sm font-medium mb-3 text-red-500 inline-block ml-3 '>{formik.errors.name}</span>
            }
            <input name='email' id='email' value={formik.values.email} onChange={formik.handleChange} type="email" className="mb-2 p-3 px-3 border border-gray-300 w-full outline-none bg-[#d6d6d617]" placeholder="Email" />
            {formik.errors.email && formik.touched.email && 
                <span className='text-sm font-medium mb-3 text-red-500 inline-block ml-3 '>{formik.errors.email}</span>
            }
            <input name='subject' id='subject' value={formik.values.subject} onChange={formik.handleChange} type="text" className="mb-2 p-3 px-3 border border-gray-300 w-full outline-none bg-[#d6d6d617]" placeholder="Sujet" />
            {formik.errors.subject && formik.touched.subject && 
                <span className='text-sm font-medium mb-3 text-red-500 inline-block ml-3 '>{formik.errors.subject}</span>
            }
            <textarea name='message' id='message' value={formik.values.message} onChange={formik.handleChange} className="mb-2 p-3 px-3 border min-h-28 resize-none border-gray-300 w-full outline-none bg-[#d6d6d617]" placeholder="Message" />
            {formik.errors.message && formik.touched.message && 
                <span className='text-sm font-medium mb-3 text-red-500 inline-block ml-3 '>{formik.errors.message}</span>
            }
            {isError && 
                <span className='text-sm font-medium mb-3 text-red-500 inline-block ml-3 '>Une Erreur s'est produit, réessayez</span>
            }
            <button disabled={isLoading} onClick={formik.submitForm} className='h-[40px] p-2 bg-[#890404] hover:opacity-90 text-white font-medium text-center w-full'>
                {
                isLoading 
                ? 
                    <div className="flex justify-center w-full">
                        <SpinnerCircular size={20} thickness={170} speed={100} color="white" secondaryColor="gray" />
                    </div>
                :
                    'Envoyer Message'
                
                }
            </button>
        </div>
    )
}