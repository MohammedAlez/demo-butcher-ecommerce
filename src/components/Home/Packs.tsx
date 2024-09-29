'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import SectionTtitle from "../common/SectionTitle";
import { useProducts } from "../../../lib/api";
import { ProductType } from "../../../lib/types";
import { SERVER_URL } from "../../../utils";
import { PRODUCTS_DATA } from "@/data";
import { Product } from "../Product/ProductCard";



export default function Packs(){
    
    return (
        <div className="packs max-w-[1200px] mx-auto px-4 my-10">
            <SectionTtitle title="Nos " colored="Packs" subTitle="Découvrez nos sélections de viandes d'exception"/>
            <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      '@0.85': {
                        slidesPerView: 2,
                        spaceBetween: 0,
                      },
                      '@1.15': {
                        slidesPerView: 3,
                        spaceBetween: 0,
                      },
                      '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 0,
                      },
                      '@2.00': {
                        slidesPerView: 5,
                        spaceBetween: 0,
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwipper w-fitmx-auto"
                >
                    {
                      PRODUCTS_DATA.filter(e=>e.isPack).map((product:Product,i)=>{
                          return (
                              <SwiperSlide key={product.id}>
                                  <div className={`group mx-auto lg:mx-0 flex my-8 overflow-hidden transition relative w-[220px] h-[350px] gap-2 items-end pt-8 ${i%2==0 && 'mt-16'}`}>
                                      <Image style={{transition:'0.3s'}} 
                                      src={product.image} 
                                      alt='' fill className="group-hover:brightness-75 brightness-[0.4] group-hover:scale-105 transition z-[-1] object-cover absolute top-0 right-0"/>
                                      
                                      <div style={{transition:'0.3s'}} className="text-white p-4 flex flex-col gap-1 justify-start group-hover:mb-3 transition duration-500">
                                          <span className="text-sm -mb-1 uppercase">{product.category}</span>
                                          <h1 className="text-2xl mb-4 uppercase">{product.name}</h1>
                                          <button className="bg-[#890404] p-1 px-3 text- font-medium w-fit hover:bg-red-600 transition">Commandez</button>
                                          <div className="absolute bg-[#890404] flex flex-col justify-center items-center p-2 -top-2 right-4 ">
                                              <span className="font-bold text- mt-2">DA{product.discountPrice.length>0 ? product.discountPrice : product.price}</span>
                                              <span className="text-[10px]">/PACK</span>
                                          </div>
                                      </div>
                                  </div>
                              </SwiperSlide>
                          )
                      })
                    }
                    
            </Swiper>
        </div>
    )
}