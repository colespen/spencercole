export default function Button({ children, handleShowHideWindow, id }) {
  return (
    <button className="btn-main" id={id} onClick={handleShowHideWindow}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">{children}</span>
    </button>
  );
}
