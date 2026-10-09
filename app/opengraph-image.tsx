import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const alt = "MARKEX Forex Trading Academy. Trade with Knowledge.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public", "brand", "markex-logo.jpg"));
  const src = `data:image/jpeg;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#050505",
          color: "#f5f5f5",
          padding: 56,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={380} height={336} alt="" />
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 48 }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: "#1bc98a" }}>FOREX TRADING ACADEMY</div>
          <div style={{ fontSize: 64, fontWeight: 700, marginTop: 18, lineHeight: 1 }}>Trade with Knowledge.</div>
        </div>
      </div>
    ),
    size,
  );
}
