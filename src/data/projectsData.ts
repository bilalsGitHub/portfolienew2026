import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    id: "habits",
    category: "fullstack",
    en: {
      name: "HABITS - Premium Habit Tracker",
      tagline: "Track What Truly Matters",
      description:
        "A minimalist, monochrome habit tracking web application inspired by Apple, Notion, and Japanese design philosophy. Built with performance and user experience in mind, featuring real-time analytics, beautiful heatmaps, and a distraction-free interface.",
      features: [
        {
          title: "Minimal Design",
          description:
            "Distraction-free black & white interface for maximum focus.",
        },
        {
          title: "Visual Heatmaps",
          description: "Visualize your consistency with interactive heatmaps.",
        },
        {
          title: "Smart Analytics",
          description: "Track your streaks and completion rates.",
        },
        {
          title: "Cloud Sync",
          description: "Automatic synchronization across all your devices.",
        },
        {
          title: "High Performance",
          description: "Fast and smooth user experience without loading times.",
        },
      ],
      techStack: {
        frontend: [
          "Next.js 16 (Turbopack)",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
        ],
        backend: [
          "Supabase (PostgreSQL)",
          "Supabase Auth",
          "Row Level Security",
        ],
        features: [
          "Server Components",
          "Client Components",
          "Optimistic UI",
          "React Memoization",
        ],
      },
    },
    de: {
      name: "HABITS - Premium Gewohnheitstracker",
      tagline: "Verfolge, was wirklich zählt",
      description:
        "Eine minimalistische, monochrome Webanwendung zur Gewohnheitsverfolgung, inspiriert von Apple, Notion und japanischer Designphilosophie. Mit Fokus auf Performance und Benutzererfahrung, mit Echtzeit-Analysen, schönen Heatmaps und einer ablenkungsfreien Benutzeroberfläche.",
      features: [
        {
          title: "Minimalistisches Design",
          description:
            "Ablenkungsfreie Schwarz-Weiß-Oberfläche für maximalen Fokus.",
        },
        {
          title: "Visuelle Heatmaps",
          description:
            "Visualisieren Sie Ihre Konsistenz mit interaktiven Heatmaps.",
        },
        {
          title: "Intelligente Analysen",
          description: "Verfolgen Sie Ihre Streaks und Abschlussraten.",
        },
        {
          title: "Cloud-Synchronisation",
          description: "Automatische Synchronisation auf allen Ihren Geräten.",
        },
        {
          title: "Hohe Leistung",
          description:
            "Schnelle und reibungslose Benutzererfahrung ohne Ladezeiten.",
        },
      ],
      techStack: {
        frontend: [
          "Next.js 16 (Turbopack)",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
        ],
        backend: [
          "Supabase (PostgreSQL)",
          "Supabase Auth",
          "Row Level Security",
        ],
        features: [
          "Server Components",
          "Client Components",
          "Optimistic UI",
          "React Memoization",
        ],
      },
    },
    images: ["/projects/habits/habitapp.png"],
  },
  {
    id: "eye-tracking",
    category: "frontend-pure",
    video: "/projects/eye-tracking/Eye Tracking 1 .mp4",
    en: {
      name: "Eye Tracking - Focus & Reaction Trainer",
      tagline: "Train Your Eyes, Boost Your Performance",
      description:
        "A professional eye tracking web application designed to improve focus, eye coordination, and reaction speed. Perfect for athletes, gamers, students, and anyone looking to enhance their visual performance with scientifically-backed training exercises.",
      features: [
        {
          title: "Training Modes",
          description: "7 distinct modes for focus and coordination training.",
        },
        {
          title: "Customizable",
          description: "Fully adjustable speed, size, and difficulty settings.",
        },
        {
          title: "Real-Time Analytics",
          description: "Live tracking of accuracy and reaction speed.",
        },
        {
          title: "Visual Feedback",
          description: "Instant feedback to improve your tracking skills.",
        },
        {
          title: "Interactive Games",
          description: "Fun challenges to test and improve reaction time.",
        },
      ],
      techStack: {
        frontend: ["Pure JavaScript (ES6+)", "HTML5", "CSS3"],
        backend: ["No backend - Runs entirely in browser"],
        features: [
          "Canvas Animation (requestAnimationFrame)",
          "Real-time State Management",
          "Responsive Design",
          "Keyboard Shortcuts (F11, ESC)",
        ],
      },
    },
    de: {
      name: "Eye Tracking - Fokus & Reaktionstrainer",
      tagline: "Trainiere deine Augen, steigere deine Leistung",
      description:
        "Eine professionelle Eye-Tracking-Webanwendung zur Verbesserung von Fokus, Augenkoordination und Reaktionsgeschwindigkeit. Ideal für Sportler, Gamer, Studenten und alle, die ihre visuelle Leistung mit wissenschaftlich fundierten Trainingsübungen verbessern möchten.",
      features: [
        {
          title: "Trainingsmodi",
          description:
            "7 verschiedene Modi für Fokus- und Koordinationstraining.",
        },
        {
          title: "Anpassbar",
          description:
            "Vollständig einstellbare Geschwindigkeit und Schwierigkeit.",
        },
        {
          title: "Echtzeit-Analysen",
          description:
            "Live-Verfolgung von Genauigkeit und Reaktionsgeschwindigkeit.",
        },
        {
          title: "Visuelles Feedback",
          description:
            "Sofortiges Feedback zur Verbesserung Ihrer Fähigkeiten.",
        },
        {
          title: "Interaktive Spiele",
          description:
            "Unterhaltsame Herausforderungen zum Testen der Reaktionszeit.",
        },
      ],
      techStack: {
        frontend: ["Reines JavaScript (ES6+)", "HTML5", "CSS3"],
        backend: ["Kein Backend - Läuft vollständig im Browser"],
        features: [
          "Canvas-Animation (requestAnimationFrame)",
          "Echtzeit-Zustandsverwaltung",
          "Responsives Design",
          "Tastaturkürzel (F11, ESC)",
        ],
      },
    },
    images: ["/projects/eye-tracking/eyetracking1.png"],
  },
  {
    id: "blackfocus",
    category: "fullstack",
    en: {
      name: "BlackFocus - Premium Pomodoro Timer",
      tagline: "The Timer You've Been Looking For",
      description:
        "A beautiful, minimal black Pomodoro timer built with Next.js 16, TypeScript, and TailwindCSS. Perfect for focus sessions, productivity tracking, and deep work. Features real-time analytics, task management, and a distraction-free interface.",
      features: [
        {
          title: "Pomodoro Timer",
          description: "Customizable timer for focus and break sessions.",
        },
        {
          title: "Task Management",
          description: "Integrated task list to track your work.",
        },
        {
          title: "Focus Mode",
          description: "Distraction-free full-screen interface.",
        },
        {
          title: "Analytics",
          description: "Dashboard with productivity stats and heatmaps.",
        },
        {
          title: "Cloud Sync",
          description: "Syncs your data and works offline (PWA).",
        },
      ],
      techStack: {
        frontend: ["Next.js 16", "React 19", "TypeScript", "TailwindCSS v4"],
        backend: [
          "Supabase (PostgreSQL)",
          "Supabase Auth",
          "Row Level Security",
        ],
        ui: ["Shadcn/UI", "Radix UI", "Lucide Icons"],
        features: [
          "Zustand State Management",
          "PWA Support",
          "Keyboard Shortcuts",
          "Optimistic UI",
        ],
      },
    },
    de: {
      name: "BlackFocus - Premium Pomodoro Timer",
      tagline: "Der Timer, den Sie gesucht haben",
      description:
        "Ein schöner, minimalistischer schwarzer Pomodoro-Timer, gebaut mit Next.js 16, TypeScript und TailwindCSS. Perfekt für Fokussitzungen, Produktivitätsverfolgung und tiefe Arbeit. Mit Echtzeit-Analysen, Aufgabenverwaltung und einer ablenkungsfreien Benutzeroberfläche.",
      features: [
        {
          title: "Pomodoro Timer",
          description: "Anpassbarer Timer für Fokus- und Pausenzeiten.",
        },
        {
          title: "Aufgabenverwaltung",
          description: "Integrierte Aufgabenliste zur Arbeitsverfolgung.",
        },
        {
          title: "Fokus-Modus",
          description: "Ablenkungsfreie Vollbild-Benutzeroberfläche.",
        },
        {
          title: "Analysen",
          description: "Dashboard mit Produktivitätsstatistiken.",
        },
        {
          title: "Cloud-Sync",
          description: "Synchronisiert Daten und funktioniert offline (PWA).",
        },
      ],
      techStack: {
        frontend: ["Next.js 16", "React 19", "TypeScript", "TailwindCSS v4"],
        backend: [
          "Supabase (PostgreSQL)",
          "Supabase Auth",
          "Row Level Security",
        ],
        ui: ["Shadcn/UI", "Radix UI", "Lucide Icons"],
        features: [
          "Zustand State Management",
          "PWA Support",
          "Tastenkürzel",
          "Optimistic UI",
        ],
      },
    },
    demoUrl: "https://blackfocusvercel.vercel.app/",
    images: [
      "/projects/blackfocus/blackfocus1.png",
      "/projects/blackfocus/blackfocus2.png",
      "/projects/blackfocus/blackfocus3.png",
    ],
    video: "/projects/blackfocus/Black Focus 1.mp4",
  },
  {
    id: "dilogren",
    category: "frontend-api",
    video: "/projects/dilogren/Dıl Ogren.mp4",
    en: {
      name: " AI Language Learning Platform",
      tagline: "Learn Languages Smarter, Not Harder",
      description:
        "An intelligent language learning web application combining AI-powered conversation practice, automatic translations, and spaced repetition flashcards. Supports Turkish, English, and German with instant vocabulary analysis and smart review scheduling.",
      features: [
        {
          title: "AI Assistant",
          description: "Practice conversations with an intelligent AI tutor.",
        },
        {
          title: "Vocabulary Analysis",
          description: "Instant translation and breakdown of any text.",
        },
        {
          title: "Smart Flashcards",
          description: "Learn efficiently with spaced repetition system.",
        },
        {
          title: "Multi-Language",
          description: "Supports Turkish, English, and German.",
        },
        {
          title: "Offline First",
          description: "Works without internet connection.",
        },
      ],
      techStack: {
        frontend: ["Vanilla JavaScript", "HTML5", "CSS3", "Responsive Design"],
        backend: [
          "OpenAI GPT API (for AI analysis)",
          "LocalStorage API",
          "Client-side processing",
        ],
        features: [
          "AI Sentence Analysis",
          "Automatic Translation Caching",
          "Category Management",
          "Progress Tracking",
          "Difficulty Levels",
        ],
      },
    },
    de: {
      name: "KI-Sprachlernen-Plattform",
      tagline: "Sprachen intelligenter lernen, nicht härter",
      description:
        "Eine intelligente Sprachlern-Webanwendung, die KI-gestützte Konversationspraxis, automatische Übersetzungen und Spaced-Repetition-Lernkarten kombiniert. Unterstützt Türkisch, Englisch und Deutsch mit sofortiger Vokabelanalyse und intelligentem Wiederholungsplan.",
      features: [
        {
          title: "KI-Assistent",
          description: "Üben Sie Konversationen mit einem KI-Tutor.",
        },
        {
          title: "Vokabelanalyse",
          description: "Sofortige Übersetzung und Analyse von Texten.",
        },
        {
          title: "Intelligente Lernkarten",
          description: "Effizient lernen mit Spaced-Repetition-System.",
        },
        {
          title: "Mehrsprachig",
          description: "Unterstützt Türkisch, Englisch und Deutsch.",
        },
        {
          title: "Offline-First",
          description: "Funktioniert auch ohne Internetverbindung.",
        },
      ],
      techStack: {
        frontend: ["Vanilla JavaScript", "HTML5", "CSS3", "Responsive Design"],
        backend: [
          "OpenAI GPT API (für KI-Analyse)",
          "LocalStorage API",
          "Client-seitige Verarbeitung",
        ],
        features: [
          "KI-Satzanalyse",
          "Automatisches Übersetzungs-Caching",
          "Kategorienverwaltung",
          "Fortschrittsverfolgung",
          "Schwierigkeitsstufen",
        ],
      },
    },
  },
  {
    id: "mediflow",
    category: "fullstack",
    video: "/projects/mediflow/MedıFlow 1.mp4",
    en: {
      name: "MediFlow - Medical Consultation Assistant",
      tagline: "The AI Assistant That Helps Doctors Focus",
      description:
        "A modern web application that automatically records doctor-patient consultations, analyzes them with AI, and converts them into structured medical notes. Enables doctors to focus solely on patients during consultations, reducing note-taking time by 80%+. Powered by OpenAI Whisper and GPT technologies, with secure data management via Supabase.",
      features: [
        {
          title: "Auto Recording",
          description:
            "Automatic voice recording and transcription of consultations.",
        },
        {
          title: "AI Analysis",
          description: "Intelligent medical analysis of patient symptoms.",
        },
        {
          title: "SOAP Notes",
          description: "Automatically generates structured medical notes.",
        },
        {
          title: "ICD-10 Support",
          description: "Smart code suggestions and integration.",
        },
        {
          title: "Secure Data",
          description: "Encrypted storage and secure authentication.",
        },
        {
          title: "Patient Tools",
          description: "Generate messages and referral documents.",
        },
        {
          title: "Note Creation",
          description: "Flexible options via voice or typing with templates.",
        },
        {
          title: "Dashboard",
          description: "Comprehensive view of all consultations.",
        },
      ],
      techStack: {
        frontend: ["Next.js 14", "React 18", "TypeScript", "TailwindCSS"],
        backend: [
          "Next.js API Routes",
          "Supabase (PostgreSQL)",
          "Supabase Auth",
          "Row Level Security",
        ],
        ai: [
          "OpenAI Whisper (Speech-to-Text)",
          "OpenAI GPT-4o-mini (Text Analysis)",
        ],
        ui: ["Lucide React Icons", "Custom Components", "Minimal Design"],
        features: [
          "MediaRecorder API",
          "Local Storage",
          "Cloud Sync",
          "PWA Ready",
        ],
      },
    },
    de: {
      name: "MediFlow - Ärztlicher Konsultationsassistent",
      tagline: "Der KI-Assistent, der Ärzten hilft, sich zu konzentrieren",
      description:
        "Eine moderne Webanwendung, die Arzt-Patienten-Konsultationen automatisch aufzeichnet, sie mit KI analysiert und in strukturierte medizinische Notizen umwandelt. Ermöglicht es Ärzten, sich während der Konsultationen ausschließlich auf Patienten zu konzentrieren und reduziert die Notizzeit um über 80%. Angetrieben von OpenAI Whisper und GPT-Technologien, mit sicherer Datenverwaltung über Supabase.",
      features: [
        {
          title: "Auto-Aufnahme",
          description: "Automatische Sprachaufnahme und Transkription.",
        },
        {
          title: "KI-Analyse",
          description: "Intelligente medizinische Analyse von Symptomen.",
        },
        {
          title: "SOAP-Notizen",
          description: "Generiert automatisch strukturierte Arztnotizen.",
        },
        {
          title: "ICD-10 Support",
          description: "Intelligente Code-Vorschläge und Integration.",
        },
        {
          title: "Datensicherheit",
          description: "Verschlüsselte Speicherung und sicherer Zugang.",
        },
        {
          title: "Patienten-Tools",
          description: "Erstellung von Nachrichten und Überweisungen.",
        },
        {
          title: "Notizerstellung",
          description: "Flexibel per Sprache oder Text mit Vorlagen.",
        },
        {
          title: "Dashboard",
          description: "Umfassende Übersicht aller Konsultationen.",
        },
      ],
      techStack: {
        frontend: ["Next.js 14", "React 18", "TypeScript", "TailwindCSS"],
        backend: [
          "Next.js API Routes",
          "Supabase (PostgreSQL)",
          "Supabase Auth",
          "Row Level Security",
        ],
        ai: [
          "OpenAI Whisper (Sprache-zu-Text)",
          "OpenAI GPT-4o-mini (Textanalyse)",
        ],
        ui: [
          "Lucide React Icons",
          "Benutzerdefinierte Komponenten",
          "Minimalistisches Design",
        ],
        features: [
          "MediaRecorder API",
          "Lokaler Speicher",
          "Cloud-Sync",
          "PWA-Bereit",
        ],
      },
    },
    images: [
      "/projects/mediflow/voiceapp1.png",
      "/projects/mediflow/voiceapp2.png",
      "/projects/mediflow/voiceapp3.png",
    ],
  },
  {
    id: "kanban-board",
    category: "frontend-pure",
    demoUrl: "https://kanban-board-xxxxx.vercel.app/",
    en: {
      name: "Multi-Project Kanban Board",
      tagline: "Organize Your Tasks, Boost Your Productivity",
      description:
        "A modern, multi-project task management application with drag & drop functionality. Manage multiple projects, assign team members, track progress with visual statistics, and work seamlessly in dark mode. Perfect for teams and individuals who want a simple, clean, and powerful project management tool.",
      features: [
        {
          title: "Multiple Projects",
          description:
            "Create and manage unlimited projects with descriptions.",
        },
        {
          title: "Drag & Drop",
          description: "Move tasks between columns with smooth animations.",
        },
        {
          title: "Team Management",
          description: "Add team members and assign tasks to people.",
        },
        {
          title: "Visual Statistics",
          description:
            "Track progress with real-time charts and person-based stats.",
        },
        {
          title: "Dark Mode",
          description: "Eye-friendly dark theme with instant toggle.",
        },
        {
          title: "Multi-Language",
          description: "Supports Turkish, English, and German languages.",
        },
        {
          title: "Priority Levels",
          description: "Set task priorities: Low, Medium, or High.",
        },
        {
          title: "Search & Filter",
          description: "Quickly find tasks with instant search.",
        },
      ],
      techStack: {
        frontend: ["React 18", "Vite 6", "Tailwind CSS"],
        stateManagement: ["Redux Toolkit", "React Redux"],
        storage: ["LocalStorage API", "Persistent Data"],
        features: [
          "Drag & Drop (@hello-pangea/dnd)",
          "Dark Mode",
          "Multi-Language",
          "Responsive Design",
        ],
      },
    },
    de: {
      name: "Multi-Projekt Kanban Board",
      tagline:
        "Organisieren Sie Ihre Aufgaben, Steigern Sie Ihre Produktivität",
      description:
        "Eine moderne, multi-projekt Aufgabenverwaltungsanwendung mit Drag-&-Drop-Funktionalität. Verwalten Sie mehrere Projekte, weisen Sie Teammitglieder zu, verfolgen Sie den Fortschritt mit visuellen Statistiken und arbeiten Sie nahtlos im Dark Mode. Perfekt für Teams und Einzelpersonen, die ein einfaches, sauberes und leistungsstarkes Projektmanagement-Tool suchen.",
      features: [
        {
          title: "Mehrere Projekte",
          description: "Erstellen und verwalten Sie unbegrenzt viele Projekte.",
        },
        {
          title: "Drag & Drop",
          description:
            "Verschieben Sie Aufgaben zwischen Spalten mit sanften Animationen.",
        },
        {
          title: "Teamverwaltung",
          description:
            "Fügen Sie Teammitglieder hinzu und weisen Sie Aufgaben zu.",
        },
        {
          title: "Visuelle Statistiken",
          description: "Verfolgen Sie den Fortschritt mit Echtzeit-Diagrammen.",
        },
        {
          title: "Dark Mode",
          description:
            "Augenfreundliches dunkles Design mit sofortigem Wechsel.",
        },
        {
          title: "Mehrsprachig",
          description: "Unterstützt Türkisch, Englisch und Deutsch.",
        },
        {
          title: "Prioritätsstufen",
          description:
            "Setzen Sie Aufgabenprioritäten: Niedrig, Mittel oder Hoch.",
        },
        {
          title: "Suchen & Filtern",
          description: "Finden Sie Aufgaben schnell mit Sofortsuche.",
        },
      ],
      techStack: {
        frontend: ["React 18", "Vite 6", "Tailwind CSS"],
        stateManagement: ["Redux Toolkit", "React Redux"],
        storage: ["LocalStorage API", "Dauerhafte Daten"],
        features: [
          "Drag & Drop (@hello-pangea/dnd)",
          "Dark Mode",
          "Mehrsprachig",
          "Responsives Design",
        ],
      },
    },
    images: [
      "/projects/kanban/kanban1.png",
      "/projects/kanban/kanban2.png",
      "/projects/kanban/kanban3.png",
    ],
  },
  {
    id: "weather-dashboard",
    category: "frontend-api",
    en: {
      name: "WeatherDash - Minimalist Weather App",
      tagline: "Beautiful Weather at Your Fingertips",
      description:
        "A sleek, minimalist weather dashboard with real-time data, favorites management, and dark mode support. Search any city worldwide, track your favorite locations, and view detailed metrics with an elegant, distraction-free interface inspired by modern design principles.",
      features: [
        {
          title: "Real-Time Weather",
          description: "Live weather data from OpenWeatherMap API.",
        },
        {
          title: "City Search",
          description: "Search any city worldwide with instant results.",
        },
        {
          title: "Favorites System",
          description: "Save and quickly access your favorite locations.",
        },
        {
          title: "5-Day Forecast",
          description: "Visual forecast with weather icons and temperatures.",
        },
        {
          title: "Detailed Metrics",
          description: "Wind speed, humidity, UV index, and visibility.",
        },
        {
          title: "Dark Mode",
          description: "Elegant dark theme with smooth transitions.",
        },
        {
          title: "Search History",
          description: "Quick access to recently searched cities.",
        },
        {
          title: "Loading States",
          description: "Multiple smooth loading animations across components.",
        },
      ],
      techStack: {
        frontend: ["React 18", "Redux Toolkit", "Tailwind CSS"],
        backend: ["OpenWeatherMap API", "Axios for HTTP requests"],
        stateManagement: ["Redux Toolkit", "React Redux", "Redux Thunk"],
        storage: ["LocalStorage (for favorites)", "Session persistence"],
        features: [
          "Dark Mode Toggle",
          "Responsive Design",
          "Loading Spinners",
          "Error Handling",
          "Temperature Unit Toggle (°C/°F)",
        ],
      },
    },
    de: {
      name: "WeatherDash - Minimalistisches Wetter-App",
      tagline: "Schönes Wetter auf Knopfdruck",
      description:
        "Ein elegantes, minimalistisches Wetter-Dashboard mit Echtzeit-Daten, Favoritenverwaltung und Dark-Mode-Unterstützung. Suchen Sie jede Stadt weltweit, verfolgen Sie Ihre Lieblingsorte und sehen Sie detaillierte Metriken mit einer eleganten, ablenkungsfreien Benutzeroberfläche, die von modernen Designprinzipien inspiriert ist.",
      features: [
        {
          title: "Echtzeit-Wetter",
          description: "Live-Wetterdaten von der OpenWeatherMap API.",
        },
        {
          title: "Stadtsuche",
          description:
            "Suchen Sie jede Stadt weltweit mit sofortigen Ergebnissen.",
        },
        {
          title: "Favoriten-System",
          description:
            "Speichern und greifen Sie schnell auf Lieblingsorte zu.",
        },
        {
          title: "5-Tage-Vorhersage",
          description: "Visuelle Vorhersage mit Wetter-Icons und Temperaturen.",
        },
        {
          title: "Detaillierte Metriken",
          description:
            "Windgeschwindigkeit, Luftfeuchtigkeit, UV-Index und Sicht.",
        },
        {
          title: "Dark Mode",
          description: "Elegantes dunkles Design mit sanften Übergängen.",
        },
        {
          title: "Suchverlauf",
          description: "Schneller Zugriff auf kürzlich gesuchte Städte.",
        },
        {
          title: "Ladezustände",
          description:
            "Mehrere sanfte Lade-Animationen über Komponenten hinweg.",
        },
      ],
      techStack: {
        frontend: ["React 18", "Redux Toolkit", "Tailwind CSS"],
        backend: ["OpenWeatherMap API", "Axios für HTTP-Anfragen"],
        stateManagement: ["Redux Toolkit", "React Redux", "Redux Thunk"],
        storage: ["LocalStorage (für Favoriten)", "Sitzungspersistenz"],
        features: [
          "Dark Mode Umschalter",
          "Responsives Design",
          "Lade-Spinner",
          "Fehlerbehandlung",
          "Temperatureinheit Umschalter (°C/°F)",
        ],
      },
    },
    images: [
      "/projects/weather/weather1.png",
      "/projects/weather/weather2.png",
    ],
  },
];
