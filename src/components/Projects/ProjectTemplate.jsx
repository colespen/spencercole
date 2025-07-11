import { useState, useEffect } from "react";
import GitHubLink from "./GitHubLink";
import Carousel from "./Carousel";

import "../modalstyles.scss";

export default function ProjectTemplate({
  title,
  href,
  images,
  description,
  liveLink,
  stack,
  apis,
  apiListClass,
  githubProjectName,
  onCarouselInteractionChange,
}) {
  const [mainStyle, setMainStyle] = useState({
    opacity: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainStyle({ opacity: 1 });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const linkProps = {
    href,
    target: "_blank",
    rel: "noreferrer",
  };

  return (
    <>
      <header
        className="tab-header"
        style={{ ...mainStyle, transition: "opacity 150ms ease-out" }}
      >
        <h1>
          <a {...linkProps}>{title}</a>
        </h1>
      </header>

      <Carousel onInteractionChange={onCarouselInteractionChange}>
        {images.map((image, index) => (
          <a key={index} {...linkProps}>
            <img
              className="project-screenshot"
              src={image.src}
              alt={image.alt}
              style={image.style || {}}
            />
          </a>
        ))}
      </Carousel>

      <main
        className="tab-description"
        style={{ ...mainStyle, transition: "opacity 500ms ease" }}
      >
        {description.map((paragraph, index) => (
          <div key={index}>
            <p>{typeof paragraph === "string" ? paragraph : paragraph}</p>
            {index < description.length - 1 && <br></br>}
          </div>
        ))}
        <br></br>
        {liveLink && (
          <p style={{ paddingBottom: "10px" }}>
            <a className="its-live" {...linkProps}>
              {liveLink}
            </a>
          </p>
        )}

        <div style={{ fontSize: "85%", paddingTop: "5px" }}>
          {stack && (
            <>
              <h4>Stack:</h4>
              <ul className="project-stack-list">
                {stack.map((tech, index) => (
                  <li key={index}>
                    {typeof tech === "string" ? (
                      tech
                    ) : (
                      <>
                        {tech.name}
                        {tech.subItems && (
                          <ul>
                            {tech.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>{subItem}</li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}

          {apis && (
            <>
              <h5 style={{ paddingTop: "5px" }}>APIs:</h5>
              <ul
                className={`project-stack-list${
                  apiListClass ? ` ${apiListClass}` : ""
                }`}
              >
                {apis.map((api, index) => (
                  <li key={index} style={api.style || {}}>
                    {typeof api === "string" ? api : api.text}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>

      {githubProjectName && <GitHubLink mainStyle={mainStyle}                  githubRepo={githubProjectName}/>}
    </>
  );
}
