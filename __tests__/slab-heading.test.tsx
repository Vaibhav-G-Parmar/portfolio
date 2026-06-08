import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SlabHeading } from "@/components/ui/slab-heading";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, animate, whileInView, viewport, transition, ...rest } = props;
      return <div {...rest}>{children}</div>;
    },
    h2: ({ children, ...props }: any) => {
      const { initial, animate, whileInView, viewport, transition, ...rest } = props;
      return <h2 {...rest}>{children}</h2>;
    },
  },
}));

describe("SlabHeading", () => {
  it("renders index, label, and title", () => {
    render(<SlabHeading index="01" label="Projects" title="My Projects" />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("My Projects")).toBeInTheDocument();
  });

  it("assigns titleId to the h2 element", () => {
    render(<SlabHeading index="02" label="Skills" title="Tech" titleId="skills-heading" />);
    const heading = screen.getByText("Tech");
    expect(heading).toHaveAttribute("id", "skills-heading");
  });

  it("applies custom className to wrapper", () => {
    const { container } = render(
      <SlabHeading index="03" label="Test" title="Title" className="mt-10" />,
    );
    expect(container.firstElementChild?.className).toContain("mt-10");
  });

  it("renders without titleId (optional prop)", () => {
    render(<SlabHeading index="04" label="Gallery" title="Photos" />);
    const heading = screen.getByText("Photos");
    expect(heading.id).toBe("");
  });

  it("renders accessible decorative divider", () => {
    const { container } = render(
      <SlabHeading index="01" label="About" title="Hello" />,
    );
    const divider = container.querySelector("[aria-hidden]");
    expect(divider).toBeInTheDocument();
  });
});
