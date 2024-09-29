
import Header from "@/components/common/Header";
import Image from "next/image";
import image from '../../../public/Hero image.jpeg'
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import MapComponenet from "./components/Map";
import { ContactForm } from "./components/ContactForm";



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
                        Contactez Nous
                        </h1>
                        <h3 className="md:text-xl text-gray-300 sm:text-lg max-w-[500px] mb-10 mx-auto text-center">
                            Nous serions ravis de vous entendre ! Que vous ayez une question, un commentaire ou besoin d&#39;aide, veuillez nous contacter via le formulaire ci-dessous. Notre équipe est là pour vous aider et vous répondra dans les plus brefs délais.
                        </h3>
                    </div>
                </div>
            </div>
            <div className="my-32 flex max-w-[1200px] mx-auto px-4 flex-col md:flex-row gap-4">
                <div className="p-3 flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold">Entrer En Contact</h1>
                    <p className="my-8 text-[15px] text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto omnis suscipit commodi saepe magni tempora sit at sed veniam sint inventore, facere dolores corporis perferendis? Ut voluptates amet quos voluptatibus?
                    </p>
                    <div className="">
                        <span className="block font-bold text-lg">SAMEDi - JEUDI</span>
                        <span className="block text-gray-500 mt-3">8:00 AM - 7:00 PM</span>
                    </div>
                    <div className="mt-4">
                        <span className="block font-bold text-lg">MAGASINS</span>
                        <span className="block text-gray-500 mt-2">Algiers, Algeria 756 rue</span>
                        <span className="block text-gray-500 mt-2">+213645786532</span>
                        <span className="block text-gray-500 mt-2">info@selecta.com</span>
                    </div>
                    <div className="mt-4">
                        <span className="block font-bold text-lg">Suivez-nous</span>
                        <div className="text-gray-500 mt-3 flex gap-2">
                            <Link href={'https://facebook.com'} className=" hover:scale-90 transition bg-[#890404] text-white  w-7 h-7 flex justify-center items-center">
                                <FacebookIcon size={18}/>
                            </Link>
                            <Link href={'https://instagram.com'} className=" hover:scale-90 transition bg-[#890404] text-white  w-7 h-7 flex justify-center items-center">
                                <InstagramIcon size={18}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-3 flex-1">
                    <h1 className="text-xl md:text-2xl font-bold mb-4 text-gray-700 ">Envoie-nous un message</h1>
                    <ContactForm />
                </div>
            </div>
            <div className="flex max-w-[1200px] mx-auto px-4 mb-32 gap-6 flex-col md:flex-row">
                <div className="relative flex-1 min-h-[350px] w-full">
                    <Image src='' alt="" fill className='bg-red-100'/>
                </div>
                <div className="flex-1 border ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.35855491963!2d2.9789388584993475!3d36.76196498579957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb1174c0c9111%3A0xf0bf92b305ec1bac!2sselectabeef!5e0!3m2!1sen!2sdz!4v1718131842295!5m2!1sen!2sdz" width="100%" height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}