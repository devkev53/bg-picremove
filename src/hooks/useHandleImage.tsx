import { imageStore } from "../store/imageStore"

export const useHandleImage = () => {
  const {
    imageStatus,
    setImageStatus,
    imagePublicId,
    setImagePublicId,
    originalImage,
    setOriginalImage,
    previewImage,
    setPreviewImage,
    modifiedImage,
    setModifiedImage,
    image: useImage,
    setImage:setUseImage 
  } = imageStore(state=>state)

  const handleClearImage = () => {
    setImagePublicId(null)
    setOriginalImage(undefined)
    setPreviewImage(null)
    setUseImage(null)
    setImageStatus(-2)
  }

  return {
    imageStatus,
    setImageStatus,
    imagePublicId,
    setImagePublicId,
    originalImage,
    setOriginalImage,
    previewImage,
    setPreviewImage,
    modifiedImage,
    setModifiedImage,
    useImage,
    setUseImage,
    handleClearImage
  }
}