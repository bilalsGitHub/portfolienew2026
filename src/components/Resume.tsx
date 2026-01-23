import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { trackRoute } from "../utils/featureFlags";
import "./Resume.css";

export const Resume = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setVisibleSections((prev) => {
              const newSet = new Set([...prev, sectionId]);
              // Track when resume section becomes visible
              if (!prev.has(sectionId)) {
                trackRoute(`/resume/${sectionId}`, { 
                  section: sectionId,
                  action: 'section_viewed'
                });
              }
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    const currentSectionRefs = sectionRefs.current;
    Object.values(currentSectionRefs).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(currentSectionRefs).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js"],
    backend: ["Node.js", "SQL", "RestAPI", "PostgreSQL", "Supabase"],
    testing: ["Selenium", "Cypress", "Postman"],
    tools: [
      "Git",
      "GitHub",
      "GitLab",
      "Python (Scripting, Automation)",
      "OpenAI API (Integration, Prompt Design)",
    ],
  };

  const languages = [t.resume.langGerman, t.resume.langEnglish];

  const setRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        {/* Header Section */}
        <div
          id="resume-header"
          ref={setRef("resume-header")}
          className={`resume-section ${
            visibleSections.has("resume-header") ? "visible" : ""
          }`}>
          <h1 className="resume-name">BILAL HINISLIOGLU</h1>
          <div className="resume-contact">
            <span>Web Developer</span>
          </div>
        </div>

        {/* About Section */}
        <div
          id="resume-about"
          ref={setRef("resume-about")}
          className={`resume-section ${
            visibleSections.has("resume-about") ? "visible" : ""
          }`}>
          <p className="resume-description" dangerouslySetInnerHTML={{ __html: t.about.bio1 }} />
          <p className="resume-description" dangerouslySetInnerHTML={{ __html: t.about.bio2 }} />
          <p className="resume-description" dangerouslySetInnerHTML={{ __html: t.about.bio3 }} />
          <p className="resume-description" dangerouslySetInnerHTML={{ __html: t.about.bio4 }} />
        </div>

        {/* Key Skills Section */}
        <div
          id="resume-skills"
          ref={setRef("resume-skills")}
          className={`resume-section ${
            visibleSections.has("resume-skills") ? "visible" : ""
          }`}>
          <h2 className="section-title">{t.resume.keySkills}</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>{t.resume.frontend}</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>{t.resume.backend}</h3>
              <div className="skill-tags">
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>{t.resume.testing}</h3>
              <div className="skill-tags">
                {skills.testing.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>{t.resume.tools}</h3>
              <div className="skill-tags">
                {skills.tools.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline - All Chronological */}
        <div
          id="resume-experience"
          ref={setRef("resume-experience")}
          className={`resume-section ${
            visibleSections.has("resume-experience") ? "visible" : ""
          }`}>
          <h2 className="section-title">{t.resume.workExperience}</h2>
          <div className="timeline">
            {/* Current Work Experience */}
            {t.resume.workExperiences.map((exp, index) => {
              const isPresent = exp.period.includes('Heute') || exp.period.includes('Present');
              return (
                <div
                  key={`work-${index}`}
                  className={`timeline-item ${
                    visibleSections.has("resume-experience") ? "visible" : ""
                  } ${isPresent ? "current" : ""}`}
                  style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="timeline-date">{exp.period}</div>
                  <div className="timeline-content">
                    <h3>{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                    <ul className="timeline-description">
                      {exp.description.map((desc: string, i: number) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    <p className="timeline-techstack">
                      <strong>{t.projects.techStack}:</strong> {exp.techstack}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Bachelor Thesis */}
            <div
              className={`timeline-item ${
                visibleSections.has("resume-experience") ? "visible" : ""
              }`}
              style={{ animationDelay: '0.15s' }}>
              <div className="timeline-date">{t.resume.thesisData.period}</div>
              <div className="timeline-content">
                <h3>{t.resume.thesisData.title}</h3>
                <p className="timeline-company">{t.resume.thesisData.company}</p>
                <ul className="timeline-description">
                  {t.resume.thesisData.description.map((desc: string, i: number) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <p className="timeline-techstack">
                  <strong>{t.projects.techStack}:</strong> {t.resume.thesisData.techstack}
                </p>
              </div>
            </div>

            {/* Internships */}
            {t.resume.internshipsData.map((exp, index) => (
              <div
                key={`intern-${index}`}
                className={`timeline-item ${
                  visibleSections.has("resume-experience") ? "visible" : ""
                }`}
                style={{ animationDelay: `${(index + 2) * 0.15}s` }}>
                <div className="timeline-date">{exp.period}</div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <ul className="timeline-description">
                    {exp.description.map((desc: string, i: number) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <p className="timeline-techstack">
                    <strong>{t.projects.techStack}:</strong> {exp.techstack}
                  </p>
                </div>
              </div>
            ))}

            {/* Education at the end */}
            <div
              className={`timeline-item ${
                visibleSections.has("resume-experience") ? "visible" : ""
              }`}
              style={{ animationDelay: '0.45s' }}>
              <div className="timeline-date">{t.resume.educationData.period}</div>
              <div className="timeline-content">
                <h3>{t.resume.educationData.degree}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Languages & Soft Skills Section */}
        <div
          id="resume-additional"
          ref={setRef("resume-additional")}
          className={`resume-section ${
            visibleSections.has("resume-additional") ? "visible" : ""
          }`}>
          <div className="additional-grid">
            <div className="additional-item">
              <h3>{t.resume.languages}</h3>
              <ul className="additional-list">
                {languages.map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
            </div>
            <div className="additional-item">
              <h3>{t.resume.softSkills}</h3>
              <ul className="additional-list">
                {t.resume.softSkillsList.map((skill: string, i: number) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
