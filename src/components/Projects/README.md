# Portfolio Projects Component

A responsive React component system for showcasing portfolio projects with an elegant tabbed interface and image carousel.

## Features

- **Responsive Design**: Displays 6 tabs on mobile/tablet, 7 tabs on desktop
- **Dynamic Content**: Projects are rendered from configuration data
- **Image Carousel**: Interactive image gallery for each project
- **Live Links**: Direct links to live projects and GitHub repositories
- **Smooth Animations**: Fade-in effects and smooth transitions
- **Mobile Optimized**: Touch-friendly navigation and responsive layouts

## File Structure

```
Projects/
├── Carousel.jsx           # Image carousel component
├── Carousel.scss          # Carousel styles
├── GitHubLink.jsx         # GitHub repository link component
├── ModalTabs.jsx          # Responsive navigation tabs
├── ProjectTemplate.jsx    # Reusable project display template
├── Projects.jsx           # Main container component
├── loaders.jsx            # Loading spinner components
├── projectsData.js        # Project information configuration
├── tabConfig.js           # Tab navigation configuration
└── README.md             # This file
```

## How to Customize for Your Portfolio

### 1. Update Project Data

Edit `projectsData.js` to add your projects:

```javascript
export const projectsData = {
  yourproject: {
    title: "Your Project Title",
    href: "https://your-live-demo.com",
    images: [
      { src: "./images/your-screenshot1.jpg", alt: "screenshot 1" },
      { src: "./images/your-screenshot2.jpg", alt: "screenshot 2" }
    ],
    description: [
      "Brief description of your project",
      "Additional details about features and implementation"
    ],
    liveLink: "View Live Demo",
    stack: ["React", "Node.js", "MongoDB"],
    apis: ["Optional API list"],
    githubProjectName: "your-github-repo-name"
  }
};
```

### 2. Configure Navigation Tabs

Update `tabConfig.js` to match your projects:

```javascript
export const tabConfig = [
  { 
    id: "P1", 
    key: "yourproject", 
    icon: "./images/your-icon.png", 
    alt: "your project tab" 
  },
  // Add more tabs as needed
];
```

### 3. Add Project Images

Place your project images in the `public/images/` directory:
- Screenshots for carousel display
- Icons for navigation tabs
- Ensure images are optimized for web (WebP recommended)

### 4. Update Styling (Optional)

Modify `modalstyles.scss` to match your design:
- Colors and gradients
- Typography
- Spacing and layout
- Responsive breakpoints

## Dependencies

- React 18+
- React Spring (for animations)
- Sass (for styling)
- Custom hooks: `useOutsideClick`, `useOnLoadImages`

## Responsive Breakpoints

- **Mobile**: ≤768px (6 tabs displayed)
- **Desktop**: >768px (all 7 tabs displayed)
- **Special breakpoints**:
  - 400px: Navigation width adjustment
  - 375px: iPhone SE optimizations

## Getting Started

1. Fork this repository
2. Install dependencies: `npm install`
3. Replace project data in `projectsData.js`
4. Update tab configuration in `tabConfig.js`
5. Add your project images to `public/images/`
6. Customize styling if needed
7. Run the development server: `npm start`

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
