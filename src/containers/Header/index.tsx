import { useState } from 'react';
import { Link } from "wouter";
import Menu from "../../components/Menu";
import bgc from '../../assets/bgc.png'
import bgl from '../../assets/bgl.png'

import styles from './styles.module.css'

const index = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () =>{
    setOpenMenu(!openMenu)
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
        <nav className={`${openMenu && styles.open}`} >
          <Menu />
        </nav>
        <button onClick={handleOpenMenu} className={`${openMenu && styles.closeButton} ${styles.burguerIcon}`}>
          <span className={styles.span1}></span>
          <span className={styles.span2}></span>
          <span className={styles.span3}></span>
        </button>
      </div>
      </header>
  );
}

export default index;