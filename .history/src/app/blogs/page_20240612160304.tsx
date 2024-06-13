import Image from 'next/image';
import React from 'react';
import { MdDateRange } from "react-icons/md";
import BlogCard from '../../components/BlogCard';
import { cardData } from '../../data/cardData';


const Blog = () => {
  return (
    <div className='bg-white'>
      <div className='flex justify-center'>
        <h1 className="text-4xl font-bold text-center">Blog</h1>
      </div>
      <div className="relative w-[92vw] h-[85vh] mx-auto  overflow-hidden bg-black  pt-5 pl-8 flex flex-col justify-start rounded-2xl">
        <Image
          src="/bgImage.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          quality={100}
          alt="Background Image"
          className="opacity-30 bg-black"
        />
        <div className="absolute inset-0 flex flex-col justify-center text-white mt-[6%] p-4 pl-8">
          <h1 className="text-[52px] font-semibold mb-4">
          Ouvrez les portes de la connaissance <br /> avec nos Blogs stimulants
          </h1>
          <p className="text-[17px] mb-8">
          Découvrez les dernières actualités de 2peerfect dans une multitude de domaines passionnants. <br />Plongez-vous dans nos articles pour rester à jour sur les tendances les plus récentes en technologie, <br /> santé mentale, Design, Business, et bien plus encore. Avec une expertise diversifiée et des perspectives variées,<br /> 2peerfect vous offre un aperçu complet et captivant des développements les plus récents à travers différents secteurs.<br /> Ne manquez rien de ce qui se passe dans le monde, suivez 2peerfect pour rester informé et inspiré.
          </p>
          <div className="flex flex-wrap justify-between space-x-4 w-[80%]">
            <div className="bg-transparent rounded-lg shadow-md w-[15%] h-10 mb-4 border border-[#A7E92F] flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Marketing</h2>
            </div>
            <div className="bg-transparent rounded-lg shadow-md w-[15%] h-10 mb-4 border border-[#A7E92F] flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Design</h2>
            </div>
            <div className="bg-transparent rounded-lg shadow-md w-[15%] h-10 mb-4 border border-[#A7E92F] flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Business</h2>
            </div>
            <div className="bg-transparent rounded-lg shadow-md w-[15%] h-10 mb-4 border border-[#A7E92F] flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">IT</h2>
            </div>
            <div className="bg-transparent rounded-lg shadow-md w-[15%] text-center h-10 mb-4 border border-[#A7E92F] flex items-center justify-center">
              <h2 className="text-lg font-semibold">Psychologie</h2>
            </div>

            
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
      <div className='second-section w-[85vw] mx-auto mt-10 flex justify-center'>
      <div className="flex flex-wrap gap-4 justify-between ">
      {cardData.map((card) => (
                  <BlogCard
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                    date={card.date}
                    color={card.background}
                  />
              ))}
      </div>
      
    </div>
    <div className='h-[30vh] w-'>

    </div>

      
    </div>
  );
};

export default Blog;
