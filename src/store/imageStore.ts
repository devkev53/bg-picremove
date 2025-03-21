import { create } from "zustand";
import { image_status_types } from "../models/image-status.model"

interface ImageStoreI {
  image: File|null,
  setImage: (image:File|null) => void,
  imageStatus: number|null,
  setImageStatus: (imageStatus:number|null) => void
  imagePublicId: string|null,
  setImagePublicId: (imagePublicId: string|null) => void,
  originalImage: string|undefined,
  setOriginalImage: (originalImage: string|undefined )  => void,
  previewImage:string|null|undefined,
  setPreviewImage: (previewImage: string|null|undefined )  => void,
  modifiedImage: string|null|undefined,
  setModifiedImage: (modifiedImage: string|null|undefined )  => void
}

export const imageStore = create<ImageStoreI>((set) => ({
  image: null,
  setImage: (image: File|null) => set({image}),
  imageStatus: image_status_types.EXPECTING,
  setImageStatus: (imageStatus:number|null) => set({imageStatus}),
  imagePublicId: null,
  setImagePublicId: (imagePublicId: string|null) => set({imagePublicId}),
  originalImage: "",
  setOriginalImage: (originalImage: string|undefined )  => set({originalImage}),
  previewImage: null,
  setPreviewImage: (previewImage: string|null|undefined )  => set({previewImage}),
  modifiedImage: null,
  setModifiedImage: (modifiedImage: string|null|undefined )  => set({modifiedImage})
}))