import { Link } from 'wouter';
import exampleVideo from '../../assets/example.mp4'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import styles from './styles.module.css'

const index = () => {
  return (
    <div className={styles.homeContainer}>
      <main className={styles.homeMain}>
        <article className={styles.articleOne}>
          <picture className={styles.homeLogo}><span>BG-PicRemove</span></picture>
          <div className={styles.homeText}>
            <h3>Remove the backgroun with this app</h3>
            <p>Easily remove the background from your images and edit them with this web application, thanks to the artificial intelligence provided by <a href="">cloudinary</a></p>
            <Link href='/upload'>
              <a className={styles.tryBtn}>
                <span>
                  Try Now.!
                </span>
              </a>
            </Link>
          </div>
          <video autoPlay loop muted className={styles.homeVideo}>
            <source src={exampleVideo} type='video/mp4' />
          </video>
        </article>

        <article className={styles.articleTwo}>
          <div></div>
        </article>
      </main>
    </div>
  );
}

export default index;