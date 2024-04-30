import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useProduct } from "src/hooks";

export const Navbar = () => {
  const { shopData } = useProduct();

  return (
    <nav className={styles.navbar}>
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
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
