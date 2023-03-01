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
import { addEeffect } from "../../utilities/effects-cloudinary";
import { MyFileI } from "../../models/image-status.model";

export interface FileUploadWithProgressI {
  file: MyFileI
}
const FileUploadProgress = ({file}: FileUploadWithProgressI) => {
  const [progress, setProgress] = useState(0)
  const [isloaded, setIsLoaded] = useState(false)
  const {setPreviewImage} = useImageContext()

  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: 'dn83qw1rq'
    },
    url: {
      secure:true
    }
  })

  const {imageStatus, originalImage, setImageStatus, setOriginalImage, setmodifiedImage} = useImageContext()

  const upload = async () => {
    const resp = await uploadImageService(file, setProgress)
    const {data} = resp
    const {secure_url} = data
    const {public_id} = data
    if (secure_url && public_id) {
      setProgress(100)
      setIsLoaded(true)
      setOriginalImage(secure_url)

      // Add the efects to image
      const imageEffect = addEeffect(public_id)
      setmodifiedImage(imageEffect)
      setTimeout(() => {
        setImageStatus(image_status_types.DONE)
      }, 1000);
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
              <ProgressBar progress={progress} />
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
    // <picture className={`${styles.picture} ${isloaded ? '' : styles.loading}}`}>
    //   <div className={styles.loadInformation}>
    //     <div className="loading">Loading</div>
    //     <div className="ok"></div>
    //   </div>
    //   <div className={styles.imgInfo}>
    //     <p><strong>{file.size} </strong>MB</p>
    //     <p>{file.path}</p>
    //   </div>
    //   <img className={`${isloaded ? '' : styles.loading} ${styles.img}`} key='file' src={file.preview} alt={file.path} />
    // </picture>
  );
}

export default FileUploadProgress;