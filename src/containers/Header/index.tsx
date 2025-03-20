import { useState } from 'react';
import { Link } from "wouter";
import Menu from "../../components/Menu";
import bgc from '../../assets/bgc.png'
import bgl from '../../assets/bgl.png'

import styles from './styles.module.css'
import { useHandleMenu } from '../../hooks/useHandleMenu';

const index = () => {
  const {isOpen, handleOpenMenu, handleCloseMenu} = useHandleMenu()

  const handleBurgerBtn = () => {
    if (isOpen===true) {
      return handleCloseMenu()
    }
    return handleOpenMenu()
  }
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a className={styles.logo}>
            <picture>
              <source srcSet={bgl} media='(min-width: 768px)' />
              <img src={bgc} alt="BG-PICRREMOVE" />
            </picture>
            {/* <h1>
              BG-<span>PicRemove</span>
            </h1> */}
          </a>
        </Link>
        <nav className={`${isOpen && styles.open}`} >
          <Menu />
        </nav>
        <button onClick={handleBurgerBtn} className={`${isOpen && styles.closeButton} ${styles.burguerIcon}`}>
          <span className={styles.span1}></span>
          <span className={styles.span2}></span>
          <span className={styles.span3}></span>
        </button>
      </div>
      </header>
  );
}

export default index;