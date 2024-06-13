import Image from 'next/image'
import React from 'react'
import { MdDateRange } from "react-icons/md";


const BlogCard = () => {
  return (
    <div className='w-[60%] h-[120%] bg-black rounded-xl flex flex-col'>
    <div className="w-[100%] h-2/5 relative">
        <Image
        src="/card1.png"
        layout="responsive"
        width={200} // Adjust width as needed
        height={200} // Adjust height as needed
        alt="Card Image"
        className="w-full h-full rounded-t-xl bg-blue-800"
        />
    </div>
    <div className="pt-10 flex justify-center items-center flex-col px-5">
        <h1 className="text-[32px] font-semibold">L'impact des médias sociaux sur la santé mental</h1>
        <p className="text-md mt-5">Discuter de la façon dont les likes, les commentaires et les partages peuvent devenir une mesure de notre valeur personnelle, et comment cela peut affecter notre estime de soi et notre bien-être émotionnel...</p>
    </div>
    <div className="flex items-center justify-end mt-10 mr-2">
        <MdDateRange width={70} height={70} className='mr-4'/>
        <p className="mr-2">11 Décembre 2023</p>
    </div>
    <div className="flex justify-center mt-8"> {/* Added justify-center class */}
        <button className="bg-black rounded-[14px] shadow-md w-[30%] text-center h-10 border border-[#A7E92F] flex items-center justify-center">
        <h2 className="text-lg font-semibold text-[#A7E92F]">Lire plus</h2> {/* Added text-white class */}
        </button>
    </div>
    </div>
  )
}

export default BlogCard
