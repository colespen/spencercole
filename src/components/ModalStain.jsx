export default function ModalStain({flash, border, isStainVisible}) {

  return (
    <>
      <section
        className="modal-stain light-border"
        style={{ opacity: border, visibility: isStainVisible }}
      ></section>
      <section
        className="modal-stain heavy-border"
        style={{ opacity: flash, visibility: isStainVisible }}
      ></section>
      <section
        className="modal-stain flash"
        style={{ opacity: flash, visibility: isStainVisible }}
      ></section>
    </>
  );
}
