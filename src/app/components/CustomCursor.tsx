"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 450, mass: 0.2 };
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
      const interactive = target.closest("a, button, [role='button'], .cursor-pointer, input, select, textarea");

      if (interactive) {
        setHovered(true);
        if (interactive.getAttribute("data-cursor")) {
          setCursorText(interactive.getAttribute("data-cursor") || "");
        } else if (interactive.tagName === "A" || interactive.closest("a")) {
          setCursorText("VIEW ↗");
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

      {/* Neo-Brutalist Solid Square Cursor Point */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#B7F000] border border-black pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Neo-Brutalist Contextual Reticle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center font-mono text-[9px] font-bold text-black hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="absolute bg-[#B7F000] border-2 border-black flex items-center justify-center font-mono shadow-[2px_2px_0px_#000]"
          animate={{
            width: hovered ? (cursorText ? 76 : 28) : 0,
            height: hovered ? 28 : 0,
            opacity: hovered ? 1 : 0,
            scale: hovered ? 1 : 0.8,
          }}
          transition={{ type: "spring", stiffness: 450, damping: 25 }}
        >
          {hovered && cursorText && <span className="px-1 font-extrabold select-none whitespace-nowrap">{cursorText}</span>}
        </motion.div>
      </motion.div>
    </>
  );
}
