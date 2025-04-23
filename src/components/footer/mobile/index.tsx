import { Facebook, Linkedin, InstagramIcon } from "lucide-react";
import styles from "./mobile-footer.module.css";
import logo from "@/assets/images/footer-logo.svg";

export default function MobileFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt="Central Texas Fly Fishing"
            width={80}
            height={30}
          />
        </div>
        <div className={styles.links}>
          <a href="/faq">FAQ</a>
          <a href="/privacy">Privacy</a>
          <a href="/support">Support</a>
          <a href="/contact">Contact</a>
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
        <div className={styles.copyright}>
          <p>© 2024 Central Texas Fly Fishing All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
