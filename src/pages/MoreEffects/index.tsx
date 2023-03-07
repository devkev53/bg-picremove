import styles from './styles.module.css'
import UploadEffects from '../../components/UploadEffects'
import { useImageContext } from '../../hooks/useImageContext';
import { image_status_types } from '../../models/image-status.model';
import { useEffect, useState } from 'react';

const index = () => {
  const {imageStatus} = useImageContext()



  console.log(imageStatus)
  return (
    <div className={styles.moreEffectsContainer}>
      <main className={styles.mainContainer}>
        { imageStatus === 2 || imageStatus === 3 
        ? (<>
          <div className={styles.titleContainer}>
            <h3>More Effects</h3>
          </div>
          <div className="styles.effects">
            <button>Cartoonfy</button>
          </div>
        </>)
        :(<>
          <div className={styles.titleContainer}>
            <h3>More Effects</h3>
          </div>
          <div className="styles left">
            <UploadEffects />
          </div>
        </>)
        }
      </main>
    </div>
  );
}

export default index;