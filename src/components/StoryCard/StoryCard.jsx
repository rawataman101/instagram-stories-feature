import React from "react";
import styles from "./StoryCard.module.css";
function StoryCard({ data }) {
  return (
    <div className={styles.story}>
      <div className={styles.story__imageWrapper}>
        <img className={styles.story__image} src={data?.imageUrl} alt="story" />
      </div>
      <h4 className={styles.story__title}>{data.title}</h4>
    </div>
  );
}

export default StoryCard;
