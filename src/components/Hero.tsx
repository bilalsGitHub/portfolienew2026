import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { trackRoute, trackInteraction } from "../utils/featureFlags";
import "./Hero.css";

export const Hero = () => {
  const { t } = useLanguage();
  const [animatedBg, setAnimatedBg] = useState(true);

  useEffect(() => {
    const orbs = document.querySelectorAll(".gradient-orb");

    if (!animatedBg) {
      // Reset orbs to initial position when animation is disabled
      orbs.forEach((orb) => {
        (orb as HTMLElement).style.transition = "transform 0.5s ease";
        (orb as HTMLElement).style.transform =
          "translate(0, 0) scale(1) rotate(0deg)";
      });
      return;
    }

    const animateOrbs = () => {
      orbs.forEach((orb, index) => {
        const randomX = Math.random() * 300 - 150; // -150 to 150
        const randomY = Math.random() * 300 - 150; // -150 to 150
        const randomScale = 0.7 + Math.random() * 0.6; // 0.7 to 1.3
        const randomRotation = Math.random() * 360; // 0 to 360
        const randomDuration = 8 + Math.random() * 7; // 8 to 15 seconds

        // Different delay for each orb
        setTimeout(() => {
          (
            orb as HTMLElement
          ).style.transition = `transform ${randomDuration}s cubic-bezier(0.4, 0, 0.2, 1)`;
          (
            orb as HTMLElement
          ).style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale}) rotate(${randomRotation}deg)`;
        }, index * 500); // Stagger the animations
      });
    };

    // Initial animation
    setTimeout(() => {
      animateOrbs();
    }, 500);

    // Repeat with random intervals
    const interval = setInterval(() => {
      animateOrbs();
    }, 10000); // Change position every 10 seconds

    return () => clearInterval(interval);
  }, [animatedBg]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      trackRoute("/contact", {
        action: "cta_click",
        source: "hero_work_with_me_button",
      });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      trackRoute("/projects", {
        action: "cta_click",
        source: "hero_works_tab",
      });
    }
  };

  return (
    <section id="home" className={`hero ${animatedBg ? "animated-bg" : ""}`}>
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <button
        className="bg-toggle-btn"
        onClick={() => {
          const newState = !animatedBg;
          setAnimatedBg(newState);
          trackInteraction("hero_background_toggle", {
            enabled: newState,
          });
        }}
        title={
          animatedBg
            ? "Disable animated background"
            : "Enable animated background"
        }>
        {animatedBg ? "✨" : "💤"}
      </button>

      <button className="work-with-me-btn" onClick={scrollToContact}>
        <span>{t.hero.workWithMe}</span>
        <span className="arrow">→</span>
      </button>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-greeting">
              {t.hero.greeting}
              <span className="hero-name">{t.hero.name}</span>
            </h1>
            <h2 className="hero-title">{t.hero.title}</h2>
            <p className="hero-description">{t.hero.description}</p>
          </div>
        </div>
      </div>

      <button className="works-tab" onClick={scrollToProjects}>
        <span className="works-text">{t.hero.works}</span>
      </button>
    </section>
  );
};
