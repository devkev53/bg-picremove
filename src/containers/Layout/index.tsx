import styles from './styles.module.css'
import { Link } from "wouter"

import { ReactNode } from "react";
import CloudinaryLogo from '../../components/Icons/CloudinaryLogo'

const index = ({children}:{children:ReactNode}) => {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.headerContainer}>
        <Link href="/">
          <a>
            <h1>
              BG-<span>PicRemove</span>
            </h1>
          </a>
        </Link>
        <nav>
          <div className={styles.menu}>
            <Link href="/upload"><a className="active">Remove Background</a></Link>
            <Link href="/upload"><a className="active">More Effects</a></Link>
            <Link href="/upload"><a className="active">About</a></Link>
          </div>
        </nav>
        <div className={styles.burguerIcon}>
          <span className={styles.span1}></span>
          <span className={styles.span2}></span>
          <span className={styles.span3}></span>
        </div>
      </header>
      <div className={styles.gosth}></div>
      {children}
      <footer className={styles.footerContainer}>
        Create with
        <a href='https://cloudinary' target='_black' rel='noreferrer'>
          <CloudinaryLogo props="" />
        </a>
      </footer>
    </div>
  );
}

export default index;