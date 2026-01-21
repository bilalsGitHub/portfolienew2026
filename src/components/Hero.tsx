import { useLanguage } from '../contexts/LanguageContext';
import './Hero.css';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const animateText = (text: string, baseDelay: number = 0) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="falling-letter"
        style={{ 
          animationDelay: `${baseDelay + index * 0.02}s`,
          display: char === ' ' ? 'inline' : 'inline-block'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img 
              src="/profile.jpg" 
              alt="Bilal Hinislioglu" 
              className="hero-image"
              loading="eager"
              onError={(e) => {
                console.error('Image failed to load');
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzY0NmNmZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJpbGFsIEhpbmlzbGlvZ2x1PC90ZXh0Pjwvc3ZnPg==';
              }}
            />
          </div>
          <div className="hero-text">
            <p className="hero-greeting">
              {animateText(t.hero.greeting, 0)}
            </p>
            <h1 className="hero-name">
              {animateText('Bilal Hinislioglu', 0.15)}
            </h1>
            <h2 className="hero-title">
              {animateText(t.hero.title, 0.6)}
            </h2>
            <p className="hero-description">
              {animateText(t.hero.description, 0.9)}
            </p>
            <button 
              className="hero-cta" 
              onClick={scrollToContact}
              style={{ animationDelay: '1.8s' }}
            >
              {t.hero.contactBtn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

