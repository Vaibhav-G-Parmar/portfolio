"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "left" | "right";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
};

const getOffset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "left":
      return { x: -distance, y: 0 };
    case "right":
      return { x: distance, y: 0 };
  }
};

export function AnimatedSection({
  children,
  className = "",
  id,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 32,
}: AnimatedSectionProps) {
  const offset = getOffset(direction, distance);

  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px -10% 0px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={variants}
      className={`motion-reduce:transform-none motion-reduce:opacity-100 ${className}`}
    >
      {children}
    </motion.section>
  );
}
