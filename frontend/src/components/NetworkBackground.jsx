import { useEffect, useRef } from 'react';

const NetworkBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Mouse state
        const mouse = { x: null, y: null };
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });
        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.fillStyle = 'rgba(0, 220, 130, 0.5)'; // Brighter dots
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(window.innerWidth * 0.1, 150); // More particles
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        initParticles();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw particles and connections
            particles.forEach((p, index) => {
                p.update();
                p.draw();

                // Connect to mouse
                if (mouse.x != null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 180; // Larger connection range

                    if (distance < maxDist) {
                        ctx.strokeStyle = `rgba(0, 220, 130, ${1 - distance / maxDist})`;
                        ctx.lineWidth = 1.5; // Thicker lines
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }

                // Connect to nearby particles (optional "web" effect)
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 120;

                    if (distance < maxDist) {
                        ctx.strokeStyle = `rgba(0, 220, 130, ${0.15 * (1 - distance / maxDist)})`; // Brighter connections
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 0.9 }} // Higher visibility
        />
    );
};

export default NetworkBackground;
