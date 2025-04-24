import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./features.module.css";
import { FEATURES } from "../libs/data";

export default function WebFeatures() {
  // Accordion open/close state is managed at the parent level
  // to ensure only one section is active (expanded) at a time
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <section className={styles.featured}>
      <div className={styles.container}>
        <h2>Featured options</h2>
        <div className={styles.options}>
          {FEATURES.map((option, index) => (
            <div
              key={index}
              className={`${styles.option} ${
                openSection === index ? styles.open : ""
              }`}
            >
              <div
                className={styles.header}
                onClick={() => toggleSection(index)}
              >
                <h3>{option.title}</h3>
                <ChevronDown
                  size={20}
                  className={openSection === index ? styles.rotated : ""}
                />
              </div>

              <div className={styles.content}>
                <div className={styles.imageContainer}>
                  <img
                    src={option.src}
                    alt={option.title}
                    width={300}
                    height={200}
                    className={styles.image}
                  />
                </div>
                <div className={styles.description}>
                  <h4>{option.title}</h4>
                  <p
                    style={{
                      color:
                        openSection === index ? "var(--neutral-60)" : "#C9C5BF",
                    }}
                  >
                    {option.description}
                  </p>
                  <button className={styles.button}>Learn more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
