'use client'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col bg-white h-auto w-full'>

      {/* ------------------------------ Section 1 ---------------------------------- */}
      <div className='flex h-[100vh] w-[100vw]'>
        <div className="left-side bg-[#004AAD] w-[40%] flex items-center justify-end pr-2">
          <Image width={450} height={450} alt='Former' src='/former.png' />
        </div>
        <div className="first-section right-side w-full flex-1 flex-col flex items-center justify-center">
          <div className="mb-6 w-full justify-center items-center flex-col flex">
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="text" placeholder="Nom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="text" placeholder="Prénom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="email" placeholder="Email" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="tel" placeholder="Numero de Téléphone" />
          </div>
          <div className=" w-[40%] flex items-center justify-center">
            <Image width={100} height={100} alt='Former' src='/image.png' />
          </div>
        </div>
      </div>

      {/* ------------------------------ Section 2 ---------------------------------- */}
      <div className='mt-5 flex h-[100vh] w-[100vw]'>
        <div className="left-side bg-[#004AAD] w-[40%] flex items-center justify-end pr-2">
          <Image width={450} height={450} alt='Former' src='/former2.png' />
        </div>
        <div className="second-section right-side w-full flex-1 flex-col flex items-center justify-center">
          <div className="mb-6 w-full justify-center items-center flex-col flex">
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="text" placeholder="Nom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="text" placeholder="Prénom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="email" placeholder="Email" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="tel" placeholder="Numero de Téléphone" />
          </div>
          <div className=" w-[40%] flex items-center justify-center">
            <Image width={100} height={100} alt='Former' src='/image.png' />
          </div>
        </div>
      </div>

      {/* ------------------------------ Section 3 ---------------------------------- */}
      <div className=' mt-5 flex h-[100vh] w-[100vw]'>
        <div className="left-side bg-[#004AAD] w-[40%] flex items-center justify-end pr-2">
          <Image width={450} height={450} alt='Former' src='/former.png' />
        </div>
        <div className="third-section right-side w-full flex-1 flex-col flex items-center justify-center">
          <div className="mb-6 w-full justify-center items-center flex-col flex">
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="text" placeholder="Nom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="text" placeholder="Prénom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="email" placeholder="Email" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="tel" placeholder="Numero de Téléphone" />
          </div>
          <div className=" w-[40%] flex items-center justify-center">
            <Image width={100} height={100} alt='Former' src='/image.png' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
