'use client'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='container flex bg-white h-[100vh] w-[100vw]'>

      {/* ----------------------------------Left Side -------------------------------------------- */}

      <div className="left-side bg-[#004AAD] flex-1 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">Former</h1>
          <p className="text-lg">Formez l'ensemble de votre personnel avec plus de 24 000 cours en 15 langues</p>
        </div>
      </div>

      {/* ----------------------------------Right Side -------------------------------------------- */}

      <div className="right-side flex-1 flex items-center justify-center">
        <div className="p-8 w-full max-w-md">
          <div className="mb-6">
            <input className="w-full p-3 mb-4 border rounded" type="text" placeholder="Nom" />
            <input className="w-full p-3 mb-4 border rounded" type="text" placeholder="Prénom" />
            <input className="w-full p-3 mb-4 border rounded" type="email" placeholder="Email" />
            <input className="w-full p-3 mb-4 border rounded" type="tel" placeholder="Numero de Téléphone" />
          </div>
          <div className="flex justify-center">
            <button className="p-3 bg-blue-500 text-white rounded">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
