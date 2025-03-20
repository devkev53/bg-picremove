import axios from 'axios'
import { Cloudinary } from '@cloudinary/url-gen'
import React from 'react'

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dn83qw1rq/image/upload'
const CLOUDINARY_KEY = '267945431327545'

export const uploadImageService = async (file:File, onProgress:(porcenjate:number) => void) => {

  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'ml_default')
  formData.append('timestamp', (Date.now() /1000).toString())
  formData.append('key', CLOUDINARY_KEY)

  const resp = await axios.post(CLOUDINARY_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress(e:any) {
      const porcenjate = Math.floor((e.loaded * 100) / e.total)
      onProgress(porcenjate)
    }
  })
  return resp
}