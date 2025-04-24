import johnStory from "@/assets/images/stories/john-stories.png";
import theJourney from "@/assets/images/stories/the-journey.png";
import catchDay from "@/assets/images/stories/the-catch-day.png";
import troutTails from "@/assets/images/stories/trout-tails.png";

export const STORIES = [
  {
    title: "John's Story",
    content:
      "Sem et tortor consequat id porta quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh",
    src: johnStory,
  },
  {
    title: "The Journey",
    content:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu",
    src: theJourney,
  },
  {
    title: "Catch Day",
    content:
      "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    src: catchDay,
  },
  {
    title: "Trout Tales",
    content:
      "Sit amet mattis vulputate enim nulla aliquet. Ut augue eget arcu dictum varius. Vulputate enim nulla",
    src: troutTails,
  },
] as const;
