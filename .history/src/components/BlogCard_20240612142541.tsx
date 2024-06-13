import Image from 'next/image'
import React from 'react'
import { MdDateRange } from "react-icons/md";


const BlogCard = ({ imageSrc, title, description, date }) => {
  return (
    <div className='w-[40%] h-[50%] bg-black rounded-xl flex flex-col'>
    <div className="w-[100%] h-2/5 ">
        <Image
        src={imageSrc}
        layout='responsive'
        width={100} // Adjust width as needed
        height={100} // Adjust height as needed
        alt="Card Image"
        quality={100}
        
        className=" h-full w-full rounded-t-xl bg-blue-800"
        />
    </div>
    <div className="pt-10 flex justify-center items-center flex-col px-5">
        <h1 className="text-[32px] font-semibold">{title}</h1>
        <p className="text-md mt-5">{description}</p>
    </div>
    <div className="flex items-center justify-end mt-10 mr-2">
        <MdDateRange width={70} height={70} className='mr-4'/>
        <p className="mr-2">{date}</p>
    </div>
    <div className="flex justify-center mt-8 mb-4"> {/* Added justify-center class */}
        <button className="bg-black rounded-[14px] shadow-md w-[30%] text-center h-10 border border-[#A7E92F] flex items-center justify-center">
        <h2 className="text-lg font-semibold text-[#A7E92F]">Lire plus</h2> {/* Added text-white class */}
        </button>
    </div>
    </div>
  )
}

export default BlogCard
