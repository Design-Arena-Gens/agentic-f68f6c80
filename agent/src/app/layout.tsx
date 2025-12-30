import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Graphic Lead Agent | Pipeline autopilot for design teams",
  description:
    "Qualify, nurture, and close graphic design leads with an automated discovery agent that captures budget, timeline, and creative direction.",
  openGraph: {
    title: "Graphic Lead Agent | Pipeline autopilot for design teams",
    description:
      "Qualify, nurture, and close graphic design leads with an automated discovery agent tailored for creative studios.",
    type: "website",
  },
  metadataBase: new URL("https://agentic-f68f6c80.vercel.app"),
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
