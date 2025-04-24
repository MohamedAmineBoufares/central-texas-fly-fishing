import { STORIES } from "../libs/data";
import styles from "./mobile-story.module.css";

export default function MobileStory() {
  return (
    <section className={styles.stories}>
      <div className={styles.container}>
        <h2>Member stories</h2>
        <div className={styles.storiesList}>
          {STORIES.map((story, index) => (
            <div key={index} className={styles.story}>
              <div className={styles.imageContainer}>
                <img
                  src={story.src}
                  alt={story.title}
                  width={80}
                  height={80}
                  className={styles.image}
                />
              </div>
              <div className={styles.storyContent}>
                <h3>{story.title}</h3>
                <p>{story.content}</p>
                <button className={styles.button}>Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
