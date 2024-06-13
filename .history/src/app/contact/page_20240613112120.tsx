import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div  className='flex h-[100vh] w-[100vw] bg-white'>
        <div className="left-side bg-[#004AAD] w-[40%] flex flex-col items-center justify-center pr-2">
          <Image width={250} height={250} alt='Former' src='/Peerfect.png' />
          <p className='text-white font-bold text-3xl mt-12'>Contactez-nous</p>
        </div>
        <div className="first-section right-side w-full flex-1 flex-col flex items-center justify-center">
          <div className="mb-6 w-full justify-center items-center flex-col flex">
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="text" placeholder="Nom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="text" placeholder="Prénom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="email" placeholder="Email" />
            <textarea className="w-[80%] p-3 mb-4 border rounded-xl text-black" rows={8}  placeholder="Description" />
          </div>
          <div className="flex justify-center mt-8 mb-6 w-[50%] bg-white"> {/* Added justify-center class */}
        <button className="bg-black rounded-[14px] shadow-md w-[30%] text-center h-10 border border-blue-700 flex items-center justify-center">
        <h2 className="text-lg font-semibold text-blue-700">Envoyer</h2> 
        </button>
    </div>
          
        </div>
      </div>
  )
}

export default Contact
