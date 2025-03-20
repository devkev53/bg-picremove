import styles from './styles.module.css'
import { saveAs } from 'file-saver';
import { SnackbarProvider} from 'notistack'
import { SnackbarUtilitiesConfigurator } from '../../utilities/snackbar-manager'

import { addImageEffects } from '../../utilities/effects-cloudinary';
import { useHandleImage } from '../../hooks/useHandleImage';
import {Dropzone} from "../../components/Dropzone/Dropzone"
import { useEffect } from 'react';



const index = () => {
  const {imageStatus, modifiedImage, imagePublicId, setModifiedImage} = useHandleImage()

  const downloadImg = () => {
    saveAs(modifiedImage, 'image.png')
  }

  return (
    <SnackbarProvider>
    <SnackbarUtilitiesConfigurator />
    <div className={styles.uploadContainer}>
      <main className={styles.mainContainer}>

        <article className={styles.articleContainer}>
          <div className={styles.rightSide}>
            <h3>Add Effects</h3>
          </div>
          <Dropzone/>
        </article>

      </main>
    </div>
    </SnackbarProvider>
  );
}

export default index;