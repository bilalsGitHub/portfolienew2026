import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './MobileApps.css';

interface Feature {
  title: string;
  description: string;
}

interface TechStack {
  framework?: string[];
  ui?: string[];
  features?: string[];
  storage?: string[];
  api?: string[];
}

interface AppData {
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
  techStack: TechStack;
}

interface MobileApp {
  id: string;
  en: AppData;
  de: AppData;
  storeUrl?: string;
  githubUrl?: string;
  images: string[];
}

const mobileApps: MobileApp[] = [
  {
    id: 'dopamin-app',
    en: {
      name: 'Dopamin - Digital Wellbeing',
      tagline: 'Take Control of Your Digital Life',
      description: 'A comprehensive digital wellness app that helps you manage screen time, build healthy habits, and reduce phone addiction through gamification and AI-powered insights.',
      features: [
        {
          title: 'Screen Time Tracking',
          description: 'Monitor your daily phone usage with detailed analytics and insights.',
        },
        {
          title: 'App Blocking',
          description: 'Block distracting apps during focus sessions and work hours.',
        },
        {
          title: 'Habit Building',
          description: 'Create and track healthy habits to replace phone usage.',
        },
        {
          title: 'Focus Sessions',
          description: 'Timed focus sessions with rewards and streak tracking.',
        },
        {
          title: 'AI Insights',
          description: 'Get personalized recommendations based on your usage patterns.',
        },
        {
          title: 'Gamification',
          description: 'Earn points, unlock achievements, and compete with friends.',
        },
      ],
      techStack: {
        framework: ['React Native', 'Expo'],
        ui: ['React Navigation', 'Native Base', 'Animations'],
        features: ['Push Notifications', 'Background Tasks', 'Local Storage'],
        storage: ['AsyncStorage', 'SQLite'],
      },
    },
    de: {
      name: 'Dopamin - Digitales Wohlbefinden',
      tagline: 'Übernehmen Sie die Kontrolle über Ihr digitales Leben',
      description: 'Eine umfassende digitale Wellness-App, die Ihnen hilft, Bildschirmzeit zu verwalten, gesunde Gewohnheiten aufzubauen und Handysucht durch Gamification und KI-gestützte Einblicke zu reduzieren.',
      features: [
        {
          title: 'Bildschirmzeit-Tracking',
          description: 'Überwachen Sie Ihre tägliche Handynutzung mit detaillierten Analysen.',
        },
        {
          title: 'App-Blockierung',
          description: 'Blockieren Sie ablenkende Apps während Fokussitzungen und Arbeitszeiten.',
        },
        {
          title: 'Gewohnheitsbildung',
          description: 'Erstellen und verfolgen Sie gesunde Gewohnheiten, um die Handynutzung zu ersetzen.',
        },
        {
          title: 'Fokussitzungen',
          description: 'Zeitgesteuerte Fokussitzungen mit Belohnungen und Streak-Tracking.',
        },
        {
          title: 'KI-Einblicke',
          description: 'Erhalten Sie personalisierte Empfehlungen basierend auf Ihren Nutzungsmustern.',
        },
        {
          title: 'Gamification',
          description: 'Sammeln Sie Punkte, schalten Sie Erfolge frei und konkurrieren Sie mit Freunden.',
        },
      ],
      techStack: {
        framework: ['React Native', 'Expo'],
        ui: ['React Navigation', 'Native Base', 'Animations'],
        features: ['Push-Benachrichtigungen', 'Hintergrundaufgaben', 'Lokale Speicherung'],
        storage: ['AsyncStorage', 'SQLite'],
      },
    },
    images: [
      '/mobile-apps/dopaminapp/Ekran görüntüsü 2026-02-07 090011.png',
      '/mobile-apps/dopaminapp/Ekran görüntüsü 2026-02-07 090014.png',
      '/mobile-apps/dopaminapp/Ekran görüntüsü 2026-02-07 090016.png',
      '/mobile-apps/dopaminapp/Ekran görüntüsü 2026-02-07 090025.png',
    ],
  },
  {
    id: 'testosterone-boost',
    en: {
      name: 'T-Boost - Testosterone Tracker',
      tagline: 'Optimize Your Testosterone Naturally',
      description: 'Track habits, workouts, and lifestyle factors that influence testosterone levels. Get personalized recommendations and see your progress over time.',
      features: [
        {
          title: 'Habit Tracking',
          description: 'Track sleep, exercise, diet, and other testosterone-boosting habits.',
        },
        {
          title: 'Workout Plans',
          description: 'Follow science-backed workout routines optimized for hormone health.',
        },
        {
          title: 'Progress Analytics',
          description: 'Visualize your progress with charts and detailed analytics.',
        },
        {
          title: 'Nutrition Guide',
          description: 'Get meal plans and recipes that support testosterone production.',
        },
        {
          title: 'Reminders',
          description: 'Daily reminders to maintain consistency in your routine.',
        },
      ],
      techStack: {
        framework: ['React Native', 'Expo'],
        ui: ['React Native Paper', 'Charts', 'Animations'],
        features: ['Push Notifications', 'Local Notifications', 'Calendar Integration'],
        storage: ['AsyncStorage', 'Realm Database'],
      },
    },
    de: {
      name: 'T-Boost - Testosteron-Tracker',
      tagline: 'Optimieren Sie Ihr Testosteron auf natürliche Weise',
      description: 'Verfolgen Sie Gewohnheiten, Workouts und Lebensstilfaktoren, die den Testosteronspiegel beeinflussen. Erhalten Sie personalisierte Empfehlungen und sehen Sie Ihren Fortschritt im Laufe der Zeit.',
      features: [
        {
          title: 'Gewohnheits-Tracking',
          description: 'Verfolgen Sie Schlaf, Bewegung, Ernährung und andere testosteronfördernde Gewohnheiten.',
        },
        {
          title: 'Trainingspläne',
          description: 'Folgen Sie wissenschaftlich fundierten Trainingsroutinen, die für die Hormongesundheit optimiert sind.',
        },
        {
          title: 'Fortschrittsanalyse',
          description: 'Visualisieren Sie Ihren Fortschritt mit Diagrammen und detaillierten Analysen.',
        },
        {
          title: 'Ernährungsführer',
          description: 'Erhalten Sie Ernährungspläne und Rezepte, die die Testosteronproduktion unterstützen.',
        },
        {
          title: 'Erinnerungen',
          description: 'Tägliche Erinnerungen, um Konsistenz in Ihrer Routine aufrechtzuerhalten.',
        },
      ],
      techStack: {
        framework: ['React Native', 'Expo'],
        ui: ['React Native Paper', 'Charts', 'Animations'],
        features: ['Push-Benachrichtigungen', 'Lokale Benachrichtigungen', 'Kalender-Integration'],
        storage: ['AsyncStorage', 'Realm Database'],
      },
    },
    images: [
      '/mobile-apps/testesteron boost app/Ekran görüntüsü 2026-02-07 084618.png',
      '/mobile-apps/testesteron boost app/Ekran görüntüsü 2026-02-07 084909.png',
      '/mobile-apps/testesteron boost app/Ekran görüntüsü 2026-02-07 085302.png',
      '/mobile-apps/testesteron boost app/Ekran görüntüsü 2026-02-07 085307.png',
    ],
  },
  {
    id: 'voice-to-text',
    en: {
      name: 'VoiceNote - AI Voice to Text',
      tagline: 'Your Voice, Perfectly Transcribed',
      description: 'Convert speech to text instantly with AI-powered transcription. Take notes, write messages, and create documents hands-free with high accuracy.',
      features: [
        {
          title: 'Real-Time Transcription',
          description: 'Convert speech to text in real-time with high accuracy.',
        },
        {
          title: 'Multi-Language Support',
          description: 'Transcribe in 50+ languages with auto-detection.',
        },
        {
          title: 'Smart Punctuation',
          description: 'AI automatically adds punctuation and formatting.',
        },
        {
          title: 'Note Organization',
          description: 'Organize your notes with tags, folders, and search.',
        },
        {
          title: 'Export Options',
          description: 'Export to PDF, Word, or share directly to other apps.',
        },
        {
          title: 'Offline Mode',
          description: 'Basic transcription works offline without internet.',
        },
      ],
      techStack: {
        framework: ['React Native', 'Expo'],
        ui: ['React Native Elements', 'Vector Icons'],
        api: ['OpenAI Whisper API', 'Speech Recognition API'],
        features: ['Voice Recording', 'File Management', 'Share Extension'],
        storage: ['AsyncStorage', 'File System'],
      },
    },
    de: {
      name: 'VoiceNote - KI Sprache zu Text',
      tagline: 'Ihre Stimme, perfekt transkribiert',
      description: 'Konvertieren Sie Sprache sofort in Text mit KI-gestützter Transkription. Machen Sie Notizen, schreiben Sie Nachrichten und erstellen Sie Dokumente freihändig mit hoher Genauigkeit.',
      features: [
        {
          title: 'Echtzeit-Transkription',
          description: 'Konvertieren Sie Sprache in Echtzeit mit hoher Genauigkeit in Text.',
        },
        {
          title: 'Multi-Sprachen-Unterstützung',
          description: 'Transkribieren Sie in 50+ Sprachen mit automatischer Erkennung.',
        },
        {
          title: 'Intelligente Zeichensetzung',
          description: 'KI fügt automatisch Zeichensetzung und Formatierung hinzu.',
        },
        {
          title: 'Notizorganisation',
          description: 'Organisieren Sie Ihre Notizen mit Tags, Ordnern und Suche.',
        },
        {
          title: 'Export-Optionen',
          description: 'Exportieren Sie zu PDF, Word oder teilen Sie direkt mit anderen Apps.',
        },
        {
          title: 'Offline-Modus',
          description: 'Grundlegende Transkription funktioniert offline ohne Internet.',
        },
      ],
      techStack: {
        framework: ['React Native', 'Expo'],
        ui: ['React Native Elements', 'Vector Icons'],
        api: ['OpenAI Whisper API', 'Speech Recognition API'],
        features: ['Sprachaufnahme', 'Dateiverwaltung', 'Share Extension'],
        storage: ['AsyncStorage', 'File System'],
      },
    },
    images: [
      '/mobile-apps/voicetotextnote/Ekran görüntüsü 2026-02-07 090912.png',
      '/mobile-apps/voicetotextnote/Ekran görüntüsü 2026-02-07 090915.png',
      '/mobile-apps/voicetotextnote/Ekran görüntüsü 2026-02-07 090940.png',
      '/mobile-apps/voicetotextnote/Ekran görüntüsü 2026-02-07 090943.png',
    ],
  },
  {
    id: 'expenses-tracker',
    en: {
      name: 'Expenses Tracker - Budget Manager',
      tagline: 'Take Control of Your Finances',
      description: 'A comprehensive expense tracking app that helps you manage your budget, track spending, and achieve your financial goals. Visualize your expenses with intuitive charts and get insights into your spending habits.',
      features: [],
      techStack: {
        framework: ['React Native', 'Expo'],
        ui: ['React Native Paper', 'Victory Charts', 'Vector Icons'],
        features: ['Budget Tracking', 'Category Management', 'Chart Visualizations', 'Monthly Reports'],
        storage: ['AsyncStorage', 'SQLite'],
      },
    },
    de: {
      name: 'Ausgaben-Tracker - Budget-Manager',
      tagline: 'Übernehmen Sie die Kontrolle über Ihre Finanzen',
      description: 'Eine umfassende Ausgaben-Tracking-App, die Ihnen hilft, Ihr Budget zu verwalten, Ausgaben zu verfolgen und Ihre finanziellen Ziele zu erreichen. Visualisieren Sie Ihre Ausgaben mit intuitiven Diagrammen und erhalten Sie Einblicke in Ihre Ausgabegewohnheiten.',
      features: [],
      techStack: {
        framework: ['React Native', 'Expo'],
        ui: ['React Native Paper', 'Victory Charts', 'Vector Icons'],
        features: ['Budget-Tracking', 'Kategorie-Verwaltung', 'Diagramm-Visualisierungen', 'Monatsberichte'],
        storage: ['AsyncStorage', 'SQLite'],
      },
    },
    images: [
      '/mobile-apps/Expenses/Ekran görüntüsü 2026-02-07 102832.png',
      '/mobile-apps/Expenses/Ekran görüntüsü 2026-02-07 102852.png',
      '/mobile-apps/Expenses/Ekran görüntüsü 2026-02-07 102856.png',
      '/mobile-apps/Expenses/Ekran görüntüsü 2026-02-07 102859.png',
      '/mobile-apps/Expenses/Ekran görüntüsü 2026-02-07 102902.png',
      '/mobile-apps/Expenses/Ekran görüntüsü 2026-02-07 102907.png',
    ],
  },
];

