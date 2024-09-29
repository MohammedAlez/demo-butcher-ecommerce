'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import SectionTtitle from "../common/SectionTitle";

import "swiper/css";
import 'swiper/css/pagination';


export default function Testimonials(){

    
    return (
        <div className="testimonials max-w-[1200px] mx-auto px-6 py-10 my-24 mt-16 md:">
            <SectionTtitle title="Avis " colored="Clients" subTitle="Découvrez ce que nos clients disent de nos produits et services."/>
            <div className="flex flex-col gap-10 md:gap-4 lg:gap-10 md:flex-row-reverse">
                <div className="p-4 flex-2">
                    <span className="text-[#890404] block text-center md:text-start">Témoignages</span>
                    <h1 className="text-lg sm:text-xl md:text-2xl md:text-start font-medium my-6 md:my-8 text-center lg:text-3xl">Ce qu&apos;ils disent de nous</h1>
                    <p className="pb-6 border-b border-gray-300 text-center mb-10 md:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className="max-w-[1200px] mx-auto">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            breakpoints={{
                            '@1.00': {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            '@1.25': {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            '@1.50': {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            }}
                            
                            modules={[Pagination]}
                            className=""
                        >
                            
                            <SwiperSlide >
                                <div className="p-4 md:max-w-[250pxx]">
                                    <p className="text-center mb-6 text-[15px] text-gray-700">
                                        honnêtement la meilleure boucherie d’alger un filet juste excellent et disponible a tout heure une viande extrêmement moelleuse alors la vôtre rôtie farcie avec légumes juste une tuerie bravo l&#39;équipe bravo pour le service l&#39;accueil les prestations tout y est ne changez rien You are the best                                            
                                    </p>
                                    <div className="flex gap-4 items-center justify-center">
                                        <Image height={50} width={50} alt='' src='/testimonials-user.png' className="rounded-full "/>
                                        <div className="flex flex-col gap-">
                                            <span className="text-[#890404] font-bold text-sm">Sabrina Serdel</span>
                                            <span className=" font-medium text-sm">Alger</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="p-4 md:max-w-[250pxx]">
                                    <p className="text-center mb-6 text-[15px] text-gray-700">
                                        Je viens de revenir de votre boucherie je suis venue avec mon frère et ma sœur je tiens a vs dire que l&#39;accueil était parfait Macha Allah surtout du caissier il était d’une aide merveilleuse, Je vs tiendrai informé de la qualité de votre viande j’ai aussi pris des merguez et aussi du filet et aussi des côtelettes et des cottes de veaux et du Pastramie                                    
                                    </p>
                                    <div className="flex gap-4 items-center justify-center">
                                        <Image height={50} width={50} alt='' src='/testimonials-user.png' className="rounded-full "/>
                                        <div className="flex flex-col gap-">
                                            <span className="text-[#890404] font-bold text-sm">Sabrina Serdel</span>
                                            <span className=" font-medium text-sm">Alger</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                                
                            
                        </Swiper>
                    </div>
                </div>
                <div className="p-10 justify-center items-center flex-1">
                    <div className="relative w-[250px] h-[250px] md:w-[210px] md:h-[210px] lg:w-[250px] lg:h-[250px] mx-auto">
                        <Image src='/testimonials.jpg' alt='' fill className="bgg-[#890404] object-cover rounded-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}



                    