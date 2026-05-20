/** Shared Framer Motion hover/tap presets for consistent interaction feel. */
export const hoverLift = {
  whileHover: { scale: 1.03, y: -2, transition: { duration: 0.18, ease: "easeOut" as const } },
  whileTap: { scale: 0.97 },
};

export const hoverScale = {
  whileHover: { scale: 1.04, transition: { duration: 0.15, ease: "easeOut" as const } },
  whileTap: { scale: 0.98 },
};

export const hoverChip = {
  whileHover: {
    scale: 1.05,
    borderColor: "rgba(16, 185, 129, 0.45)",
    transition: { duration: 0.15, ease: "easeOut" as const },
  },
  whileTap: { scale: 0.98 },
};

export const hoverCard = {
  whileHover: {
    y: -4,
    borderColor: "rgba(16, 185, 129, 0.45)",
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
  whileTap: { scale: 0.99 },
};

export const hoverIcon = {
  whileHover: { scale: 1.08, transition: { duration: 0.18, ease: "easeOut" as const } },
  whileTap: { scale: 0.94 },
};

export const hoverBorder = {
  whileHover: {
    scale: 1.02,
    borderColor: "rgba(16, 185, 129, 0.55)",
    transition: { duration: 0.18, ease: "easeOut" as const },
  },
  whileTap: { scale: 0.98 },
};
