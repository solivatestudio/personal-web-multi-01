"use client";

import React, { useRef, useState } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = "", ...props }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`specular-card relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        ["--mouse-x" as any]: `${coords.x}px`,
        ["--mouse-y" as any]: `${coords.y}px`,
      }}
      {...props}
    >
      {/* Dynamic Refraction Specular Highlight */}
      {isFocused && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(138, 232, 255, 0.12), transparent 50%)`,
            padding: "1px",
            mask: "linear-gradient(#fff 0 0) content-box exclude, linear-gradient(#fff 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box exclude, linear-gradient(#fff 0 0)",
          }}
        />
      )}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
