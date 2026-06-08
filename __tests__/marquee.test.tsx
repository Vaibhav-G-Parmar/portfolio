import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Marquee } from "@/components/ui/marquee";

describe("Marquee", () => {
  const items = ["React", "Node.js", "MongoDB", "TypeScript"] as const;

  it("renders all items (doubled for seamless loop)", () => {
    render(<Marquee items={items} />);
    const reactElements = screen.getAllByText("React");
    expect(reactElements.length).toBe(2);
  });

  it("renders each item with a separator", () => {
    render(<Marquee items={items} />);
    const separators = screen.getAllByText("✦");
    expect(separators.length).toBe(items.length * 2);
  });

  it("is hidden from assistive technology", () => {
    const { container } = render(<Marquee items={items} />);
    const marqueeEl = container.firstElementChild;
    expect(marqueeEl).toHaveAttribute("aria-hidden", "true");
  });

  it("applies reverse class when reverse prop is true", () => {
    const { container } = render(<Marquee items={items} reverse />);
    const marqueeEl = container.firstElementChild;
    expect(marqueeEl?.className).toContain("marquee--reverse");
  });

  it("does not apply reverse class by default", () => {
    const { container } = render(<Marquee items={items} />);
    const marqueeEl = container.firstElementChild;
    expect(marqueeEl?.className).not.toContain("marquee--reverse");
  });

  it("applies custom className", () => {
    const { container } = render(<Marquee items={items} className="mt-4" />);
    const marqueeEl = container.firstElementChild;
    expect(marqueeEl?.className).toContain("mt-4");
  });

  it("handles single item without crashing", () => {
    render(<Marquee items={["Solo"]} />);
    expect(screen.getAllByText("Solo")).toHaveLength(2);
  });

  it("handles empty items array", () => {
    const { container } = render(<Marquee items={[]} />);
    expect(container.firstElementChild).toBeTruthy();
  });
});
