import { useLanguage } from "../contexts/LanguageContext";
import "./Contact.css";

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">{t.contact.title}</h2>
        <div className="contact-content">
          <div className="contact-email-card">
            <div className="email-icon">📧</div>
            <h3 className="contact-heading">{t.contact.heading}</h3>
            <p className="contact-description">{t.contact.description}</p>
            <a href="mailto:bilalhinis@gmail.com" className="email-link">
              bilalhinis@gmail.com
            </a>
            <p className="location-note">{t.contact.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
