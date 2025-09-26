export default function ModalStain({ flash, border, isStainVisible, variant }) {
  const stainClasses = `modal-stain ${variant || ""}`.trim();
  const height = variant === "projects" ? "85%" : "75%";

  return (
    <>
      <section
        className={`${stainClasses} light-border`}
        style={{ opacity: border, visibility: isStainVisible, height }}
      />
      <section
        className={`${stainClasses} heavy-border`}
        style={{ opacity: flash, visibility: isStainVisible, height }}
      />
      <section
        className={`${stainClasses} flash`}
        style={{ opacity: flash, visibility: isStainVisible, height }}
      />
    </>
  );
}
