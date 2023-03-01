import 'animate.css';
import 'two-up-element'
import { useImageContext } from "../../hooks/useImageContext";
import { useEffect, useRef, useState } from "react";
import { SnackbarUtilities } from "../../utilities/snackbar-manager";
import { image_status_types } from '../../models/image-status.model';
import CloseIcon from '@mui/icons-material/Close';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

import styles from './styles.module.css'

const index = () => {
  const [processImg, setProcessImg] = useState(true)
  const [tries, setTries] = useState(0)
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
    SnackbarUtilities.success('Ahora puedes descargar tu imagen..!')
  }

  useEffect(()=>{
    SnackbarUtilities.info('Se esta procesando la imagen..!')
  },[])


  useEffect(()=>{
    if (processImg) {
      intervalTrie = setInterval(() => {
        setTries(tries + 1)
      }, 500)
    }
    return () => clearInterval(intervalTrie)
  })

  return (
    <div className='flex flex-col items-center justify-center'>
      <picture className={styles.imagesContainer}>
      <div className={styles.resetImg}>
        <button className='text-white' onClick={handleResetImage}><CloseIcon/></button>
      </div>
        {processImg ? (
          <>
          <div className={`${styles.skeleton} mb-4`}>
            <img src={previewImage} alt="Imagen Original" />
            <img
              onLoad={handleLoadOk}
              onError={() => setProcessImg(true)}
              className={`mx-auto ${styles.previewMofifyImg}`} src={`${modifiedImage}t=${tries}`} alt="Remove Background Image" 
            />
            <div><p>Removiendo el fondo de la imagen..!</p></div>
            <div className={styles.containerSpin}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          </>
        ) : (<>
          <two-up className='animate__animated animate__fadeIn'>
          <img src={originalImage} alt="Imagen Original" className='animate__animated animate__fadeIn' />
          <img
            onLoad={() => setProcessImg(false)}
            onError={() => setProcessImg(true)}
            className="animate__animated animate__fadeIn mx-auto" src={`${modifiedImage}t=${tries}`} alt="Remove Background Image" 
          />
          </two-up>

        </>)}
      </picture>
      <div className="mt-6">
        <a
          className='bg-blue-500 p-2 px-4 text-white rounded-full hover:bg-blue-600'
          download href={modifiedImage} disabled={!processImg}
        >
          <DownloadForOfflineIcon/>
          Descargar
        </a>
      </div>
    </div>
  );
}

export default index;