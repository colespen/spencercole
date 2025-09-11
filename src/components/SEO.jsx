import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      <title>
        Spencer Cole - Full Stack Developer | React, Next.js & Node.js
      </title>
      <meta
        name="description"
        content="Spencer Cole - Creative full-stack developer specializing in React, TypeScript, and Node.js. View my portfolio of web and mobile applications built with cutting-edge tech."
      />
      <meta
        name="keywords"
        content="Spencer Cole, Spencer Cole developer, full stack developer, React developer, web developer, JavaScript, TypeScript, Node.js, portfolio"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Spencer Cole - Full Stack Developer | React, Next.js & Node.js"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Creative full-stack developer specializing in React, TypeScript, and Node.js. View my portfolio of web and mobile applications built with cutting-edge tech."
      />
      <meta
        property="og:image"
        content="https://www.spencercole.net/images/spencercole-preview.webp"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Spencer Cole - Full Stack Developer Portfolio"
      />
      <meta property="og:url" content="https://www.spencercole.net/" />
      <meta property="og:site_name" content="Spencer Cole Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Spencer Cole - Full Stack Developer | React, Next.js & Node.js"
      />
      <meta
        name="twitter:description"
        content="Creative full-stack developer specializing in React, TypeScript, and Node.js. View my portfolio of web and mobile applications built with cutting-edge tech."
      />
      <meta
        name="twitter:image"
        content="https://www.spencercole.net/images/spencercole-preview.webp"
      />
      <meta
        name="twitter:image:alt"
        content="Spencer Cole - Full Stack Developer Portfolio"
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
