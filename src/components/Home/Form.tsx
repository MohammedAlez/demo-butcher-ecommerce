import Image from "next/image"



export default function Form(){

    return (
        <div className="relative min-h-[200px] my-20">
            <Image fill src='/copy-space-raw-meat-baking-pan.jpg' alt='' className='z-[-1] object-cover'/>
            <div className="max-w-[1200px] mx-auto px-6 py-10">
                <span className="text-red-500 block text-center text-lg">Book a Table</span>
                <h1 className="sm:text-4xl text-white sm:max-w-[650px] mx-auto text-xl my-6 font-bold text-center" >Making your special occasion more special</h1>
                <p className="text-center text-white sm:max-w-[600px] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                
                <div className="flex flex-col md:flex-row gap-3 mt-16">
                    <div className="flex-1 p-6 bg-white md:p-14">
                        <span className="text-red-500 block text-sm font-medium">RÉSERVATION PAR TÉLÉPHONE</span>
                        <h1 className="my-6 text-2xl md:text-3xl font-bold">pour réservation spéciale</h1>
                        <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <span className="bg-red-500 w-10 h-[0.7px] my-4 block"></span>
                        <div className="flex gap-2 mb-4">
                            <span className="w-[60px] h-[60px] bg-red-500"></span>
                            <div className="flex flex-col">
                                <span className="text-red-500 inline-block font-bold lg:text-lg">Boutique Offers</span>
                                <span className="font-bold lg:text-2xl text-lg">0612346587</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <span className="w-[60px] h-[60px] bg-red-500"></span>
                            <div className="flex flex-col">
                                <span className="text-red-500 inline-block font-bold lg:text-lg">Réservation spéciale</span>
                                <span className="font-bold lg:text-2xl text-lg">0512348798</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-6 bg-red-500 md:p-14">
                        <h1 className="font-bold text-3xl mb-8 text-white">Réservation Online</h1>
                        <form action="" className="flex flex-col gap-2">
                            <div className="flex gap-2 lg:flex-row flex-col">
                                <label htmlFor="" className="flex flex-1 flex-col gap-1 text-white">
                                    Name
                                    <input type="text" className="w-full text-black p-1 px-2 focus:outline-none" />
                                </label>
                                <label htmlFor="" className="flex flex-1 flex-col gap-1 text-white">
                                    Phone
                                    <input type="text" className="w-full text-black p-1 px-2 focus:outline-none" />
                                </label>
                            </div>
                            <div className="flex gap-2 lg:flex-row flex-col">
                                <label htmlFor="" className="flex flex-1 flex-col gap-1 text-white">
                                    Email
                                    <input type="text" className="w-full text-black p-1 px-2 focus:outline-none" />
                                </label>
                                <label htmlFor="" className="flex flex-1 flex-col gap-1 text-white">
                                    Date
                                    <input type="text" className="w-full text-black p-1 px-2 focus:outline-none" />
                                </label>
                            </div>
                            <label htmlFor="" className="flex flex-1 flex-col gap-1 text-white">
                                Note
                                <textarea className="w-full text-black p-1 px-2 focus:outline-none min-h-[130px] resize-none" />
                            </label>
                            <button className="bg-[#1b2d75] hover:bg-[#0e183e] transition  text-white p-2 ">Réserver</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}