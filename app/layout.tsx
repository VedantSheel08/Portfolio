import type { Metadata } from "next";
import { Orbitron, Sora } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vedant Sheel - AI Developer & Innovator",
  description:
    "Portfolio of Vedant Sheel, a Grade 11 AI developer, machine learning researcher, and award-winning science fair innovator from Canada.",
  keywords:
    "AI developer, machine learning, science fair, innovation, Vedant Sheel, artificial intelligence, Canada",
  authors: [{ name: "Vedant Sheel", url: "https://github.com/vedantsheel" }],
  creator: "Vedant Sheel",
  openGraph: {
    title: "Vedant Sheel - AI Developer & Innovator",
    description:
      "Innovative AI solutions tackling real-world challenges across healthcare, sustainability, and social impact.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Sheel - AI Developer & Innovator",
    description:
      "Innovative AI solutions tackling real-world challenges across healthcare, sustainability, and social impact.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${sora.variable}`}>
      <body
        className={`${sora.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
