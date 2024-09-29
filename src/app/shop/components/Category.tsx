import { Check } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";


export default function Category({name, id ,categoriesFilter, setCategories}:{name:string, categoriesFilter:number[], id:number, setCategories:Dispatch<SetStateAction<number[]>>}){
    
    const initialCheck = categoriesFilter.includes(id)
    const [checked, setChecked] = useState(initialCheck);

    const handleClick=()=>{
        if(checked)
            setCategories(prev=>{
                return prev.filter(e=>e!==id);
            })
        else 
            setCategories(prev=>[...prev, id]);
        setChecked(!checked)
    }
    return (
        <div className="mx-1 my-2 flex gap-3 items-center cursor-pointer" onClick={handleClick}>
            <span className={`w-4 h-4 rounded-md border flex justify-center items-center border-gray-500 ${checked && 'bg-blue-500 text-white border-none'}`} >
                {checked && <Check size={14} />}
            </span>
            <h2 className="">{name}</h2>
        </div>
    )
}