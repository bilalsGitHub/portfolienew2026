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
    <>
      <aside className={`sidebar ${isMenuOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          <div className="profile-section">
            <img 
              src="/profile.jpg" 
              alt="Bilal Hinislioglu" 
              className="profile-image"
              onClick={() => scrollToSection('home')}
              style={{ cursor: 'pointer' }}
            />
          </div>

          <nav className="sidebar-nav">
            <ul className="sidebar-nav-list">
              <li>
                <a
                  href="#home"
                  className={`sidebar-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  <span className="nav-text">{t.header.home}</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`sidebar-link ${activeSection === 'projects' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                >
                  <span className="nav-text">{t.header.projects}</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`sidebar-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  <span className="nav-text">{t.header.about}</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="sidebar-footer">
            <div className="language-switcher">
              <button
                className={`lang-btn ${language === 'de' ? 'active' : ''}`}
                onClick={() => language !== 'de' && toggleLanguage()}
              >
                DE
              </button>
              <span className="lang-separator">/</span>
              <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => language !== 'en' && toggleLanguage()}
              >
                EN
              </button>
            </div>
            
            <div className="sidebar-social">
              <a href="mailto:bilalhinis@gmail.com" aria-label="Email" className="social-link">
                @
              </a>
              <a href="https://github.com/bilalsGitHub" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            
            <div className="sidebar-actions">
              <button
                className="theme-btn"
                onClick={toggleTheme}
                aria-label={t.header.toggleTheme}
                title={theme === 'light' ? 'Dark mode' : 'Light mode'}
              >
                {theme === 'light' ? 'Dark' : 'Light'}
              </button>
            </div>
          </div>
        </div>
      </aside>

      {isMenuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <button
        className="mobile-menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={t.header.toggleMenu}
      >
        <span className={isMenuOpen ? 'open' : ''}></span>
        <span className={isMenuOpen ? 'open' : ''}></span>
        <span className={isMenuOpen ? 'open' : ''}></span>
      </button>
    </>
  );
};

