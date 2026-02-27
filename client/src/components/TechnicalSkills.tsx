import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollHighlight from "@/components/ScrollHighlight";

/* ────────────────────────────────────────────────────────
 * Skill data — grouped by category with connections
 * ──────────────────────────────────────────────────────── */

interface SkillNode {
  id: string;
  label: string;
  category: "language" | "framework" | "domain" | "tool";
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface SkillEdge {
  source: string;
  target: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  language: "#0066FF",
  framework: "#00D97E",
  domain: "#FF6B35",
  tool: "#8B5CF6",
};

const CATEGORY_LABELS: Record<string, string> = {
  language: "Languages",
  framework: "Frameworks",
  domain: "Domains",
  tool: "Tools",
};

const SKILLS_DATA: { id: string; label: string; category: SkillNode["category"] }[] = [
  // Languages
  { id: "python", label: "Python", category: "language" },
  { id: "cpp", label: "C++", category: "language" },
  { id: "r", label: "R", category: "language" },
  { id: "matlab", label: "MATLAB", category: "language" },
  { id: "sql", label: "SQL", category: "language" },
  { id: "java", label: "Java", category: "language" },
  { id: "js", label: "JavaScript", category: "language" },
  { id: "ts", label: "TypeScript", category: "language" },
  { id: "cuda", label: "CUDA", category: "language" },

  // Frameworks & Libraries
  { id: "pytorch", label: "PyTorch", category: "framework" },
  { id: "tensorflow", label: "TensorFlow", category: "framework" },
  { id: "numpy", label: "NumPy", category: "framework" },
  { id: "pandas", label: "pandas", category: "framework" },
  { id: "sklearn", label: "scikit-learn", category: "framework" },
  { id: "react", label: "React", category: "framework" },
  { id: "scipy", label: "SciPy", category: "framework" },
  { id: "matplotlib", label: "Matplotlib", category: "framework" },
  { id: "jax", label: "JAX", category: "framework" },
  { id: "opencv", label: "OpenCV", category: "framework" },

  // Domains
  { id: "dl", label: "Deep Learning", category: "domain" },
  { id: "cv", label: "Computer Vision", category: "domain" },
  { id: "bayesian", label: "Bayesian Inference", category: "domain" },
  { id: "montecarlo", label: "Monte Carlo", category: "domain" },
  { id: "numerical", label: "Numerical Methods", category: "domain" },
  { id: "causal", label: "Causal Inference", category: "domain" },
  { id: "medical", label: "Medical Imaging", category: "domain" },
  { id: "nlp", label: "NLP", category: "domain" },
  { id: "rl", label: "Reinforcement Learning", category: "domain" },
  { id: "genai", label: "Generative AI", category: "domain" },
  { id: "optimization", label: "Optimization", category: "domain" },
  { id: "stats", label: "Statistics", category: "domain" },

  // Tools & Systems
  { id: "git", label: "Git", category: "tool" },
  { id: "linux", label: "Linux", category: "tool" },
  { id: "hpc", label: "HPC", category: "tool" },
  { id: "parallel", label: "Parallel Prog.", category: "tool" },
  { id: "webdev", label: "Web Dev", category: "tool" },
  { id: "bash", label: "Bash", category: "tool" },
  { id: "docker", label: "Docker", category: "tool" },
  { id: "aws", label: "AWS", category: "tool" },
  { id: "latex", label: "LaTeX", category: "tool" },
  { id: "jupyter", label: "Jupyter", category: "tool" },
  { id: "wandb", label: "W&B", category: "tool" },
];

const EDGES_DATA: SkillEdge[] = [
  // Python connects to its frameworks
  { source: "python", target: "pytorch" },
  { source: "python", target: "tensorflow" },
  { source: "python", target: "numpy" },
  { source: "python", target: "pandas" },
  { source: "python", target: "sklearn" },
  { source: "python", target: "scipy" },
  { source: "python", target: "matplotlib" },
  { source: "python", target: "jax" },

  // JavaScript/TypeScript ecosystem
  { source: "js", target: "ts" },
  { source: "js", target: "react" },
  { source: "ts", target: "react" },
  { source: "react", target: "webdev" },

  // Frameworks connect to domains
  { source: "pytorch", target: "dl" },
  { source: "tensorflow", target: "dl" },
  { source: "jax", target: "dl" },
  { source: "dl", target: "cv" },
  { source: "dl", target: "medical" },
  { source: "dl", target: "nlp" },
  { source: "dl", target: "rl" },
  { source: "dl", target: "genai" },
  { source: "sklearn", target: "bayesian" },
  { source: "sklearn", target: "stats" },
  { source: "numpy", target: "numerical" },
  { source: "numpy", target: "montecarlo" },
  { source: "scipy", target: "optimization" },
  { source: "scipy", target: "numerical" },
  { source: "opencv", target: "cv" },

  // Domain connections
  { source: "bayesian", target: "causal" },
  { source: "bayesian", target: "montecarlo" },
  { source: "bayesian", target: "stats" },
  { source: "cv", target: "medical" },
  { source: "numerical", target: "montecarlo" },
  { source: "nlp", target: "genai" },
  { source: "optimization", target: "numerical" },
  { source: "stats", target: "causal" },
  { source: "rl", target: "optimization" },

  // Languages to domains/tools
  { source: "r", target: "bayesian" },
  { source: "r", target: "causal" },
  { source: "r", target: "stats" },
  { source: "matlab", target: "numerical" },
  { source: "matlab", target: "optimization" },
  { source: "cpp", target: "parallel" },
  { source: "cpp", target: "hpc" },
  { source: "cpp", target: "cuda" },
  { source: "cuda", target: "parallel" },
  { source: "cuda", target: "dl" },
  { source: "sql", target: "pandas" },
  { source: "java", target: "hpc" },

  // Tools connections
  { source: "linux", target: "bash" },
  { source: "linux", target: "hpc" },
  { source: "linux", target: "docker" },
  { source: "hpc", target: "parallel" },
  { source: "hpc", target: "aws" },
  { source: "git", target: "linux" },
  { source: "docker", target: "aws" },
  { source: "jupyter", target: "python" },
  { source: "jupyter", target: "matplotlib" },
  { source: "wandb", target: "pytorch" },
  { source: "wandb", target: "dl" },
  { source: "latex", target: "stats" },
];

/* ────────────────────────────────────────────────────────
 * Force-directed simulation
 * ──────────────────────────────────────────────────────── */

function initNodes(width: number, height: number): SkillNode[] {
  // Cluster starting positions by category
  const categoryAngle: Record<string, number> = {
    language: -Math.PI * 0.75,
    framework: -Math.PI * 0.25,
    domain: Math.PI * 0.25,
    tool: Math.PI * 0.75,
  };

  const cx = width / 2;
  const cy = height / 2;
  const spread = Math.min(width, height) * 0.28;

  return SKILLS_DATA.map((skill, i) => {
    const angle = categoryAngle[skill.category] + (Math.random() - 0.5) * 1.2;
    const dist = spread + (Math.random() - 0.5) * spread * 0.6;
    return {
      ...skill,
      x: cx + Math.cos(angle) * dist,
      y: cy + Math.sin(angle) * dist,
      vx: 0,
      vy: 0,
      radius: skill.label.length > 10 ? 42 : skill.label.length > 6 ? 36 : 30,
    };
  });
}

function simulate(
  nodes: SkillNode[],
  edges: SkillEdge[],
  width: number,
  height: number,
  hoveredId: string | null,
  draggedId: string | null,
  mouseX: number,
  mouseY: number,
) {
  const cx = width / 2;
  const cy = height / 2;

  // Build edge map
  const edgeMap = new Map<string, Set<string>>();
  for (const e of edges) {
    if (!edgeMap.has(e.source)) edgeMap.set(e.source, new Set());
    if (!edgeMap.has(e.target)) edgeMap.set(e.target, new Set());
    edgeMap.get(e.source)!.add(e.target);
    edgeMap.get(e.target)!.add(e.source);
  }

  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    if (a.id === draggedId) continue;

    let fx = 0;
    let fy = 0;

    // Repulsion from other nodes
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue;
      const b = nodes[j];
      let dx = a.x - b.x;
      let dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const minDist = a.radius + b.radius + 20;
      if (dist < minDist * 3) {
        const force = (800 / (dist * dist)) * (minDist / 50);
        fx += (dx / dist) * force;
        fy += (dy / dist) * force;
      }
    }

