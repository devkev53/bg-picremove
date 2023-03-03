import { Link } from 'wouter';
import exampleVideo from '../../assets/example.mp4'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import DownloadingIcon from '@mui/icons-material/Downloading';

import Example from '../../containers/ExampleHome'

import styles from './styles.module.css'

const index = () => {
  return (
    <div className={styles.homeContainer}>
      <main className={styles.homeMain}>
        <article className={styles.articleOne}>
          <picture className={styles.homeLogo}><span>BG-PicRemove</span></picture>
          <div className={styles.homeText}>
            <h3>Remove the backgroun with the best free app</h3>
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
          <div className={styles.containerArticle2}>
            <h3 className={styles.how}>
              How to use the
              <span>BG-PicRemove</span>
            </h3>

            <div className={styles.cardsContainer}>

              <div className={styles.cardGuide}>
                <div className="icon">
                  <UploadFileIcon sx={{ fontSize: 60 }} />
                </div>
                <div className="text">
                  <h3>1. Upload</h3>
                  <p>For best results, the subject or object you want to remove the background from should have well-defined edges.</p>
                </div>
              </div>

              <div className={styles.cardGuide}>
                <div className="icon">
                  <WallpaperIcon sx={{ fontSize: 60 }} />
                </div>
                <div className="text">
                  <h3>2. Remove</h3>
                  <p>When you upload your image, cloudinary's artificial intelligence automatically removes the background.</p>
                </div>
              </div>

              <div className={styles.cardGuide}>
                <div className="icon">
                  <DownloadingIcon sx={{ fontSize: 60 }} />
                </div>
                <div className="text">
                  <h3>3. Download</h3>
                  <p>
  Download your new image with a transparent background, save it, share it or add more effects</p>
                </div>
              </div>

            </div>

          </div>
        </article>

        <Example />

      </main>
    </div>
  );
}

export default index;