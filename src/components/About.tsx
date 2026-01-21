import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./About.css";

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "Python (Scripting, Automation)", category: "Tools" },
  { name: "Node.js", category: "Backend" },
  { name: "SQL", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Git", category: "Tools" },
  { name: "GitLab", category: "Tools" },
  { name: "Supabase", category: "Backend" },
  { name: "OpenAI API (Integration, Prompt Design)", category: "Tools" },
  { name: "Selenium", category: "Testing" },
  { name: "Cypress", category: "Testing" },
];

export const About = () => {
  const [visibleSkills, setVisibleSkills] = useState<Set<number>>(new Set());
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = skillRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setVisibleSkills((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "-20px" }
    );

    const currentSkillRefs = skillRefs.current;
    currentSkillRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentSkillRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const frontendSkills = skills.filter((s) => s.category === "Frontend");
  const backendSkills = skills.filter((s) => s.category === "Backend");
  const otherSkills = skills.filter(
    (s) => !["Frontend", "Backend"].includes(s.category)
  );

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-content">
          <div className="bio-section">
            <div className="bio-intro">
              <p className="bio-text" dangerouslySetInnerHTML={{ __html: t.about.bio1 }} />
              <p className="bio-text" dangerouslySetInnerHTML={{ __html: t.about.bio2 }} />
              <p className="bio-text" dangerouslySetInnerHTML={{ __html: t.about.bio3 }} />
              <p className="bio-text" dangerouslySetInnerHTML={{ __html: t.about.bio4 }} />
            </div>

            <div className="skills-section">
              <h3 className="skills-title">{t.about.skillsTitle}</h3>

              <div className="skill-category-group">
                <h4 className="skill-category-title">{t.about.frontend}</h4>
                <div className="skills-grid">
                  {frontendSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      ref={(el) => {
                        skillRefs.current[index] = el;
                      }}
                      className={`skill-card ${
                        visibleSkills.has(index) ? "visible" : ""
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category-group">
                <h4 className="skill-category-title">{t.about.backend}</h4>
                <div className="skills-grid">
                  {backendSkills.map((skill) => {
                    const globalIndex = skills.indexOf(skill);
                    return (
                      <div
                        key={skill.name}
                        ref={(el) => {
                          skillRefs.current[globalIndex] = el;
                        }}
                        className={`skill-card ${
                          visibleSkills.has(globalIndex) ? "visible" : ""
                        }`}
                        style={{ animationDelay: `${globalIndex * 0.1}s` }}>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="skill-category-group">
                <h4 className="skill-category-title">{t.about.tools}</h4>
                <div className="skills-grid">
                  {otherSkills.map((skill) => {
                    const globalIndex = skills.indexOf(skill);
                    return (
                      <div
                        key={skill.name}
                        ref={(el) => {
                          skillRefs.current[globalIndex] = el;
                        }}
                        className={`skill-card ${
                          visibleSkills.has(globalIndex) ? "visible" : ""
                        }`}
                        style={{ animationDelay: `${globalIndex * 0.1}s` }}>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
