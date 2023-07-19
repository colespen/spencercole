import { useEffect, useRef } from "react";

/**
 * Custom hook that detects click outside React component.
 */
export default function useOutsideClick(callback, state) {

  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target) && state === true) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref, callback, state]);

  return ref;
};