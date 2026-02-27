import { useEffect, useRef, useState, memo } from "react";

/**
 * Animated code-typing background for the hero section.
 * Multiple "terminals" type out code snippets at different speeds,
 * each with a blinking cursor. White/grey text with a radial fade.
 */

const CODE_BLOCKS = [
  {
    lines: [
      "import torch",
      "import torch.nn as nn",
      "",
      "class TransformerBlock(nn.Module):",
      "    def __init__(self, d_model, n_heads):",
      "        super().__init__()",
      "        self.attn = nn.MultiheadAttention(",
      "            d_model, n_heads, batch_first=True",
      "        )",
      "        self.norm1 = nn.LayerNorm(d_model)",
      "        self.ff = nn.Sequential(",
      "            nn.Linear(d_model, d_model * 4),",
      "            nn.GELU(),",
      "            nn.Linear(d_model * 4, d_model),",
      "        )",
      "        self.norm2 = nn.LayerNorm(d_model)",
      "",
      "    def forward(self, x):",
      "        attn_out, _ = self.attn(x, x, x)",
      "        x = self.norm1(x + attn_out)",
      "        x = self.norm2(x + self.ff(x))",
      "        return x",
    ],
  },
  {
    lines: [
      "import numpy as np",
      "from scipy.stats import norm",
      "",
      "def bayesian_update(prior, likelihood, evidence):",
      '    """Compute posterior via Bayes\' theorem."""',
      "    posterior = (likelihood * prior) / evidence",
      "    return posterior / posterior.sum()",
      "",
      "def monte_carlo_estimate(f, n_samples=10000):",
      "    samples = np.random.uniform(0, 1, n_samples)",
      "    return np.mean(f(samples))",
      "",
      "# Gaussian process regression",
      "def gp_predict(X_train, y_train, X_test, kernel):",
      "    K = kernel(X_train, X_train)",
      "    K_s = kernel(X_train, X_test)",
      "    K_ss = kernel(X_test, X_test)",
      "    K_inv = np.linalg.inv(K + 1e-6 * np.eye(len(K)))",
      "    mu = K_s.T @ K_inv @ y_train",
      "    cov = K_ss - K_s.T @ K_inv @ K_s",
      "    return mu, cov",
    ],
  },
  {
    lines: [
      "// Parallel CUDA kernel for matrix multiply",
      "__global__ void matmul_kernel(",
      "    float* A, float* B, float* C,",
      "    int M, int N, int K",
      ") {",
      "    int row = blockIdx.y * blockDim.y + threadIdx.y;",
      "    int col = blockIdx.x * blockDim.x + threadIdx.x;",
      "",
      "    if (row < M && col < N) {",
      "        float sum = 0.0f;",
      "        for (int k = 0; k < K; k++) {",
      "            sum += A[row * K + k] * B[k * N + col];",
      "        }",
      "        C[row * N + col] = sum;",
      "    }",
      "}",
      "",
      "// Launch kernel",
      "dim3 threads(16, 16);",
      "dim3 blocks((N+15)/16, (M+15)/16);",
      "matmul_kernel<<<blocks, threads>>>(A, B, C, M, N, K);",
    ],
  },
  {
    lines: [
      "import tensorflow as tf",
      "",
      "def build_vae(latent_dim=32):",
      "    encoder = tf.keras.Sequential([",
      "        tf.keras.layers.Conv2D(32, 3, activation='relu'),",
      "        tf.keras.layers.Conv2D(64, 3, activation='relu'),",
      "        tf.keras.layers.Flatten(),",
      "        tf.keras.layers.Dense(latent_dim * 2),",
      "    ])",
      "",
      "    def reparameterize(mean, logvar):",
      "        eps = tf.random.normal(shape=tf.shape(mean))",
      "        return mean + tf.exp(0.5 * logvar) * eps",
      "",
      "    decoder = tf.keras.Sequential([",
      "        tf.keras.layers.Dense(7 * 7 * 64, activation='relu'),",
      "        tf.keras.layers.Reshape((7, 7, 64)),",
      "        tf.keras.layers.Conv2DTranspose(32, 3, activation='relu'),",
      "        tf.keras.layers.Conv2DTranspose(1, 3, activation='sigmoid'),",
      "    ])",
      "    return encoder, decoder, reparameterize",
    ],
  },
  {
    lines: [
      "# Reinforcement Learning - PPO",
      "import torch.optim as optim",
      "",
      "class PPOAgent:",
      "    def __init__(self, state_dim, action_dim):",
      "        self.policy = PolicyNetwork(state_dim, action_dim)",
      "        self.value = ValueNetwork(state_dim)",
      "        self.optimizer = optim.Adam(",
      "            list(self.policy.parameters()) +",
      "            list(self.value.parameters()),",
      "            lr=3e-4",
      "        )",
      "        self.clip_eps = 0.2",
      "",
      "    def compute_gae(self, rewards, values, gamma=0.99):",
      "        advantages = []",
      "        gae = 0",
      "        for t in reversed(range(len(rewards))):",
      "            delta = rewards[t] + gamma * values[t+1] - values[t]",
      "            gae = delta + gamma * 0.95 * gae",
      "            advantages.insert(0, gae)",
      "        return advantages",
    ],
  },
  {
    lines: [
      "SELECT",
      "    m.model_name,",
      "    m.architecture,",
      "    r.accuracy,",
      "    r.f1_score,",
      "    r.training_time_hours",
      "FROM ml_models m",
      "JOIN experiment_results r",
      "    ON m.model_id = r.model_id",
      "WHERE r.dataset = 'ImageNet'",
      "    AND r.accuracy > 0.85",
      "ORDER BY r.f1_score DESC",
      "LIMIT 20;",
      "",
      "-- Feature importance query",
      "WITH ranked_features AS (",
      "    SELECT feature_name,",
      "        importance_score,",
      "        ROW_NUMBER() OVER (",
      "            ORDER BY importance_score DESC",
      "        ) as rank",
      "    FROM feature_analysis",
      ")",
    ],
  },
];

