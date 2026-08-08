"use client";

import React, { useEffect, useState, useRef } from "react";

export function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const endValue = end;
    const totalMiliseconds = duration * 1000;
    const stepTime = Math.abs(Math.floor(totalMiliseconds / endValue));

    // Simple observer interface to trigger count-up on scroll entrance
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= endValue) {
              clearInterval(timer);
            }
          }, stepTime);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={countRef}>{count}</span>;
}
