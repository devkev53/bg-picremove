import styles from './styles.module.css'
import { ReactNode } from "react";
import { Link } from "wouter"

// Import Components
import Header from '../Header'
import CloudinaryLogo from '../../components/Icons/CloudinaryLogo'

const index = ({children}:{children:ReactNode}) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
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