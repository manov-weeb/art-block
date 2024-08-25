import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.share}>
        <ion-icon name="share-social-outline"></ion-icon>
        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </div>
      <div className={styles.imageInfo}>
        <div className={styles.item}>
          <h3> Today`s Popular Image:</h3>
        </div>
        <div className={styles.item}>
          <ion-icon name="thumbs-up-outline"></ion-icon>
          <h3>230</h3>
        </div>
        <div className={styles.item}>
          <ion-icon name="eye-outline"></ion-icon>
          <h3>1920</h3>
        </div>
        <div className={styles.item}>
          <ion-icon name="calendar-outline"></ion-icon>
          <h3>20 Mar</h3>
        </div>
        <div className={styles.item}>
          <ion-icon name="bookmark-outline"></ion-icon>
          <h3>310</h3>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1531698451051-18c97580aeb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banner" />

      
    </div>
  );
};

export default Banner;
