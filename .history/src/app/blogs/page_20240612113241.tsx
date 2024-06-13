import Image from 'next/image';
import React from 'react';

const Blog = () => {
  return (
    <div className='bg-white'>
      <div className='flex justify-center'>
        <h1 className="text-4xl font-bold text-center">Blog</h1>
      </div>
      <div className="relative w-[95vw] h-[80vh] mx-auto overflow-hidden bg-black  pt-5 pl-8 flex flex-col justify-start rounded-2xl">
        <Image
          src="/bgImage.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          quality={100}
          alt="Background Image"
          className="opacity-30 bg-black"
        />
        <div className="absolute inset-0 flex flex-col justify-center text-white mt-[14%] p-4 pl-8">
          <h1 className="text-[52px] font-semibold mb-4">
            Ouvrez les portes de la connaissance <br /> avec nos Blogs stimulants
          </h1>
          <p className="text-[18px] mb-8">
          Découvrez les dernières actualités de 2peerfect dans une multitude de domaines passionnants. <br />Plongez-vous dans nos articles pour rester à jour sur les tendances les plus récentes en technologie, <br /> santé mentale, Design, Business, et bien plus encore. Avec une expertise diversifiée et des perspectives variées,<br /> 2peerfect vous offre un aperçu complet et captivant des développements les plus récents à travers différents secteurs.<br /> Ne manquez rien de ce qui se passe dans le monde, suivez 2peerfect pour rester informé et inspiré.
          </p>
          <div className="flex flex-wrap space-x-4">
            <div className="bg-white rounded-lg shadow-md p-6 w-60 mb-4 border border-[#A7E92F
]">
              <h2 className="text-2xl font-semibold mb-4">Marketing</h2>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 w-60 mb-4">
              <h2 className="text-2xl font-semibold mb-4">Card Title 2</h2>
              <p>Card content goes here...</p>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-8 bg-gray-100">
        <div className="bg-white rounded-lg shadow-md m-4 p-6 w-80 text-center">
          <h2 className="text-2xl font-semibold mb-4">Additional Card 1</h2>
          <p>Additional card content goes here...</p>
        </div>
        <div className="bg-white rounded-lg shadow-md m-4 p-6 w-80 text-center">
          <h2 className="text-2xl font-semibold mb-4">Additional Card 2</h2>
          <p>Additional card content goes here...</p>
        </div>
        {/* Add more additional cards as needed */}
      </div>
    </div>
  );
};

export default Blog;
