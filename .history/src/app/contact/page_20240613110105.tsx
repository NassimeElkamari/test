import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div  className='flex h-[100vh] w-[100vw] bg-white'>
        <div className="left-side bg-[#004AAD] w-[40%] flex flex-col items-center justify-end pr-2">
          <Image width={480} height={480} alt='Former' src='/Peerfect.png' />
          
        </div>
        <div className="first-section right-side w-full flex-1 flex-col flex items-center justify-center">
          <div className="mb-6 w-full justify-center items-center flex-col flex">
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="text" placeholder="Nom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="text" placeholder="Prénom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="email" placeholder="Email" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="tel" placeholder="Numero de Téléphone" />
          </div>
          
        </div>
      </div>
  )
}

export default Contact
