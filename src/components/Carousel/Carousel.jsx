import { PropTypes } from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Carousel.module.css";
import { LeftIcon, RightIcon } from "../icons";

export const Carousel = ({
  images,
  direction,
  currentIndex,
  handleNext,
  handlePrevious,
}) => {
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
        duration: 0.25,
      },
    },
    exit: {
      opacity: 0,
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

  return (
    <div className={styles.carouselImages}>
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
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

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  direction: PropTypes.string,
  currentIndex: PropTypes.number,
  handleNext: PropTypes.func,
  handlePrevious: PropTypes.func,
};
