


export default function LoadingFallBack(){


    return (
        <div className="max-w-[1200px] mx-auto px-4 my-28">
            <div className="flex flex-col gap-5 md:flex-row">
                {/* images */}
                <div className="flex-1 ">
                    <div className="bg-gray-300 min-h-[300px] lg:min-h-[450px] w-full animate-pulse" />
                    <div className="flex gap-3 mt-5 justify-center ">
                        <div className="w-24 mb-2 h-24 bg-gray-300 animate-pulse" />
                        <div className="w-24 mb-2 h-24 bg-gray-300 animate-pulse" />
                        <div className="w-24 mb-2 h-24 bg-gray-300 animate-pulse" />
                    </div>
                </div>
                {/* details */}
                <div className="flex-1">
                    <h1 className="text-xl md:text-2xl font-medium mb-4 w-[300px] h-[30px] animate-pulse bg-gray-200 rounded-lg"></h1>
                    <div className="flex gap-1 mt-2 items-end">
                        <span className="  w-[100px] h-[30px] bg-gray-200 animate-pulse"></span>
                        <del className=" w-[100px] h-[20px] bg-gray-200 animate-pulse"></del>
                    </div>
                    <div className="my-9 text-gray-700">
                        <p className="bg-gray-200 mb-2 animate-pulse h-[20px] w-full"></p>
                        <p className="bg-gray-200 mb-2 animate-pulse h-[20px] w-[90%]"></p>
                        <p className="bg-gray-200 mb-2 animate-pulse h-[20px] w-[90%]"></p>
                        <p className="bg-gray-200 mb-2 animate-pulse h-[20px] w-[80%]"></p>
                    </div>
                    <div className="">
                        <div className="flex gap-3">
                            <span className="font-bold block w-[120px] h-[20px] bg-gray-200 animate-pulse"></span>
                            <span className="w-[120px] h-[20px] bg-gray-200 animate-pulse"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}