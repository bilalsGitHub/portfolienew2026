# Vercel Analytics - Comprehensive Tracking Documentation

This portfolio has **comprehensive Vercel Web Analytics tracking** implemented across every component, button, and user interaction. Every action is tracked and will appear in your Vercel Analytics dashboard.

## 📊 Routes Tracked

All routes appear in the **Routes** section of Vercel Analytics Dashboard.

### Main Navigation Routes
| Route | Triggered When | Data Tracked |
|-------|---------------|--------------|
| `/home` | User clicks Home in navigation | section, action, from |
| `/about` | User clicks About in navigation | section, action, from |
| `/projects` | User clicks Projects in navigation | section, action, from |
| `/resume` | User clicks Resume in navigation | section, action, from |
| `/contact` | User clicks Contact in navigation | section, action, from |

### Project Routes
| Route | Triggered When | Data Tracked |
|-------|---------------|--------------|
| `/projects/habits` | User clicks HABITS project card | projectId, projectName, action |
| `/projects/eye-tracking` | User clicks Eye Tracking project | projectId, projectName, action |
| `/projects/blackfocus` | User clicks BlackFocus project | projectId, projectName, action |
| `/projects/dilogren` | User clicks DiloGren project | projectId, projectName, action |
| `/projects/mediflow` | User clicks MediFlow project | projectId, projectName, action |

### Project Detail Routes
| Route | Triggered When | Data Tracked |
|-------|---------------|--------------|
| `/projects/{id}/features` | User expands Features section | projectId, projectName, action |
| `/projects/{id}/tech-stack` | User expands Tech Stack section | projectId, projectName, action |
| `/projects/{id}/demo` | User clicks demo link | projectId, projectName, demoUrl, action |
| `/projects/{id}/image/1` | User views project image | projectId, imageIndex, action |

### Resume Routes
| Route | Triggered When | Data Tracked |
|-------|---------------|--------------|
| `/resume/resume-header` | Header section becomes visible | section, action |
| `/resume/resume-about` | About section becomes visible | section, action |
| `/resume/resume-skills` | Skills section becomes visible | section, action |
| `/resume/resume-experience` | Experience section becomes visible | section, action |
| `/resume/resume-additional` | Languages section becomes visible | section, action |

### Contact Routes
| Route | Triggered When | Data Tracked |
|-------|---------------|--------------|
| `/contact/email-revealed` | User solves math challenge | action, attempts |

### CTA Routes
| Route | Triggered When | Data Tracked |
|-------|---------------|--------------|
| `/contact` | "Work with me" button clicked | action, source |
| `/projects` | "Works" tab clicked | action, source |

---

## 🔘 Custom Events Tracked

All events appear in the **Events** section of Vercel Analytics Dashboard.

### Navigation Events
| Event Name | Triggered When | Data Tracked |
|------------|---------------|--------------|
| `language_switch` | User changes language | from, to |
| `theme_toggle` | User toggles light/dark theme | from, to |
| `mobile_menu_toggle` | User opens/closes mobile menu | action |

### Social & Contact Events
| Event Name | Triggered When | Data Tracked |
|------------|---------------|--------------|
| `email_click` | User clicks email link | platform |
| `social_click` | User clicks GitHub link | platform |
| `email_clicked` | Email clicked in contact section | location |
| `email_reveal_failed` | Math challenge failed | userAnswer, correctAnswer |

### Hero Section Events
| Event Name | Triggered When | Data Tracked |
|------------|---------------|--------------|
| `hero_background_toggle` | User toggles animated background | enabled |

### Project Interaction Events
| Event Name | Triggered When | Data Tracked |
|------------|---------------|--------------|
| `carousel_next` | User navigates to next image | projectId, imageIndex |
| `carousel_prev` | User navigates to previous image | projectId, imageIndex |
| `features_collapse` | User collapses Features section | projectId, projectName |
| `techstack_collapse` | User collapses Tech Stack section | projectId, projectName |

---

## 🚩 Feature Flags Tracked

All flags appear in the **Feature Flags** section of Vercel Analytics Dashboard.

