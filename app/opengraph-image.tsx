import { ImageResponse } from "next/og";
import { siteProfile, seoDescription } from "@/content/site";

export const runtime = "edge";
export const alt = `${siteProfile.name} - ${siteProfile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#050505",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "monospace",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Emerald glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Top row - domain badge + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 16px",
              border: "1px solid rgba(52,211,153,0.35)",
              borderRadius: "9999px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#34d399",
              }}
            />
            <span
              style={{
                color: "#34d399",
                fontSize: "13px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Available for opportunities
            </span>
          </div>

          <span
            style={{
              color: "rgba(161,161,170,0.6)",
              fontSize: "13px",
              letterSpacing: "0.1em",
            }}
          >
            vaibhavparmar.com
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative" }}>
          {/* Name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#e4e4e7",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {siteProfile.name}
          </div>

          {/* Title with emerald accent */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "2px",
                background: "#34d399",
              }}
            />
            <span
              style={{
                color: "#34d399",
                fontSize: "22px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {siteProfile.title}
            </span>
          </div>

          {/* Description */}
          <div
            style={{
              color: "rgba(161,161,170,0.8)",
              fontSize: "18px",
              lineHeight: 1.55,
              maxWidth: "680px",
            }}
          >
            {seoDescription}
          </div>
        </div>

        {/* Bottom row - tech stack chips */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            position: "relative",
          }}
        >
          {["MERN Stack", "Cloud & AWS", "Mobile", "Mainframe", "z/OS Connect", "Kafka"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 14px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "9999px",
                  color: "rgba(161,161,170,0.7)",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </div>
            ),
          )}

          {/* Location */}
          <div
            style={{
              marginLeft: "auto",
              color: "rgba(161,161,170,0.45)",
              fontSize: "13px",
              letterSpacing: "0.08em",
            }}
          >
            {siteProfile.location}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
