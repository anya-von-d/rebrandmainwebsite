import { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  layer: number;
  targetRadius: number;
  currentRadius: number;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
  targetOpacity: number;
}

export default function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const progressRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('coursework');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initializeNetwork();
    };

    const initializeNetwork = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const numNodes = 120;
      const minGap = 40;
      
      nodesRef.current = [];
      connectionsRef.current = [];

      const seededRandom = (seed: number) => {
        let t = seed + 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };

      let seed = Math.floor(width * height);
      
      for (let i = 0; i < numNodes; i++) {
        let attempts = 0;
        let x, y;
        let valid = false;
        
        while (!valid && attempts < 50) {
          seed++;
          x = 20 + seededRandom(seed) * (width - 40);
          seed++;
          y = 100 + seededRandom(seed) * (height - 120);
          
          valid = true;
          for (const node of nodesRef.current) {
            const dist = Math.sqrt((x - node.x) ** 2 + (y - node.y) ** 2);
            if (dist < minGap) {
              valid = false;
              break;
            }
          }
          attempts++;
        }
        
        if (valid && x !== undefined && y !== undefined) {
          const layer = Math.floor((x / width) * 7);
          nodesRef.current.push({
            x,
            y,
            layer,
            targetRadius: 4 + seededRandom(seed + i) * 4,
            currentRadius: 0,
          });
        }
      }

      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const nodeA = nodesRef.current[i];
          const nodeB = nodesRef.current[j];
          const dist = Math.sqrt((nodeA.x - nodeB.x) ** 2 + (nodeA.y - nodeB.y) ** 2);
          
          if (dist < 150 && seededRandom(seed + i * j) > 0.3) {
            connectionsRef.current.push({
              from: i,
              to: j,
              opacity: 0,
              targetOpacity: 0.15 + seededRandom(seed + i + j) * 0.25,
            });
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      if (isVisible && progressRef.current < 1) {
        progressRef.current += 0.008;
      }

      const progress = progressRef.current;
      const canvasWidth = canvas.offsetWidth;

      nodesRef.current.forEach((node) => {
        const xProgress = node.x / canvasWidth;
        const layerDelay = xProgress * 0.7;
        const layerProgress = Math.max(0, Math.min(1, (progress - layerDelay) * 2));
        node.currentRadius = node.targetRadius * layerProgress;

        if (node.currentRadius > 0.1) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(1, 103, 66, ${0.5 + layerProgress * 0.5})`;
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.currentRadius + 3, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(1, 103, 66, ${0.15 * layerProgress})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      connectionsRef.current.forEach((conn) => {
        const fromNode = nodesRef.current[conn.from];
        const toNode = nodesRef.current[conn.to];
        
        const xProgress = Math.min(fromNode.x, toNode.x) / canvasWidth;
        const layerDelay = xProgress * 0.7;
        const layerProgress = Math.max(0, Math.min(1, (progress - layerDelay) * 2));
        conn.opacity = conn.targetOpacity * layerProgress;

        if (conn.opacity > 0.01) {
          const drawProgress = Math.max(0, Math.min(1, (progress - (fromNode.x / canvasWidth) * 0.7) * 2.5));
          const endX = fromNode.x + (toNode.x - fromNode.x) * drawProgress;
          const endY = fromNode.y + (toNode.y - fromNode.y) * drawProgress;
          
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = `rgba(1, 103, 66, ${conn.opacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
