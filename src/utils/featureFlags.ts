/**
 * Feature Flags Utility for Vercel Analytics Integration
 * Emits feature flags to the DOM for Web Analytics tracking
 */

export interface FeatureFlags {
  language: string;
  theme: string;
  activeSection: string;
  viewedProjects: string[];
  expandedFeatures: string[];
  expandedTechStack: string[];
}

const FLAGS_ATTRIBUTE = 'data-vercel-flags';

/**
 * Emit feature flags to the DOM for Vercel Web Analytics
 * This makes flags available for automatic tracking in page views and events
 */
export const emitFlags = (flags: Partial<FeatureFlags>) => {
  if (typeof window === 'undefined') return;

  // Get current flags from DOM
  const currentFlagsStr = document.documentElement.getAttribute(FLAGS_ATTRIBUTE);
  const currentFlags: Partial<FeatureFlags> = currentFlagsStr 
    ? JSON.parse(currentFlagsStr) 
    : {};

  // Merge with new flags
  const updatedFlags = {
    ...currentFlags,
    ...flags,
  };

  // Emit to DOM
  document.documentElement.setAttribute(
    FLAGS_ATTRIBUTE,
    JSON.stringify(updatedFlags)
  );

  // Also emit as individual meta tags for better tracking
  Object.entries(updatedFlags).forEach(([key, value]) => {
    const metaId = `vercel-flag-${key}`;
    let meta = document.getElementById(metaId);
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.id = metaId;
      meta.setAttribute('name', `vercel:flag:${key}`);
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', 
      Array.isArray(value) ? value.join(',') : String(value)
    );
  });
};

/**
 * Get current feature flags from DOM
 */
export const getFlags = (): Partial<FeatureFlags> => {
  if (typeof window === 'undefined') return {};

  const flagsStr = document.documentElement.getAttribute(FLAGS_ATTRIBUTE);
  return flagsStr ? JSON.parse(flagsStr) : {};
};

/**
 * Update a single flag
 */
export const updateFlag = <K extends keyof FeatureFlags>(
  key: K,
  value: FeatureFlags[K]
) => {
  const currentFlags = getFlags();
  emitFlags({
    ...currentFlags,
    [key]: value,
  });
};

/**
 * Get flag names for tracking
 */
export const getFlagNames = (): string[] => {
  const flags = getFlags();
  return Object.keys(flags);
};
