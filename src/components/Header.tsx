import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import './Header.css';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (section: string) => {
    onSectionChange(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <h2>Portfolio</h2>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <a
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                {t.header.home}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                {t.header.about}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                {t.header.projects}
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={activeSection === 'resume' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('resume');
                }}
              >
                {t.header.resume}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                {t.header.contact}
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            title={language === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
          >
            {language === 'de' ? 'English' : 'Deutsch'}
          </button>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={t.header.toggleTheme}
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={t.header.toggleMenu}
          >
            <span className={isMenuOpen ? 'open' : ''}></span>
            <span className={isMenuOpen ? 'open' : ''}></span>
            <span className={isMenuOpen ? 'open' : ''}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

