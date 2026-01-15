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
            <p className="hero-greeting">{t.hero.greeting}</p>
            <h1 className="hero-name">Bilal Hinislioglu</h1>
            <h2 className="hero-title">{t.hero.title}</h2>
            <p className="hero-description">
              {t.hero.description}
            </p>
            <button className="hero-cta" onClick={scrollToContact}>
              {t.hero.contactBtn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

