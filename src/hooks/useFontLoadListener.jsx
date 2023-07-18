import { useRef } from "react";

function useFontLoadListener() {
  const isFontLoaded = useRef(false);

  try {
    isFontLoaded.current = document.fonts.check('12px "Montserrat"');
    console.log("isFontLoaded.current", isFontLoaded.current)
  } catch (error) {
    console.error(`document.fonts API error: ${error}`);
  }

  return { isFontLoaded: isFontLoaded.current };
}

export { useFontLoadListener };
