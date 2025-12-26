import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wizengamot - Your Personal Agentic Sounding Board",
  description:
    "Enhance your thinking with AI-powered agents for deliberation, synthesis, visualization, and audio generation. A unique platform for deep work and creative exploration.",
  openGraph: {
    title: "Wizengamot - Your Personal Agentic Sounding Board",
    description:
      "Debate ideas with a council of AI models, synthesize research, visualize concepts, and produce podcasts.",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
