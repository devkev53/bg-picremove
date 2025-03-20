import { useState } from "react"
import { uploadImageService } from "../services/upload-image.service"
import { useHandleImage } from "./useHandleImage"

export const useHandleCloudinary = () => {
  const [progress, setProgress] = useState(0)
  const [isloaded, setIsLoaded] = useState(false)

  const {setImagePublicId, setOriginalImage} = useHandleImage()

  const handleUpload = async (file:File) => {
    const resp = await uploadImageService(file, setProgress)
    const {data} = resp
    const {secure_url} = data
    const {public_id} = data

    setImagePublicId(public_id)
    if (secure_url && public_id) {
      setProgress(100)
      setIsLoaded(true)
      setOriginalImage(secure_url)
    }

  }
  return {
    handleUpload
  }
}