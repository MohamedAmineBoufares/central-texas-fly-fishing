import { FEATURES } from "../libs/data";
import styles from "./mobile-features.module.css";

export default function MobileFeatures() {
  return (
    <section className={styles.featured}>
      <div className={styles.container}>
        <h2>Featured options</h2>
        <div className={styles.options}>
          {FEATURES.map((option, index) => (
            <div key={index} className={styles.option}>
              <img
                src={option.src}
                alt={option.title}
                width={300}
                height={200}
                className={styles.image}
              />

              <div className={styles.overlay}>
                <h4>{option.title}</h4>
                <p>{option.description}</p>
                <button className={styles.button}>Learn more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
