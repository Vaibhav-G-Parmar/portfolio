"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
};

const containerVariants = (
  staggerDelay: number,
  delay: number,
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delay,
    },
  },
});

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
  delay = 0,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
      variants={containerVariants(staggerDelay, delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type Direction = "up" | "left" | "right";

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  duration?: number;
};

const getItemVariants = (direction: Direction, distance: number, duration: number): Variants => {
  const offset =
    direction === "up"
      ? { x: 0, y: distance }
      : direction === "left"
        ? { x: -distance, y: 0 }
        : { x: distance, y: 0 };

  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: [0.16, 1, 0.3, 1] },
    },
  };
};

export function StaggerItem({
  children,
  className = "",
  direction = "up",
  distance = 24,
  duration = 0.5,
}: StaggerItemProps) {
  return (
    <motion.div
      variants={getItemVariants(direction, distance, duration)}
      className={`motion-reduce:transform-none motion-reduce:opacity-100 ${className}`}
    >
      {children}
    </motion.div>
  );
}
