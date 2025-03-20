import { useHandleMenu } from '../../hooks/useHandleMenu';
import styles from './styles.module.css'
import { Link } from "wouter"


const index = () => {
    const {handleCloseMenu} = useHandleMenu()

  return (
    <div className={styles.menu}>
      <Link onClick={handleCloseMenu} href="/upload"><a className="active">Remove Background</a></Link>
      <Link onClick={handleCloseMenu} href="/upload-effects"><a className="active">More Effects</a></Link>
      <Link onClick={handleCloseMenu} href="/about"><a className="active">About</a></Link>
    </div>
  );
}

export default index;