import { useState } from "react"
import { uploadImageService } from "../services/upload-image.service"
import { useHandleImage } from "./useHandleImage"
import { image_status_types } from "../models/image-status.model"
import { SnackbarUtilities } from "../utilities/snackbar-manager"

export const useHandleCloudinary = () => {
  const [progress, setProgress] = useState(0)
  const [isloaded, setIsLoaded] = useState(false)

  const {setImagePublicId, setOriginalImage, setImageStatus} = useHandleImage()

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
      setImageStatus(image_status_types.READY)
      SnackbarUtilities.success("Image ready to apply effects")
    }
    return data.status
  }
  return {
    handleUpload,
    progress,
    isloaded
  }
}