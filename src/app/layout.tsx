import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Josh Mysore - Personal Portfolio",
  description: "Minimalist portfolio showcasing creative works, coding projects, and photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-gray-50 text-gray-900 typewriter-text"
      >{children}</body>
    </html>
  );
}
