'use client'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='flex bg-white h-[100vh] w-[100vw]'>

      {/* ----------------------------------Left Side -------------------------------------------- */}

      <div className="left-side bg-[#004AAD] w-[40%] flex items-center justify-end pr-2">
        <Image width={450} height={450} alt='Former' src='/image.png' />
      </div>

      {/* ----------------------------------Right Side -------------------------------------------- */}

      <div className="right-side w-[60%] flex flex-col items-center justify-start overflow-y-scroll">
        
        {/* ----First Section------ */}
        <div className="first-section w-full flex flex-col items-center justify-center py-8">
          <div className="mb-6 w-full flex flex-col items-center">
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="text" placeholder="Nom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="text" placeholder="Prénom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="email" placeholder="Email" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="tel" placeholder="Numero de Téléphone" />
          </div>
          <div className="w-[40%] flex items-center justify-center">
            <Image width={100} height={100} alt='Former' src='/image.png' />
          </div>
        </div>

        {/* ----Second Section------ */}
        <div className="second-section w-full flex flex-col items-center justify-center py-8">
          <div className="mb-6 w-full flex flex-col items-center">
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="text" placeholder="Nom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="text" placeholder="Prénom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="email" placeholder="Email" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="tel" placeholder="Numero de Téléphone" />
          </div>
          <div className="w-[40%] flex items-center justify-center">
            <Image width={100} height={100} alt='Former' src='/image.png' />
          </div>
        </div>

        {/* ----Third Section------ */}
        <div className="third-section w-full flex flex-col items-center justify-center py-8">
          <div className="mb-6 w-full flex flex-col items-center">
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="text" placeholder="Nom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="text" placeholder="Prénom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="email" placeholder="Email" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="tel" placeholder="Numero de Téléphone" />
          </div>
          <div className="w-[40%] flex items-center justify-center">
            <Image width={100} height={100} alt='Former' src='/image.png' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
