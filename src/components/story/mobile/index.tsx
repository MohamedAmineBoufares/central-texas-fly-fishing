import { STORIES } from "../libs/data";
import styles from "./mobile-story.module.css";

export default function MobileStory() {
  return (
    <section className={styles.stories}>
      <div className={styles.container}>
        <h2>Member stories</h2>

        <hr className={styles.hr} />
        <div className={styles.storiesList}>
          {STORIES.map((story, index) => (
            <div key={index} className={styles.story}>
              <h3>{story.title}</h3>

              <div className={styles.storyContent}>
                <div className={styles.imageContainer}>
                  <img
                    src={story.src}
                    alt={story.title}
                    width={80}
                    height={80}
                    className={styles.image}
                  />
                </div>

                <p>{story.content}</p>
              </div>
              <button className={styles.button}>Read more</button>

              <hr className={styles.hr} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
