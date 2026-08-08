"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function MouseSpotlight() {
  const pathname = usePathname();
  const [coords, setCoords] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(10, 108, 255, 0.04), transparent 80%)`,
      }}
    />
  );
}
