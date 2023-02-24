import { useEffect, useState } from "react";
import CircluarProgressWithLable from './CircularProgressWithLabel'

import styles from './fileUpload.module.css'

export interface FileUploadWithProgressI {
  file: File
}
const FileUploadProgress = ({file}: FileUploadWithProgressI) => {
  const [progress, setProgress] = useState(0)
  const [isloaded, setIsLoaded] = useState(false)

  const upload = async() => {
    const url = await uploadFile(file, setProgress)
    console.log('url', url)
  }

  const uploadFile = (file:File, onProgress: (precentaje:number) => void) => {
    const url = 'https://api.cloudinary.com/v1_1/dn83qw1rq/image/upload'
    const key = '267945431327545'

    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest()
      xhr.open('POST', url)
      xhr.onload = () => {
        const resp = JSON.parse(xhr.responseText)
        res(resp.secure_url)
        setIsLoaded(true)
      }
      xhr.onerror = (event) => rej(event)
      xhr.upload.onprogress = (event) => {
        if(event.lengthComputable) {
          const precentage = (event.loaded/event.total)*100
          onProgress(Math.round(precentage))
        }
      }
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'ml_default')
      formData.append('timestamp', (Date.now() /1000).toString())
      formData.append('key', key)

      xhr.send(formData)
    })
  }

  useEffect(()=>{
    upload()
    progress === 100 && setIsLoaded(true)
  },[])

  return (
    <picture className={`${styles.picture} ${isloaded ? '' : styles.loading}}`}>
      <div className={styles.loadInformation}>
        <div className="loading">Loading</div>
        <div className="ok"></div>
      </div>
      <div className={styles.imgInfo}>
        <p><strong>{file.size} </strong>MB</p>
        <p>{file.path}</p>
      </div>
      <img className={`${isloaded ? '' : styles.loading} ${styles.img}`} key='file' src={file.preview} alt={file.path} />
    </picture>
  );
}

export default FileUploadProgress;