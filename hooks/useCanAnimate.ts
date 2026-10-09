"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** False on the server and the first client render, so motion branches do not hydrate differently. */
export function useCanAnimate() {
  const reduce = useReducedMotion();
  const [can, setCan] = useState(false);

  useEffect(() => {
    setCan(!reduce);
  }, [reduce]);

  return can;
}
