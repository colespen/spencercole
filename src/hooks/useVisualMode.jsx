import { useState } from "react";

/**
 * Custom hook to transition between pages and tab views.
 **/
export default function useVisualMode(page, tab) {
  const [view, setView] = useState({
    page,
    tab
  });

  const transition = (nextPage, nextTab) => {
    if (nextPage || nextTab) setView(
      {
        page: nextPage,
        tab: nextTab
      });
    else setView({ page, tab });
  };
  return { view, transition };
}