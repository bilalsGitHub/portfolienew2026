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
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            💻
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            💼
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            🐦
          </a>
          <a href="mailto:youremail@example.com" aria-label="Email">
            📧
          </a>
        </div>
      </div>
    </footer>
  );
};

