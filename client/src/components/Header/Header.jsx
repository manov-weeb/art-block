import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <button>
          <ion-icon name="search"></ion-icon>
        </button>
        <input type="text" placeholder="Search for images..." />
      </div>
      
    </div>
  );
};

export default Header;
