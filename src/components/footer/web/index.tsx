import { Facebook, Linkedin, InstagramIcon } from "lucide-react";
import styles from "./footer.module.css";
import logo from "@/assets/images/footer-logo.svg";

export default function WebFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt="Central Texas Fly Fishing"
            width={70}
            height={40}
          />

          <div className={styles.links}>
            <a href="/faq">FAQ</a>
            <a href="/privacy">Privacy</a>
            <a href="/support">Support</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div className={styles.social}>
          <a href="#" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="#" aria-label="Twitter">
            <InstagramIcon size={18} />
          </a>
          <a href="#" aria-label="Instagram">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2024 Central Texas Fly Fishing All Rights Reserved</p>
      </div>
    </footer>
  );
}
