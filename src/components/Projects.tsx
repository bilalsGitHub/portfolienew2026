import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { updateFlag, getFlags, trackRoute, trackInteraction } from '../utils/featureFlags';
import { projects } from '../data/projectsData';
import type { Project } from '../types/projects';
import './Projects.css';
const VideoModal = ({ videoUrl, projectId, onClose }: { videoUrl: string; projectId: string; onClose: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play when modal opens
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }

    // Track video view
    trackRoute(`/projects/${projectId}/video`, { 
      projectId, 
      action: 'video_view'
    });

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [projectId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ' && videoRef.current) {
        e.preventDefault();
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return createPortal(
    <div className="video-modal" onClick={onClose}>
      <button className="modal-close" onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close video">
        ×
      </button>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          autoPlay
          className="modal-video"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>,
    document.body
  );
};

const ImageCarousel = ({ images, projectId }: { images: string[]; projectId: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    trackInteraction('carousel_next', { projectId, imageIndex: (currentIndex + 1) % images.length });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    trackInteraction('carousel_prev', { projectId, imageIndex: (currentIndex - 1 + images.length) % images.length });
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
    
    // Track route for image view
    trackRoute(`/projects/${projectId}/image/${index + 1}`, { 
      projectId, 
      imageIndex: index,
      action: 'image_view'
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextModal = () => {
    const newIndex = (modalIndex + 1) % images.length;
    setModalIndex(newIndex);
    trackRoute(`/projects/${projectId}/image/${newIndex + 1}`, { 
      projectId, 
      imageIndex: newIndex,
      action: 'modal_next'
    });
  };

  const prevModal = () => {
    const newIndex = (modalIndex - 1 + images.length) % images.length;
    setModalIndex(newIndex);
    trackRoute(`/projects/${projectId}/image/${newIndex + 1}`, { 
      projectId, 
      imageIndex: newIndex,
      action: 'modal_prev'
    });
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
  const [expandedFeatures, setExpandedFeatures] = useState<Set<number>>(new Set());
  const [expandedTechStack, setExpandedTechStack] = useState<Set<number>>(new Set());
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; videoUrl: string; projectId: string }>({ 
    isOpen: false, 
    videoUrl: '', 
    projectId: '' 
  });
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'fullstack' | 'frontend-api' | 'frontend-pure'>('all');
  const { language, t } = useLanguage();

  // Kategorilere göre projeleri filtrele
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const openVideoModal = (videoUrl: string, projectId: string) => {
    setVideoModal({ isOpen: true, videoUrl, projectId });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoUrl: '', projectId: '' });
  };

  const toggleFeatures = (projectId: string) => {
    const newSet = new Set(expandedFeatures);
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const projectName = project[language].name;
    
    if (newSet.has(projects.indexOf(project))) {
      newSet.delete(projects.indexOf(project));
      // Track collapse
      trackInteraction('features_collapse', { projectId, projectName });
    } else {
      newSet.add(projects.indexOf(project));
      // Track route for features view
      trackRoute(`/projects/${projectId}/features`, { 
        projectId, 
        projectName,
        action: 'features_expand'
      });
      
      // Update feature flags
      const expandedIds = Array.from(newSet).map(i => projects[i].id);
      updateFlag('expandedFeatures', expandedIds);
    }
    setExpandedFeatures(newSet);
  };

  const toggleTechStack = (projectId: string) => {
    const newSet = new Set(expandedTechStack);
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const projectName = project[language].name;
    
    if (newSet.has(projects.indexOf(project))) {
      newSet.delete(projects.indexOf(project));
      // Track collapse
      trackInteraction('techstack_collapse', { projectId, projectName });
    } else {
      newSet.add(projects.indexOf(project));
      // Track route for tech stack view
      trackRoute(`/projects/${projectId}/tech-stack`, { 
        projectId, 
        projectName,
        action: 'techstack_expand'
      });
      
      // Update feature flags
      const expandedIds = Array.from(newSet).map(i => projects[i].id);
      updateFlag('expandedTechStack', expandedIds);
    }
    setExpandedTechStack(newSet);
  };

  const renderProjectCard = (project: Project) => {
    const projectData = project[language];
    const projectIndex = projects.indexOf(project);
    const isFeaturesExpanded = expandedFeatures.has(projectIndex);
    const isTechStackExpanded = expandedTechStack.has(projectIndex);

    return (
      <div 
        key={project.id} 
        className="project-card"
        onClick={(e) => {
          // Only track click if it's not on an interactive element
          const target = e.target as HTMLElement;
          if (!target.closest('button') && !target.closest('a') && !target.closest('img')) {
            // Track route for project view
            trackRoute(`/projects/${project.id}`, { 
              projectId: project.id, 
              projectName: projectData.name,
              action: 'project_click'
            });
            
            // Track viewed projects
            const flags = getFlags();
            const viewedProjects = Array.isArray(flags.viewedProjects) 
              ? flags.viewedProjects 
              : [];
            
            if (!viewedProjects.includes(project.id)) {
              updateFlag('viewedProjects', [...viewedProjects, project.id]);
            }
          }
        }}
      >
        {project.images && project.images.length > 0 && (
          <div className="project-images">
            <ImageCarousel images={project.images} projectId={project.id} />
          </div>
        )}
        <div className="project-header">
          <div className="project-title-section">
            <div className="project-title-row">
              <h3 className="project-title">{projectData.name}</h3>
              {project.video && (
                <button
                  className="video-play-btn"
                  onClick={() => openVideoModal(project.video!, project.id)}
                  aria-label="Watch project video"
                  title="Watch video demo"
                >
                  ▶ Video
                </button>
              )}
            </div>
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-url"
                onClick={() => {
                  trackRoute(`/projects/${project.id}/demo`, { 
                    projectId: project.id, 
                    projectName: projectData.name,
                    demoUrl: project.demoUrl,
                    action: 'demo_link_click'
                  });
                }}
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

        <div className="project-section">
          <button
            className="section-toggle-btn"
            onClick={() => toggleFeatures(project.id)}
          >
            <span className="section-toggle-title">{t.projects.features}</span>
            <span className="section-toggle-icon">{isFeaturesExpanded ? '−' : '+'}</span>
          </button>
          
          {isFeaturesExpanded && (
            <ul className="features-list">
              {projectData.features.map((feature, i) => (
                <li key={i} className="feature-item">
                  <span className="feature-title">• {feature.title}:</span>
                  <span className="feature-desc">{feature.description}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="project-section">
          <button
            className="section-toggle-btn"
            onClick={() => toggleTechStack(project.id)}
          >
            <span className="section-toggle-title">{t.projects.techStack}</span>
            <span className="section-toggle-icon">{isTechStackExpanded ? '−' : '+'}</span>
          </button>
          
          {isTechStackExpanded && (
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
              {projectData.techStack.stateManagement && (
                <div className="tech-section">
                  <span className="tech-label">{t.projects.tech.stateManagement}</span>
                  <div className="tech-tags">
                    {projectData.techStack.stateManagement.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
              {projectData.techStack.storage && (
                <div className="tech-section">
                  <span className="tech-label">{t.projects.tech.storage}</span>
                  <div className="tech-tags">
                    {projectData.techStack.storage.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">{t.projects.title}</h2>
        </div>

        {/* Category Filter Buttons */}
        <div className="category-filters">
          <button 
            className={`category-filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            {t.projects.categories.all}
          </button>
          <button 
            className={`category-filter-btn ${selectedCategory === 'fullstack' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('fullstack')}
          >
            {t.projects.categories.fullstack}
          </button>
          <button 
            className={`category-filter-btn ${selectedCategory === 'frontend-api' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('frontend-api')}
          >
            {t.projects.categories.frontendApi}
          </button>
          <button 
            className={`category-filter-btn ${selectedCategory === 'frontend-pure' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('frontend-pure')}
          >
            {t.projects.categories.frontendPure}
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => renderProjectCard(project))}
        </div>
        
        {/* Video Modal */}
        {videoModal.isOpen && (
          <VideoModal 
            videoUrl={videoModal.videoUrl} 
            projectId={videoModal.projectId}
            onClose={closeVideoModal}
          />
        )}
      </div>
    </section>
  );
};
