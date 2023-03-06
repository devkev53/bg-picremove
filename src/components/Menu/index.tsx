import styles from './styles.module.css'
import { Link } from "wouter"


const index = () => {
  return (
    <div className={styles.menu}>
      <Link href="/upload"><a className="active">Remove Background</a></Link>
      {/* <Link href="/upload"><a className="active">More Effects</a></Link> */}
      <Link href="/about"><a className="active">About</a></Link>
    </div>
  );
}

export default index;