import { ChangeEventHandler, useEffect, useRef } from 'react'
import { useCustomDropzone } from '../../hooks/useDropzone'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

import FileUploadProgress from '../UI/FileUploadProgress';
import { useHandleImage } from '../../hooks/useHandleImage';
import { image_status_types } from '../../models/image-status.model';

import styles from './styles.module.css'
import { SnackbarUtilities } from '../../utilities/snackbar-manager';

export const Dropzone = () => {
  const imgPreview = useRef<HTMLImageElement>(null)
  const imgInput = useRef<HTMLInputElement>(window.document.createElement("input"))

  const {
    image,
    setImage,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleDropzoneClick
  } = useCustomDropzone(imgInput)
  const {setUseImage, setImageStatus,imageStatus} = useHandleImage()

  const handleInputChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
      setUseImage(e.target.files[0])
      const reader = new FileReader()
      reader.onload = (e) => {
        imgPreview.current?.setAttribute('src', `${e.target?.result}`)
      }
      reader.readAsDataURL(e.target.files[0])
      setImageStatus(image_status_types.READY)
    }
  }

  const showPreview = () => {
    const dataTransfer = new DataTransfer()
    if (image && imgInput) {
      setUseImage(image)
      dataTransfer.items.add(image)
      imgInput.current.files = dataTransfer.files
      const reader = new FileReader()
      reader.onload = (e) => {
        imgPreview.current?.setAttribute('src', `${e.target?.result}`)
      }
      reader.readAsDataURL(imgInput.current.files[0])
      setImageStatus(image_status_types.UPLOADING)
    }
  }

  useEffect(() => {
    console.log("Image in Dropzone")
    showPreview()
    if (image!==null) {
      SnackbarUtilities.info("Start uploading the image to Cloudinary!")
      setImageStatus(image_status_types.UPLOADING)
    }
  },[image])


  return (
    <div
      className={styles.uploadDiv}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      onClick={handleDropzoneClick}
    >
      {image === null
        ? (
          <>
            <button className={styles.uploadButton}>
              <DriveFolderUploadIcon fontSize="large" className='mr-2' />
              <span>Upload Image</span>
            </button>
            <strong className={styles.small}>or drag in the box</strong>
          </>
        )
        : ( imageStatus === image_status_types.READY && (
          // Upload Image
          <>
            <picture>
              <img ref={imgPreview} className="imgPreview" id='preview' src=""  alt="preview" />
            </picture>
          </>
        ))
      }
      <input
        id='imgInput'
        ref={imgInput}
        type="file"
        name='image'
        onChange={handleInputChange}
      />
    </div>
  )
}

