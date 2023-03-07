import { useState } from "react"
import { MyFileI } from "../models/image-status.model";
import { uploadImageService } from "../services/upload-image.service"
import { useImageContext } from "./useImageContext"
import { image_status_types } from "../models/image-status.model";


export interface FileUploadWithProgressI {
  file: MyFileI
}

export const useFileUpload = (image:FileUploadWithProgressI) => {
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  
  const {
    imageStatus, originalImage, 
    setImageStatus, setOriginalImage, 
    setmodifiedImage, setPreviewImage
  } = useImageContext()
  
  const upload = async () => {
    const resp = await uploadImageService(image, setProgress)
    const {data} = resp
    const {secure_url, public_id} = data
    console.log(secure_url)
    setOriginalImage(secure_url)
    setTimeout(() => {
      setImageStatus(image_status_types.DONE)
    }, 1000);
    return {secure_url, public_id}
  }

  const addEffect = (type:number) => {
    console.log(type)
  }

  return {
    upload,
    addEffect,
    progress,
    setIsLoaded,
    isLoaded
  }

}