import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://katasubu.my.id'),
  title: {
    template: '%s | KataSubu',
    default: 'KataSubu - Free SRT Subtitle Translator, Upload n Translate'
  },
  description: "Free online subtitle translator for .srt files. Easily translate subtitles between multiple languages, edit timing, and manage your subtitle files with KataSubu.",
  keywords: [
    "subtitle translator",
    "srt translator",
    "subtitle management",
    "video subtitles",
    "translation platform",
    "free subtitle translator",
    "online subtitle editor",
    "subtitle timing editor"
  ],
  authors: [{ name: 'KataSubu Team' }],
  creator: 'HanNajib',
  publisher: 'HanNajib',
  openGraph: {
    title: 'KataSubu - Free SRT Subtitle Translator and Manager',
    description: 'Free online subtitle translator for .srt files. Easily translate subtitles between multiple languages.',
    type: 'website',
    locale: 'en_US',
    siteName: 'KataSubu',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KataSubu - Subtitle Translator Platform'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KataSubu - Free SRT Subtitle Translator',
    description: 'Free online subtitle translator for .srt files',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  verification: {
    google: 'your-google-site-verification-code', 
  },
  alternates: {
    canonical: 'https://katasubu.my.id',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" 
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "KataSubu",
              "description": "Free online subtitle translator for .srt files",
              "applicationCategory": "Multimedia",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Subtitle translation",
                "Multiple language support",
                "SRT file format support",
                "Timing adjustment",
                "Dark mode support"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
