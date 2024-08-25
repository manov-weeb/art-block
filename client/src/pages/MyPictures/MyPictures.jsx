import ImageCard from "../../components/ImageCard/ImageCard"
import styles from "./myPictures.module.css"


const MyPictures = () => {
  return (
    <div className={styles.container}>
      <ImageCard/>
      <ImageCard/>
      <ImageCard/>
      <ImageCard/>
      <ImageCard/>
      <ImageCard/>
    </div>
  )
}

export default MyPictures