| Flag Name | Values | Updated When |
|-----------|--------|--------------|
| `language` | `de`, `en` | User changes language |
| `theme` | `light`, `dark` | User toggles theme |
| `activeSection` | `home`, `about`, `projects`, `resume`, `contact` | User scrolls to section |
| `viewedProjects` | Array of project IDs | User views a project |
| `expandedFeatures` | Array of project IDs | User opens features |
| `expandedTechStack` | Array of project IDs | User opens tech stack |

---

## 📈 What You'll See in Vercel Analytics

### Routes Section
Shows all page/route views:
```
/home                              1,234 views
/projects                          987 views
/projects/habits                   543 views
/projects/habits/features          234 views
/projects/habits/tech-stack        198 views
/projects/mediflow/image/1         156 views
/contact                           432 views
/contact/email-revealed            89 views
```

### Events Section
Shows all custom interactions:
```
language_switch                    234 clicks
theme_toggle                       456 clicks
carousel_next                      123 clicks
email_click                        89 clicks
hero_background_toggle             67 clicks
```

### Feature Flags Section
Shows user behavior patterns:
```
language: de (65%), en (35%)
theme: dark (72%), light (28%)
activeSection breakdown
viewedProjects: habits most viewed
```

---

## 🎯 Analytics Insights You Can Get

### User Engagement
- ✅ Which projects get the most attention
- ✅ Do users explore project details (features, tech stack)
- ✅ Which resume sections are most viewed
- ✅ Contact form engagement (email reveal success rate)

### User Preferences
- ✅ Language preference distribution (German vs English)
- ✅ Theme preference (Light vs Dark mode)
- ✅ Mobile vs Desktop usage patterns

### Navigation Patterns
- ✅ User journey through the site
- ✅ Most common entry points
- ✅ Which CTAs perform best
- ✅ Drop-off points

### Content Performance
- ✅ Most clicked project demo links
- ✅ Most viewed project images
- ✅ Most expanded project sections
- ✅ Social link click-through rates

---

## 🔧 Implementation Details

### Technology Stack
- **@vercel/analytics** - Vercel's official analytics package
- **Custom tracking utility** - `src/utils/featureFlags.ts`
- **React Context** - For theme and language state
- **DOM Emission** - Feature flags written to HTML

### How It Works

1. **Route Tracking**
   ```typescript
   trackRoute('/projects/habits', { projectId: 'habits', action: 'click' });
   ```
   - Changes URL using `history.pushState()`
   - Sends pageview event to Vercel Analytics
   - Includes current feature flags

2. **Event Tracking**
   ```typescript
   trackInteraction('theme_toggle', { from: 'light', to: 'dark' });
   ```
   - Sends custom event to Vercel Analytics
   - Includes contextual data
   - Automatically includes feature flags

3. **Feature Flags**
   ```typescript
   updateFlag('language', 'de');
   ```
   - Updates DOM attribute `data-vercel-flags`
   - Creates meta tags for each flag
   - Automatically attached to all events and pageviews

### Code Locations
- **Main tracking utility**: `src/utils/featureFlags.ts`
- **Header tracking**: `src/components/Header.tsx`
- **Projects tracking**: `src/components/Projects.tsx`
- **Contact tracking**: `src/components/Contact.tsx`
- **Resume tracking**: `src/components/Resume.tsx`
- **Hero tracking**: `src/components/Hero.tsx`
- **App-level tracking**: `src/App.tsx`

---

## 📊 Viewing Your Analytics

1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Click **Analytics** tab
4. Explore sections:
   - **Overview** - General stats
   - **Routes** - All page views
   - **Events** - Custom interactions
   - **Feature Flags** - User behavior patterns
   - **Real-time** - Live user activity

---

## 🚀 Deploy to See Data

```bash
# Deploy to Vercel
npm run build
vercel --prod

# Or connect GitHub repo for automatic deployments
```

After deployment:
1. Visit your site and interact with it
2. Wait 5-10 minutes for data to process
3. Check Vercel Analytics dashboard
4. See comprehensive tracking data! 🎉

---

## 📝 Example Queries You Can Answer

With this tracking setup, you can answer questions like:

- "How many people viewed the HABITS project?"
- "What percentage of users prefer German vs English?"
- "Which project features do users expand most?"
- "What's my email reveal success rate?"
- "Do dark mode users behave differently?"
- "Which CTA button drives more traffic?"
- "What's the most common user journey?"
- "Which project images get viewed most?"

**Every interaction is tracked. Every question can be answered.** 📊✨
