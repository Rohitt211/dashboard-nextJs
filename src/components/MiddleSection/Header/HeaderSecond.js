import styles from './new.module.css'
function HeaderSecond(){
  return (
    <div className={styles.container}>
      <div className={styles.containerflex}>
        <p className={styles.upperBox}>S.</p>
        <p className={styles.VisaText}>
          <i>VISA</i>
        </p>
      </div>
      <div className={styles.downBox}>
        <div>
          <p style={{ fontSize: 15 }}>****9838</p>
          <p
            style={{ fontSize: 15, fontWeight: "bold", marginTop: "6px" }}
            className={styles.text}
          >
            Jhon Demon
          </p>
        </div>
        <p className={styles.date}>08/12</p>
      </div>
    </div>
  );
}
export default HeaderSecond