import type { Metadata, Viewport } from "next";
import { Jost, Unbounded } from "next/font/google";
import { bolder, site } from "@/lib/offer";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
});

const title = "EPICJARED Exclusive Offer | Bolder Adventure Park Tickets, Grand Prairie TX";
const description =
  "Jared Guynes says Bolder Adventure Park in Grand Prairie needs help. Get the EPICJARED exclusive price: Base Camp $17.99 or All Access $34.99. Indoor zip lines, rock climbing, tube slides, bumper cars and free parking. Limited quantities per day.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "EPICJARED",
    "Epic Jared",
    "Jared Guynes",
    "Bolder Adventure Park",
    "Bolder Adventure Park tickets",
    "Grand Prairie indoor adventure park",
    "DFW family fun",
    "indoor zip line Dallas",
    "rock climbing Grand Prairie",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: bolder.favicon, type: "image/webp", sizes: "64x64" }],
    apple: bolder.favicon,
  },
  openGraph: {
    title: "Bolder Adventure Park in Grand Prairie needs help. | EPICJARED Exclusive Offer",
    description:
      "Base Camp $17.99 · All Access $34.99. Exclusive pricing for Jared Guynes’ community. Limited quantities available per day.",
    url: "/",
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EPICJARED Exclusive Offer at Bolder Adventure Park",
    description: "Base Camp $17.99 · All Access $34.99. Limited quantities available per day.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1f26",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} ${unbounded.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
