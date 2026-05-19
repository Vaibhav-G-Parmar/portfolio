export const galleryCopy = {
  eyebrow: "Gallery",
  title: "Photos & moments.",
  description:
    "A few snapshots from events, travel, and behind the scenes.",
} as const;

/**
 * Optional manual ordering for gallery images.
 * List filenames (exact, no path) in the order you want them to appear.
 * Any file in public/gallery/ that isn't listed here is appended at the end.
 * Leave the array empty to fall back to alphabetical order.
 */
export const galleryOrder: string[] = [
  "1775614146014.jpeg",              // hero intro image
  "AI-Talk-Keynote.png",
  "2026-05-02 18.20.03.jpg",
  "AI Presentation-3.jpeg",
  "Co-op Fire Side Chat July 2024 - 1.png",
  "photo_2026-05-19 00.01.34.jpeg",
  "Networking Panelist - Co-op Townhall - 2.png",
];