    // Attraction along edges (spring)
    const connected = edgeMap.get(a.id);
    if (connected) {
      for (const targetId of connected) {
        const b = nodes.find((n) => n.id === targetId);
        if (!b) continue;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const idealDist = 120;
        const force = (dist - idealDist) * 0.003;
        fx += (dx / dist) * force;
        fy += (dy / dist) * force;
      }
    }

    // Gravity toward center
    const dcx = cx - a.x;
    const dcy = cy - a.y;
    fx += dcx * 0.0004;
    fy += dcy * 0.0004;

    // Repulsion from mouse on hover (gentle push if not hovered)
    if (hoveredId && hoveredId !== a.id) {
      const dx = a.x - mouseX;
      const dy = a.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      if (dist < 120) {
        const force = (120 - dist) * 0.008;
        fx += (dx / dist) * force;
        fy += (dy / dist) * force;
      }
    }

    // Apply velocity
    a.vx = (a.vx + fx) * 0.85;
    a.vy = (a.vy + fy) * 0.85;
    a.x += a.vx;
    a.y += a.vy;

    // Boundaries
    const pad = a.radius + 10;
    if (a.x < pad) { a.x = pad; a.vx *= -0.5; }
    if (a.x > width - pad) { a.x = width - pad; a.vx *= -0.5; }
    if (a.y < pad) { a.y = pad; a.vy *= -0.5; }
    if (a.y > height - pad) { a.y = height - pad; a.vy *= -0.5; }
  }
}

