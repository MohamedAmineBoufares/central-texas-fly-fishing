import styles from "./header.module.css";
import logo from "@/assets/images/logo-with-title.svg";

export default function WebHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Central Texas Fly Fishing" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/" className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
