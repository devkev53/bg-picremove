import styles from './styles.module.css'
import { saveAs } from 'file-saver';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { SnackbarProvider} from 'notistack'
import { SnackbarUtilitiesConfigurator } from '../../utilities/snackbar-manager'


import UploadForm from '../../components/StepUpload'
import StepEdit from '../../components/StepEdit'

import { useImageContext } from '../../hooks/useImageContext';
import { useEffect } from 'react';
import { useHandleImage } from '../../hooks/useHandleImage';
import { image_status_types } from '../../models/image-status.model';
import DownloadIcon from '@mui/icons-material/Download';
import { Dropzone } from '../../components/Dropzone/Dropzone';
import { UploadingStep } from '../../components/UploadingStep/UploadingStep';
import { EeffectsApplicator } from '../../components/EeffectsApplicator/EeffectsApplicator';
import BackspaceIcon from '@mui/icons-material/Backspace';


const index = () => {
   const {imageStatus, modifiedImage,} = useHandleImage()
  
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
              <h3>Background Remove</h3>
            </div>
            {imageStatus===image_status_types.READY && (
              <>
                {/* <OptionEffectsWrapper/> */}
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
            <button><span>Delete Imagen and modify other..!</span><i><BackspaceIcon/></i></button>
          </div>
        </article>

      </main>
    </div>
    </SnackbarProvider>
  );
}

export default index;