"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], .cursor-pointer");

      if (interactive) {
        setHovered(true);
        if (interactive.getAttribute("data-cursor")) {
          setCursorText(interactive.getAttribute("data-cursor") || "");
        } else if (interactive.tagName === "A" || interactive.closest("a")) {
          setCursorText("VIEW");
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

      {/* Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#8AE8FF] rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Contextual Contextual Outer Ring / Cursor Bubble */}
      <motion.div
        className="fixed top-0 left-0 border border-[#8AE8FF]/40 rounded-full pointer-events-none z-50 flex items-center justify-center font-mono text-[9px] text-[#8AE8FF] font-bold tracking-widest hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? (cursorText ? 56 : 38) : 28,
          height: hovered ? (cursorText ? 56 : 38) : 28,
          backgroundColor: hovered ? "rgba(138, 232, 255, 0.08)" : "rgba(138, 232, 255, 0)",
          borderColor: hovered ? "#8AE8FF" : "rgba(138, 232, 255, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {hovered && cursorText && <span>{cursorText}</span>}
      </motion.div>
    </>
  );
}