/* ────────────────────────────────────────────────────────
 * Component
 * ──────────────────────────────────────────────────────── */

export default function TechnicalSkills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<SkillNode[]>([]);
  const rafRef = useRef<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [draggedSkill, setDraggedSkill] = useState<string | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0],
  );

  // Initialize dimensions + nodes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      setDimensions({ width: w, height: h });
      if (nodesRef.current.length === 0) {
        nodesRef.current = initNodes(w, h);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Canvas rendering loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    const draw = () => {
      const { width, height } = dimensions;
      const nodes = nodesRef.current;
      const hovered = hoveredSkill;
      const dragged = draggedSkill;

      // Simulate
      simulate(
        nodes,
        EDGES_DATA,
        width,
        height,
        hovered,
        dragged,
        mouseRef.current.x,
        mouseRef.current.y,
      );

      // Handle drag
      if (dragged) {
        const node = nodes.find((n) => n.id === dragged);
        if (node) {
          node.x += (mouseRef.current.x - node.x) * 0.3;
          node.y += (mouseRef.current.y - node.y) * 0.3;
          node.vx = 0;
          node.vy = 0;
        }
      }

      ctx.clearRect(0, 0, width, height);

      // Build connection set for hovered
      const hoveredConnections = new Set<string>();
      if (hovered) {
        for (const e of EDGES_DATA) {
          if (e.source === hovered) hoveredConnections.add(e.target);
          if (e.target === hovered) hoveredConnections.add(e.source);
        }
      }

      // Draw edges
      for (const edge of EDGES_DATA) {
        const source = nodes.find((n) => n.id === edge.source);
        const target = nodes.find((n) => n.id === edge.target);
        if (!source || !target) continue;

        const isHighlighted =
          hovered &&
          (edge.source === hovered || edge.target === hovered);

        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);
        ctx.strokeStyle = isHighlighted
          ? CATEGORY_COLORS[source.category] + "80"
          : hovered
          ? "rgba(200,200,210,0.08)"
          : "rgba(200,200,210,0.2)";
        ctx.lineWidth = isHighlighted ? 2 : 1;
        ctx.stroke();

        // Animated pulse on highlighted edges
        if (isHighlighted) {
          const t = (Date.now() % 2000) / 2000;
          const px = source.x + (target.x - source.x) * t;
          const py = source.y + (target.y - source.y) * t;
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fillStyle = CATEGORY_COLORS[source.category] + "AA";
          ctx.fill();
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const isHovered = node.id === hovered;
        const isConnected = hoveredConnections.has(node.id);
        const isDimmed = hovered && !isHovered && !isConnected;
        const color = CATEGORY_COLORS[node.category];
        const r = isHovered ? node.radius + 6 : node.radius;

        // Glow for hovered
        if (isHovered) {
          const grad = ctx.createRadialGradient(node.x, node.y, r * 0.5, node.x, node.y, r * 2);
          grad.addColorStop(0, color + "30");
          grad.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(node.x, node.y, r * 2, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isDimmed ? "#1a1a24" : "#13131D";
        ctx.fill();
        ctx.strokeStyle = isDimmed
          ? "rgba(200,200,210,0.1)"
          : isHovered
          ? color
          : isConnected
          ? color + "88"
          : "rgba(200,200,210,0.25)";
        ctx.lineWidth = isHovered ? 2.5 : isConnected ? 2 : 1;
        ctx.stroke();

        // Label
        ctx.font = `${isHovered ? "600" : "500"} ${
          isHovered ? 12 : 10
        }px 'IBM Plex Mono', 'Fira Code', monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = isDimmed
          ? "rgba(200,200,210,0.2)"
          : isHovered
          ? "#F0F0F5"
          : isConnected
          ? "#D0D0DD"
          : "rgba(200,200,210,0.65)";
        ctx.fillText(node.label, node.x, node.y);

        // Category label on hover
        if (isHovered) {
          ctx.font = "500 9px 'IBM Plex Mono', monospace";
          ctx.fillStyle = color;
          ctx.fillText(
            CATEGORY_LABELS[node.category].toUpperCase(),
            node.x,
            node.y + r + 14,
          );
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [dimensions, hoveredSkill, draggedSkill]);

  // Mouse handlers
  const getMousePos = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return { x: 0, y: 0 };
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    },
    [],
  );

  const findNodeUnderMouse = useCallback(
    (mx: number, my: number) => {
      const nodes = nodesRef.current;
      for (let i = nodes.length - 1; i >= 0; i--) {
        const n = nodes[i];
        const dx = mx - n.x;
        const dy = my - n.y;
        if (dx * dx + dy * dy < (n.radius + 8) * (n.radius + 8)) {
          return n.id;
        }
      }
      return null;
    },
    [],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const pos = getMousePos(e);
      mouseRef.current = pos;

      if (draggedSkill) return;

      const nodeId = findNodeUnderMouse(pos.x, pos.y);
      setHoveredSkill(nodeId);
    },
    [getMousePos, findNodeUnderMouse, draggedSkill],
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      const pos = getMousePos(e);
      const nodeId = findNodeUnderMouse(pos.x, pos.y);
      if (nodeId) {
        setDraggedSkill(nodeId);
        e.preventDefault();
      }
    },
    [getMousePos, findNodeUnderMouse],
  );

  const handleMouseUp = useCallback(() => {
    setDraggedSkill(null);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredSkill(null);
    setDraggedSkill(null);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0A0A0F] py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      {/* Header area — title right, paragraph left */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 mb-14 md:mb-20"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Title — right-aligned */}
          <div className="md:order-2 md:text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#555566] mb-3">
              Technical
            </p>
            <ScrollHighlight
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95]"
              colorFrom="#333344"
              colorTo="#F0F0F5"
            >
              Technical Skills
              <br />
              &amp;&nbsp;Background
            </ScrollHighlight>
          </div>

          {/* Paragraph — left */}
          <p className="font-sans text-base md:text-lg text-[#8888A0] max-w-[440px] leading-relaxed md:order-1">
            Proficient across the full stack of modern AI research and
            engineering, from low-level systems programming to high-level
            deep learning frameworks and statistical modeling.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-5 mt-10">
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: CATEGORY_COLORS[key] }}
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#8888A0]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Force-directed graph */}
      <motion.div style={{ opacity: contentOpacity }}>
        <div
          ref={containerRef}
          className="relative w-full max-w-[1200px] mx-auto aspect-[16/9] md:aspect-[2/1] cursor-grab active:cursor-grabbing"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ width: "100%", height: "100%" }}
          />

          {/* Interaction hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <p className="font-mono text-[10px] text-[#555566] uppercase tracking-[0.1em]">
              Hover &amp; drag to explore
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
