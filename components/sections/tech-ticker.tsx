import { Marquee } from "@/components/ui/marquee";

const ROW_ONE = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "Next.js",
  "TypeScript",
  "AWS",
  "Docker",
  "Kubernetes",
] as const;

const ROW_TWO = [
  "Android",
  "iOS",
  "SwiftUI",
  "Spring Boot",
  "Kafka",
  "COBOL",
  "z/OS Connect",
  "CI/CD",
  "AI Agents",
] as const;

/** Full-bleed dynamic marquee band between hero and about. */
export function TechTicker() {
  return (
    <section aria-hidden className="slab overflow-hidden py-10 sm:py-14">
      <Marquee items={ROW_ONE} />
      <div className="mt-4">
        <Marquee items={ROW_TWO} reverse />
      </div>
    </section>
  );
}
