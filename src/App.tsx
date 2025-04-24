import { useMobile } from "./hooks/use-mobile";

import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Features from "./components/feature";
import Story from "./components/story";

function App() {
  const isMobile = useMobile("md");

  if (isMobile) {
    return (
      <main>
        <Header.MobileHeader />
        <Hero.MobileHero />
        <Features.MobileFeatures />
        <Story.MobileStory />
        <Footer.MobileFooter />
      </main>
    );
  }

  return (
    <main>
      <section className="min-h-screen">
        <Header.WebHeader />
        <Hero.WebHero />
        <Features.WebFeatures />
        <Story.WebStory />
      </section>

      <Footer.WebFooter />
    </main>
  );
}

export default App;
