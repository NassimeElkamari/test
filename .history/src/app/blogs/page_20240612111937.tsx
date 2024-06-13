import Image from 'next/image';
import React from 'react';

const Blog = () => {
  return (
    <>
      <div className='flex justify-center'>
        <h1 className="text-4xl font-bold text-center">Blog</h1>
      </div>
      <div className="relative w-[95vw] h-[80vh] mx-auto overflow-hidden bg-black pt-5 pl-8 flex flex-col items-center justify-start rounded-2xl">
        <Image
          src="/bgImage.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          quality={100}
          alt="Background Image"
          className="opacity-30 bg-black"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start text-white p-4">
          <h1 className="text-[45px] font-semibold text-center mb-4">
            Ouvrez les portes de la connaissance <br /> avec nos Blogs stimulants
          </h1>
          <p className="text-xl text-center mb-8">
            Découvrez un monde d'informations et d'inspirations à travers nos articles enrichissants.
          </p>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="bg-white rounded-lg shadow-md p-6 w-60 text-center mb-4">
              <h2 className="text-2xl font-semibold mb-4">Card Title 1</h2>
              <p>Card content goes here...</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 w-60 text-center mb-4">
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
    </>
  );
};

export default Blog;
