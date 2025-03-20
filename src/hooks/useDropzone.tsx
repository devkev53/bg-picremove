import { useState } from "react"
import styles from '../components/Dropzone/styles.module.css'

export const useCustomDropzone = (inputRef?:React.RefObject<HTMLInputElement>) => {
  const [image, setImage] = useState<File|null>(null)

  const handleDragOver:React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    e.currentTarget.classList.add(`${styles.dropActive}`)
  }
  const handleDrop:React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
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