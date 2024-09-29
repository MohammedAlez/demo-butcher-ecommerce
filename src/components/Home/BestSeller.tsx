'use client'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import SectionTtitle from "../common/SectionTitle";
import ProductCard from "../Product/ProductCard";
import { PRODUCTS_DATA } from "@/data";


export default function BestSeller(){

    
    
    return (
        <div className="best-seller max-w-[1200px] mx-auto px-4 my-24">
            <SectionTtitle title="Best " colored="Seller" subTitle="Découvrez nos produits les plus populaires"/>
            <div className="">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    breakpoints={{
                      '@0.00': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                    }}
                    className=""
                >
                    {PRODUCTS_DATA.filter(e=>e.isBestSeller).slice(0,4).map(e=>{
                        return (
                            <SwiperSlide  key={e.id}>
                                <ProductCard product={e}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="my-20"></div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      '@0.00': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                    }}
                    className="mySwipper w-fitmx-auto"
                >
                    {PRODUCTS_DATA.filter(e=>e.isBestSeller).length >3 && PRODUCTS_DATA.filter(e=>e.isBestSeller).slice(4).map(e=>{
                        return (
                            <SwiperSlide  key={e.id}>
                                <ProductCard product={e}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}