'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';


import "swiper/css";
import 'swiper/css/navigation';



export default function HomeSlider(){

    return (
        <div className="home-slider max-w-[1200px] mx-auto px-6 -mt-[100px] relative z-[1]">
            <div className="md:flex justify-center items-center mb-10 px-4 hidden ">
                <div className=" text-[#890404]] bg-[#ffe9e9] p-6 w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex flex-col gap-2 justify-center items-center ">
                    <div className="relative md:w-[100px] md:h-[100px] w-[70px] min-h-[70px] ">
                        {/* <Image src='/icons/roast-chicken.png' fill alt='d'/> */}
                        <Image src='/icons/photo 2.png' className="md:w-[150px] md:h-[150px] w-[70px] min-h-[70px]" fill alt='d'/>
                    </div>
                    <h1 className="text-[#890404]] text-center font-medium md:text-2xl text-lg">Viande maturée</h1>
                    <p className="text-[#890404]] text-center">
                        Maturé une viande vous permet de bénéficier d’une meilleure viande extra tendre possible 
                    </p>
                </div>
                <div className=" text-white bg-[#890404] p-6 w-[250px] h-[250px] md:w-[350px] md:h-[350px] flex flex-col gap-2 justify-center items-center ">
                    <div className="">
                        <Image src='/icons/photo 3.png' width={100} height={100} alt='d'/>
                    </div>
                    <h1 className="text-center text-2xl">Viande fumée</h1>
                    <p className="text-center">
                        Notre légendaire viande fumée de première qualité, à la fois juteuse et épicée                    
                    </p>
                </div>
                <div className=" text-[#890404]] bg-[#ffe9e9] p-6 w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex flex-col gap-2 justify-center items-center ">
                    <div className="relative md:w-[100px] md:h-[100px] w-[70px] min-h-[70px] ">
                        <Image src='/icons/photo 4.png' fill alt='d'/>
                    </div>
                    <h1 className="text-[#890404]] text-center font-medium md:text-2xl text-lg">Viande fumée</h1>
                    <p className=" text-[#890404]] text-center">
                        Notre légendaire viande fumée de première qualité, à la fois juteuse et épicée                    
                    </p>
                </div>
            </div>
            <div className="max-w-[1200px]  md:hidden">
            <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    injectStyles={[`
                        .swiper-button-next,
                        .swiper-button-prev {
                        background-color: white;
                        padding: 8px 16px;
                        border-radius: 100%;
                        border: 2px solid black;
                        color: red;
                        }
                        .swiper-pagination-bullet{
                        width: 40px;
                        height: 40px;
                        background-color: red;
                        }
                    `]}
                    breakpoints={{
                      '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      '@0.75': {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      '@1.00': {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      '@1.50': {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwipper w-fitmx-auto"
                >
                <SwiperSlide>
                    <div className="mx bg-[#ffe9e9] mx-auto text- p-6 w-[300px] h-[200px] md:w-[300px] md:h-[300px] flex md:flex-col gap-4 justify-center items-center ">
                            <div className="relative -ml-4 min-w-[120px] min-h-[120px]  ">
                                <Image src='/icons/photo 2.png' fill alt='d'/>
                            </div>
                            <div className="flex flex-col items-start -ml-4 md:items-center gap-2">
                                <h1 className="text-center md:text-2xl text-lg font-bold">Viande maturée</h1>
                                <p className="md:text-center text-sm">
                                    Maturé une viande vous permet de bénéficier d’une meilleure viande extra tendre possible
                                </p>
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mx bg-[#890404] mx-auto text-white p-6 w-[300px] h-[200px] md:w-[300px] md:h-[300px] flex md:flex-col gap-4 justify-center items-center ">
                            <div className="relative -ml-4 min-w-[120px] min-h-[120px]  ">
                                <Image src='/icons/photo 3.png' fill alt='d'/>
                            </div>
                            <div className="flex flex-col items-start -ml-4 md:items-center gap-2">
                                <h1 className="text-center md:text-2xl text-lg font-bold">Viande fumée</h1>
                                <p className="md:text-center text-sm">
                                Notre légendaire viande fumée de première qualité, à la fois juteuse et épicée 
                                </p>
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mx bg-[#ffe9e9] mx-auto text-whte p-6 w-[300px] h-[200px] md:w-[300px] md:h-[300px] flex md:flex-col gap-4 justify-center items-center ">
                            <div className="relative -ml-4 min-w-[120px] min-h-[120px]  ">
                                <Image src='/icons/photo 4.png' fill alt='d'/>
                            </div>
                            <div className="flex flex-col items-start -ml-4 md:items-center gap-2">
                                <h1 className="text-center md:text-2xl text-lg font-bold">Viande fumée</h1>
                                <p className="md:text-center text-sm">
                                Notre légendaire viande fumée de première qualité, à la fois juteuse et épicée 
                                </p>
                            </div>
                    </div>
                </SwiperSlide>
                
                
            </Swiper>
                
            </div>
            {/* -******************** Logos **************************- */}
            {/* <div className="my-24">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      '@0.00': {
                        slidesPerView: 2,
                        spaceBetween: 0,
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
                        slidesPerView: 6,
                        spaceBetween: 0,
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwipper"
                >
                    <SwiperSlide>
                        <div className="hover:scale-75 mx-auto mx bg-gray-200 w-[80px] h-[80px] rounded-full"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hover:scale-75 mx-auto bg-gray-200 w-[80px] h-[80px] rounded-full"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hover:scale-75 mx-auto bg-gray-200 w-[80px] h-[80px] rounded-full"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hover:scale-75 mx-auto bg-gray-200 w-[80px] h-[80px] rounded-full"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hover:scale-75 mx-auto bg-gray-200 w-[80px] h-[80px] rounded-full"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hover:scale-75 mx-auto bg-gray-200 w-[80px] h-[80px] rounded-full"></div>
                    </SwiperSlide>
                </Swiper>
            </div> */}
            {/* -******************** Logos **************************- */}
        </div>
    )
}