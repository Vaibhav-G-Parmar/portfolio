"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import type { TerminalLine } from "@/content/site";

type Line = { text: string; tone?: "cmd" | "ok" | "dim" | "json" | "warn" | "ai" };

type Session = {
  tab: string;
  label: string;
  lines: Line[];
};

const SESSIONS: Session[] = [
  {
    tab: "web",
    label: "Full-Stack MERN",
    lines: [
      { text: "$ npx create-next-app@latest --ts --tailwind", tone: "cmd" },
      { text: "✓ Next.js 16 · React 19 · TypeScript · Tailwind 4", tone: "ok" },
      { text: "$ mongosh --eval 'db.users.find().limit(3)'", tone: "cmd" },
      { text: '→ { _id: ObjectId("..."), name: "Vaibhav" }', tone: "json" },
      { text: "$ npm test -- --coverage", tone: "cmd" },
      { text: "✓ 142 tests passed · 87% coverage · 0 failures", tone: "ok" },
    ],
  },
  {
    tab: "mobile",
    label: "Mobile - Android & iOS",
    lines: [
      { text: "$ xcodebuild -scheme App -sdk iphoneos", tone: "cmd" },
      { text: "✓ SwiftUI · WatchOS companion · signed", tone: "ok" },
      { text: "$ ./gradlew assembleRelease", tone: "cmd" },
      { text: "✓ Android APK · Kotlin · Material 3", tone: "ok" },
      { text: "$ fastlane deliver --submit_for_review", tone: "cmd" },
      { text: "✓ App Store + Google Play submitted", tone: "ok" },
    ],
  },
  {
    tab: "mainframe",
    label: "Mainframe - COBOL / JCL",
    lines: [
      { text: "$ submit //ACCTJOB JOB (ACCT),'BATCH'", tone: "cmd" },
      { text: "IEF403I ACCTJOB - STARTED", tone: "dim" },
      { text: "$ zowe jobs view spool-file ACCTJOB 102 3", tone: "cmd" },
      { text: "ACCT001  STEP01   COBRUN   RC=0000", tone: "ok" },
      { text: "$ ca7 DEMAND,JOB=NIGHTBAT,SCHID=042", tone: "cmd" },
      { text: "CA-7 SCHEDULED · JOB NIGHTBAT · QUEUE=A", tone: "dim" },
    ],
  },
  {
    tab: "api",
    label: "z/OS Connect - API",
    lines: [
      { text: "$ zcon build service AccountService.sar", tone: "cmd" },
      { text: "✓ SAR built · CICS COMMAREA mapped to JSON", tone: "ok" },
      { text: "$ curl -X GET https://zos-api/v1/accounts/4821", tone: "cmd" },
      { text: "→ z/OS Connect EE · DB2 fetch · 12ms", tone: "dim" },
      { text: '{ "id": 4821, "balance": 19420.50, "ccy": "CAD" }', tone: "json" },
      { text: "✓ 200 OK · mainframe → REST · live", tone: "ok" },
    ],
  },
  {
    tab: "cloud",
    label: "Cloud & Kafka",
    lines: [
      { text: "$ kubectl get pods -n production", tone: "cmd" },
      { text: "api-7f8b4   1/1   Running   aws-eks-prod", tone: "dim" },
      { text: "$ kafka-topics --describe --topic txn-events", tone: "cmd" },
      { text: "Partitions: 12 · Replication: 3 · ISR: 3", tone: "dim" },
      { text: "$ terraform apply -auto-approve", tone: "cmd" },
      { text: "✓ 14 resources created · EKS · RDS · S3", tone: "ok" },
    ],
  },
];

const toneClass: Record<string, string> = {
  cmd: "text-emerald-400",
  ok: "text-emerald-500 font-semibold",
  dim: "text-zinc-500",
  json: "text-sky-300/90",
  warn: "text-amber-400/90",
  ai: "text-violet-300/90",
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function TerminalCard({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [activeTab, setActiveTab] = useState(0);
  const [count, setCount] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const session = SESSIONS[activeTab];

  const switchTab = useCallback((idx: number) => {
    setActiveTab(idx);
    setCount(0);
    setAutoplay(false);
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (count >= session.lines.length) {
      if (!autoplay) return;
      const next = setTimeout(() => {
        const nextTab = (activeTab + 1) % SESSIONS.length;
        setActiveTab(nextTab);
        setCount(0);
      }, 2200);
      return () => clearTimeout(next);
    }
    const t = setTimeout(() => setCount((c) => c + 1), count === 0 ? 400 : 480);
    return () => clearTimeout(t);
  }, [inView, count, session.lines.length, autoplay, activeTab]);

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden rounded-xl border border-[var(--hairline)] bg-zinc-950/80 shadow-2xl backdrop-blur-sm ${className}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {/* Tabs */}
      <div className="flex items-center gap-0 overflow-x-auto border-b border-white/5">
        {SESSIONS.map((s, i) => (
          <button
            key={s.tab}
            type="button"
            onClick={() => switchTab(i)}
            className={`relative whitespace-nowrap px-4 py-3 font-mono text-[11px] tracking-wide transition-colors ${
              i === activeTab
                ? "text-emerald-400"
                : "text-zinc-600 hover:text-zinc-400"
            }`}
          >
            {s.tab}
            {i === activeTab && (
              <motion.span
                layoutId="terminal-tab"
                className="absolute inset-x-0 bottom-0 h-px bg-emerald-500 dark:bg-emerald-400"
                transition={{ duration: 0.25, ease: EASE }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Session label */}
      <div className="border-b border-white/[0.03] px-4 py-2">
        <AnimatePresence mode="wait">
          <motion.span
            key={activeTab}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            {session.label}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Body */}
      <div className="min-h-[13rem] space-y-1.5 px-4 py-4 font-mono text-[12px] leading-relaxed sm:text-[13px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="space-y-1.5"
          >
            {session.lines.slice(0, count).map((line, i) => (
              <motion.p
                key={`${activeTab}-${i}`}
                className={toneClass[line.tone ?? "dim"]}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {line.text}
              </motion.p>
            ))}
            {count < session.lines.length && (
              <span className="inline-block h-4 w-2 animate-pulse bg-emerald-400 align-middle" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/** Static, small terminal snippet used inside expertise domain blocks. No animation, no tabs. */
export function MiniTerminal({
  label,
  lines,
  className = "",
}: {
  label: string;
  lines: readonly TerminalLine[];
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-[var(--hairline)] bg-zinc-950/80 shadow-xl ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-2 font-mono text-[10px] tracking-wide text-zinc-600">
          {label}
        </span>
      </div>
      <div className="space-y-1 px-3 py-3 font-mono text-[12px] leading-relaxed sm:text-[13px]">
        {lines.map((line, i) => (
          <p key={i} className={toneClass[line.tone ?? "dim"]}>
            {line.text}
          </p>
        ))}
      </div>
    </div>
  );
}
