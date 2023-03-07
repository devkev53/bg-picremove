import { useEffect, useState } from "react";
import { useFileUpload } from "../../hooks/useFileUpload";

import { FileUploadWithProgressI } from "../../hooks/useFileUpload";
import { useImageContext } from "../../hooks/useImageContext";
import { image_status_types } from "../../models/image-status.model";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Spiner from '../../components/UI/Spiner'

import styles from './styles.module.css'


const index = ({file}: FileUploadWithProgressI) => {
  const {upload, addEffect, progress, setIsLoaded, isLoaded} = useFileUpload(file)
  const {
    imageStatus, originalImage, 
    setImageStatus, setOriginalImage, 
    setmodifiedImage, setPreviewImage
  } = useImageContext()
  

  useEffect(() => {
    setImageStatus(image_status_types.UPLOADING)
    const res = upload()
    // isLoaded === false && (setImageStatus(image_status_types.DONE))
    setPreviewImage(file.preview)
  },[])
  return (
    <>
      {imageStatus === image_status_types.UPLOADING && (
        <picture className={styles.uploading}>
          {progress !== 100
            ? (
              // <ProgressBar progress={progress} />
              <Spiner label='Uploading Image..!' />
            )
            : (
              <div className={styles.endProgress}>
                <CheckCircleIcon sx={{ fontSize: 150 }} />
              </div>
            )
          }
          <img src={file.preview} alt="upload image" />
        </picture>
      )}
      {imageStatus === image_status_types.DONE && (
        <img src={originalImage} />
      )}
    </>
  );
}

export default index;