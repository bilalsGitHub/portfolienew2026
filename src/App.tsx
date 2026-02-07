import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { MobileApps } from './components/MobileApps';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import { updateFlag } from './utils/featureFlags';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'mobile-apps', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            // Emit active section as feature flag for Vercel Analytics
            updateFlag('activeSection', section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
    <div className="App">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <MobileApps />
            <Resume />
        <Contact />
      </main>
          <Analytics />
    </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
