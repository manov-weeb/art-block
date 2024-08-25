import { useContext, useState } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import styles from './sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className={`${styles.sidebar} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.sidebarItems}>
        <Link to="/" onClick={() => handleItemClick("Dashboard")}>
          <div className={`${styles.item} ${activeItem === "Dashboard" ? styles.active : ""}`}>
            <ion-icon name="home-outline"></ion-icon>
            <h3>Dashboard</h3>
          </div>
        </Link>
        <Link to="/my-pictures" onClick={() => handleItemClick("My Pictures")}>
          <div className={`${styles.item} ${activeItem === "My Pictures" ? styles.active : ""}`}>
            <ion-icon name="person-outline"></ion-icon>
            <h3>My Pictures</h3>
          </div>
        </Link>
        <Link to="/redeem" onClick={() => handleItemClick("Redeem")}>
          <div className={`${styles.item} ${activeItem === "Redeem" ? styles.active : ""}`}>
            <ion-icon name="card-outline"></ion-icon>
            <h3>Redeem</h3>
          </div>
        </Link>
        <Link to="/popular" onClick={() => handleItemClick("Popular")}>
          <div className={`${styles.item} ${activeItem === "Popular" ? styles.active : ""}`}>
            <ion-icon name="trending-up-outline"></ion-icon>
            <h3>Popular</h3>
          </div>
        </Link>
        <Link to="/my-upvotes" onClick={() => handleItemClick("My Upvotes")}>
          <div className={`${styles.item} ${activeItem === "My Upvotes" ? styles.active : ""}`}>
            <ion-icon name="arrow-up-circle"></ion-icon>
            <h3>My Upvotes</h3>
          </div>
        </Link>
        <Link to="/settings" onClick={() => handleItemClick("Settings")}>
          <div className={`${styles.item} ${activeItem === "Settings" ? styles.active : ""}`}>
            <ion-icon name="settings"></ion-icon>
            <h3>Settings</h3>
          </div>
        </Link>

        <div className={styles.uploadContainer} onClick={() => handleItemClick("Upload Image")}>
        <div className={styles.upload}>
          <ion-icon name="cloud-upload-outline"></ion-icon>
          <h3>Upload Image</h3>
        </div>
      </div>
      </div>

     
    </div>
  );
};

export default Sidebar;
