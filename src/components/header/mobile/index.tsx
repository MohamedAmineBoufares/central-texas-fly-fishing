import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/shadcn/sheet";
import styles from "./mobile-header.module.css";
import logo from "@/assets/images/logo.svg";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Fish Logo" />
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className={styles.menuButton} aria-label="Open menu">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className={styles.sheetContent}>
            <nav className={styles.mobileNav}>
              <ul>
                <li>
                  <a
                    href="/"
                    className={styles.active}
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" onClick={() => setOpen(false)}>
                    About us
                  </a>
                </li>
                <li>
                  <a href="/services" onClick={() => setOpen(false)}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" onClick={() => setOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
