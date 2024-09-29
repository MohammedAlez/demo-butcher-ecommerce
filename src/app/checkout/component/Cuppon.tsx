'use client'

import { Dispatch, SetStateAction, useEffect } from "react";
import { useCheckCoupon } from "../../../../lib/api";
import { X } from "lucide-react";
import Loader from "react-js-loader";
import { SpinnerCircular } from "spinners-react";
import { CupponType } from "../../../../lib/types";



type Props = {
    cuppon:CupponType, 
    setCuppon:Dispatch<SetStateAction<CupponType>>
}
export function Cuppon({cuppon, setCuppon}:Props){

    const {data, isError:cupponError, isLoading:cupponLoader, mutate} = useCheckCoupon();
    const checkCuppon=()=>{
        setCuppon(prev=>({...prev, isChecked:true}))
        mutate(cuppon.value);   
    }
    // console.log(data);
    useEffect(()=>{
        setCuppon((prev)=>({...prev, discount:data?.data[0]?.attributes?.discount}))
    },[data, setCuppon])

    const resetCuppon=()=>{
        setCuppon({
            value:'',
            isChecked:false,
            discount:undefined
        })
    }
    return (
        <>
            {   (!cupponLoader && cuppon.discount) 
                ? 
                <div className="flex gap-2">
                    <span className="text-green-500 font-bold block ml-2 mt-1">Cuppon appliqué</span>
                    <div className="flex items-center gap-2 p-2 px-4 rounded-xl bg-green-100 ">
                        <span className="uppercase font-bold text-sm">{cuppon.value}</span>
                        <button onClick={resetCuppon} className="w-5 h-5 rounded-full hover:opacity-90 bg-gray-800 text-white font-bold flex justify-center items-center">
                            <X size={12} />
                        </button>
                    </div>
                </div>
                :
                <>
                    <div className="flex-1">
                        <input value={cuppon.value} onChange={(e)=>setCuppon(prev=>({...prev,value:e.target.value}))} type="text" className="uppercase outline-none p-2 px-3 border w-full" placeholder="Code Promo" />
                        {cuppon.isChecked && !cuppon.discount && !cupponLoader && <span className="text-sm text-red-500 font-bold block ml-2 mt-1">Couppon invalid</span>}
                        {cupponError && !cupponLoader && <span className="text-[12px] text-red-500 font-bold block ml-2 mt-1">Une erreur s&#39;est produite</span>}
                    </div>
                    <button disabled={cupponLoader} onClick={checkCuppon} className={`p-[11px] flex justify-center text-center min-h-[42px] min-w-[82px] h-fit rounded-lg ${cuppon.value.length==0 ? 'bg-gray-300' :'bg-[#890404] hover:opacity-90 text-white'} font-medium text-sm `}>
                        {cupponLoader 
                        ? 
                        <SpinnerCircular size={20} thickness={170} speed={100} color="white" secondaryColor="gray" />
                        : 
                        'Appliquer'
                        }
                    </button>
                </>
            }
        </>
    )
}