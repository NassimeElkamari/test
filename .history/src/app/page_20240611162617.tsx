'use client'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='container flex bg-white h-[100vh] w-[100vw]'>

      {/* ----------------------------------Left Side -------------------------------------------- */}

      <div className="left-side bg-[#004AAD] w-[40%] flex items-center justify-end">
        <Image width={500} height={400} alt='Former' src='/former.png' />
      </div>

      {/* ----------------------------------Right Side -------------------------------------------- */}

      <div className="right-side w-full flex-1 flex-col flex items-center justify-center">
          <div className="mb-6 w-full justify-center items-center flex-col flex">
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="text" placeholder="Nom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="text" placeholder="Prénom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="email" placeholder="Email" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl" type="tel" placeholder="Numero de Téléphone" />
          </div>
      </div>
    </div>
  )
}

export default Home
