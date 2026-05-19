import fs from "fs";
import path from "path";
import { galleryOrder } from "@/content/gallery";

const SUPPORTED_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

export type GalleryImage = {
  src: string;
  alt: string;
};

/**
 * Reads `public/gallery/` at build time and returns all supported image files.
 * Order follows `galleryOrder` in content/gallery.ts — files not listed are
 * appended alphabetically at the end. Drop images in the folder; no other
 * config needed unless you want a specific order.
 */
export function getGalleryImages(): GalleryImage[] {
  const dir = path.join(process.cwd(), "public", "gallery");
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => SUPPORTED_EXTS.has(path.extname(f).toLowerCase()));

  const ordered = galleryOrder.filter((f) => files.includes(f));
  const rest = files.filter((f) => !galleryOrder.includes(f)).sort();
  const sorted = [...ordered, ...rest];

  return sorted.map((f) => ({
    src: `/gallery/${encodeURIComponent(f)}`,
    alt: path.basename(f, path.extname(f)).replace(/[-_]/g, " "),
  }));
}
