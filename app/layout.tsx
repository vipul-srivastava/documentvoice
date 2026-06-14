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
  title: "DocumentVoice - Modern Social Platform for Professionals",
  description: "Connect, collaborate, and create together on the fastest secure social platform. Real-time feed, end-to-end encrypted messaging, and lightning-fast performance.",
  keywords: ["social network", "professional network", "messaging", "secure", "real-time"],
  authors: [{ name: "DocumentVoice Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://documentvoice.com",
    siteName: "DocumentVoice",
    title: "DocumentVoice - Modern Social Platform for Professionals",
    description: "Connect, collaborate, and create together on the fastest secure social platform.",
    images: [
      {
        url: "https://documentvoice.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "DocumentVoice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DocumentVoice - Modern Social Platform for Professionals",
    description: "Connect, collaborate, and create together on the fastest secure social platform.",
    images: ["https://documentvoice.com/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
