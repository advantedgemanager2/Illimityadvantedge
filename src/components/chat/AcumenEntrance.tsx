import { useEffect, useRef, useCallback } from "react";
import AcumenBird from "./AcumenBird";

interface AcumenEntranceProps {
  onComplete: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

const COLORS = ["#00D2B4", "#0A9C8A", "#FFC83C", "#00D2B4"];
const DURATION = 2500; // ms

export default function AcumenEntrance({ onComplete }: AcumenEntranceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const birdRef = useRef<HTMLDivElement>(null);
  const startTime = useRef(0);
  const particles = useRef<Particle[]>([]);
  const animFrame = useRef(0);

  // Quadratic bezier: start (upper-right), control (center-up), end (header icon position)
  const getPath = useCallback((t: number, w: number, h: number) => {
    const start = { x: w + 40, y: -40 };
    const control = { x: w * 0.4, y: h * 0.08 };
    // End: approximate header icon position (left area of sheet, ~48px from left, ~28px from top)
    const end = { x: 52, y: 44 };

    const mt = 1 - t;
    return {
      x: mt * mt * start.x + 2 * mt * t * control.x + t * t * end.x,
      y: mt * mt * start.y + 2 * mt * t * control.y + t * t * end.y,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const bird = birdRef.current;
    if (!canvas || !bird) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Size canvas to the sheet panel
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    }

    const w = canvas.width;
    const h = canvas.height;

    startTime.current = performance.now();
    particles.current = [];

    const spawnParticle = (x: number, y: number, burst = false) => {
      const spread = burst ? 4 : 1.5;
      const count = burst ? 12 : 1;
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * spread,
          vy: (Math.random() - 0.5) * spread,
          life: 1,
          maxLife: 0.6 + Math.random() * 0.6,
          size: burst ? 2 + Math.random() * 3 : 1.5 + Math.random() * 2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const animate = (now: number) => {
      const elapsed = now - startTime.current;
      const progress = Math.min(elapsed / DURATION, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      ctx.clearRect(0, 0, w, h);

      // Bird position along bezier
      const pos = getPath(eased, w, h);

      // Bird size: shrinks from 80 to 32
      const birdSize = 80 - eased * 48;

      // Position the bird element
      bird.style.transform = `translate(${pos.x - birdSize / 2}px, ${pos.y - birdSize / 2}px)`;
      bird.style.width = `${birdSize}px`;
      bird.style.height = `${birdSize}px`;
      bird.style.opacity = progress < 0.05 ? `${progress / 0.05}` : "1";

      // Spawn trail particles during flight
      if (progress < 0.95) {
        spawnParticle(pos.x, pos.y);
        if (Math.random() < 0.3) spawnParticle(pos.x, pos.y);
      }

      // Landing burst
      if (progress >= 0.95 && progress < 0.97) {
        spawnParticle(pos.x, pos.y, true);
      }

      // Update and draw particles
      const dt = 1 / 60;
      particles.current = particles.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02; // slight gravity
        p.life -= dt / p.maxLife;

        if (p.life <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life * 0.8;
        ctx.fill();
        ctx.globalAlpha = 1;

        return true;
      });

      if (progress < 1 || particles.current.length > 0) {
        animFrame.current = requestAnimationFrame(animate);
      } else {
        // Animation complete
        onComplete();
      }
    };

    animFrame.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrame.current);
    };
  }, [getPath, onComplete]);

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:max-w-md z-[51] pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div ref={birdRef} className="absolute" style={{ willChange: "transform" }}>
        <AcumenBird size={80} variant="active" className="" />
      </div>
    </div>
  );
}
