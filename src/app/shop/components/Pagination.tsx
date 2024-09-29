'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";
import { filteringOptions } from "../types";

type PropsType = {
    setFilteringOptions:Dispatch<SetStateAction<filteringOptions>>, 
    itemsLength:number, 
    pageNumber:number
}


export default function PaginationComponent({itemsLength, setFilteringOptions, pageNumber}:PropsType){

    
    const pageCount = Math.ceil(itemsLength / 12);

    
    const handlePageClick = (p:number) => {
        setFilteringOptions(prev=>({
            ...prev,
            pageNumber:p
        }))
    };

    

    return (
        <>
            
            <Stack spacing={2}>
                <Pagination 
                    onChange={(e, pageNumber) => handlePageClick(pageNumber)}  
                    count={pageCount} 
                    defaultPage={pageNumber}
                />
            </Stack>
        </>
    );
}