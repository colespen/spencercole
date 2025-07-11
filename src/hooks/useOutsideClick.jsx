import { useEffect, useRef } from "react";

/**
 * Custom hook that detects click outside React component.
 * @param {Function} callback - Function to call when clicking outside
 * @param {boolean} state - Whether the component is active/visible
 * @param {Function} isInteracting - Optional function that returns true if user is actively interacting with content
 */
export default function useOutsideClick(callback, state, isInteracting = null) {
  const ref = useRef();

  useEffect(() => {
    const handlePointerEvent = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        state === true
      ) {
        // if isInteracting fn is provided & returns true, don't close
        if (isInteracting && isInteracting()) {
          return;
        }
        callback();
      }
    };

    // listen to both mouse & touch events
    document.addEventListener("mousedown", handlePointerEvent, true);
    document.addEventListener("touchstart", handlePointerEvent, true);

    return () => {
      document.removeEventListener("mousedown", handlePointerEvent, true);
      document.removeEventListener("touchstart", handlePointerEvent, true);
    };
  }, [ref, callback, state, isInteracting]);

  return ref;
}
