import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'

import CloudinaryLogo from './components/Icons/CloudinaryLogo'
import StepUpload from './components/StepUpload'

function App() {

  return (
    <div className='max-w-xl m-auto grid grid-cols-1 place-content-center w-full h-screen p-4'>
      <header className='flex justify-center py-10'>
        <h1 className='text-3xl font-bold text-blue-900 tracking-tighter'>BG-<span className='text-blue-600'>PicRemove</span></h1>
      </header>

      <main>
        <StepUpload />
      </main>

      <footer className='flex justify-center items-center gap-x2 font-semibold pt-10'>Realizado con
        <a href='https://cloudinary' target='_black' rel='noreferrer'><CloudinaryLogo props=""/>
      </a></footer>
    </div>
  )
}

export default App
