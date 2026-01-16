import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Projects.css';

interface Feature {
  title: string;
  description: string;
}

interface TechStack {
  frontend?: string[];
  backend?: string[];
  ui?: string[];
  features?: string[];
  ai?: string[];
}

interface ProjectData {
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
  techStack: TechStack;
}

interface Project {
  en: ProjectData;
  de: ProjectData;
  demoUrl?: string;
  githubUrl?: string;
  images?: string[];
}

const projects: Project[] = [
  {
    en: {
      name: "HABITS - Premium Habit Tracker",
      tagline: "Track What Truly Matters",
      description: "A minimalist, monochrome habit tracking web application inspired by Apple, Notion, and Japanese design philosophy. Built with performance and user experience in mind, featuring real-time analytics, beautiful heatmaps, and a distraction-free interface.",
      features: [
        {
          title: "Minimal Design",
          description: "Distraction-free black & white interface for maximum focus."
        },
        {
          title: "Visual Heatmaps",
          description: "Visualize your consistency with interactive heatmaps."
        },
        {
          title: "Smart Analytics",
          description: "Track your streaks and completion rates."
        },
        {
          title: "Cloud Sync",
          description: "Automatic synchronization across all your devices."
        },
        {
          title: "High Performance",
          description: "Fast and smooth user experience without loading times."
        }
      ],
      techStack: {
        frontend: ["Next.js 16 (Turbopack)", "React 19", "TypeScript", "Tailwind CSS"],
        backend: ["Supabase (PostgreSQL)", "Supabase Auth", "Row Level Security"],
        features: ["Server Components", "Client Components", "Optimistic UI", "React Memoization"]
      }
    },
    de: {
      name: "HABITS - Premium Gewohnheitstracker",
      tagline: "Verfolge, was wirklich zählt",
      description: "Eine minimalistische, monochrome Webanwendung zur Gewohnheitsverfolgung, inspiriert von Apple, Notion und japanischer Designphilosophie. Mit Fokus auf Performance und Benutzererfahrung, mit Echtzeit-Analysen, schönen Heatmaps und einer ablenkungsfreien Benutzeroberfläche.",
      features: [
        {
          title: "Minimalistisches Design",
          description: "Ablenkungsfreie Schwarz-Weiß-Oberfläche für maximalen Fokus."
        },
        {
          title: "Visuelle Heatmaps",
          description: "Visualisieren Sie Ihre Konsistenz mit interaktiven Heatmaps."
        },
        {
          title: "Intelligente Analysen",
          description: "Verfolgen Sie Ihre Streaks und Abschlussraten."
        },
        {
          title: "Cloud-Synchronisation",
          description: "Automatische Synchronisation auf allen Ihren Geräten."
        },
        {
          title: "Hohe Leistung",
          description: "Schnelle und reibungslose Benutzererfahrung ohne Ladezeiten."
        }
      ],
      techStack: {
        frontend: ["Next.js 16 (Turbopack)", "React 19", "TypeScript", "Tailwind CSS"],
        backend: ["Supabase (PostgreSQL)", "Supabase Auth", "Row Level Security"],
        features: ["Server Components", "Client Components", "Optimistic UI", "React Memoization"]
      }
    },
    images: ["/habitapp.png"]
  },
  {
    en: {
      name: "Eye Tracking - Focus & Reaction Trainer",
      tagline: "Train Your Eyes, Boost Your Performance",
      description: "A professional eye tracking web application designed to improve focus, eye coordination, and reaction speed. Perfect for athletes, gamers, students, and anyone looking to enhance their visual performance with scientifically-backed training exercises.",
      features: [
        {
          title: "Training Modes",
          description: "7 distinct modes for focus and coordination training."
        },
        {
          title: "Customizable",
          description: "Fully adjustable speed, size, and difficulty settings."
        },
        {
          title: "Real-Time Analytics",
          description: "Live tracking of accuracy and reaction speed."
        },
        {
          title: "Visual Feedback",
          description: "Instant feedback to improve your tracking skills."
        },
        {
          title: "Interactive Games",
          description: "Fun challenges to test and improve reaction time."
        }
      ],
      techStack: {
        frontend: ["Pure JavaScript (ES6+)", "HTML5", "CSS3"],
        backend: ["No backend - Runs entirely in browser"],
        features: ["Canvas Animation (requestAnimationFrame)", "Real-time State Management", "Responsive Design", "Keyboard Shortcuts (F11, ESC)"]
      }
    },
    de: {
      name: "Eye Tracking - Fokus & Reaktionstrainer",
      tagline: "Trainiere deine Augen, steigere deine Leistung",
      description: "Eine professionelle Eye-Tracking-Webanwendung zur Verbesserung von Fokus, Augenkoordination und Reaktionsgeschwindigkeit. Ideal für Sportler, Gamer, Studenten und alle, die ihre visuelle Leistung mit wissenschaftlich fundierten Trainingsübungen verbessern möchten.",
      features: [
        {
          title: "Trainingsmodi",
          description: "7 verschiedene Modi für Fokus- und Koordinationstraining."
        },
        {
          title: "Anpassbar",
          description: "Vollständig einstellbare Geschwindigkeit und Schwierigkeit."
        },
        {
          title: "Echtzeit-Analysen",
          description: "Live-Verfolgung von Genauigkeit und Reaktionsgeschwindigkeit."
        },
        {
          title: "Visuelles Feedback",
          description: "Sofortiges Feedback zur Verbesserung Ihrer Fähigkeiten."
        },
        {
          title: "Interaktive Spiele",
          description: "Unterhaltsame Herausforderungen zum Testen der Reaktionszeit."
        }
      ],
      techStack: {
        frontend: ["Reines JavaScript (ES6+)", "HTML5", "CSS3"],
        backend: ["Kein Backend - Läuft vollständig im Browser"],
        features: ["Canvas-Animation (requestAnimationFrame)", "Echtzeit-Zustandsverwaltung", "Responsives Design", "Tastaturkürzel (F11, ESC)"]
      }
    },
    images: ["/eyetracking1.png"]
  },
  {
    en: {
      name: "BlackFocus - Premium Pomodoro Timer",
      tagline: "The Timer You've Been Looking For",
      description: "A beautiful, minimal black Pomodoro timer built with Next.js 16, TypeScript, and TailwindCSS. Perfect for focus sessions, productivity tracking, and deep work. Features real-time analytics, task management, and a distraction-free interface.",
      features: [
        {
          title: "Pomodoro Timer",
          description: "Customizable timer for focus and break sessions."
        },
        {
          title: "Task Management",
          description: "Integrated task list to track your work."
        },
        {
          title: "Focus Mode",
          description: "Distraction-free full-screen interface."
        },
        {
          title: "Analytics",
          description: "Dashboard with productivity stats and heatmaps."
        },
        {
          title: "Cloud Sync",
          description: "Syncs your data and works offline (PWA)."
        }
      ],
      techStack: {
        frontend: ["Next.js 16", "React 19", "TypeScript", "TailwindCSS v4"],
        backend: ["Supabase (PostgreSQL)", "Supabase Auth", "Row Level Security"],
        ui: ["Shadcn/UI", "Radix UI", "Lucide Icons"],
        features: ["Zustand State Management", "PWA Support", "Keyboard Shortcuts", "Optimistic UI"]
      }
    },
    de: {
      name: "BlackFocus - Premium Pomodoro Timer",
      tagline: "Der Timer, den Sie gesucht haben",
      description: "Ein schöner, minimalistischer schwarzer Pomodoro-Timer, gebaut mit Next.js 16, TypeScript und TailwindCSS. Perfekt für Fokussitzungen, Produktivitätsverfolgung und tiefe Arbeit. Mit Echtzeit-Analysen, Aufgabenverwaltung und einer ablenkungsfreien Benutzeroberfläche.",
      features: [
        {
          title: "Pomodoro Timer",
          description: "Anpassbarer Timer für Fokus- und Pausenzeiten."
        },
        {
          title: "Aufgabenverwaltung",
          description: "Integrierte Aufgabenliste zur Arbeitsverfolgung."
        },
        {
          title: "Fokus-Modus",
          description: "Ablenkungsfreie Vollbild-Benutzeroberfläche."
        },
        {
          title: "Analysen",
          description: "Dashboard mit Produktivitätsstatistiken."
        },
        {
          title: "Cloud-Sync",
          description: "Synchronisiert Daten und funktioniert offline (PWA)."
        }
      ],
      techStack: {
        frontend: ["Next.js 16", "React 19", "TypeScript", "TailwindCSS v4"],
        backend: ["Supabase (PostgreSQL)", "Supabase Auth", "Row Level Security"],
        ui: ["Shadcn/UI", "Radix UI", "Lucide Icons"],
        features: ["Zustand State Management", "PWA Support", "Tastenkürzel", "Optimistic UI"]
      }
    },
    demoUrl: "https://blackfocusvercel.vercel.app/",
    images: ["/blackfocus1.png", "/blackfocus2.png", "/blackfocus3.png"]
  },
  {
    en: {
      name: "DiloGren - AI Language Learning Platform",
      tagline: "Learn Languages Smarter, Not Harder",
      description: "An intelligent language learning web application combining AI-powered conversation practice, automatic translations, and spaced repetition flashcards. Supports Turkish, English, and German with instant vocabulary analysis and smart review scheduling.",
      features: [
        {
          title: "AI Assistant",
          description: "Practice conversations with an intelligent AI tutor."
        },
        {
          title: "Vocabulary Analysis",
          description: "Instant translation and breakdown of any text."
        },
        {
          title: "Smart Flashcards",
          description: "Learn efficiently with spaced repetition system."
        },
        {
          title: "Multi-Language",
          description: "Supports Turkish, English, and German."
        },
        {
          title: "Offline First",
          description: "Works without internet connection."
        }
      ],
      techStack: {
        frontend: ["Vanilla JavaScript", "HTML5", "CSS3", "Responsive Design"],
        backend: ["OpenAI GPT API (for AI analysis)", "LocalStorage API", "Client-side processing"],
        features: ["AI Sentence Analysis", "Automatic Translation Caching", "Category Management", "Progress Tracking", "Difficulty Levels"]
      }
    },
    de: {
      name: "DiloGren - KI-Sprachlernen-Plattform",
      tagline: "Sprachen intelligenter lernen, nicht härter",
      description: "Eine intelligente Sprachlern-Webanwendung, die KI-gestützte Konversationspraxis, automatische Übersetzungen und Spaced-Repetition-Lernkarten kombiniert. Unterstützt Türkisch, Englisch und Deutsch mit sofortiger Vokabelanalyse und intelligentem Wiederholungsplan.",
      features: [
        {
          title: "KI-Assistent",
          description: "Üben Sie Konversationen mit einem KI-Tutor."
        },
        {
          title: "Vokabelanalyse",
          description: "Sofortige Übersetzung und Analyse von Texten."
        },
        {
          title: "Intelligente Lernkarten",
          description: "Effizient lernen mit Spaced-Repetition-System."
        },
        {
          title: "Mehrsprachig",
          description: "Unterstützt Türkisch, Englisch und Deutsch."
        },
        {
          title: "Offline-First",
          description: "Funktioniert auch ohne Internetverbindung."
        }
      ],
      techStack: {
        frontend: ["Vanilla JavaScript", "HTML5", "CSS3", "Responsive Design"],
        backend: ["OpenAI GPT API (für KI-Analyse)", "LocalStorage API", "Client-seitige Verarbeitung"],
        features: ["KI-Satzanalyse", "Automatisches Übersetzungs-Caching", "Kategorienverwaltung", "Fortschrittsverfolgung", "Schwierigkeitsstufen"]
      }
    }
  },
  {
    en: {
      name: "MediFlow - Medical Consultation Assistant",
      tagline: "The AI Assistant That Helps Doctors Focus",
      description: "A modern web application that automatically records doctor-patient consultations, analyzes them with AI, and converts them into structured medical notes. Enables doctors to focus solely on patients during consultations, reducing note-taking time by 80%+. Powered by OpenAI Whisper and GPT technologies, with secure data management via Supabase.",
      features: [
        {
          title: "Auto Recording",
          description: "Automatic voice recording and transcription of consultations."
        },
        {
          title: "AI Analysis",
          description: "Intelligent medical analysis of patient symptoms."
        },
        {
          title: "SOAP Notes",
          description: "Automatically generates structured medical notes."
        },
        {
          title: "ICD-10 Support",
          description: "Smart code suggestions and integration."
        },
        {
          title: "Secure Data",
          description: "Encrypted storage and secure authentication."
        },
        {
          title: "Patient Tools",
          description: "Generate messages and referral documents."
        },
        {
          title: "Note Creation",
          description: "Flexible options via voice or typing with templates."
        },
        {
          title: "Dashboard",
          description: "Comprehensive view of all consultations."
        }
      ],
      techStack: {
        frontend: ["Next.js 14", "React 18", "TypeScript", "TailwindCSS"],
        backend: ["Next.js API Routes", "Supabase (PostgreSQL)", "Supabase Auth", "Row Level Security"],
        ai: ["OpenAI Whisper (Speech-to-Text)", "OpenAI GPT-4o-mini (Text Analysis)"],
        ui: ["Lucide React Icons", "Custom Components", "Minimal Design"],
        features: ["MediaRecorder API", "Local Storage", "Cloud Sync", "PWA Ready"]
      }
    },
    de: {
      name: "MediFlow - Ärztlicher Konsultationsassistent",
      tagline: "Der KI-Assistent, der Ärzten hilft, sich zu konzentrieren",
      description: "Eine moderne Webanwendung, die Arzt-Patienten-Konsultationen automatisch aufzeichnet, sie mit KI analysiert und in strukturierte medizinische Notizen umwandelt. Ermöglicht es Ärzten, sich während der Konsultationen ausschließlich auf Patienten zu konzentrieren und reduziert die Notizzeit um über 80%. Angetrieben von OpenAI Whisper und GPT-Technologien, mit sicherer Datenverwaltung über Supabase.",
      features: [
        {
          title: "Auto-Aufnahme",
          description: "Automatische Sprachaufnahme und Transkription."
        },
        {
          title: "KI-Analyse",
          description: "Intelligente medizinische Analyse von Symptomen."
        },
        {
          title: "SOAP-Notizen",
          description: "Generiert automatisch strukturierte Arztnotizen."
        },
        {
          title: "ICD-10 Support",
          description: "Intelligente Code-Vorschläge und Integration."
        },
        {
          title: "Datensicherheit",
          description: "Verschlüsselte Speicherung und sicherer Zugang."
        },
        {
          title: "Patienten-Tools",
          description: "Erstellung von Nachrichten und Überweisungen."
        },
        {
          title: "Notizerstellung",
          description: "Flexibel per Sprache oder Text mit Vorlagen."
        },
        {
          title: "Dashboard",
          description: "Umfassende Übersicht aller Konsultationen."
        }
      ],
      techStack: {
        frontend: ["Next.js 14", "React 18", "TypeScript", "TailwindCSS"],
        backend: ["Next.js API Routes", "Supabase (PostgreSQL)", "Supabase Auth", "Row Level Security"],
        ai: ["OpenAI Whisper (Sprache-zu-Text)", "OpenAI GPT-4o-mini (Textanalyse)"],
        ui: ["Lucide React Icons", "Benutzerdefinierte Komponenten", "Minimalistisches Design"],
        features: ["MediaRecorder API", "Lokaler Speicher", "Cloud-Sync", "PWA-Bereit"]
      }
    },
    images: ["/voiceapp1.png", "/voiceapp2.png", "/voiceapp3.png"]
  }
];

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left mouse button
    setIsDragging(true);
    setDragStart(e.clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const distance = dragStart - e.clientX;
    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setIsDragging(false);
  };

  const openModal = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextModal = () => {
    setModalIndex((prev) => (prev + 1) % images.length);
  };

  const prevModal = () => {
    setModalIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        setModalIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        setModalIndex((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, images.length]);

  return (
    <>
      <div className="image-carousel">
        <div 
          className="carousel-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {images.length > 1 && (
            <>
              <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous image">
                ‹
              </button>
              <button className="carousel-btn next" onClick={nextSlide} aria-label="Next image">
                ›
              </button>
            </>
          )}
          <div className="carousel-slide">
            <img
              src={images[currentIndex]}
              alt={`Project screenshot ${currentIndex + 1}`}
              className="carousel-image"
              onClick={() => openModal(currentIndex)}
              style={{ cursor: 'pointer' }}
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzY0NmNmZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2plY3Q8L3RleHQ+PC9zdmc+';
              }}
            />
          </div>
        </div>
        {images.length > 1 && (
          <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {isModalOpen && createPortal(
        <div className="image-modal" onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeModal();
          }
        }}>
          <button className="modal-close" onClick={(e) => { e.stopPropagation(); closeModal(); }} aria-label="Close modal">
            ×
          </button>
          {images.length > 1 && (
            <>
              <button className="modal-btn prev" onClick={(e) => { e.stopPropagation(); prevModal(); }} aria-label="Previous image">
                ‹
              </button>
              <button className="modal-btn next" onClick={(e) => { e.stopPropagation(); nextModal(); }} aria-label="Next image">
                ›
              </button>
            </>
          )}
          <div className="modal-content">
            <img
              src={images[modalIndex]}
              alt={`Project screenshot ${modalIndex + 1}`}
              className="modal-image"
              loading="eager"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzY0NmNmZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2plY3Q8L3RleHQ+PC9zdmc+';
              }}
            />
            {images.length > 1 && (
              <div className="modal-counter">
                {modalIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const { language, t } = useLanguage();

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">{t.projects.title}</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const projectData = project[language];
            const isExpanded = expandedProject === index;

            return (
              <div key={index} className={`project-card ${isExpanded ? 'expanded' : ''}`}>
                {project.images && project.images.length > 0 && (
                  <div className="project-images">
                    <ImageCarousel images={project.images} />
                  </div>
                )}
                <div className="project-header">
                  <div className="project-title-section">
                    <h3 className="project-title">{projectData.name}</h3>
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-url"
                      >
                        {project.demoUrl}
                      </a>
                    )}
                    <p className="project-tagline">{projectData.tagline}</p>
                  </div>
                </div>
                
                <div className="project-description">
                  {projectData.description}
              </div>

                <div className="project-features">
                  <h4 className="features-title">{t.projects.features}</h4>
                  <ul className="features-list">
                    {projectData.features.slice(0, isExpanded ? projectData.features.length : 3).map((feature, i) => (
                      <li key={i} className="feature-item">
                        <span className="feature-title">• {feature.title}:</span>
                        <span className="feature-desc">{feature.description}</span>
                      </li>
                    ))}
                  </ul>
                  {projectData.features.length > 3 && (
                    <button
                      className="expand-btn"
                      onClick={() => toggleExpand(index)}
                    >
                      {isExpanded ? t.projects.showLess : `+${projectData.features.length - 3} ${t.projects.moreFeatures}`}
                    </button>
                  )}
                </div>

                <div className="project-tech">
                  <h4 className="tech-title">{t.projects.techStack}</h4>
                  <div className="tech-sections">
                    {projectData.techStack.frontend && (
                      <div className="tech-section">
                        <span className="tech-label">{t.projects.tech.frontend}</span>
                        <div className="tech-tags">
                          {projectData.techStack.frontend.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {projectData.techStack.backend && (
                      <div className="tech-section">
                        <span className="tech-label">{t.projects.tech.backend}</span>
                        <div className="tech-tags">
                          {projectData.techStack.backend.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {projectData.techStack.ui && (
                      <div className="tech-section">
                        <span className="tech-label">{t.projects.tech.ui}</span>
                        <div className="tech-tags">
                          {projectData.techStack.ui.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {projectData.techStack.features && (
                      <div className="tech-section">
                        <span className="tech-label">{t.projects.tech.features}</span>
                        <div className="tech-tags">
                          {projectData.techStack.features.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {projectData.techStack.ai && (
                      <div className="tech-section">
                        <span className="tech-label">{t.projects.tech.ai}</span>
                        <div className="tech-tags">
                          {projectData.techStack.ai.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
