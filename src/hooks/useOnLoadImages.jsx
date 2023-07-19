import { useState, useEffect } from "react";

/**
 * custom hook to check if all images have loaded and return a boolean
 */
export default function useOnLoadImages(ref) {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const updateStatus = (images) => {
      setStatus(
        images.map((image) => image.complete).every((item) => item === true)
      );
    };

    if (!ref.current) return;

    const imagesLoaded = Array.from(ref.current.querySelectorAll("img"));

    if (imagesLoaded.length === 0) {
      setStatus(true);
      return;
    }

    imagesLoaded.forEach((image) => {
      console.log(image)
      image.addEventListener("load", () => updateStatus(imagesLoaded), {
        once: true,
      });
      image.addEventListener("error", () => updateStatus(imagesLoaded), {
        once: true,
      });
    });

    return;
  }, [ref]);
  return status;
}
