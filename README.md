# Spencer Cole - Full-Stack Developer 

An SPA portfolio showcasing my work.
<br>
> https://www.spencercole.net/
<br>

## Stack:

- React Spring
- React.js
- Swiper.js (for carousel)
- Custom SCSS

> **Deployed with AWS Amplify**
<br>

<br>

### **Developed & Designed by Spencer Cole**

<br>

![home](/docs/home.png?raw=true "home")

![bio](/docs/bio.png?raw=true "bio")

![projects_responsive](/docs/projects_mobile.png?raw=true "projects responsve")

![home_responsive](/docs/home_mobile.png?raw=true "home responsive")

---

## Features

- **Responsive Design**: Displays 6 tabs on mobile/tablet, 7 tabs on desktop
- **Dynamic Content**: Projects are rendered from configuration data
- **Interactive Carousel**: Click and drag (desktop) or swipe (mobile) support with smooth animations
- **Touch-Friendly**: Optimized for mobile touch interactions
- **Live Links**: Direct links to live projects and GitHub repositories
- **Smooth Animations**: Fade-in effects and smooth transitions
- **Mobile Optimized**: Touch-friendly navigation and responsive layouts

## Architecture

### File Structure

```
src/
├── components/
│   ├── Projects/
│   │   ├── Carousel.jsx           # Image carousel component
│   │   ├── Carousel.scss          # Carousel styles
│   │   ├── GitHubLink.jsx         # GitHub repository link component
│   │   ├── ModalTabs.jsx          # Responsive navigation tabs
│   │   ├── ProjectTemplate.jsx    # Reusable project display template
│   │   ├── Projects.jsx           # Main container component
│   │   ├── loaders.jsx            # Loading spinner components
│   │   ├── projectsData.js        # Project information configuration
│   │   └── tabConfig.js           # Tab navigation configuration
│   └── ...
├── hooks/
│   ├── useOutsideClick.jsx        # Custom hook for modal interactions
│   ├── useOnLoadImages.jsx        # Image loading state management
│   └── ...
└── ...
```

## How to Customize for Your Portfolio

### 1. Update Project Data

Edit `src/components/Projects/projectsData.js` to add your projects:

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

Update `src/components/Projects/tabConfig.js` to match your projects:

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

Modify `src/components/modalstyles.scss` to match your design:
- Colors and gradients
- Typography
- Spacing and layout
- Responsive breakpoints

## Dependencies

- React 18+
- React Spring (for animations)
- Swiper.js (for carousel functionality)
- Sass (for styling)
- Custom hooks: `useOutsideClick`, `useOnLoadImages`

## Responsive Breakpoints

- **Mobile**: ≤768px (6 tabs displayed)
- **Desktop**: >768px (all 7 tabs displayed)
- **Special breakpoints**:
  - 400px: Navigation width adjustment
  - 375px: iPhone SE optimizations

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

---

# Getting Started 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
