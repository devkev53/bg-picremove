import styles from './styles.module.css'

import UploadForm from '../../components/StepUpload'
import { useImageContext } from '../../hooks/useImageContext';


const index = () => {
  const {imageStatus} = useImageContext()
  console.log(imageStatus)
  
  return (
    <div className={styles.uploadContainer}>
      <main className={styles.mainContainer}>
        <article className={styles.articleContainer}>
          <UploadForm />
          <div>
            <h3>Remove Background</h3>
          </div>
        </article>
      </main>
    </div>
  );
}

export default index;