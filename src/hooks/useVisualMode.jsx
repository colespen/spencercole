import { useState } from "react";

export default function useVisualMode(initial) {
    const [page, setPage] = useState(initial);

    const transition = nextmode => {
      if (nextmode) setPage(nextmode);
      else setPage(initial);
    };
    return { mode: page, transition };
  }