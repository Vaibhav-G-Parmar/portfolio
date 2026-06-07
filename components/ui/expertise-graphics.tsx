"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ═══════════════════════════════════════════════
   1. FULL-STACK LAYERED ARCHITECTURE
   ═══════════════════════════════════════════════ */

export function FullStackGraphic({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const layers = [
    { label: "React / Next.js", color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/30" },
    { label: "Express / Node.js", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" },
    { label: "MongoDB / PostgreSQL", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30" },
  ];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className="flex flex-col items-center gap-3">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.label}
            className={`flex w-full max-w-[280px] items-center justify-center rounded-lg border px-6 py-3.5 font-mono text-[12px] font-medium ${layer.bg} ${layer.color}`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: EASE }}
          >
            {layer.label}
          </motion.div>
        ))}

        {/* Connecting arrows between layers */}
        {[0, 1].map((i) => (
          <motion.div
            key={`arrow-${i}`}
            className="absolute flex items-center justify-center"
            style={{ top: `${28 + i * 34}%` }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
          >
            <motion.div
              className="h-3 w-px bg-emerald-500/50"
              initial={{ scaleY: 1, opacity: 0.5 }}
              animate={inView ? { scaleY: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Data flow particles */}
      {inView && (
        <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              r={2}
              cx="50%"
              className="fill-emerald-400"
              initial={{ cy: "15%", opacity: 0 }}
              animate={{ cy: ["15%", "85%"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
            />
          ))}
        </svg>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   2. CLOUD INFRASTRUCTURE TOPOLOGY
   ═══════════════════════════════════════════════ */

type CloudNode = { id: string; x: number; y: number; label: string; icon?: string };

const CLOUD_NODES: CloudNode[] = [
  { id: "eks", x: 200, y: 130, label: "EKS" },
  { id: "vpc", x: 80, y: 50, label: "VPC" },
  { id: "alb", x: 200, y: 40, label: "ALB" },
  { id: "s3", x: 320, y: 50, label: "S3" },
  { id: "rds", x: 320, y: 200, label: "RDS" },
  { id: "ecr", x: 80, y: 200, label: "ECR" },
  { id: "gh", x: 80, y: 130, label: "CI/CD" },
  { id: "cw", x: 320, y: 130, label: "Monitor" },
];

const CLOUD_EDGES: [string, string][] = [
  ["alb", "eks"],
  ["eks", "rds"],
  ["eks", "s3"],
  ["ecr", "eks"],
  ["gh", "ecr"],
  ["vpc", "alb"],
  ["eks", "cw"],
];

const findCloudNode = (id: string) => CLOUD_NODES.find((n) => n.id === id)!;

export function CloudTopologyGraphic({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 250"
      className={`w-full ${className}`}
      fill="none"
      role="img"
      aria-label="Cloud infrastructure topology showing EKS, VPC, ALB, S3, RDS, ECR, CI/CD, and monitoring"
    >
      {/* Edges with flowing packets */}
      {CLOUD_EDGES.map(([a, b], i) => {
        const n1 = findCloudNode(a);
        const n2 = findCloudNode(b);
        return (
          <g key={`${a}-${b}`}>
            <motion.line
              x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y}
              stroke="var(--hairline)"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
            />
            {inView && (
              <motion.circle
                r={2.5}
                className="fill-emerald-500 dark:fill-emerald-400"
                initial={{ cx: n1.x, cy: n1.y, opacity: 0 }}
                animate={{ cx: [n1.x, n2.x], cy: [n1.y, n2.y], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.8 + i * 0.4, ease: "easeInOut", repeatDelay: 1 }}
              />
            )}
          </g>
        );
      })}

      {/* Nodes */}
      {CLOUD_NODES.map((n, i) => (
        <g key={n.id}>
          <motion.circle
            cx={n.x} cy={n.y} r={18}
            className="fill-emerald-500/5 stroke-emerald-500/40 dark:fill-emerald-400/5 dark:stroke-emerald-400/40"
            strokeWidth={1}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.06, ease: EASE }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
          <motion.circle
            cx={n.x} cy={n.y} r={18}
            className="fill-transparent stroke-emerald-500/20 dark:stroke-emerald-400/20"
            strokeWidth={1}
            initial={{ scale: 0 }}
            animate={inView ? { scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] } : {}}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
          <motion.circle
            cx={n.x} cy={n.y} r={3}
            className="fill-emerald-500 dark:fill-emerald-400"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
          <motion.text
            x={n.x} y={n.y + 30}
            textAnchor="middle"
            className="fill-zinc-400 dark:fill-zinc-500 font-mono"
            style={{ fontSize: 9, letterSpacing: "0.06em" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
          >
            {n.label}
          </motion.text>
        </g>
      ))}
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   3. MOBILE DEVICE GRAPHIC
   ═══════════════════════════════════════════════ */

export function MobileDeviceGraphic({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={`relative flex items-center justify-center gap-6 ${className}`}>
      {/* iOS device */}
      <motion.div
        className="relative h-[200px] w-[100px] rounded-[16px] border border-zinc-700/60 bg-zinc-900/80 p-1.5 shadow-2xl"
        initial={{ opacity: 0, x: -20, rotateY: 15 }}
        animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
      >
        {/* Notch */}
        <div className="mx-auto h-1.5 w-8 rounded-full bg-zinc-800" />
        {/* Screen */}
        <div className="mt-2 flex h-[calc(100%-24px)] flex-col items-center justify-center rounded-[10px] bg-gradient-to-b from-zinc-800/50 to-zinc-900/80 p-2">
          <motion.div
            className="h-2 w-10 rounded-full bg-sky-500/40"
            initial={{ opacity: 0.4 }}
            animate={inView ? { opacity: [0.4, 1, 0.4] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="mt-2 h-1.5 w-14 rounded-full bg-zinc-600/40"
            initial={{ width: "3rem" }}
            animate={inView ? { width: ["3rem", "3.5rem", "3rem"] } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div className="mt-1.5 h-1.5 w-12 rounded-full bg-zinc-700/30" />
          <motion.div className="mt-4 h-8 w-14 rounded-md border border-emerald-500/30 bg-emerald-500/10" />
          <span className="mt-1 font-mono text-[6px] text-emerald-400/60">SwiftUI</span>
        </div>
      </motion.div>

      {/* Android device */}
      <motion.div
        className="relative h-[200px] w-[100px] rounded-[14px] border border-zinc-700/60 bg-zinc-900/80 p-1.5 shadow-2xl"
        initial={{ opacity: 0, x: 20, rotateY: -15 }}
        animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
      >
        {/* Camera punch hole */}
        <div className="mx-auto h-1.5 w-1.5 rounded-full bg-zinc-700" />
        {/* Screen */}
        <div className="mt-2 flex h-[calc(100%-24px)] flex-col items-center justify-center rounded-[10px] bg-gradient-to-b from-zinc-800/50 to-zinc-900/80 p-2">
          <motion.div
            className="h-2 w-10 rounded-full bg-violet-500/40"
            initial={{ opacity: 0.4 }}
            animate={inView ? { opacity: [0.4, 1, 0.4] } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="mt-2 h-1.5 w-14 rounded-full bg-zinc-600/40"
            initial={{ width: "3rem" }}
            animate={inView ? { width: ["3rem", "3.5rem", "3rem"] } : {}}
            transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div className="mt-1.5 h-1.5 w-12 rounded-full bg-zinc-700/30" />
          <motion.div className="mt-4 h-8 w-14 rounded-md border border-violet-500/30 bg-violet-500/10" />
          <span className="mt-1 font-mono text-[6px] text-violet-400/60">Kotlin</span>
        </div>
      </motion.div>

      {/* Sync indicator between devices */}
      {inView && (
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        >
          <div className="h-5 w-5 rounded-full border border-emerald-500/40 bg-emerald-500/10" />
        </motion.div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   4. MAINFRAME RETRO TERMINAL
   ═══════════════════════════════════════════════ */

export function MainframeGraphic({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const lines = [
    "ICH70001I VAIBHAV  LAST ACCESS AT 08:42:15",
    "IEF403I ACCTJOB - STARTED - TIME=08.42.16",
    "READY",
    "ISPF PRIMARY OPTION MENU",
    "====>",
  ];

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* CRT frame */}
      <motion.div
        className="relative rounded-lg border border-emerald-500/20 bg-zinc-950 p-4 shadow-[inset_0_0_60px_rgba(16,185,129,0.03)]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {/* Scan line effect */}
        {inView && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 h-px bg-emerald-400/20"
            initial={{ top: "0%" }}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Screen glow */}
        <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-b from-emerald-500/[0.02] to-transparent" />

        {/* Terminal text */}
        <div className="relative space-y-1 font-mono text-[11px] leading-relaxed text-emerald-400/80">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.3 }}
              className={i === lines.length - 1 ? "flex items-center gap-1" : ""}
            >
              {line}
              {i === lines.length - 1 && inView && (
                <motion.span
                  className="inline-block h-3 w-2 bg-emerald-400/70"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.p>
          ))}
        </div>

        {/* CRT overlay lines */}
        <div
          className="pointer-events-none absolute inset-0 rounded-lg opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(16,185,129,0.4) 2px, rgba(16,185,129,0.4) 3px)",
          }}
        />
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   5. z/OS CONNECT PIPELINE (bridge diagram)
   Based on user reference: IBM z/OS → Modern API → Consumers
   ═══════════════════════════════════════════════ */

export function ZosPipelineGraphic({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const stages = [
    {
      label: "IBM z/OS",
      sublabel: "COBOL - DB2 - CICS\nBatch - IMS",
      color: "border-emerald-500/40 bg-emerald-500/5",
      textColor: "text-emerald-400",
    },
    {
      label: "Modern API",
      sublabel: "z/OS Connect - REST\nJWT - OAuth",
      color: "border-zinc-500/40 bg-zinc-500/5",
      textColor: "text-zinc-300",
    },
    {
      label: "Consumers",
      sublabel: "React - Mobile\nMicroservices",
      color: "border-sky-500/40 bg-sky-500/5",
      textColor: "text-sky-400",
    },
  ];

  const connectors = ["SAR / JSON", "REST / JSON"];

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Title */}
      <motion.p
        className="mb-5 font-mono text-[11px] italic text-zinc-500"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        How I bridge mainframe to modern
      </motion.p>

      {/* Pipeline flow */}
      <div className="flex items-center gap-0">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex items-center">
            {/* Stage node */}
            <motion.div
              className={`relative rounded-lg border px-4 py-3 ${stage.color}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.2, ease: EASE }}
            >
              <p className={`font-mono text-[11px] font-bold ${stage.textColor}`}>
                {stage.label}
              </p>
              <p className="mt-1 whitespace-pre-line font-mono text-[9px] leading-tight text-zinc-500">
                {stage.sublabel}
              </p>
              {/* Pulsing dot */}
              {i < stages.length - 1 && (
                <motion.div
                  className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-emerald-500"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={inView ? { scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
              )}
            </motion.div>

            {/* Connector arrow */}
            {i < connectors.length && (
              <motion.div
                className="flex flex-col items-center px-2"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }}
              >
                <span className="font-mono text-[8px] text-zinc-600">{connectors[i]}</span>
                <div className="relative mt-1 h-px w-8 bg-emerald-500/40 sm:w-12">
                  {/* Flowing dot */}
                  {inView && (
                    <motion.div
                      className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald-400"
                      animate={{ left: ["0%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 + i * 0.5, ease: "easeInOut", repeatDelay: 0.5 }}
                    />
                  )}
                </div>
                <svg className="mt-0.5" width="8" height="6" viewBox="0 0 8 6" aria-hidden>
                  <path d="M4 6 L8 0 L0 0 Z" className="fill-emerald-500/40" />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   6. FLOATING PARTICLES BACKGROUND
   ═══════════════════════════════════════════════ */

export function FloatingParticles({
  count = 8,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${12 + ((i * 73) % 76)}%`,
    top: `${8 + ((i * 41) % 84)}%`,
    delay: i * 0.4,
    duration: 3 + (i % 3),
  }));

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute h-1 w-1 rounded-full bg-emerald-500/30 dark:bg-emerald-400/30"
          style={{ left: p.left, top: p.top }}
          initial={{ y: 0, opacity: 0 }}
          animate={inView ? { y: [0, -12, 0], opacity: [0.2, 0.6, 0.2] } : { y: 0, opacity: 0 }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
