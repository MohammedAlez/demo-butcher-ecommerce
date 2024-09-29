'use client'
import { useState } from 'react';
import Reviews from './Reviews';
import Description from './Description';
import { type BlocksContent } from '@strapi/blocks-react-renderer';


export default function ProductTabs({detailed_description}:{detailed_description:BlocksContent|null}) {
    const [activeTab, setActiveTab] = useState<'desc' | 'reviews'>('desc');

    return (
        <div className='my-20 '>
            <div className='border-b'>
                <button className={`py-3  px-4 border  relative -bottom-[1px] text-xl font-medium ${activeTab=='desc' ? 'border-b-transparent font-bold text-black ' : 'text-gray-500'}`} onClick={() => setActiveTab('desc')}>Description</button>
                {/* <button className={`py-3 px-4 border -ml-[1px] relative -bottom-[1px] text-xl font-medium ${activeTab=='reviews' ? 'border-b-white font-bold text-black ' : 'text-gray-500'}`} onClick={() => setActiveTab('reviews')}>Reviews</button> */}
            </div>
            <div>
                {activeTab === 'desc' && <Description detailed_description={detailed_description||[]}/>}
                {activeTab === 'reviews' && <Reviews />}
            </div>
        </div>
    );
}