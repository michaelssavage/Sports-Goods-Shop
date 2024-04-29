import { useContext, useEffect, useState } from "react";
import { ShopDataContext } from "../context/products.context";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Navbar.module.css";

export const Navbar = () => {
  const { shopData } = useContext(ShopDataContext);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolling ? styles.scroll : ""}`}>
      <div className={styles.navContainer}>
        <Link to="/">
          <img
            src={shopData.logo}
            alt="sports good shop logo"
            height="50px"
            width="100px"
          />
        </Link>
        <ul className={styles.navItems}>
          <li>
            <Link to="/" className={styles.header}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/create" className={styles.header}>
              Create New Ad
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
