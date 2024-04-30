import {
  CommentIcon,
  ThumbIcon,
  GlobeIcon,
  ShareIcon,
  DotsIcon,
} from "src/components/Icons";
import styles from "./Ad.module.css";
import { Carousel } from "../Carousel";
import { useState } from "react";

export const Ad = ({
  cta = "View Services",
  img = ["https://admockups.com/images/fb-admockups-single-ad-image.jpg"],
  description,
  headline,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === img.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? img.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="/facebook.png" alt="facebook icon" />
        </div>
        <div className={styles.company}>
          <a>www.maxssportinggoods.com</a>
          <p className={styles.sponsored}>
            Sponsored <GlobeIcon />
          </p>
        </div>
        <div className={styles.ellipsis}>
          <DotsIcon />
        </div>
      </div>
      <p className={styles.cta}>{headline}</p>
      <Carousel
        images={img}
        direction={direction}
        currentIndex={currentIndex}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      <div className={styles.preview}>
        <div className={styles.content}>
          <a className={styles.displayLink}>www.maxssportinggoods.com</a>
          <h2>{headline}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <button className={styles.adBtn}>{cta}</button>
      </div>
      <div className={styles.actions}>
        <button>
          <ThumbIcon /> Like
        </button>
        <button>
          <CommentIcon /> Comment
        </button>
        <button>
          <ShareIcon /> Share
        </button>
      </div>
    </div>
  );
};
