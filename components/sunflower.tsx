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
      ctx.fillStyle = "#6c3b2a";
      ctx.fill();

      // 🌻 Pétalos animados
      const petals = 20;
      for (let i = 0; i < petals; i++) {
        const angle = (i / petals) * Math.PI * 2;

        // animación progresiva
        if (i > t) continue;

        const x = cx + Math.cos(angle) * 60;
        const y = cy + Math.sin(angle) * 60;

        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fillStyle = "#f9e2af"; // amarillo Catppuccin
        ctx.fill();
      }

      // 🌱 Tallo
      if (t > 10) {
        ctx.beginPath();
        ctx.moveTo(cx, cy + 30);
        ctx.lineTo(cx, cy + 120);
        ctx.strokeStyle = "#a6e3a1";
        ctx.lineWidth = 6;
        ctx.stroke();
      }

      // 🍃 Hoja
      if (t > 15) {
        ctx.beginPath();
        ctx.ellipse(cx - 20, cy + 90, 20, 10, -0.5, 0, Math.PI * 2);
        ctx.fillStyle = "#a6e3a1";
        ctx.fill();
      }

      t += 0.3;

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
      height={300}
      className="mx-auto mt-6"
    />
  );
}