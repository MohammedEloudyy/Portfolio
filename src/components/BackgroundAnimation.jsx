import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  // Mouse tracking for interactive spotlight & canvas connection
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const spotlightBg = useMotionTemplate`radial-gradient(550px circle at ${smoothX}px ${smoothY}px, rgba(245, 158, 11, 0.18), transparent 70%)`;

  useEffect(() => {
    setIsClient(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mousePos = { x: -1000, y: -1000, radius: 170 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mousePos.x = -1000;
      mousePos.y = -1000;
      mouseX.set(-1000);
      mouseY.set(-1000);
    };

    let isPaused = false;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isPaused = true;
        cancelAnimationFrame(animationFrameId);
      } else {
        if (isPaused) {
          isPaused = false;
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Create particles (constellation nodes) - optimized count for mobile & desktop
    const isMobile = width < 768;
    const particleCount = Math.min(Math.floor((width * height) / 28000), isMobile ? 22 : 45);
    const particles = [];
    const colors = ['#f59e0b', '#fbbf24', '#d97706', '#fef08a'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.8 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.45 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseVal: Math.random() * Math.PI,
      });
    }

    // High performance rendering loop without expensive shadowBlur per frame
    const render = () => {
      if (document.hidden) return;
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Gentle pulse
        p.pulseVal += p.pulseSpeed;
        const currentAlpha = p.baseAlpha + Math.sin(p.pulseVal) * 0.15;

        // Draw particle dot cleanly
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, currentAlpha);
        ctx.fill();

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#f59e0b';
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Connect with mouse cursor
        if (mousePos.x > 0 && mousePos.y > 0) {
          const mdx = p.x - mousePos.x;
          const mdy = p.y - mousePos.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mousePos.radius) {
            const mLineAlpha = (1 - mdist / mousePos.radius) * 0.55;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.strokeStyle = '#fbbf24';
            ctx.globalAlpha = mLineAlpha;
            ctx.lineWidth = 1.1;
            ctx.stroke();

            // Gently attract particle towards mouse
            p.x -= mdx * 0.012;
            p.y -= mdy * 0.012;
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#09090b] select-none">
      {/* 1. Visible Blueprint Grid Pattern */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,1)_0%,rgba(0,0,0,0.4)_75%,transparent_100%)]" 
      />

      {/* 2. Distinct Floating Ambient Glowing Orbs with Framer Motion (Desktop) */}
      {/* Orb 1: Rich Amber Pulse (Top-Left) */}
      <motion.div
        animate={{
          x: [0, 90, -50, 0],
          y: [0, -70, 60, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden md:block absolute -top-20 -left-20 w-[550px] h-[550px] rounded-full bg-amber-500/25 blur-[90px]"
      />

      {/* Orb 2: Golden Core Glow (Middle-Right) */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 90, -70, 0],
          scale: [1, 0.88, 1.25, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="hidden md:block absolute top-1/3 -right-24 w-[600px] h-[600px] rounded-full bg-amber-400/20 blur-[90px]"
      />

      {/* Orb 3: Deep Warm Bronze (Bottom-Left) */}
      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.2, 0.85, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
        className="hidden md:block absolute bottom-10 left-1/3 w-[500px] h-[500px] rounded-full bg-amber-600/22 blur-[90px]"
      />

      {/* Mobile-optimized lightweight ambient glow without heavy WebKit GPU texture overhead */}
      <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-amber-500/12 via-amber-600/5 to-transparent pointer-events-none" />

      {/* 3. Interactive Mouse Spotlight Glow */}
      {isClient && (
        <motion.div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{ background: spotlightBg }}
        />
      )}

      {/* 4. Interactive Living Particle Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 5. Edge Vignette Accent */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
    </div>
  );
}
