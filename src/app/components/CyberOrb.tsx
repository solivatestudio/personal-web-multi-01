"use client";

import React, { useEffect, useRef } from "react";

export function CyberOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = 400;
    let height = canvas.height = 400;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      angle: number;
      speed: number;
      distance: number;
      color: string;
    }> = [];

    // Initialize security nodes rotating around a central core sphere
    const colors = ["#0A6CFF", "#27E0FF", "#655CFF", "#A855F7"];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: width / 2,
        y: height / 2,
        radius: Math.random() * 2 + 1,
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        distance: Math.random() * 110 + 40,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw the central glass security core sphere
      const gradient = ctx.createRadialGradient(
        width / 2 - 10, height / 2 - 10, 5,
        width / 2, height / 2, 70
      );
      gradient.addColorStop(0, "rgba(39, 224, 255, 0.15)");
      gradient.addColorStop(0.5, "rgba(10, 108, 255, 0.08)");
      gradient.addColorStop(1, "rgba(6, 9, 18, 0.5)");

      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 70, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Outer security scanning rings
      const time = Date.now() * 0.001;
      
      // Ring 1
      ctx.beginPath();
      ctx.ellipse(width / 2, height / 2, 110, 45, time * 0.2, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(10, 108, 255, 0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Ring 2
      ctx.beginPath();
      ctx.ellipse(width / 2, height / 2, 130, 60, -time * 0.15, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(168, 85, 247, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Update and draw orbit particles
      particles.forEach((p) => {
        p.angle += p.speed;
        p.x = width / 2 + Math.cos(p.angle) * p.distance;
        p.y = height / 2 + Math.sin(p.angle) * p.distance * 0.7; // slight elliptical perspective

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      });

      // Draw subtle connecting lines (simulated network topology mesh)
      ctx.strokeStyle = "rgba(39, 224, 255, 0.04)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 55) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full max-w-[400px] aspect-square">
      {/* Decorative glass rings surround canvas */}
      <div className="absolute inset-0 rounded-full border border-white/5 animate-spin duration-[20s] pointer-events-none" />
      <div className="absolute inset-4 rounded-full border border-[#27E0FF]/5 animate-reverse-spin duration-[15s] pointer-events-none" />
      
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}
