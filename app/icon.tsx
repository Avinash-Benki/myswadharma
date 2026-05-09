import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 32, height: 32 };

export const contentType = "image/png";

/** Favicon-style mark — saffron → maroon (design system) on ivory */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fffaf0",
          padding: 4,
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 999,
            background:
              "conic-gradient(from 45deg, #d97706, #6e1f17, #d6a43b, #d97706)",
            boxShadow: "0 2px 8px rgba(63, 16, 13, 0.2)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
