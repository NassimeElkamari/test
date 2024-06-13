'use client'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='container flex bg-white h-[100vh] w-[100vw]'>

      {/* ----------------------------------Left Side -------------------------------------------- */}

      <div className="left-side bg-[#004AAD] w-[40%] flex items-center justify-end pr-2">
        <Image width={450} height={450} alt='Former' src='/former.png' />
      </div>

      {/* ----------------------------------Right Side -------------------------------------------- */}

      
    </div>
  )
}

export default Home
