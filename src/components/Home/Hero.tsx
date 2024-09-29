'use client'

import Header from "../common/Header";
import image from '../../../public/copy-space-raw-meat-baking-pan.jpg'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';


import "swiper/css";
import 'swiper/css/navigation';
import Link from "next/link";
import { useHomeSlides } from "../../../lib/api";
import { HomeSlides } from "../../../lib/types";
import { SERVER_URL } from "../../../utils";

// export default function Hero(){

//     return (
//         <div className=" text-white ">
//             <div className="absolute z-[-1] w-full">
//                 <Swiper
//                         slidesPerView={1}
//                         spaceBetween={0}
//                         navigation={true}
//                         pagination={{
//                         clickable: true,
//                         }}
//                         injectStyles={[`
//                             .swiper-button-next,
//                             .swiper-button-prev {
//                             background-color: white;
//                             padding: 8px 16px;
//                             border-radius: 100%;
//                             border: 2px solid black;
//                             color: red;
//                             }
//                             .swiper-pagination-bullet{
//                             width: 40px;
//                             height: 40px;
//                             background-color: red;
//                             }
//                         `]}
//                         // breakpoints={{
//                         //   '@0.00': {
//                         //     slidesPerView: 1,
//                         //     spaceBetween: 0,
//                         //   },
//                         //   '@0.75': {
//                         //     slidesPerView: 1,
//                         //     spaceBetween: 0,
//                         //   },
//                         //   '@1.00': {
//                         //     slidesPerView: 1,
//                         //     spaceBetween: 0,
//                         //   },
//                         //   '@1.50': {
//                         //     slidesPerView: 1,
//                         //     spaceBetween: 0,
//                         //   },
//                         // }}
//                         // modules={[Pagination, Navigation]}
//                         className="mySwipper w-fitmx-auto"
//                     >
//                     <SwiperSlide>
//                         <div className="relative  w-full h-[750px] brightness-[0.4]">
//                             <Image 
//                                 src={'/copy-space-raw-meat-baking-pan.jpg'} 
//                                 alt="d"
//                                 className=" absolutte object-cover  mx-auto"
//                                 fill
//                             />
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="relative  w-full h-[750px] brightness-[0.4]">
//                             <Image 
//                                 src={''} 
//                                 alt="d"
//                                 className=" absolutte object-cover  mx-auto bg-red-200"
//                                 fill
//                             />
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="relative  w-full h-[750px] brightness-[0.4]">
//                             <Image 
//                                 src={''} 
//                                 alt="d"
//                                 className=" absolutte object-cover  mx-auto bg-red-600"
//                                 fill
//                             />
//                         </div>
//                     </SwiperSlide>
//                 </Swiper>
                
//                 <img src="/copy-space-raw-meat-baking-pan.jpg" alt="" className="h-[600px] w-full" />
//             </div>
//             <Header type="home"/>
//             <div className="max-w-[1200px] mx-auto py-24 px-4">
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium max-w-[600px] mx-auto text-center mb-6">
//                     Do not think twice about our meat quality.
//                 </h1>
//                 <h3 className="md:text-xl sm:text-lg max-w-[500px] mb-10 mx-auto text-center">
//                     Sourcing the finest meats and poultry from around the corner to around the world. You won’t find them at your local supermarket.
//                 </h3>
//                 <div className="flex flex-1 justify-center">
//                     <button className="hover:scale-95 max-w-fit bg-[#890404] hover:bg-[#890404ea] transition text-white p-2 px-4 flex-1">Acheter maintenant</button>
//                 </div>
//             </div>
            
//         </div>
//     )
// }

