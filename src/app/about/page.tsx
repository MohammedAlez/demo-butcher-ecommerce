import Header from "@/components/common/Header";
import Image from "next/image";
import image from '../../../public/Hero image.jpeg'
import Link from "next/link";
import { FacebookIcon, InstagramIcon, Quote } from "lucide-react";
import StarIcon from '@mui/icons-material/Star';


export default function Page(){

    return (
        <div className="">
            <div className="absolutee z-[-1]] w-full text-white ">
                <div className="absolute z-[99998] w-full">
                    <Header type='home'/>
                </div>
                <div className="relative  w-full h-[650px] ">
                    <div className="brightness-[0.4] relative w-full h-full">
                        <Image 
                            src={image} 
                            alt="d"
                            className=" absolute object-cover  mx-auto z-[-1]"
                            fill
                        />
                    </div>
                    <div className="max-w-[1200px] w-full mx-auto py-24 px-4 absolute top-[50%] md:top-[55%] lg:top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold sm:font-medium max-w-[600px] mx-auto text-center mb-6">
                            Notre histoire
                        </h1>
                        <h3 className="md:text-xl text-gray-300 sm:text-lg max-w-[500px] mb-10 mx-auto text-center">
                            Bienvenue sur SELECTA BEEF, votre boucherie en ligne de confiance. Nous proposons une sélection de viandes fraîches et de qualité supérieure, directement de l&#39;éleveur à votre table. Notre engagement : vous offrir des produits savoureux et un service exceptionnel.</h3>
                    </div>
                </div>
            </div>
            <div className="my-32 max-w-[1200px] px-4 mx-auto flex flex-col md:flex-row gap-10">
                <div className="flex-1">
                    <span className="inline-block font-bold text-white bg-[#890404] px-3 p-1 rounded-md min-w-fit text-sm mb-3">À propos de nous</span>
                    <h1 className="text-3xl font-bold mb-7">À propos de Selecta Beef</h1>
                    <p className="text-lg mb-7 font-medium">Bienvenue sur SELECTA BEEF, votre boucherie en ligne de confiance. Nous proposons une sélection de viandes fraîches et de qualité supérieure, directement de l&#39;éleveur à votre table. Notre engagement : vous offrir des produits savoureux et un service exceptionnel.</p>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur. Mattis odio nulla eget magna est ornare leo. Elit nullam elit massa ante sapien congue. Sed nibh massa commodo vestibulum ut. Quam sit neque eleifend viverra suspend interdum. Sem turpis scelerisq arcu dolor scelerisque enim.
                        Est praesent ac tellus cursus porttitor eu interdum. Iaculis tincidunt egestas lorem mauris sed orci risus euismod nulla eget magna est ornare leo. Elit nullam elit massa ante sapien congue. Sed nibh massa commodo vestibulum ut
                    </p>
                </div>
                <div className="flex-1 relative ">
                    <Image src={''} alt='' fill className='bg-red-100'/>
                </div>
            </div>
            <div className="bg-[#890404] py-16 mb-32">
                <div className="mb-16 max-w-[1200px] px-4 mx-auto flex flex-col md:flex-row gap-10 text-gray-100">
                    <div className="flex-1">
                        <h2 className="inline-block font-bold text-black bg-white px-3 p-1 rounded-md min-w-fit text-sm mb-3">Qualité</h2>
                        <h1 className="text-3xl font-bold mb-7">À propos de Selecta Beef</h1>
                        <p className="text-lg mb-7 font-medium">
                            NOTRE RÉSEAU D’APPROVISIONNEMENT COUVRE LARGE TOUS LES SECTEURS DU MARCHÉ DES VIANDES SURGELÉES DANS LE MONDE
                        </p>
                        <p className="text-gray-300">
                            Lorem ipsum dolor sit amet consectetur. Mattis odio nulla eget magna est ornare scelerisq arcu dolor scelerisque enim. Est praesent ac tellus cursus porttitor eu interdum. Iaculis tincidunt egestas lorem mauris sed orci risus euismod nulla
                        </p>
                    </div>
                    <div className="flex-1 relative min-h-[300px]">
                        <Image src={''} alt='' fill className='bg-red-100'/>
                    </div>
                </div>
                <div className="  max-w-[1200px] px-4 mx-auto flex flex-col-reverse md:flex-row gap-10 text-gray-100">
                    <div className="flex-1 relative min-h-[300px]">
                        <Image src={''} alt='' fill className='bg-red-100'/>
                    </div>
                    <div className="flex-1">
                        <h2 className="inline-block font-bold text-black bg-white px-3 p-1 rounded-md min-w-fit text-sm mb-3">NORMES</h2>
                        <h1 className="text-3xl font-bold mb-7">NOS NORMES</h1>
                        <p className="text-gray-300 mb-4">
                            Lorem ipsum dolor sit amet consectetur. Mattis odio nulla eget magna est ornare scelerisq arcu dolor scelerisque enim. Est praesent ac tellus cursus porttitor eu interdum. Iaculis tincidunt egestas lorem mauris sed orci risus euismod nulla
                        </p>
                        <div className="text-gray-300">
                            <h2 className="font-medium text-lg mb-2">CE QUE NOUS OFFRONS</h2>
                            <ul className="list-disc ml-6" >
                                <li>Large gamme de volailles et bœuf.</li>
                                <li>Large gamme de volailles et bœuf.</li>
                                <li>Large gamme de volailles et bœuf.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-32 max-w-[1200px] px-4 mx-auto flex flex-col-reverse md:flex-row gap-10">
                <div className="flex-1 relative ">
                    <div className="bg-red-50 p-6 rounded-lg mb-6">
                        <div className="text-[#890404] text-center"><Quote className="mx-auto" size={39}/></div>
                        <h1 className="my-3 sm:text-lg font-bold text-center">Nothing but the finest of meats touches my seasoned smoker</h1>
                        <div className="mb-4 text-center">
                            <StarIcon className="text-yellow-500"/>
                            <StarIcon className="text-yellow-500"/>
                            <StarIcon className="text-yellow-500"/>
                            <StarIcon className="text-yellow-500"/>
                            <StarIcon className="text-yellow-500"/>
                        </div>
                        <p className="text-gray-600 mb-4 text-center">
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat. Duis aute.
                        </p>
                        <div className="flex gap-2 justify-center">
                            <div className="relative min-w-[42px]  ">
                                <Image src='' alt='d' fill className="bg-white rounded-full"/>
                            </div>
                            <div className="">
                                <span className="block font-bold text-gray-800 text-[15px] ">SAMANTHA WILLIAM</span>
                                <span className="block font-bold text-[#890404] text-[13px]">MARKETING MANAGER</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg">
                        <div className="text-[#890404] text-center"><Quote className="mx-auto" size={39}/></div>
                        <h1 className="my-3 sm:text-lg font-bold text-center">Nothing but the finest of meats touches my seasoned smoker</h1>
                        <div className="mb-4 text-center">
                            <StarIcon className="text-yellow-500"/>
                            <StarIcon className="text-yellow-500"/>
                            <StarIcon className="text-yellow-500"/>
                            <StarIcon className="text-yellow-500"/>
                            <StarIcon className="text-yellow-500"/>
                        </div>
                        <p className="text-gray-600 mb-4 text-center">
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat. Duis aute.
                        </p>
                        <div className="flex gap-2 justify-center">
                            <div className="relative min-w-[42px]  ">
                                <Image src='' alt='d' fill className="bg-white rounded-full"/>
                            </div>
                            <div className="">
                                <span className="block font-bold text-gray-800 text-[15px] ">SAMANTHA WILLIAM</span>
                                <span className="block font-bold text-[#890404] text-[13px]">MARKETING MANAGER</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="inline-block font-bold text-white bg-[#890404] px-3 p-1 rounded-md min-w-fit text-sm mb-3">TÉMOIGNAGES</h2>
                    <h1 className="text-3xl font-bold mb-7">QUE DISENT LES GENS À NOTRE PROPOS?</h1>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur. Mattis odio nulla eget magna est ornare leo. Elit nullam elit massa ante sapien congue. Sed nibh massa commodo vestibulum ut. Quam sit neque eleifend viverra suspend interdum. Sem turpis scelerisq arcu dolor.
                    </p>
                    <div className="flex gap-6 my-8">
                        <div className="flex-1 h-60 relative ">
                            <Image fill alt='' src='' className="bg-red-100"/>
                        </div>
                        <div className="flex-1 h-60 relative ">
                            <Image fill alt='' src='' className="bg-red-100"/>
                        </div>
                    </div>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur. Mattis odio nulla eget magna est ornare leo. Elit nullam elit massa ante sapien congue. Sed nibh massa commodo vestibulum ut. Quam sit neque eleifend viverra suspend interdum. Sem turpis scelerisq arcu dolor.
                    </p>
                </div>
            </div>
        </div>
    )
}