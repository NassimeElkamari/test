import Image from 'next/image'
import React from 'react'
import { MdDateRange } from "react-icons/md";


const BlogCard = ({ imageSrc, title, description, date , color}) => {
  return (
    <div className='w-[45%] h-[50%] bg-black rounded-xl flex flex-col'>
    <div className="w-[100%] h-2/5 relative">
        <Image
        src={imageSrc}
        layout='responsive'
        height={100}
        width={100}
        alt="Card Image"
        className="w-full h-full rounded-t-xl "
        style={{backgroundColor: `${color}`}}
        />
    </div>
    <div className="pt-14 flex justify-center items-center flex-col px-5">
        <h1 className="text-[32px] font-semibold">{title}</h1>
        <p className="text-md mt-5">{description}</p>
    </div>
    <div className="flex items-center justify-end mt-10 mr-2">
        <MdDateRange width={70} height={70} className='mr-4'/>
        <p className="mr-2">{date}</p>
    </div>
    
    </div>
  )
}

export default BlogCard
