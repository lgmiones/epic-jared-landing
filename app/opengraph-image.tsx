import { ImageResponse } from "next/og";
import { jared, offer, passes } from "@/lib/offer";

export const alt = "Jared Guynes: “Bolder Adventure Park in Grand Prairie needs help.” EPICJARED Exclusive Offer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fetched once at build time and cached; falls back to the default font / no photo if offline.
async function loadAssets() {
  "use cache";
  const toBase64 = async (res: Response) => Buffer.from(await res.arrayBuffer()).toString("base64");
  try {
    const css = await fetch("https://fonts.googleapis.com/css2?family=Unbounded:wght@900").then((r) => r.text());
    const fontUrl = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
    const [font, photo] = await Promise.all([
      fontUrl ? fetch(fontUrl).then(toBase64) : null,
      fetch("https://epicjared.com/assets/jared-guynes-portrait.png").then(toBase64),
    ]);
    return { font, photo: `data:image/png;base64,${photo}` };
  } catch {
    return { font: null, photo: null };
  }
}

export default async function OpengraphImage() {
  const { font, photo } = await loadAssets();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "radial-gradient(circle at 82% 40%, #ff3d8f 0%, #8a1f55 30%, #1c1f26 62%)",
          color: "white",
          fontFamily: font ? "Unbounded" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "56px 0 56px 64px", width: 780 }}>
          <div style={{ display: "flex", fontSize: 24, color: "#ffd23f", letterSpacing: 2 }}>EPICJARED EXCLUSIVE OFFER</div>
          <div style={{ display: "flex", fontSize: 62, lineHeight: 1.05, marginTop: 20 }}>
            “{jared.quotes.headline}”
          </div>
          <div style={{ display: "flex", fontSize: 22, marginTop: 18, color: "rgba(255,255,255,0.8)" }}>— Jared Guynes</div>
          <div style={{ display: "flex", gap: 16, marginTop: 36 }}>
            {passes.map((p) => (
              <div
                key={p.id}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  padding: "12px 22px",
                  borderRadius: 16,
                  border: "3px dashed rgba(255,255,255,0.45)",
                  fontSize: 22,
                }}
              >
                {p.name.replace("Epic Jared – ", "")}
                <span style={{ fontSize: 38, color: "#ffd23f" }}>${p.price}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 18, marginTop: 22, color: "#ff8fbd" }}>{offer.scarcity.toUpperCase()}</div>
        </div>
        {photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt="" width={420} height={496} style={{ position: "absolute", right: 20, bottom: 0 }} />
        )}
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "Unbounded", data: Buffer.from(font, "base64"), weight: 900, style: "normal" }] : undefined,
    },
  );
}
