"use client";
import { useEffect, useRef } from "react";

export default function Sunflower() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // 🌑 Centro
      ctx.beginPath();
      ctx.arc(cx, cy, 30, 0, Math.PI * 2);
      ctx.fillStyle = "#5a2d1a";
      ctx.fill();

      const petals = 16;

      for (let i = 0; i < petals; i++) {
        if (i > t) continue;

        const angle = (i / petals) * Math.PI * 2;

        const radius = 50; // un poco más afuera
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 2);

        ctx.beginPath();
        ctx.ellipse(0, 0, 10, 18, 0, 0, Math.PI * 2);

        ctx.fillStyle = "#facc15";
        ctx.fill();

        ctx.strokeStyle = "#eab308";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.restore();
      }

      if (t > 10) {
        ctx.beginPath();
        ctx.moveTo(cx, cy + 30);
        ctx.lineTo(cx, canvas.height - 10); 
        ctx.strokeStyle = "#22c55e";
        ctx.lineWidth = 8;
        ctx.stroke();
      }

      if (t > 15) {
        ctx.beginPath();
        ctx.ellipse(cx - 30, cy + 100, 25, 12, -0.5, 0, Math.PI * 2);
        ctx.fillStyle = "#22c55e";
        ctx.fill();
      }

      t += 0.4;

      if (t < petals + 10) {
        requestAnimationFrame(draw);
      }
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={350}
      className="mx-auto mt-6"
    />
  );
}