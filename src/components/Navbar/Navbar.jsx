import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useProduct } from "src/hooks";

export const Navbar = () => {
  const { shopData } = useProduct();
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
            height="65px"
            width="90px"
          />
        </Link>
        <ul className={styles.navItems}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? styles.active : ""} ${styles.header}`
              }
            >
              <p>Home</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
