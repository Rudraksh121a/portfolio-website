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
  title: "Rudraksh Kanungo - Software Engineer & Tech Innovator",
  description:
    "Portfolio of Rudraksh Kanungo, a Software Engineer specializing in Web Development (Next.js, React), Mobile Apps (React Native, Flutter), DevOps, and Cloud deployments.",
  keywords:
    "Rudraksh Kanungo, Software Engineer, Web Developer, Mobile App Developer, Next.js, React Native, Python, CI/CD, AWS, Cloud, Developer Portfolio",
  authors: [{ name: "Rudraksh Kanungo" }],
  creator: "Rudraksh Kanungo",
  publisher: "Rudraksh Kanungo",
  alternates: {
    canonical: "https://rudrakshkanungo.xyz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rudraksh Kanungo - Software Engineer",
    description:
      "Software Engineer specializing in Web Development, Mobile Apps, Python, and Cloud deployments. View my portfolio and projects.",
    url: "https://rudrakshkanungo.xyz",
    siteName: "Rudraksh Kanungo Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudraksh Kanungo - Software Engineer",
    description:
      "Software Engineer specializing in Web Development, Mobile Apps, Python, and Cloud deployments. View my portfolio and projects.",
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
