import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { trackRoute, trackInteraction } from "../utils/featureFlags";
import "./Contact.css";

export const Contact = () => {
  const { t } = useLanguage();
  const [answer, setAnswer] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [showError, setShowError] = useState(false);

  // Generate random numbers between 1-15 for math challenge
  const [num1] = useState(() => Math.floor(Math.random() * 15) + 1);
  const [num2] = useState(() => Math.floor(Math.random() * 15) + 1);
  const correctAnswer = num1 + num2;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(answer) === correctAnswer) {
      setShowEmail(true);
      setShowError(false);
      // Track successful email reveal
      trackRoute('/contact/email-revealed', { 
        action: 'email_reveal_success',
        attempts: 1 
      });
    } else {
      setShowError(true);
      setShowEmail(false);
      // Track failed attempt
      trackInteraction('email_reveal_failed', { 
        userAnswer: parseInt(answer),
        correctAnswer 
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">{t.contact.title}</h2>
        <div className="contact-content">
          <div className="contact-email-card">
            <div className="email-icon">📧</div>
            <h3 className="contact-heading">{t.contact.heading}</h3>
            <p className="contact-description">{t.contact.description}</p>
            
            {!showEmail ? (
              <div className="math-challenge">
                <p className="math-question">
                  {t.contact.mathQuestion}: {num1} + {num2} = ?
                </p>
                <form onSubmit={handleSubmit} className="math-form">
                  <input
                    type="number"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder={t.contact.mathPlaceholder}
                    className="math-input"
                    required
                  />
                  <button type="submit" className="math-submit">
                    {t.contact.mathSubmit}
                  </button>
                </form>
                {showError && (
                  <p className="error-message">{t.contact.mathError}</p>
                )}
              </div>
            ) : (
              <a 
                href="mailto:bilalhinis@gmail.com" 
                className="email-link"
                onClick={() => trackInteraction('email_clicked', { 
                  location: 'contact_section' 
                })}
              >
                bilalhinis@gmail.com
              </a>
            )}
            
            <p className="location-note">{t.contact.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
