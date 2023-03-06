import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useImageContext } from './hooks/useImageContext'
import { SnackbarProvider} from 'notistack'

// import './App.css'

import CloudinaryLogo from './components/Icons/CloudinaryLogo'
import StepUpload from './components/StepUpload'
import StepEdit from './components/StepEdit'
import { image_status_types } from './models/image-status.model'
import { SnackbarUtilitiesConfigurator } from './utilities/snackbar-manager'

function App() {

  const {imageStatus} = useImageContext()

  return (
    <div className='max-w-xl m-auto grid grid-cols-1  w-full h-screen p-4'>
      <header className='flex justify-center'>
        <h1 className='text-3xl font-bold text-blue-900 tracking-tighter'>BG-<span className='text-blue-600'>PicRemove</span></h1>
      </header>

      <SnackbarProvider>
      <SnackbarUtilitiesConfigurator />
        <main className='w-full block m-auto content-center'>
          {imageStatus === image_status_types.READY || imageStatus === image_status_types.UPLOADING
            ? <StepUpload />
            : <StepEdit />
          }
        </main>
      </SnackbarProvider>

      <footer className=''>Realizado con
        <a href='https://cloudinary' target='_black' rel='noreferrer'><CloudinaryLogo props=""/>
      </a></footer>
    </div>
  )
}

export default App
