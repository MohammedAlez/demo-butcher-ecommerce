'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import SectionTtitle from "@/components/common/SectionTitle";
import "swiper/css";
import { ProductType } from "../../../../../lib/types";
import ProductCard from "@/components/Product/ProductCard";
import { useProducts } from "../../../../../lib/api";



export default function RelatedProducts({id}:{id:number}){

    const {data:products, isFetching} = useProducts({related_products_id:id})
    // console.log(products)

    return (
        <>
            <SectionTtitle title="Produits " colored="Complémentaires" subTitle="Découvrez notre sélection de produits complémentaires pour enrichir votre expérience."/>
            {isFetching
            ?
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
                    className="w-full"
                >
                    {[1,2,3,4].map((e)=>{
                        return (
                            <SwiperSlide key={e}>
                                {/* <ProductCard product={undefined} isFetching={isFetching}/> */}
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            :
            <div className="">
                {products?.data?.length
                ?
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
                    className="w-full"
                >
                    {products?.data.map((e:ProductType)=>{
                        return (
                            <SwiperSlide key={e.id}>
                                <ProductCard product={e} isFetching={isFetching}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                :
                <div className="flex justify-center">Aucun Produits</div>
                }
            </div>
            }
        </>
    )
}