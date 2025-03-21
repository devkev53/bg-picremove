
import { useEffect, useRef } from 'react'
import { image_status_types } from '../../models/image-status.model'
import { useHandleImage } from '../../hooks/useHandleImage'
import { useHandleCloudinary } from '../../hooks/useHandleCloudinary'

import styles from './styles.module.css'

export const UploadingStep = ({isRemove}:{isRemove?:Boolean}) => {
  const imgPreview = useRef<HTMLImageElement>(null)
  const {useImage, setImageStatus} = useHandleImage()
  const {progress, handleUpload, isloaded} = useHandleCloudinary()
  
  const showPreview = async () => {
    if (useImage) {
      const reader = new FileReader()
      reader.readAsDataURL(useImage)
      reader.onload = (e) => {
        imgPreview.current?.setAttribute('src', `${e.target?.result}`)
      }
      setImageStatus(image_status_types.UPLOADING)
    }
  }
  

  useEffect(()=>{
    showPreview()
    useImage !== null && handleUpload(useImage)
  },[isloaded])

  return (
    <div
      className={styles.uploadDiv}
    >
      <picture>
        <div className={styles.uploadingCheck}>
          <span>Uploading Image</span>
        </div>
        <img ref={imgPreview} className="imgPreview" id='preview' src=""  alt="preview" />
      </picture>
    </div>
  )
}
