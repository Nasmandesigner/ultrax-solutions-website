import { ImageResponse } from "next/og";

export const alt = "UltraX Solutions — Experience Beyond Digital.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "radial-gradient(ellipse at 84% 40%, rgba(38, 153, 205, .27), transparent 36%), #050607",
          color: "#f4f6f7",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "70px 78px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", fontSize: 32, fontWeight: 700, letterSpacing: "-2px" }}>
          ultra<span style={{ color: "#39b3e5" }}>x</span>
          <span style={{ color: "#77838b", fontSize: 14, fontWeight: 400, letterSpacing: "2px", marginLeft: 18 }}>SOLUTIONS</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 900 }}>
          <div style={{ color: "#39b3e5", fontSize: 16, letterSpacing: "4px" }}>EXPERIENCE BEYOND DIGITAL.</div>
          <div style={{ fontSize: 74, fontWeight: 600, letterSpacing: "-5px", lineHeight: 1.04 }}>
            Technology. Creative thinking. Design. Strategy.
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(213, 226, 233, .22)", color: "#9ba4ab", display: "flex", fontSize: 16, paddingTop: 22 }}>
          Connected disciplines. One connected experience.
        </div>
      </div>
    ),
    size,
  );
}
