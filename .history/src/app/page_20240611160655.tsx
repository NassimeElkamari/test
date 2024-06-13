'use client'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='container flex bg-white h-[100vh] w-[100vw]'>

      {/* ----------------------------------Left Side -------------------------------------------- */}

      <div className="left-side bg-[#004AAD] flex-1">
        <Image width={100} height={100} alt='' src='/image.png'/>
      </div>

      {/* ----------------------------------Right Side -------------------------------------------- */}

      <div className="right-side left-side bg-[#ffffff] flex-1">
        <div className="first-section">

        </div>
        <div className="second-section">

        </div>
        <div className="third-section">

        </div>
      </div>
    </div>
  )
}

export default Home
