import React from 'react';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className='bg-white'>
      <div className='flex justify-center'>
        <h1 className="text-4xl font-bold text-center">Blog</h1>
      </div>
      <div className="relative w-[90vw] h-[80vh] mx-auto overflow-hidden bg-black pt-5  rounded-2xl">
      <Image
          src="/bgImage.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background Image"
          className="opacity-30 bg-black" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-[65px] font-bold">Ouvrez les portes de la connaissance
          avec nos Blogs stimulants</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-8 bg-gray-100">
        <div className="bg-white rounded-lg shadow-md m-4 p-6 w-80 text-center">
          <h2 className="text-2xl font-semibold mb-4">Card Title 1</h2>
          <p>Card content goes here...</p>
        </div>
        <div className="bg-white rounded-lg shadow-md m-4 p-6 w-80 text-center">
          <h2 className="text-2xl font-semibold mb-4">Card Title 2</h2>
          <p>Card content goes here...</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Blog;
