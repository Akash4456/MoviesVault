import React from 'react'
import image from '../assets/moviesKGF.jpg'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end' style={{backgroundImage : `url(${image})`}}>
        <div className='text-white text-xl text-center w-full bg-gray-900/60 p-4'>
            ಕೆಜಿಎಫ್ ಅಧ್ಯಾಯ ೧
        </div>
    </div>
  )
}

export default Banner

//"C:\Users\Akash S R\Documents\MovieVault\vite\src\assets\moviesKGF.jpg"