import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">
          {t.footer.copyright}
        </p>
        <div className="footer-social">
          <a href="https://github.com/bilalsGitHub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            💻
          </a>
          <a href="mailto:bilalhinis@gmail.com" aria-label="Email">
            📧
          </a>
        </div>
      </div>
    </footer>
  );
};

