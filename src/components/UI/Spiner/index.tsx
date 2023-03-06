import styles from './styles.module.css'

const index = ({label}:{label:string}) => {
  return (
    <div className={styles.spinerContainer}>
      <p className={styles.label}>{label}</p>
      <div className={styles.spiner}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default index;