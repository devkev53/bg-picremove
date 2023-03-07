import styles from './styles.module.css'
import { Link } from "wouter"


const index = (
  {closeMenu}:{closeMenu:() => void}
) => {
  return (
    <div className={styles.menu}>
      <Link onClick={closeMenu} href="/upload"><a className="active">Remove Background</a></Link>
      <Link onClick={closeMenu} href="/effects"><a className="active">More Effects</a></Link>
      <Link onClick={closeMenu} href="/about"><a className="active">About</a></Link>
    </div>
  );
}

export default index;