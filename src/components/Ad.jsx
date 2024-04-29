import {
  CommentIcon,
  ThumbIcon,
  GlobeIcon,
  ShareIcon,
  DotsIcon,
} from "src/components/icons";
import styles from "src/assets/styles/Ad.module.css";
import { PropTypes } from "prop-types";

export const Ad = ({
  cta = "View Services",
  img = "https://admockups.com/images/fb-admockups-single-ad-image.jpg",
  description,
  headline,
}) => {
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
      <div>
        <img src={img} alt="image for ad" />
      </div>
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

Ad.propTypes = {
  cta: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  headline: PropTypes.string,
};
