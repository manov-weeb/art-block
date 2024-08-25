import ImageCard from "../ImageCard/ImageCard";
import styles from "./imageItems.module.css";

const ImageItems = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1480775661506-541bb9d526b6?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Animal On Winter",
      title: "Animal On Winter",
      location: "Canada",
      rating: 4.9,
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1669750817624-74ce039f186d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Waves Rushing",
      title: "Waves Rushing",
      location: "Spain",
      rating: 4.3,
    },
    {
      src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Awesome Image",
      title: "Awesome Image",
      location: "USA",
      rating: 4.8,
    },
  ];

  return (
    <div className={styles.imageItems}>
      {images.map((image, index) => (
        <ImageCard
          key={index}
          src={image.src}
          alt={image.alt}
          title={image.title}
          location={image.location}
          rating={image.rating}
        />
      ))}
    </div>
  );
};

export default ImageItems;
