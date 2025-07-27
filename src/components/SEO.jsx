import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      <title>
        Spencer Cole - Full Stack Developer | React & Node.js Expert
      </title>
      <meta
        name="description"
        content="Spencer Cole - Creative full-stack developer specializing in React, TypeScript, and Node.js. View my portfolio of innovative web applications and development projects."
      />
      <meta
        name="keywords"
        content="Spencer Cole, Spencer Cole developer, full stack developer, React developer, web developer, JavaScript, TypeScript, Node.js, portfolio"
      />

      {/* Open Graph */}
      <meta property="og:title" content="Spencer Cole - Full Stack Developer" />
      <meta
        property="og:description"
        content="Creative full-stack developer specializing in React, TypeScript, and Node.js. View my portfolio of innovative web applications."
      />
      <meta
        property="og:image"
        content="https://www.spencercole.net/images/spencer_cole_cv.webp"
      />
      <meta property="og:url" content="https://www.spencercole.net/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Spencer Cole - Full Stack Developer"
      />
      <meta
        name="twitter:description"
        content="Creative full-stack developer specializing in React, TypeScript, and Node.js."
      />
      <meta
        name="twitter:image"
        content="https://www.spencercole.net/images/spencer_cole_cv.webp"
      />

      {/* Essential Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Spencer Cole",
          jobTitle: "Full Stack Web Developer",
          description:
            "Creative full-stack web developer specializing in React, TypeScript, and Node.js",
          url: "https://www.spencercole.net",
          sameAs: ["https://github.com/colespen"],
          knowsAbout: [
            "React",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Full Stack Development",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
