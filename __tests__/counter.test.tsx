import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { Counter } from "@/components/ui/counter";

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual<typeof import("framer-motion")>("framer-motion");
  return {
    ...actual,
    useInView: () => true,
  };
});

describe("Counter", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders initial value of 0", () => {
    render(<Counter value={100} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("displays prefix and suffix around the number", () => {
    const { container } = render(<Counter value={50} prefix="~" suffix="%" />);
    expect(container.textContent).toContain("~");
    expect(container.textContent).toContain("%");
  });

  it("animates to the target value over time", () => {
    render(<Counter value={100} duration={1000} />);

    act(() => {
      vi.advanceTimersByTime(1100);
    });

    expect(screen.getByText("100")).toBeInTheDocument();
  });

  it("respects decimals parameter", () => {
    render(<Counter value={4.0} decimals={1} duration={100} />);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(screen.getByText("4.0")).toBeInTheDocument();
  });

  it("handles zero value without crashing", () => {
    const { container } = render(<Counter value={0} />);
    expect(container.textContent).toContain("0");
  });

  it("handles very large values", () => {
    render(<Counter value={999999} duration={100} />);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(screen.getByText("999999")).toBeInTheDocument();
  });
});
