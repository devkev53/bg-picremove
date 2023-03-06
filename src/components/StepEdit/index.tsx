import 'animate.css';
import 'two-up-element'
import { useLocation } from "wouter";
import { useImageContext } from "../../hooks/useImageContext";
import { useEffect, useRef, useState } from "react";
import { SnackbarUtilities } from "../../utilities/snackbar-manager";
import { image_status_types } from '../../models/image-status.model';
import CloseIcon from '@mui/icons-material/Close';
import Spiner from '../../components/UI/Spiner'


import styles from './styles.module.css'

const index = () => {
  const [location, setLocation] = useLocation();
  const [processImg, setProcessImg] = useState(true)
  const [tries, setTries] = useState<number>(0)
  const {
    originalImage, modifiedImage, previewImage, setImageStatus,
    setOriginalImage, setmodifiedImage, setPreviewImage
  } = useImageContext()
  const imgRef = useRef()

  let intervalTrie:any

  const handleResetImage = () => {
    setOriginalImage(null)
    setPreviewImage(null)
    setmodifiedImage(null)
    setImageStatus(image_status_types.READY)
  }

  const handleLoadOk = () => {
    setProcessImg(false)
    SnackbarUtilities.success('Now you can download your image..!')
  }

  useEffect(()=>{
    SnackbarUtilities.info('Image is being processed..!')
  },[])

  useEffect (() => {
    if (tries > 200) {
      SnackbarUtilities.error('Sorry, An internal error occurred..!')
      handleResetImage()
      setTimeout(() => {
        setLocation("/")
      }, 2000);
    }
  },[tries])

  const handleImageProcess = () => {
    setProcessImg(true)
    setImageStatus(image_status_types.DOWNLOAD)
  }


  useEffect(()=>{
    if (processImg) {
      intervalTrie = setInterval(() => {
        setTries(tries + 1)
      }, 500)
    }
    return () => clearInterval(intervalTrie)
  })

  return (
    <form className={styles.formContainer}>
      <picture className={styles.editImage}>
        {processImg 
          ?(<>
            <Spiner label='Removing Background..!' />
            <img src={previewImage} alt="" className="styles preview" />
            <img
              onLoad={handleLoadOk}
              onError={() => handleImageProcess()}
              src={`${modifiedImage}t=${tries}`} alt="" className={styles.processImage} />
          </>)
          :(<>
            <button
              onClick={handleResetImage} 
              className={styles.newImgButton}>
                <CloseIcon fontSize='large'/>
            </button>
            <two-up>
              <img src={previewImage} alt="" className="styles preview" />
              <img
                onLoad={handleLoadOk}
                onError={() => handleImageProcess()}
                src={`${modifiedImage}t=${tries}`} alt="" className="styles processImage" />
            </two-up>
          </>)
        }
      </picture>
    </form>

    // <div className='flex flex-col items-center justify-center'>
    //   <picture className={styles.imagesContainer}>
    //   <div className={styles.resetImg}>
    //     <button className='text-white' onClick={handleResetImage}><CloseIcon/></button>
    //   </div>
    //     {processImg ? (
    //       <>
    //       <div className={`${styles.skeleton} mb-4`}>
    //         <img src={previewImage} alt="Imagen Original" />
    //         <img
    //           onLoad={handleLoadOk}
    //           onError={() => setProcessImg(true)}
    //           className={`mx-auto ${styles.previewMofifyImg}`} src={`${modifiedImage}t=${tries}`} alt="Remove Background Image" 
    //         />
    //         <div><p>Removiendo el fondo de la imagen..!</p></div>
    //         <div className={styles.containerSpin}>
    //           <span></span>
    //           <span></span>
    //           <span></span>
    //         </div>
    //       </div>
    //       </>
    //     ) : (<>
    //       <two-up className='animate__animated animate__fadeIn'>
    //       <img src={originalImage} alt="Imagen Original" className='animate__animated animate__fadeIn' />
    //       <img
    //         onLoad={() => setProcessImg(false)}
    //         onError={() => setProcessImg(true)}
    //         className="animate__animated animate__fadeIn mx-auto" src={`${modifiedImage}t=${tries}`} alt="Remove Background Image" 
    //       />
    //       </two-up>

    //     </>)}
    //   </picture>
    //   <div className="mt-6">
    //     <a
    //       className='bg-blue-500 p-2 px-4 text-white rounded-full hover:bg-blue-600'
    //       download href={modifiedImage} disabled={!processImg}
    //     >
    //       <DownloadForOfflineIcon/>
    //       Descargar
    //     </a>
    //   </div>
    // </div>
  );
}

export default index;