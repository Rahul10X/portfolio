import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#0A0A0B",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#3B82F6",
          fontWeight: 800,
          borderRadius: "6px",
          border: "1.5px solid #26262A",
          fontFamily: "sans-serif",
        }}
      >
        RS
      </div>
    ),
    {
      ...size,
    }
  );
}
