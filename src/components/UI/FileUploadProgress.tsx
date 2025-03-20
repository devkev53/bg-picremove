import { useEffect, useState } from "react";
import CircluarProgressWithLable from './CircularProgressWithLabel'
import { useImageContext } from "../../hooks/useImageContext";
import { image_status_types } from "../../models/image-status.model";
import { Cloudinary } from '@cloudinary/url-gen'
import {backgroundRemoval, cartoonify} from '@cloudinary/url-gen/actions/effect'
import ProgressBar from "./ProgressBar";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { uploadImageService } from "../../services/upload-image.service";

import styles from './fileUpload.module.css'
import { preview } from "@cloudinary/url-gen/actions/videoEdit";
import Spiner from '../../components/UI/Spiner'
import { addEeffect, removeBg } from "../../utilities/effects-cloudinary";
import { MyFileI } from "../../models/image-status.model";
import { useImageStore } from "../../context/imageContext";

export interface FileUploadWithProgressI {
  file: MyFileI,
  isRemove: Boolean
}
const FileUploadProgress = ({file, isRemove}: FileUploadWithProgressI) => {
  const [progress, setProgress] = useState(0)
  const [isloaded, setIsLoaded] = useState(false)

  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: 'dn83qw1rq'
    },
    url: {
      secure:true
    }
  })


  const {
    imageStatus,
    originalImage,
    setImageStatus,
    setOriginalImage,
    setModifiedImage,
    setPreviewImage,
    imagePublicId,
    setImagePublicId
  } = useImageStore()

  const upload = async () => {
    const resp = await uploadImageService(file, setProgress)
    const {data} = resp
    const {secure_url} = data
    const {public_id} = data

    // Setting Public ID image to Cloudinary
    setImagePublicId(public_id)
    if (secure_url && public_id) {
      setProgress(100)
      setIsLoaded(true)
      setOriginalImage(secure_url)

      console.log(`Is Remove?: ${isRemove}`)
      if (isRemove) {
        const imageWithRemoveBg = removeBg(public_id)
      } else {
        setImageStatus(image_status_types.DONE)
      }
    }
  }

  useEffect(()=>{
    setImageStatus(image_status_types.UPLOADING)
    upload()
    setPreviewImage(file.preview)
  },[])

  return (
    <>
      {imageStatus === image_status_types.UPLOADING && (
        <picture className={styles.uploading}>
          {progress !== 100
            ? (
              // <ProgressBar progress={progress} />
              <Spiner label='Uploading Image..!' />
            )
            : (
              <div className={styles.endProgress}>
                <CheckCircleIcon sx={{ fontSize: 150 }} />
              </div>
            )
          }
          <img src={file.preview} alt="upload image" />
        </picture>
      )}
      {imageStatus === image_status_types.DONE && (
        <img src={originalImage} />
      )}
    </>
  );
}

export default FileUploadProgress;