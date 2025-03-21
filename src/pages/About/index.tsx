
import bgl from '../../assets/bgl-black.png'
import kp from '../../assets/logoKP.png'
import GitHubIcon from '@mui/icons-material/GitHub';

import styles from './styles.module.css'

const index = () => {
  return (
    <div className={styles.aboutContainer}>
      <main className={styles.mainContainer}>
        <article className={styles.articleOne}>
          <h3>Why a product to remove background from images?</h3>
          <p>
            This product was born thanks to the support provided by cloudinary and the web development crack Miguel Angel Durán known as Midudev.
          </p>
          <p>
            The latter supports his community by creating hackathons, so that everyone who is part of his community can demonstrate their knowledge, as well as generate projects that can strengthen their portfolio.
          </p>
          <p>
            As mentioned on the home page, the power of this product is behind the artificial intelligence provided by cloudinary, which is why, making use of the resources they provide, it was possible to create the final product that is presented as
            <picture>
              <img src={bgl} alt="BG-PICREMOVE" />
            </picture> 
          </p>
        </article>

        <article className={styles.articleTwo}>
          <h3>Developed by</h3>
          <p>
            Being able to develop this application was very satisfying since the acquired knowledge can be seen reflected, even though I do not work in the development world, I like to keep up to date and learn more and more
          </p>
          <div className={styles.card}>
            <picture>
              <img src={kp} alt="Logo KP" />
            </picture>
            <div className="">
              <p>Kevin Alberto Palma Ralda</p>
              <small>devkev53</small>
              <a href="https://github.com/KevCode53" target="_blank">
                <GitHubIcon fontSize='large' />
                <span>
                  Github
                </span>  
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default index;