export const MobileApps = () => {
  const { language, t } = useLanguage();
  const [expandedTechStack, setExpandedTechStack] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  const toggleTechStack = (index: number) => {
    const newSet = new Set(expandedTechStack);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setExpandedTechStack(newSet);
  };

  const nextImage = (appId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [appId]: ((prev[appId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (appId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [appId]: ((prev[appId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <section id="mobile-apps" className="mobile-apps">
      <div className="mobile-apps-container">
        <div className="mobile-apps-header">
          <h2 className="section-title">{t.mobileApps.title}</h2>
          <p className="section-subtitle">{t.mobileApps.subtitle}</p>
        </div>

        <div className="mobile-apps-grid">
          {mobileApps.map((app, index) => {
            const appData = app[language];
            const isTechStackExpanded = expandedTechStack.has(index);
            const currentIndex = currentImageIndex[app.id] || 0;

            return (
              <div key={app.id} className="mobile-app-card">
                {/* App Screenshot Carousel */}
                <div className="app-screenshot-carousel">
                  <div className="screenshot-container">
                    <img 
                      src={app.images[currentIndex]} 
                      alt={`${appData.name} screenshot ${currentIndex + 1}`}
                      onClick={() => setSelectedImage(app.images[currentIndex])}
                    />
                  </div>
                  
                  {/* Navigation Arrows */}
                  {app.images.length > 1 && (
                    <>
                      <button 
                        className="carousel-arrow carousel-arrow-left"
                        onClick={() => prevImage(app.id, app.images.length)}
                        aria-label="Previous image"
                      >
                        ‹
                      </button>
                      <button 
                        className="carousel-arrow carousel-arrow-right"
                        onClick={() => nextImage(app.id, app.images.length)}
                        aria-label="Next image"
                      >
                        ›
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="carousel-indicators">
                        {app.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            className={`indicator ${imgIndex === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(prev => ({
                              ...prev,
                              [app.id]: imgIndex
                            }))}
                            aria-label={`Go to image ${imgIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* App Info */}
                <div className="app-info">
                  <h3 className="app-name">{appData.name}</h3>
                  <p className="app-tagline">{appData.tagline}</p>
                  <p className="app-description">{appData.description}</p>

                  {/* Tech Stack Section */}
                  <div className="app-section">
                    <button
                      className="section-toggle-btn"
                      onClick={() => toggleTechStack(index)}
                    >
                      <span>{t.mobileApps.techStack}</span>
                      <span className={`toggle-icon ${isTechStackExpanded ? 'expanded' : ''}`}>
                        ▼
                      </span>
                    </button>
                    <div className={`section-content ${isTechStackExpanded ? 'expanded' : ''}`}>
                      <div className="tech-stack">
                        {appData.techStack.framework && (
                          <div className="tech-category">
                            <span className="tech-label">Framework:</span>
                            <div className="tech-items">
                              {appData.techStack.framework.map((tech, tIndex) => (
                                <span key={tIndex} className="tech-tag">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {appData.techStack.ui && (
                          <div className="tech-category">
                            <span className="tech-label">UI:</span>
                            <div className="tech-items">
                              {appData.techStack.ui.map((tech, tIndex) => (
                                <span key={tIndex} className="tech-tag">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {appData.techStack.api && (
                          <div className="tech-category">
                            <span className="tech-label">API:</span>
                            <div className="tech-items">
                              {appData.techStack.api.map((tech, tIndex) => (
                                <span key={tIndex} className="tech-tag">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {appData.techStack.features && (
                          <div className="tech-category">
                            <span className="tech-label">Features:</span>
                            <div className="tech-items">
                              {appData.techStack.features.map((tech, tIndex) => (
                                <span key={tIndex} className="tech-tag">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {appData.techStack.storage && (
                          <div className="tech-category">
                            <span className="tech-label">Storage:</span>
                            <div className="tech-items">
                              {appData.techStack.storage.map((tech, tIndex) => (
                                <span key={tIndex} className="tech-tag">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
            <img src={selectedImage} alt="Screenshot" />
          </div>
        </div>
      )}
    </section>
  );
};
