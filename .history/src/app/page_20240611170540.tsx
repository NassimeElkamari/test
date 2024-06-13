'use client'
import Image from 'next/image'
import React, { useRef } from 'react'

const Home = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (sectionRef:any) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex flex-col bg-white h-auto w-full'>

      {/* ------------------------------ Section 1 ---------------------------------- */}
      <div ref={section1Ref} className='flex h-[100vh] w-[100vw]'>
        <div className="left-side bg-[#004AAD] w-[40%] flex items-center justify-end pr-2">
          <Image width={480} height={480} alt='Former' src='/former.png' />
        </div>
        <div className="first-section right-side w-full flex-1 flex-col flex items-center justify-center">
          <div className="mb-6 w-full justify-center items-center flex-col flex">
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="text" placeholder="Nom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="text" placeholder="Prénom" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="email" placeholder="Email" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="tel" placeholder="Numero de Téléphone" />
          </div>
          <div className="w-[40%] flex items-center justify-center">
            <Image width={100} height={100} alt='Next' src='/icon.png' onClick={() => scrollToSection(section2Ref)} />
          </div>
        </div>
      </div>

      {/* ------------------------------ Section 2 ---------------------------------- */}
      <div ref={section2Ref} className='mt-5 flex h-[100vh] w-[100vw]'>
        <div className="left-side bg-[#004AAD] w-[40%] flex items-center justify-end pr-2">
          <Image width={480} height={480} alt='Préparer' src='/former.png' />
        </div>
        <div className="second-section right-side w-full flex-1 flex-col flex items-center justify-center">
          <div className="mb-6 w-[40%] flex items-center justify-center">
            <Image width={70} height={70} alt='Previous' src='/iconTop.png' onClick={() => scrollToSection(section1Ref)} />
          </div>
          <div className="mb-6 w-full justify-center items-center flex-col flex">
            <select className="w-[80%] p-3 mb-4 border rounded-xl text-black">
              <option className="text-black" value="" disabled selected>Pays</option>
              {/* Add options here */}
              <option className="text-black" value="France">France</option>
              <option className="text-black" value="Germany">Germany</option>
              <option className="text-black" value="Spain">Spain</option>
            </select>
            <select className="w-[80%] p-3 mb-4 border rounded-xl text-black">
              <option className="text-black" value="" disabled selected>Ville</option>
              {/* Add options here */}
              <option className="text-black" value="Paris">Paris</option>
              <option className="text-black" value="Berlin">Berlin</option>
              <option className="text-black" value="Madrid">Madrid</option>
            </select>
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="text" placeholder="Nom d'entreprise" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="text" placeholder="Taille de l'entreprise" />
          </div>
          <div className="w-[40%] flex items-center justify-center">
            <Image width={100} height={100} alt='Next' src='/icon.png' onClick={() => scrollToSection(section3Ref)} />
          </div>
        </div>
      </div>

      {/* ------------------------------ Section 3 ---------------------------------- */}
      <div ref={section3Ref} className='mt-5 flex h-[100vh] w-[100vw]'>
        <div className="left-side bg-[#004AAD] w-[40%] flex items-center justify-end pr-2">
          <Image width={480} height={480} alt='Développer' src='/former.png' />
        </div>
        <div className="third-section right-side w-full flex-1 flex-col flex items-center justify-center">
          <div className="mb-6 w-[40%] flex items-center justify-center">
            <Image width={70} height={70} alt='Previous' src='/iconTop.png' onClick={() => scrollToSection(section2Ref)} />
          </div>
          <div className="mb-6 w-full justify-center items-center flex-col flex">
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="number" placeholder="Nombre de personnes à former" />
            <input className="w-[80%] p-3 mb-4 border rounded-xl text-black" type="text" placeholder="Titre de formation" />
            <textarea className="w-[80%] p-3 mb-4 border rounded-xl text-black" placeholder="Quels sont les besoins en formation ? (Facultatif)"></textarea>
          </div>
          <div className="w-[80%] flex justify-end">
            <button className="border- border-blue-500 text-blue-500 p-3 rounded-xl">S'inscrire</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
