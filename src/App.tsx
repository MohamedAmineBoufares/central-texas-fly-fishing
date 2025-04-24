import { useMobile } from "./hooks/use-mobile";

import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Features from "./components/feature";

function App() {
  const isMobile = useMobile("md");

  if (isMobile) {
    return (
      <main>
        <Header.MobileHeader />
        <Hero.MobileHero />
        <Features.MobileFeatures />
        {/* 
        <MobileMemberStories />
         */}
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
        {/* 
      <MemberStories />
      */}
      </section>

      <Footer.WebFooter />
    </main>
  );
}

export default App;
