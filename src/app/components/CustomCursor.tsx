"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [coordsDisplay, setCoordsDisplay] = useState({ x: 0, y: 0 });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 32, stiffness: 450, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setCoordsDisplay({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], .cursor-pointer, input, select, textarea");

      if (interactive) {
        setHovered(true);
        if (interactive.getAttribute("data-cursor")) {
          setCursorText(interactive.getAttribute("data-cursor") || "");
        } else if (interactive.tagName === "A" || interactive.closest("a")) {
          setCursorText("INSPECT");
        } else if (interactive.tagName === "BUTTON" || interactive.closest("button")) {
          setCursorText("EXEC");
        } else {
          setCursorText("");
        }
      } else {
        setHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          body, a, button, select, input, textarea, [role="button"] {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Center Tactical Crosshair Point */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#D7A94B] rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Tactical Avionics Crosshair Lines & Box */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center font-mono text-[8px] text-[#D7A94B] font-bold tracking-widest hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Crosshair Lines */}
        <div className="absolute w-6 h-[1px] bg-[#D7A94B]/40" />
        <div className="absolute h-6 w-[1px] bg-[#D7A94B]/40" />

        {/* Hover Bounding Reticle */}
        <motion.div
          className="absolute border border-[#D7A94B]/60 flex items-center justify-center bg-[#D7A94B]/5"
          animate={{
            width: hovered ? (cursorText ? 64 : 36) : 20,
            height: hovered ? (cursorText ? 36 : 36) : 20,
            borderColor: hovered ? "#D7A94B" : "rgba(215, 169, 75, 0.4)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {hovered && cursorText && <span className="px-1 select-none">{cursorText}</span>}
        </motion.div>

        {/* Telemetry Coordinates Tag */}
        <div className="absolute top-4 left-4 text-[8px] text-[#55544E] font-mono pointer-events-none whitespace-nowrap opacity-60">
          X:{String(coordsDisplay.x).padStart(4, "0")} Y:{String(coordsDisplay.y).padStart(4, "0")}
        </div>
      </motion.div>
    </>
  );
}
