import { describe, it, expect } from "vitest";
import {
  seoDescription,
  siteProfile,
  heroCopy,
  heroStats,
  expertise,
  expertiseHeading,
  projectsHeading,
  contactHeading,
  contactLead,
  brandPromise,
} from "@/content/site";

describe("content/site.ts", () => {
  describe("seoDescription", () => {
    it("is defined and within SEO length", () => {
      expect(seoDescription).toBeDefined();
      expect(seoDescription.length).toBeGreaterThan(100);
      expect(seoDescription.length).toBeLessThanOrEqual(200);
    });

    it("contains the name", () => {
      expect(seoDescription).toContain("Vaibhav Parmar");
    });
  });

  describe("siteProfile", () => {
    it("has all required fields", () => {
      expect(siteProfile.name).toBe("Vaibhav Parmar");
      expect(siteProfile.title).toBeTruthy();
      expect(siteProfile.email).toMatch(/@/);
      expect(siteProfile.phone).toMatch(/^\+\d+/);
      expect(siteProfile.github).toMatch(/^https:\/\/github\.com\//);
      expect(siteProfile.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\//);
      expect(siteProfile.location).toBeTruthy();
    });

    it("has a display-friendly phone number", () => {
      expect(siteProfile.phoneDisplay).toMatch(/\(\d{3}\)\s\d{3}-\d{4}/);
    });
  });

  describe("heroCopy", () => {
    it("has a badge with technology keywords", () => {
      expect(heroCopy.badge).toContain("MERN");
      expect(heroCopy.badge).toContain("Cloud");
    });

    it("has CTA labels", () => {
      expect(heroCopy.primaryCta).toBeTruthy();
      expect(heroCopy.secondaryCta).toBeTruthy();
    });

    it("has a supporting paragraph", () => {
      expect(heroCopy.supporting.length).toBeGreaterThan(50);
    });
  });

  describe("heroStats", () => {
    it("has exactly 4 stats", () => {
      expect(heroStats).toHaveLength(4);
    });

    it("each stat has a positive value and a label", () => {
      heroStats.forEach((stat) => {
        expect(stat.value).toBeGreaterThan(0);
        expect(stat.label).toBeTruthy();
        expect(stat.decimals).toBeGreaterThanOrEqual(0);
      });
    });

    it("suffix is a string", () => {
      heroStats.forEach((stat) => {
        expect(typeof stat.suffix).toBe("string");
      });
    });
  });

  describe("expertise", () => {
    it("has exactly 5 domains", () => {
      expect(expertise).toHaveLength(5);
    });

    it("each domain has unique id", () => {
      const ids = expertise.map((d) => d.id);
      expect(new Set(ids).size).toBe(5);
    });

    it("each domain has sequential index from 01 to 05", () => {
      expertise.forEach((d, i) => {
        expect(d.index).toBe(String(i + 1).padStart(2, "0"));
      });
    });

    it("each domain has a non-empty title and description", () => {
      expertise.forEach((d) => {
        expect(d.title.length).toBeGreaterThan(0);
        expect(d.description.length).toBeGreaterThan(30);
      });
    });

    it("each domain has at least 5 tags", () => {
      expertise.forEach((d) => {
        expect(d.tags.length).toBeGreaterThanOrEqual(5);
      });
    });

    it("each domain has a terminal with label and 3+ lines", () => {
      expertise.forEach((d) => {
        expect(d.terminal.label).toBeTruthy();
        expect(d.terminal.lines.length).toBeGreaterThanOrEqual(3);
        d.terminal.lines.forEach((line) => {
          expect(line.text).toBeTruthy();
        });
      });
    });

    it("covers expected technology domains", () => {
      const titles = expertise.map((d) => d.title);
      expect(titles).toContain("Full-Stack Web");
      expect(titles).toContain("Cloud & DevOps");
      expect(titles).toContain("Mobile Apps");
      expect(titles).toContain("Mainframe");
      expect(titles).toContain("API + z/OS Connect");
    });
  });

  describe("expertiseHeading", () => {
    it("is a meaningful heading string", () => {
      expect(expertiseHeading.length).toBeGreaterThan(10);
    });
  });

  describe("other copy constants", () => {
    it("projectsHeading is non-empty", () => {
      expect(projectsHeading.length).toBeGreaterThan(10);
    });

    it("contactHeading is non-empty", () => {
      expect(contactHeading.length).toBeGreaterThan(10);
    });

    it("contactLead is non-empty", () => {
      expect(contactLead.length).toBeGreaterThan(20);
    });

    it("brandPromise mentions key skills", () => {
      expect(brandPromise).toContain("MERN");
      expect(brandPromise).toContain("mainframe");
    });
  });
});
