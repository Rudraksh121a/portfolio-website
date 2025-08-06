import type { Metadata } from "next";
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
  title: "Rudraksh Kanungo - DevOps & Cloud Engineer Portfolio",
  description:
    "DevOps and Cloud enthusiast with expertise in Python development, CI/CD, cloud deployments, and automation. Building scalable, automated solutions for modern infrastructure.",
  keywords:
    "DevOps, Cloud Engineer, Python Developer, CI/CD, AWS, Docker, Kubernetes, Automation, Infrastructure",
  authors: [{ name: "Rudraksh Kanungo" }],
  creator: "Rudraksh Kanungo",
  publisher: "Rudraksh Kanungo",
  robots: "index, follow",
  openGraph: {
    title: "Rudraksh Kanungo - DevOps & Cloud Engineer",
    description:
      "DevOps and Cloud enthusiast specializing in Python development, CI/CD, and cloud automation solutions.",
    url: "https://rudrakshkanungo.xyz",
    siteName: "Rudraksh Kanungo Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudraksh Kanungo - DevOps & Cloud Engineer",
    description:
      "DevOps and Cloud enthusiast specializing in Python development, CI/CD, and cloud automation solutions.",
    creator: "@Rudraks42272163",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
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
