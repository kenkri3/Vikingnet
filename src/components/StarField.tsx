import { useRef, useEffect } from 'react';

interface Star {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  thickness: number;
  trail: { x: number; y: number; life: number }[];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef(0);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize dim particles
    const particleCount = 60;
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.25 + 0.08,
      });
    }

    // Spawn a shooting star
    const spawnStar = () => {
      const star: Star = {
        x: -50,
        y: Math.random() * canvas.height * 0.6,
        length: Math.random() * 70 + 80,
        speed: Math.random() * 8 + 12,
        opacity: Math.random() * 0.4 + 0.6,
        thickness: Math.random() * 1 + 1.5,
        trail: [],
      };
      starsRef.current.push(star);
    };

    const animate = (time: number) => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update dim particles
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });

      // Spawn shooting stars
      if (time - lastSpawnRef.current > 2500 + Math.random() * 2000) {
        const count = Math.random() > 0.6 ? 2 : 1;
        for (let i = 0; i < count; i++) {
          setTimeout(() => spawnStar(), i * 400);
        }
        lastSpawnRef.current = time;
      }

      // Update and draw shooting stars
      starsRef.current = starsRef.current.filter((star) => {
        const angle = Math.PI / 4; // 45 degrees
        star.x += star.speed * Math.cos(angle);
        star.y += star.speed * Math.sin(angle);

        // Add trail particles
        star.trail.push({ x: star.x, y: star.y, life: 1.0 });
        if (star.trail.length > 10) star.trail.shift();

        // Fade trail
        star.trail.forEach((t) => {
          t.life -= 0.05;
        });
        star.trail = star.trail.filter((t) => t.life > 0);

        // Draw trail
        star.trail.forEach((t) => {
          ctx.beginPath();
          ctx.arc(t.x, t.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${t.life * star.opacity * 0.5})`;
          ctx.fill();
        });

        // Draw star streak
        const tailX = star.x - star.length * Math.cos(angle);
        const tailY = star.y - star.length * Math.sin(angle);

        const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(0.3, `rgba(147, 197, 253, ${star.opacity * 0.6})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.thickness;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Check if off screen
        return star.x < canvas.width + 200 && star.y < canvas.height + 200;
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    // Delay start for page load
    const startDelay = setTimeout(() => {
      frameRef.current = requestAnimationFrame(animate);
      spawnStar();
    }, 1500);

    return () => {
      clearTimeout(startDelay);
      window.removeEventListener('resize', resize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
