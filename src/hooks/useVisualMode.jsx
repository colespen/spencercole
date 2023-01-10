import { useState } from "react";

export default function useVisualMode(page, tab) {
  const [view, setPage] = useState({
    page,
    tab
  });

  const transition = (nextPage, nextTab) => {
    if (nextPage || nextTab) setPage(
      {
        page: nextPage,
        tab: nextTab
      });
    else setPage({ page, tab });
  };
  return { view, transition };
}