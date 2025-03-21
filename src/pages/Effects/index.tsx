import styles from './styles.module.css'
import { saveAs } from 'file-saver';
import { SnackbarProvider} from 'notistack'
import { SnackbarUtilitiesConfigurator } from '../../utilities/snackbar-manager'

import { addImageEffects } from '../../utilities/effects-cloudinary';
import { useHandleImage } from '../../hooks/useHandleImage';
import {Dropzone} from "../../components/Dropzone/Dropzone"
import { useEffect, useState } from 'react';
import { image_status_types } from '../../models/image-status.model';
import { UploadingStep } from '../../components/UploadingStep/UploadingStep';
import { EeffectsApplicator } from '../../components/EeffectsApplicator/EeffectsApplicator';
import { useHandleEffects } from '../../hooks/useHandleEffects';
import { OptionEffectsWrapper } from '../../components/OptionEffectsWrapper/OptionEffectsWrapper';
import DownloadIcon from '@mui/icons-material/Download';
import BackspaceIcon from '@mui/icons-material/Backspace';


const index = () => {
  const {imageStatus, modifiedImage,handleClearImage} = useHandleImage()

  const downloadImg = () => {
    saveAs(modifiedImage, 'image.png')
  }

  useEffect(()=>{
    console.log(imageStatus)
  },[imageStatus])

  useEffect(() => {
    
  },[imageStatus])
  
  return (
    <SnackbarProvider>
    <SnackbarUtilitiesConfigurator />
    <div className={styles.uploadContainer}>
      <main className={styles.mainContainer}>

        <article className={styles.articleContainer}>
          <div className={styles.rightSide}>
            <div className="title">
              <h3>Add Effects</h3>
            </div>
            {imageStatus===image_status_types.READY && (
              <>
                <OptionEffectsWrapper/>
                <button className={styles.downloadBtn} onClick={downloadImg}>
                  <i><DownloadIcon/></i>
                  <span>Donwload Image</span>
                </button>
              </>
            )}
          </div>
          <div className="styles wrapper">
            {imageStatus===image_status_types.EXPECTING && (<Dropzone/>)}
            {imageStatus===image_status_types.UPLOADING && (<UploadingStep/>)}
            {imageStatus===image_status_types.READY && (<EeffectsApplicator/>)}
            <button onClick={handleClearImage}><span>Delete Imagen and modify other..!</span><i><BackspaceIcon/></i></button>
          </div>
        </article>
        
      </main>
    </div>
    </SnackbarProvider>
  );
}

export default index;