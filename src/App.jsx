import { usePortfolioContent } from "./hooks/usePortfolioContent";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { RecruiterSection } from "./components/sections/RecruiterSection";
import { IntroSection } from "./components/sections/IntroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { JourneySection } from "./components/sections/JourneySection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { LanguagesSection } from "./components/sections/LanguagesSection";
import { ContactSection } from "./components/sections/ContactSection";

function App() {
  const { current, language, toggleLanguage } = usePortfolioContent("en");

  return (
    <div className="page-shell">
      <Header
        navItems={current.nav}
        currentLanguage={current.lang}
        nextLanguage={current.altLang}
        onToggleLanguage={toggleLanguage}
      />

      <main>
        <HeroSection hero={current.hero} />
        <RecruiterSection recruiter={current.recruiter} />
        <IntroSection intro={current.intro} />
        <ProjectsSection projects={current.projects} />
        <JourneySection journey={current.journey} />
        <SkillsSection skills={current.skills} />
        <LanguagesSection languages={current.languages} />
        <ContactSection contact={current.contact} />
      </main>
    </div>
  );
}

export default App;