/* ── Position configs for each terminal block ── */
const BLOCK_POSITIONS = [
  { top: "2%", left: "3%", width: "38%" },
  { top: "5%", right: "2%", width: "40%" },
  { top: "35%", left: "1%", width: "36%" },
  { top: "40%", right: "4%", width: "38%" },
  { top: "62%", left: "5%", width: "35%" },
  { top: "65%", right: "1%", width: "40%" },
];

const TEXT_COLOR = "#7A9A85";
const CURSOR_COLOR = "#A8C8B0";

interface TerminalProps {
  lines: string[];
  typingSpeed: number;
  deleteSpeed: number;
  pauseAfterType: number;
  pauseAfterDelete: number;
  startDelay: number;
}

const Terminal = memo(function Terminal({
  lines,
  typingSpeed,
  deleteSpeed,
  pauseAfterType,
  pauseAfterDelete,
  startDelay,
}: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((v) => !v);
    }, 530);
    return () => clearInterval(blink);
  }, []);

  // Start delay
  useEffect(() => {
    const t = setTimeout(() => setIsWaiting(false), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  // Typing / deleting logic
  useEffect(() => {
    if (isWaiting) return;

    if (!isDeleting) {
      // TYPING phase
      if (currentLineIdx < lines.length) {
        const targetLine = lines[currentLineIdx];
        if (currentCharIdx <= targetLine.length) {
          timerRef.current = setTimeout(() => {
            const newLines = [...displayedLines];
            newLines[currentLineIdx] = targetLine.slice(0, currentCharIdx);
            setDisplayedLines(newLines);

            if (currentCharIdx === targetLine.length) {
              // Line done, move to next line
              setCurrentLineIdx((p) => p + 1);
              setCurrentCharIdx(0);
            } else {
              setCurrentCharIdx((p) => p + 1);
            }
          }, typingSpeed + Math.random() * typingSpeed * 0.6);
        }
      } else {
        // All lines typed — pause then start deleting
        timerRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseAfterType);
      }
    } else {
      // DELETING phase — delete line by line
      if (displayedLines.length > 0) {
        timerRef.current = setTimeout(() => {
          setDisplayedLines((prev) => prev.slice(0, prev.length - 1));
        }, deleteSpeed);
      } else {
        // All deleted — pause then re-type
        timerRef.current = setTimeout(() => {
          setIsDeleting(false);
          setCurrentLineIdx(0);
          setCurrentCharIdx(0);
          setDisplayedLines([]);
        }, pauseAfterDelete);
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [
    isWaiting,
    isDeleting,
    currentLineIdx,
    currentCharIdx,
    displayedLines,
    lines,
    typingSpeed,
    deleteSpeed,
    pauseAfterType,
    pauseAfterDelete,
  ]);

  const lastLineIdx = displayedLines.length - 1;

  return (
    <div className="font-mono text-[10px] md:text-[11px] leading-[1.6] select-none">
      {displayedLines.map((line, i) => (
        <div key={i} className="whitespace-pre" style={{ color: TEXT_COLOR }}>
          {line}
          {i === lastLineIdx && !isDeleting && (
            <span
              className="inline-block w-[6px] h-[13px] align-middle ml-[1px] -mt-[1px]"
              style={{
                backgroundColor: showCursor ? CURSOR_COLOR : "transparent",
              }}
            />
          )}
        </div>
      ))}
      {(displayedLines.length === 0 || isDeleting) && (
        <div className="whitespace-pre" style={{ color: TEXT_COLOR }}>
          <span
            className="inline-block w-[6px] h-[13px] align-middle"
            style={{
              backgroundColor: showCursor ? CURSOR_COLOR : "transparent",
            }}
          />
        </div>
      )}
    </div>
  );
});

export default function CodeTyping() {
  const speeds = [
    { typingSpeed: 35, deleteSpeed: 20, pauseAfterType: 3000, pauseAfterDelete: 1500, startDelay: 0 },
    { typingSpeed: 45, deleteSpeed: 25, pauseAfterType: 2500, pauseAfterDelete: 2000, startDelay: 800 },
    { typingSpeed: 30, deleteSpeed: 18, pauseAfterType: 4000, pauseAfterDelete: 1000, startDelay: 1500 },
    { typingSpeed: 40, deleteSpeed: 22, pauseAfterType: 3500, pauseAfterDelete: 1800, startDelay: 600 },
    { typingSpeed: 50, deleteSpeed: 28, pauseAfterType: 2800, pauseAfterDelete: 2200, startDelay: 2000 },
    { typingSpeed: 38, deleteSpeed: 20, pauseAfterType: 3200, pauseAfterDelete: 1600, startDelay: 1200 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Terminal blocks at various positions — more visible */}
      {CODE_BLOCKS.map((block, i) => (
        <div
          key={i}
          className="absolute opacity-[0.25]"
          style={{
            ...BLOCK_POSITIONS[i],
          }}
        >
          <Terminal lines={block.lines} {...speeds[i]} />
        </div>
      ))}

      {/* Radial fade — keeps the center clean for content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(10,18,14,0.92) 0%, rgba(10,18,14,0.6) 50%, rgba(10,18,14,0.1) 100%)",
        }}
      />

      {/* Top/bottom edge fade */}
      <div
        className="absolute inset-x-0 top-0 h-20"
        style={{
          background: "linear-gradient(to bottom, #0A120E 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-20"
        style={{
          background: "linear-gradient(to top, #0A120E 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
