import React from "react";
import styles from "./Stories.module.css";
import storiesData from "../../backend/data";
import StoryCard from "../StoryCard/StoryCard";
import { Link } from "react-router-dom";
function Stories() {
  return (
    <div className={styles.stories}>
      {storiesData.map((story) => (
        <Link
          to={`/stories/${story.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <StoryCard data={story} key={story.id} />
        </Link>
      ))}
    </div>
  );
}

export default Stories;
