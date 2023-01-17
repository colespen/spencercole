import { useEffect, useRef } from "react";

/**
 * Hook that detects click outside React component
 */
export default function useOutsideClick(callback, state) {

  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target) && state === true) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, callback, state]);

  return ref;
};