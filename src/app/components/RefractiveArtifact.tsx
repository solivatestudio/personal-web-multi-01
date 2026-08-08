"use client";

import React, { useEffect, useRef } from "react";

export function RefractiveArtifact() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 460);
    let height = (canvas.height = 460);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.left <= e.clientX && e.clientX <= rect.right && rect.top <= e.clientY && e.clientY <= rect.bottom) {
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const time = Date.now() * 0.0008;
      const centerX = width / 2;
      const centerY = height / 2;

      // Draw subtle orbital rings
      ctx.save();
      ctx.translate(centerX, centerY);

      // Outer Ring
      ctx.rotate(time * 0.2);
      ctx.beginPath();
      ctx.ellipse(0, 0, 160, 70, Math.PI / 4, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(138, 232, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Inner Ring
      ctx.rotate(-time * 0.4);
      ctx.beginPath();
      ctx.ellipse(0, 0, 130, 130, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(139, 124, 255, 0.06)";
      ctx.setLineDash([6, 12]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Draw central refractive obsidian glass polygon / monolith
      const mouseOffsetRotate = ((mouseX - centerX) / width) * 0.3;
      const size = 110;
      const angles = [0, (Math.PI * 2) / 3, (Math.PI * 4) / 3];

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time * 0.15 + mouseOffsetRotate);

      // Core Glass Gradient Fill
      const glassGradient = ctx.createLinearGradient(-size, -size, size, size);
      glassGradient.addColorStop(0, "rgba(255, 255, 255, 0.09)");
      glassGradient.addColorStop(0.5, "rgba(138, 232, 255, 0.03)");
      glassGradient.addColorStop(1, "rgba(7, 9, 13, 0.7)");

      ctx.beginPath();
      ctx.moveTo(Math.cos(angles[0]) * size, Math.sin(angles[0]) * size);
      ctx.lineTo(Math.cos(angles[1]) * size, Math.sin(angles[1]) * size);
      ctx.lineTo(Math.cos(angles[2]) * size, Math.sin(angles[2]) * size);
      ctx.closePath();

      ctx.fillStyle = glassGradient;
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Internal Refraction Lines
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(angles[0]) * size, Math.sin(angles[0]) * size);
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(angles[1]) * size, Math.sin(angles[1]) * size);
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(angles[2]) * size, Math.sin(angles[2]) * size);
      ctx.strokeStyle = "rgba(138, 232, 255, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Core Spectral Dot
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#8AE8FF";
      ctx.shadowBlur = 12;
      ctx.shadowColor = "#8AE8FF";
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.restore();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full max-w-[460px] aspect-square">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
