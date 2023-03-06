import { useEffect, useContext } from "react";
import { ImageContext } from "../context/imageContext";

export const useImageContext = () => {
  const {
    imageStatus, setImageStatus,
    originalImage, setOriginalImage,
    modifiedImage, setmodifiedImage,
    previewImage, setPreviewImage
  } = useContext(ImageContext)

  return {
    imageStatus,
    setImageStatus,
    modifiedImage,
    setmodifiedImage,
    originalImage,
    setOriginalImage,
    previewImage,
    setPreviewImage
  }
}