export default function Hero(){

    const {data, isLoading} = useHomeSlides();
    const homeSlides:HomeSlides|undefined = data?.data

    const first_title = homeSlides?.attributes.first_title || ''
    const second_title = homeSlides?.attributes.second_title || ''
    const slides = homeSlides?.attributes?.slides || null
    console.log(data);

    if(isLoading){
        return (
            <div className="min-h-[100vh] w-full  bg-gray-100 flex flex-col items-center justify-center gap-6 z-[999999999] fixed top-0 left-0">
                <Image src='/logo.png' alt='' width={60} height={60} className="rounded-full "/>
                <span className="text-sm">Chargement...</span>
            </div>
        )
    }
    return (
        <div className="hero text-white ">
            <div className="relative z-[-1]] w-full">
                <div className="absolute z-[99998] w-full">
                    <Header type='home'/>
                </div>
                <div className="md:max-w-[850px] w-[calc(100%-60px)] z-[9998]  mx-auto py-24 sm:px-4 absolute top-[50%] md:top-[55%] lg:top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    {first_title.length===0
                    ?
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold sm:font-medium max-w-[850px] mx-auto text-center mb-6">
                            Spécialiste des viandes d’exception et maturées Selecta beef votre boucherie en ligne .
                        </h1>
                    
                    :
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold sm:font-medium max-w-[850px] mx-auto text-center mb-6">
                            {first_title}
                        </h1>
                    }
                    {second_title.length===0
                    ?
                        <h3 className="md:text-xl text-gray-300 sm:text-lg max-w-[600px] mb-10 mx-auto text-center">
                            Selectabeef est une boucherie- charcuterie algérienne qui a complètement bouleversé les codes de la boucherie, avec des produits exclusifs à base de viande fraîche te                                
                        </h3>
                    :
                        <h3 className="md:text-xl text-gray-300 sm:text-lg max-w-[600px] mb-10 mx-auto text-center">
                            {second_title}
                        </h3>
                    }
                    <div className="flex flex-1 justify-center gap-3 fflex-col sm:fflex-row items-center">
                        <Link href='/' className="">
                            <button className="hover:scale-95 max-w-fitt w-[160px]  sm:w-[200px] bg-[#890404] hover:bg-[#890404ea] transition text-white p-2 sm:px-4 flex-1 text-sm sm:text-base">Découvrez nos packs</button>
                        </Link>
                        <Link href='/shop' className="">
                            <button className="hover:scale-95 max-w-fitt w-[160px]  sm:w-[200px] bg-[#890404] hover:bg-[#890404ea] transition text-white p-2 sm:px-4 flex-1 text-sm sm:text-base">Voir la boutique</button>
                        </Link>
                    </div>
                </div>
                <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwipper w-fitmx-auto"
                    >
                    {(slides && slides.length!==0) ?
                        slides.map(slide=>{
                            return (
                                <SwiperSlide key={slide.image.data.attributes.url}>
                                    <div className="relative  w-full h-[750px] ">
                                        
                                        <div className="brightness-[0.6] relative w-full h-full">
                                            <Image 
                                                src={SERVER_URL + slide.image.data.attributes.url} 
                                                alt="d"
                                                className=" absolute object-cover  mx-auto z-[-1]"
                                                fill
                                                priority={true}
                                            />
                                        </div>
                                        {/* <div className="max-w-[1200px] w-full mx-auto py-24 px-4 absolute top-[50%] md:top-[55%] lg:top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                                            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold sm:font-medium max-w-[850px] mx-auto text-center mb-6">
                                                Spécialiste des viandes d’exception et maturées Selecta beef votre boucherie en ligne .
                                            </h1>
                                            <h3 className="md:text-xl text-gray-300 sm:text-lg max-w-[600px] mb-10 mx-auto text-center">
                                                Selectabeef est une boucherie- charcuterie algérienne qui a complètement bouleversé les codes de la boucherie, avec des produits exclusifs à base de viande fraîche te                                
                                            </h3>
                                            <div className="flex flex-1 justify-center gap-3 fflex-col sm:fflex-row items-center">
                                                <Link href='/' className="">
                                                    <button className="hover:scale-95 max-w-fitt w-[160px]  sm:w-[200px] bg-[#890404] hover:bg-[#890404ea] transition text-white p-2 sm:px-4 flex-1 text-sm sm:text-base">Découvrez nos packs</button>
                                                </Link>
                                                <Link href='/shop' className="">
                                                    <button className="hover:scale-95 max-w-fitt w-[160px]  sm:w-[200px] bg-[#890404] hover:bg-[#890404ea] transition text-white p-2 sm:px-4 flex-1 text-sm sm:text-base">Voir la boutique</button>
                                                </Link>
                                            </div>
                                            
                                        </div> */}
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    :
                        <SwiperSlide>
                            <div className="relative  w-full h-[750px] ">
                                
                                <div className="brightness-[0.6] relative w-full h-full">
                                    <Image 
                                        src={image} 
                                        alt="d"
                                        className=" absolute object-cover  mx-auto z-[-1]"
                                        fill
                                        priority={true}
                                    />
                                </div>
                                {/* <div className="max-w-[1200px] w-full mx-auto py-24 px-4 absolute top-[50%] md:top-[55%] lg:top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold sm:font-medium max-w-[850px] mx-auto text-center mb-6">
                                        Spécialiste des viandes d’exception et maturées Selecta beef votre boucherie en ligne .
                                    </h1>
                                    <h3 className="md:text-xl text-gray-300 sm:text-lg max-w-[600px] mb-10 mx-auto text-center">
                                        Selectabeef est une boucherie- charcuterie algérienne qui a complètement bouleversé les codes de la boucherie, avec des produits exclusifs à base de viande fraîche te                                
                                    </h3>
                                    <div className="flex flex-1 justify-center gap-3 fflex-col sm:fflex-row items-center">
                                        <Link href='/' className="">
                                            <button className="hover:scale-95 max-w-fitt w-[160px]  sm:w-[200px] bg-[#890404] hover:bg-[#890404ea] transition text-white p-2 sm:px-4 flex-1 text-sm sm:text-base">Découvrez nos packs</button>
                                        </Link>
                                        <Link href='/shop' className="">
                                            <button className="hover:scale-95 max-w-fitt w-[160px]  sm:w-[200px] bg-[#890404] hover:bg-[#890404ea] transition text-white p-2 sm:px-4 flex-1 text-sm sm:text-base">Voir la boutique</button>
                                        </Link>
                                    </div>
                                    
                                </div> */}
                            </div>
                        </SwiperSlide>
                    }
                </Swiper>
                
                {/* <img src="/copy-space-raw-meat-baking-pan.jpg" alt="" className="h-[600px] w-full" /> */}
                </div>
            
            
        </div>
    )
}