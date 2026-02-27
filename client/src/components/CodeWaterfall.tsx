import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const CODE_SNIPPETS = [
  [
    "import { useState } from 'react'",
    "const [data, setData] = useState([])",
    "export type Result<T> = {",
    "  success: boolean",
    "  data: T | null",
    "}",
    "async function fetchAPI(url: string) {",
    "  const res = await fetch(url)",
    "  return res.json()",
    "}",
    "01101001 01101110",
    "interface Config {",
    "  theme: 'light' | 'dark'",
    "  locale: string",
    "}",
    "const sum = arr.reduce((a, b) => a + b, 0)",
    "export default function App() {",
    "  return <Layout />",
    "}",
    "// O(n log n) complexity",
    "10110010 11001010",
  ],
  [
    "type Vector3 = [number, number, number]",
    "const normalize = (v: Vector3) => {",
    "  const len = Math.sqrt(",
    "    v[0]**2 + v[1]**2 + v[2]**2",
    "  )",
    "  return v.map(c => c / len)",
    "}",
    "import express from 'express'",
    "app.get('/api', handler)",
    "11010110 00101101",
    "const lerp = (a, b, t) => a + (b - a) * t",
    "interface Node<T> {",
    "  value: T",
    "  next: Node<T> | null",
    "}",
    "SELECT * FROM users",
    "WHERE active = true",
    "ORDER BY created_at DESC",
    "00110101 11010010",
    "export const API_URL = '/v1'",
  ],
  [
    "function debounce(fn, ms) {",
    "  let timer: NodeJS.Timeout",
    "  return (...args) => {",
    "    clearTimeout(timer)",
    "    timer = setTimeout(",
    "      () => fn(...args), ms",
    "    )",
    "  }",
    "}",
    "10101010 01010101",
    "const clamp = (n, min, max) =>",
    "  Math.min(Math.max(n, min), max)",
    "type DeepPartial<T> = {",
    "  [P in keyof T]?: T[P] extends",
    "    object ? DeepPartial<T[P]> : T[P]",
    "}",
    "// fibonacci sequence",
    "const fib = (n) => n <= 1",
    "  ? n : fib(n-1) + fib(n-2)",
    "01001110 10110001",
  ],
  [
    "import { prisma } from './db'",
    "const user = await prisma",
    "  .user.findUnique({",
    "    where: { id }",
    "  })",
    "11100011 00011100",
    "export async function POST(",
    "  req: Request",
    ") {",
    "  const body = await req.json()",
    "  return Response.json(body)",
    "}",
    "const pipe = (...fns) =>",
    "  (x) => fns.reduce(",
    "    (v, f) => f(v), x",
    "  )",
    "type Maybe<T> = T | null",
    "00101101 11010010",
    "// matrix multiplication",
    "const matMul = (A, B) => {",
  ],
  [
    "useEffect(() => {",
    "  const ctrl = new AbortController()",
    "  fetch(url, {",
    "    signal: ctrl.signal",
    "  })",
    "  return () => ctrl.abort()",
    "}, [url])",
    "10010110 01101001",
    "class EventEmitter<T> {",
    "  private listeners = new Map()",
    "  on(event: keyof T, cb) {",
    "    this.listeners.set(event, cb)",
    "  }",
    "  emit(event: keyof T) {",
    "    this.listeners.get(event)?.()",
    "  }",
    "}",
    "01110100 10001011",
    "const memoize = (fn) => {",
    "  const cache = new Map()",
  ],
  [
    "// gradient descent",
    "let w = Math.random()",
    "for (let i = 0; i < epochs; i++) {",
    "  const grad = computeGrad(w)",
    "  w -= lr * grad",
    "}",
    "11001100 00110011",
    "interface Observable<T> {",
    "  subscribe(cb: (v: T) => void)",
    "  unsubscribe(): void",
    "}",
    "const throttle = (fn, ms) => {",
    "  let last = 0",
    "  return (...args) => {",
    "    const now = Date.now()",
    "    if (now - last >= ms) {",
    "      last = now",
    "      fn(...args)",
    "    }",
    "  }",
  ],
  [
    "type Awaited<T> =",
    "  T extends Promise<infer U>",
    "    ? Awaited<U> : T",
    "00011110 11100001",
    "const quickSort = (arr) => {",
    "  if (arr.length <= 1) return arr",
    "  const pivot = arr[0]",
    "  const left = arr.filter(",
    "    x => x < pivot",
    "  )",
    "  const right = arr.filter(",
    "    x => x > pivot",
    "  )",
    "  return [",
    "    ...quickSort(left),",
    "    pivot,",
    "    ...quickSort(right)",
    "  ]",
    "}",
    "10110100 01001011",
  ],
  [
    "import { z } from 'zod'",
    "const schema = z.object({",
    "  name: z.string().min(1),",
    "  email: z.string().email(),",
    "  age: z.number().optional(),",
    "})",
    "01010101 10101010",
    "type Result<T, E> =",
    "  | { ok: true; value: T }",
    "  | { ok: false; error: E }",
    "const compose = (f, g) =>",
    "  (x) => f(g(x))",
    "11000011 00111100",
    "// binary search",
    "const bsearch = (arr, t) => {",
    "  let lo = 0, hi = arr.length",
    "  while (lo < hi) {",
    "    const mid = (lo + hi) >> 1",
    "    arr[mid] < t ? lo=mid+1 : hi=mid",
    "  }",
  ],
  [
    "const createStore = (init) => {",
    "  let state = init",
    "  const subs = new Set()",
    "  return {",
    "    get: () => state,",
    "    set: (next) => {",
    "      state = next",
    "      subs.forEach(s => s(state))",
    "    },",
    "    sub: (fn) => {",
    "      subs.add(fn)",
    "      return () => subs.delete(fn)",
    "    }",
    "  }",
    "}",
    "10001110 01110001",
    "// Euler's formula",
    "// e^(ix) = cos(x) + i*sin(x)",
    "const euler = (x) => [",
    "  Math.cos(x), Math.sin(x)",
  ],
  [
    "async function* paginate(url) {",
    "  let page = 1",
    "  while (true) {",
    "    const res = await fetch(",
    "      `${url}?page=${page}`",
    "    )",
    "    const data = await res.json()",
    "    if (!data.length) break",
    "    yield data",
    "    page++",
    "  }",
    "}",
    "01100110 10011001",
    "type Flatten<T> =",
    "  T extends Array<infer U>",
    "    ? Flatten<U> : T",
    "// Dijkstra's shortest path",
    "const dist = new Map()",
    "const pq = new MinHeap()",
    "11101001 00010110",
  ],
];

