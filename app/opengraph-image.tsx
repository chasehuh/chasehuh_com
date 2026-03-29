import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #f5efe5 0%, #e7ddcf 45%, #c6b9a7 100%)",
          padding: "64px",
          color: "#1f1a17",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6 }}>
          WWW.CHASEHUH.COM
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 700 }}>
            Chaewon (Chase) Huh
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#51473d" }}>
            building sumelabs.com
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#51473d",
          }}
        >
          <div style={{ display: "flex" }}>personal site</div>
          <div style={{ display: "flex" }}>www.chasehuh.com</div>
        </div>
      </div>
    ),
    size,
  );
}
