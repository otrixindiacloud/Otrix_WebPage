import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { NotificationProvider } from "../contexts/NotificationContext";
import { ServicesModalProvider } from "../contexts/ServicesModalContext";
import { Suspense } from "react";

import SecondaryHeader from "../components/SecondaryHeader";
import Footer from "../components/Footer";
import { ScrollProgress } from "../components/animations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Otrix India Tech",
    absolute: "Otrix India Tech - IT Solutions & Technology Services",
  },
  description: "Leading IT solutions provider in India. Specializing in software development, web applications, and technology consulting. Located in Dewas, Madhya Pradesh.",
  keywords: "IT solutions, software development, web applications, technology consulting, India, Dewas, Madhya Pradesh, Otrix",
  authors: [{ name: "Otrix India Tech" }],
  creator: "Otrix India Tech",
  publisher: "Otrix India Tech",
  openGraph: {
    title: "Otrix India Tech - IT Solutions & Technology Services",
    description: "Leading IT solutions provider in India. Specializing in software development, web applications, and technology consulting.",
    url: "https://www.otrixindia.com",
    siteName: 'Otrix India Tech',
    images: [
      {
        url: "/otrix-logo.svg",
        width: 1200,
        height: 630,
        alt: 'Otrix India Tech Logo',
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Otrix India Tech - IT Solutions & Technology Services",
    description: "Leading IT solutions provider in India. Specializing in software development, web applications, and technology consulting.",
    images: ["/otrix-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.otrixindia.com'),
  alternates: {
    canonical: '/',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <NotificationProvider>
            <ServicesModalProvider>
              <Suspense fallback={<div>Loading...</div>}>
                <SecondaryHeader />
              </Suspense>
              {children}
              <Suspense fallback={<div>Loading...</div>}>
                <Footer />
              </Suspense>
            </ServicesModalProvider>
          </NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
