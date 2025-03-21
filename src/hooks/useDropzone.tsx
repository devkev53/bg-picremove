import { useState } from "react"
import styles from '../components/Dropzone/styles.module.css'
import { SnackbarUtilities } from "../utilities/snackbar-manager";

export const useCustomDropzone = (inputRef?:React.RefObject<HTMLInputElement>) => {
  let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.tiff|\.tif)$/i;
  const [image, setImage] = useState<File|null>(null)

  const handleDragOver:React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    e.currentTarget.classList.add(`${styles.dropActive}`)
  }
  const handleDrop:React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (!allowedExtensions.exec(e.dataTransfer.files[0].name)){
      SnackbarUtilities.error("This format is no valid! Please change Image")
      return null
    }
    setImage(e.dataTransfer.files[0])
  }
  const handleDragLeave:React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    e.currentTarget.classList.remove(`${styles.dropActive}`)
  }
  const handleDropzoneClick = () => {
    inputRef !== undefined && inputRef.current?.click()
  }

  return {
    handleDragLeave,
    handleDrop,
    handleDragOver,
    handleDropzoneClick,
    image,
    setImage
  }
}