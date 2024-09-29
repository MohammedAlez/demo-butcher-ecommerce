'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import SectionTtitle from "../common/SectionTitle";
import { CATEGORIES_DATA } from "@/data";


export default function Categories(){
    
    return (
        <div className="categories my-24 px-6 max-w-[1200px] mx-auto ">
            <SectionTtitle title="NOTRE " colored="SELECTION" subTitle="Profitez de nos packs"/>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        '@1.00': {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                        '@1.50': {
                            slidesPerView: 5,
                            spaceBetween: 0,
                        },
                    }}
                    className=""
                >
                    
                    {CATEGORIES_DATA.map((e)=>{
                        return (
                            <SwiperSlide key={e.id}>
                                <div className="flex flex-col hover:scale-95 transition gap-2 items-center mx-2">
                                    <div className="relative w-[180px] min-h-[300px] max-h-[300px]">
                                        {/* <Image src={category.attributes?.image?.data?.attributes?.url || ''} alt='' fill className="object-cover"/> */}
                                        <Image
                                            src={e.img}
                                            alt=''
                                            className='object-cover w-full h-full'
                                            fill
                                        />
                                    </div>
                                    <Link href={`/`} className="uppercase">{e.name}</Link>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    
                </Swiper>
            </div>
    )
}