import PropTypes from "prop-types";

import styles from "./imageCard.module.css";

const ImageCard = ({ src, alt, title, location, rating }) => {
  return (
    <div className={styles.item}>
      <div className={styles.like}>
      <ion-icon name="arrow-up-circle-outline"></ion-icon>
      </div>
      <img src={src} alt={alt} className={styles.image} />
      <div className={styles.details}>
        <h3>{title}</h3>
        <div className={styles.info}>
          <div className={styles.location}>
          <ion-icon name="location-outline"></ion-icon>
            <h5>{location}</h5>
          </div>
          <div className={styles.rate}>
          <ion-icon name="star"></ion-icon>
            <h5>{rating}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

export default ImageCard;
