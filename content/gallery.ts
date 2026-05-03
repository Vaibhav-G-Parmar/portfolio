/**
 * Photo gallery: add files under `public/gallery/` and list them here.
 * Only the first two entries are shown (see `GALLERY_MAX` in `gallery.tsx`).
 * Filenames with spaces: use `%20` in `src`, e.g. `/gallery/my%20photo.jpg`.
 */
export const galleryCopy = {
  eyebrow: "Gallery",
  title: "Photos & moments.",
  description:
    "A few snapshots from events, travel, and behind the scenes. Swap in your own images anytime.",
} as const;

export type GalleryImage = {
  src: string;
  alt: string;
};

export const galleryImages: readonly GalleryImage[] = [
  {
    src: "/gallery/1775614146014.jpeg",
    alt: "Gallery photo",
  },
  {
    src: "/gallery/2026-05-02%2018.20.03.jpg",
    alt: "Gallery photo",
  },
];
