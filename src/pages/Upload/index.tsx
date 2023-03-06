import styles from './styles.module.css'
import { saveAs } from 'file-saver';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { SnackbarProvider} from 'notistack'
import { SnackbarUtilitiesConfigurator } from '../../utilities/snackbar-manager'


import UploadForm from '../../components/StepUpload'
import StepEdit from '../../components/StepEdit'

import { useImageContext } from '../../hooks/useImageContext';


const index = () => {
  const {imageStatus, modifiedImage} = useImageContext()
  const downloadImg = () => {
    saveAs(modifiedImage, 'image.png')
  }
  
  return (
    <SnackbarProvider>
    <SnackbarUtilitiesConfigurator />
    <div className={styles.uploadContainer}>
      <main className={styles.mainContainer}>
        <article className={styles.articleContainer}>
          { imageStatus === 2 || imageStatus === 3 
            ? (<>
              <StepEdit />
              <div className={styles.rightSide}>
                <h3>Remove Background</h3>
                { imageStatus === 3 && (
                  <button onClick={downloadImg} className={styles.downloadBtn}>
                    <DownloadForOfflineIcon fontSize='large'/>
                    Download
                  </button>
                )}
              </div>
            </>)
            : (<>
              <UploadForm />
              <div className={styles.rightSide}>
                <h3>Remove Background</h3>
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