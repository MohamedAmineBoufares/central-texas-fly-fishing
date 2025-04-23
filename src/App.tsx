import { useMobile } from "./hooks/use-mobile";

import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  const isMobile = useMobile("md");

  if (isMobile) {
    return (
      <main>
        <Header.MobileHeader />
        <Hero.MobileHero />
        {/* 
        <MobileFeaturedOptions />
        <MobileMemberStories />
        <MobileFooter /> */}
      </main>
    );
  }

  return (
    <main>
      <Header.WebHeader />
      <Hero.WebHero />
      {/* 
      <FeaturedOptions />
      <MemberStories />
      <Footer /> */}
    </main>
  );
}

export default App;
