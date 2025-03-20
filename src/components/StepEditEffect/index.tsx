import 'animate.css';
import 'two-up-element'
import { useLocation } from "wouter";
import { useImageContext } from "../../hooks/useImageContext";
import { useEffect, useRef, useState } from "react";
import { SnackbarUtilities } from "../../utilities/snackbar-manager";
import { image_status_types } from '../../models/image-status.model';
import CloseIcon from '@mui/icons-material/Close';
import Spiner from '../UI/Spiner'


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
    if (tries > 10) {
      SnackbarUtilities.error('Sorry, An internal error occurred..!')
      handleResetImage()
    }
  },[tries])

  const handleImageProcess = () => {
    setProcessImg(true)
    setImageStatus(image_status_types.DOWNLOAD)
  }


  useEffect(()=>{
    if (processImg) {
      intervalTrie = setInterval(() => {
        console.log(`Intento No. ${tries}`)
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

  );
}

export default index;