const SPEEDS = [0.3, 0.5, 0.2, 0.6, 0.35, 0.45, 0.25, 0.55, 0.4, 0.3];

interface CodeColumnProps {
  lines: string[];
  speed: number;
  opacity: number;
  scrollYProgress: any;
}

function CodeColumn({ lines, speed, opacity, scrollYProgress }: CodeColumnProps) {
  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * speed]);

  return (
    <motion.div
      style={{ y }}
      className="flex flex-col gap-1 whitespace-nowrap select-none"
    >
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            color: "var(--code-green)",
            opacity,
            fontSize: "11px",
            lineHeight: "18px",
          }}
          className="font-mono"
        >
          {line}
        </div>
      ))}
      {/* Repeat lines for seamless visual continuity */}
      {lines.map((line, i) => (
        <div
          key={`r-${i}`}
          style={{
            color: "var(--code-green)",
            opacity,
            fontSize: "11px",
            lineHeight: "18px",
          }}
          className="font-mono"
        >
          {line}
        </div>
      ))}
    </motion.div>
  );
}

interface CodeWaterfallProps {
  intensity?: "light" | "medium";
}

export default function CodeWaterfall({ intensity = "light" }: CodeWaterfallProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const baseOpacity = intensity === "medium" ? 0.12 : 0.06;

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none"
      )}
      aria-hidden="true"
    >
      <div className="relative w-full h-full flex justify-between px-4">
        {CODE_SNIPPETS.map((lines, i) => (
          <CodeColumn
            key={i}
            lines={lines}
            speed={SPEEDS[i]}
            opacity={baseOpacity + (i % 3) * 0.02}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}
