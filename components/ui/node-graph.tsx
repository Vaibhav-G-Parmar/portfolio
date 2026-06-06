"use client";

import { motion } from "framer-motion";

type Node = { id: string; x: number; y: number; label: string };

const NODES: Node[] = [
  { id: "mern", x: 310, y: 170, label: "MERN Stack" },
  { id: "cloud", x: 150, y: 75, label: "AWS / Azure" },
  { id: "mobile", x: 480, y: 75, label: "Mobile" },
  { id: "ai", x: 480, y: 265, label: "AI Agents" },
  { id: "api", x: 150, y: 265, label: "z/OS Connect" },
  { id: "mainframe", x: 30, y: 170, label: "Mainframe" },
];

const EDGES: [string, string][] = [
  ["mern", "cloud"],
  ["mern", "mobile"],
  ["mern", "ai"],
  ["mern", "api"],
  ["api", "mainframe"],
  ["cloud", "mainframe"],
];

const byId = (id: string) => NODES.find((n) => n.id === id)!;

/** Decorative animated distributed-systems topology: mainframe → APIs → AI. */
export function NodeGraph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 340"
      className={className}
      fill="none"
      role="img"
      aria-label="Full-stack topology: MERN stack at center, branching to cloud, mobile, AI, and mainframe via z/OS Connect"
    >
      {/* Edges */}
      {EDGES.map(([a, b], i) => {
        const n1 = byId(a);
        const n2 = byId(b);
        return (
          <g key={`${a}-${b}`}>
            <line
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke="var(--hairline)"
              strokeWidth={1}
            />
            {/* Flowing packet */}
            <motion.circle
              r={3}
              fill="currentColor"
              className="text-emerald-500 dark:text-emerald-400"
              initial={{ cx: n1.x, cy: n1.y, opacity: 0 }}
              animate={{
                cx: [n1.x, n2.x],
                cy: [n1.y, n2.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
                repeatDelay: 0.6,
              }}
            />
          </g>
        );
      })}

      {/* Nodes */}
      {NODES.map((n, i) => (
        <g key={n.id}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={7}
            className="fill-emerald-500/15 stroke-emerald-500/60 dark:fill-emerald-400/15 dark:stroke-emerald-400/60"
            strokeWidth={1.5}
            animate={{ scale: [1, 1.35, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
          <circle cx={n.x} cy={n.y} r={2.5} className="fill-emerald-500 dark:fill-emerald-400" />
          <text
            x={n.x}
            y={n.y - 14}
            textAnchor="middle"
            className="fill-foreground/55 font-mono"
            style={{ fontSize: 11, letterSpacing: "0.04em" }}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
