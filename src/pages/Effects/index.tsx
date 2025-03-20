import styles from './styles.module.css'
import { saveAs } from 'file-saver';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { SnackbarProvider} from 'notistack'
import { SnackbarUtilitiesConfigurator } from '../../utilities/snackbar-manager'
import { image_status_types } from '../../models/image-status.model';


import UploadForm from '../../components/StepUpload'
import StepEditEffects from '../../components/StepEditEffect'

import { useImageContext } from '../../hooks/useImageContext';
import { useImageStore } from '../../context/imageContext';
import { useEffect, useState } from 'react';
import { cartoonify } from '@cloudinary/url-gen/actions/effect';
import { addImageEffects } from '../../utilities/effects-cloudinary';
import { useHandleEffects } from '../../hooks/useHandleEffects';



const index = () => {
  // const {imageStatus, modifiedImage} = useImageContext()
  const {imageStatus, modifiedImage, imagePublicId, setModifiedImage} = useImageStore()
  // const [effectsList, setEffectsList] = useState<Array<string>>([""])
  const {effectList, handleGray, handlePixelate, handleCartoonify} = useHandleEffects()

  const downloadImg = () => {
    saveAs(modifiedImage, 'image.png')
  }

  const handleApplyEffects = async () => {
    if (imagePublicId !== null){
      const imageWithEffects = await addImageEffects(imagePublicId, effectList)
      setModifiedImage(imageWithEffects)
    }
  }

  useEffect(() => {
    handleApplyEffects()
  },[effectList])

  useEffect(()=>{
    console.log(imageStatus)
  },[imageStatus])

  return (
    <SnackbarProvider>
    <SnackbarUtilitiesConfigurator />
    <div className={styles.uploadContainer}>
      <main className={styles.mainContainer}>

        <article className={styles.articleContainer}>
          { imageStatus === image_status_types.DONE || imageStatus === image_status_types.DOWNLOAD
            ? (<>
              <StepEditEffects />
              <div className={styles.rightSide}>
                <h3>Apply Effects</h3>
                { imageStatus === image_status_types.DOWNLOAD && (
                  <>
                  <div className="effectsList">
                    <button onClick={handleGray}>Gray Scale</button>
                    <button onClick={handleCartoonify}>Cartoonify</button>
                    <button onClick={handlePixelate}>Pixelate</button>
                    <button>Sepia</button>
                  </div>
                  <button onClick={downloadImg} className={styles.downloadBtn}>
                    <DownloadForOfflineIcon fontSize='large'/>
                    Download
                  </button>
                  </>
                )}
              </div>
            </>)
            : (<>
              <UploadForm isRemove={false} />
              <div className={styles.rightSide}>
                <h3>Apply Effects</h3>
              </div>
            </>)
          }
        </article>

      </main>
    </div>
    </SnackbarProvider>
  );
}

export default index;