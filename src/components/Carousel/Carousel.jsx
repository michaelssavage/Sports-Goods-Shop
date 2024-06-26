import { motion, AnimatePresence } from "framer-motion";
import styles from "./Carousel.module.css";
import { LeftIcon, RightIcon } from "../Icon";
import { useEffect, useState } from "react";

export const Carousel = ({ images }) => {
  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.1,
      transition: {
        duration: 0.1,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#fff",
    },
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselImages}>
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={
            firstRender
              ? false
              : direction === "right"
              ? "hiddenRight"
              : "hiddenLeft"
          }
          animate="visible"
          exit="exit"
          variants={slideVariants}
        />
      </AnimatePresence>
      <div className={images.length > 1 ? "" : styles.hideSlides}>
        <div className={styles.slideDirection}>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className={styles.left}
            onClick={handlePrevious}
          >
            <LeftIcon />
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className={styles.right}
            onClick={handleNext}
          >
            <RightIcon />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
