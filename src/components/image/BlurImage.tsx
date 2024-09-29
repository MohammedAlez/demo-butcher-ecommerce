'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { BlurhashCanvas } from 'react-blurhash';
import { SERVER_URL } from '../../../utils';



export const BlurImage=({ src, blurhash, options}:{src:string, blurhash:string, options:{width?:number, height?:number, fill?:boolean, sizes?:string}})=>{

    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {!isLoaded && blurhash.length>6 && (
                <BlurhashCanvas
                    hash={blurhash}
                    punch={1}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
            )}
            <Image
                src={SERVER_URL + src}
                alt=''
                {...options}
                className='object-cover w-full h-full'
                onLoad={() => setIsLoaded(true)}
                style={isLoaded ? {} : { display: 'none' }}
                // loading='eager'
                priority={true}
                // sizes='30vh'
            />
            {/* <img src={src} alt='' onLoad={()=>setIsLoaded(true)}
                className='absolute top-0 left-0 w-full h-full object-cover'
            /> */}
        </>
    );
}