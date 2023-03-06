import { createContext, ReactElement, ReactNode, useState } from "react"
import { image_status_types } from "../models/image-status.model"

export const ImageContext = createContext({})

export const ImageContexProvider = ({children}:{children:ReactNode}):ReactElement => {
  const [imageStatus, setImageStatus] = useState(image_status_types.READY)
  const [originalImage, setOriginalImage] = useState(null)
  const [modifiedImage, setmodifiedImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)

  return (
    <ImageContext.Provider value={{
      imageStatus, setImageStatus,
      originalImage, setOriginalImage,
      modifiedImage, setmodifiedImage,
      previewImage, setPreviewImage
    }}>
      {children}
    </ImageContext.Provider>
  )
}