import React, { useState, useEffect } from "react";
import styles from "./StoryPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import storiesData from "../../backend/data";
import Stories from "react-insta-stories";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function StoryPage() {
  const navigate = useNavigate();
  let { id } = useParams();
  const storyId = Number(id); // Convert id to a number
  const [index, setIndex] = useState(storyId);
  const numberOfStories = storiesData.length;

  const leftControl = () => {
    if (index > 1) {
      navigate(`/stories/${index - 1}`);
      navigate(0);
    }
  };

  const rightControl = () => {
    if (index < numberOfStories) {
      navigate(`/stories/${index + 1}`);
      navigate(0);
    }
  };

  useEffect(() => {
    setIndex(storyId);
  }, [storyId]);

  return (
    <div className={styles.storyPage}>
      <div
        className={styles.closeButton}
        onClick={() => {
          navigate("/");
        }}
      >
        X
      </div>
      <div className={styles.leftControl} onClick={leftControl}>
        <KeyboardArrowLeftIcon />
      </div>
      <Stories
        stories={storiesData[index - 1].stories}
        defaultInterval={5000}
        width={400}
        height={768}
        loop={false}
      />
      <div className={styles.rightControl} onClick={rightControl}>
        <KeyboardArrowRightIcon />
      </div>
    </div>
  );
}

export default StoryPage;
