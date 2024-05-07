import {
  CommentIcon,
  ThumbIcon,
  GlobeIcon,
  ShareIcon,
  DotsIcon,
} from "src/components/Icon";
import styles from "./Ad.module.css";
import { Carousel } from "../Carousel";
import { Button } from "../Button";

export const Ad = ({
  cta = "View Services",
  img = ["https://admockups.com/images/fb-admockups-single-ad-image.jpg"],
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
      <Carousel images={img} />
      <div className={styles.preview}>
        <div className={styles.content}>
          <a className={styles.displayLink}>www.maxssportinggoods.com</a>
          <h2 className={styles.headliner}> {headline}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <Button styling={styles.adBtn} text={cta} />
      </div>
      <div className={styles.actions}>
        <Button styling={styles.fbBtn} icon={<ThumbIcon />} text="Like" />
        <Button styling={styles.fbBtn} icon={<CommentIcon />} text="Comment" />
        <Button styling={styles.fbBtn} icon={<ShareIcon />} text="Share" />
      </div>
    </div>
  );
};
