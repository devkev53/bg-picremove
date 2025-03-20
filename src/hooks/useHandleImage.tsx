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
  } = imageStore(state=>state)

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
  }
}