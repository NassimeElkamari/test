import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='container flex '>

      {/* ----------------------------------Left Side -------------------------------------------- */}

      <div className="left-side">
        <Image width={100} height={100} alt='' src=''/>
      </div>

      {/* ----------------------------------Right Side -------------------------------------------- */}

      <div className="right-side">
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
