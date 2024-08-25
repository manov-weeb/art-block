import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./separator.module.css";

const Separator = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={styles.separator}>
      <h3>Discover World</h3>
      <div className={styles.categories}>
        <Link
          to="/all"
          className={activeCategory === "all" ? styles.active : ""}
          onClick={() => handleCategoryClick("all")}
        >
          All
        </Link>
        <Link
          to="/new-to-you"
          className={activeCategory === "new-to-you" ? styles.active : ""}
          onClick={() => handleCategoryClick("new-to-you")}
        >
          New to you
        </Link>
        <Link
          to="/live"
          className={activeCategory === "live" ? styles.active : ""}
          onClick={() => handleCategoryClick("live")}
        >
          Live
        </Link>
        <Link
          to="/gaming"
          className={activeCategory === "gaming" ? styles.active : ""}
          onClick={() => handleCategoryClick("gaming")}
        >
          Gaming
        </Link>
        <Link
          to="/music"
          className={activeCategory === "music" ? styles.active : ""}
          onClick={() => handleCategoryClick("music")}
        >
          Music
        </Link>
        <Link
          to="/cartoons"
          className={activeCategory === "cartoons" ? styles.active : ""}
          onClick={() => handleCategoryClick("cartoons")}
        >
          Cartoons
        </Link>
        <Link
          to="/challenges"
          className={activeCategory === "challenges" ? styles.active : ""}
          onClick={() => handleCategoryClick("challenges")}
        >
          Challenges
        </Link>
        <Link
          to="/visual-arts"
          className={activeCategory === "visual-arts" ? styles.active : ""}
          onClick={() => handleCategoryClick("visual-arts")}
        >
          Visual Arts
        </Link>
        <Link
          to="/trends"
          className={activeCategory === "trends" ? styles.active : ""}
          onClick={() => handleCategoryClick("trends")}
        >
          Trends
        </Link>
      </div>
    </div>
  );
};

export default Separator;
