import styles from "./hero.module.css";
import hero from "@/assets/images/hero.png";

export default function WebHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Central Texas Fly Fishing</h1>
          <p>
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </p>
          <button className={styles.button}>Get Started</button>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={hero}
            alt="Fly fishing"
            width={500}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
