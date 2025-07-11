export default function GitHubLink({ mainStyle, githubRepo }) {
  return (
    <a
      className="github-icon"
      style={{ ...mainStyle }}
      href={`https://github.com/${githubRepo}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <img
        src="./images/github-mark.svg"
        width="18"
        height="18"
        alt="GitHub-link"
      ></img>
    </a>
  );
}
