"use client";

import React, { useEffect, useRef } from "react";

interface NodeItem {
  x: number;
  y: number;
  vx: number;
  vy: number;
  id: string;
  ip: string;
  status: string;
  ping: number;
}

export function NetworkTopologyVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 440);
    let height = (canvas.height = 440);

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

    // Tactical Network Topology Nodes initialization
    const nodes: NodeItem[] = [];

    const nodeNames = ["GATEWAY_01", "FIREWALL_A", "DMZ_PROXY", "CORE_DB", "AUTH_VAULT", "EDGE_NODE", "RECON_POD"];

    for (let i = 0; i < 9; i++) {
      nodes.push({
        x: Math.random() * (width - 100) + 50,
        y: Math.random() * (height - 100) + 50,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        id: nodeNames[i % nodeNames.length],
        ip: `10.0.4.${12 + i}`,
        status: i === 3 ? "WARNING" : "ACTIVE",
        ping: Math.floor(Math.random() * 25 + 8),
      });
    }

    let hoveredNode: NodeItem | null = null;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Radar Outer Circles
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.beginPath();
      ctx.arc(centerX, centerY, 180, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(141, 139, 130, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(141, 139, 130, 0.05)";
      ctx.stroke();

      // Radar Sweep Line
      const time = Date.now() * 0.001;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + Math.cos(time) * 180, centerY + Math.sin(time) * 180);
      ctx.strokeStyle = "rgba(215, 169, 75, 0.15)";
      ctx.stroke();

      // Update positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 40 || node.x > width - 40) node.vx *= -1;
        if (node.y < 40 || node.y > height - 40) node.vy *= -1;
      });

      // Draw Connection Lines (Network Mesh)
      ctx.strokeStyle = "rgba(141, 139, 130, 0.12)";
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Check hover target
      hoveredNode = null;
      nodes.forEach((node) => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const isHovered = dist < 20;
        if (isHovered) hoveredNode = node;

        // Render Node symbol
        ctx.beginPath();
        ctx.arc(node.x, node.y, isHovered ? 6 : 4, 0, Math.PI * 2);
        ctx.fillStyle = node.status === "WARNING" ? "#B94A3D" : isHovered ? "#D7A94B" : "#8D8B82";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, isHovered ? 12 : 8, 0, Math.PI * 2);
        ctx.strokeStyle = isHovered ? "#D7A94B" : "rgba(141, 139, 130, 0.2)";
        ctx.stroke();
      });

      // Draw Tactical Telemetry Card overlay if node is hovered
      if (hoveredNode) {
        const activeNode: NodeItem = hoveredNode;
        ctx.fillStyle = "#11110F";
        ctx.strokeStyle = "#D7A94B";
        ctx.lineWidth = 1;
        ctx.fillRect(activeNode.x + 12, activeNode.y - 25, 140, 52);
        ctx.strokeRect(activeNode.x + 12, activeNode.y - 25, 140, 52);

        ctx.font = "9px monospace";
        ctx.fillStyle = "#D7A94B";
        ctx.fillText(`NODE: ${activeNode.id}`, activeNode.x + 18, activeNode.y - 12);
        ctx.fillStyle = "#D8D6CC";
        ctx.fillText(`HOST: ${activeNode.ip}`, activeNode.x + 18, activeNode.y + 2);
        ctx.fillStyle = "#8D8B82";
        ctx.fillText(`PING: ${activeNode.ping}ms // ${activeNode.status}`, activeNode.x + 18, activeNode.y + 16);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full max-w-[440px] aspect-square border border-[#8D8B82]/15 bg-[#11110F]/50 rounded-sm">
      <div className="absolute top-2 left-2 font-mono text-[9px] text-[#55544E] tracking-widest">[ RECON_TOPOLOGY_SCAN ]</div>
      <div className="absolute bottom-2 right-2 font-mono text-[9px] text-[#D7A94B] uppercase">SCANNER ACTIVE</div>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
