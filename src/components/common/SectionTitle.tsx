


export default function SectionTtitle({title, colored='', subTitle=''}:{title:string,colored?:string, subTitle?:string}){

    return (
        <div className="text-center flex flex-col font-medium items-center text-2xl md:text-3xl my-14">
            <h1 className="">{title} 
                <span className="text-[#890404] text-3xl md:text-4xl font-bold after:content-['']d relative after:absolute after after:bg-redd-500 after:w-[50%] after:-rotate-6 after:h-1 after:-bottom-2 after:left-1/3">
                    {colored}
                </span>
            </h1>
            <p className="text-base mt-4 text-gray-600">{subTitle}</p>
        </div>
    )
}