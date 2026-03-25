import type { Metadata } from "next";
import { Outfit, Poppins, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ConsultationModalProvider from "@/components/ConsultationModalProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pointoak.com'),
  title: {
    default: "PointOak Retirement Advisors | Independent Fiduciary Wealth Management",
    template: "%s | PointOak Retirement Advisors",
  },
  description: "Independent, fee-only fiduciary wealth management for high-net-worth individuals and families in DC, Maryland, Virginia and nationwide. Retirement planning, investment management, tax-efficient strategies, and 401(k) rollover guidance from an SEC-registered investment advisor.",
  keywords: [
    "fiduciary wealth management",
    "fee-only financial advisor",
    "retirement planning",
    "investment management",
    "SEC registered investment advisor",
    "high net worth wealth management",
    "401k rollover",
    "tax-efficient investing",
    "retirement income planning",
    "social security optimization",
    "financial planning DC",
    "wealth advisor Maryland Virginia",
    "independent financial advisor",
    "PointOak Retirement Advisors",
  ],
  authors: [{ name: "PointOak Retirement Advisors" }],
  creator: "PointOak Retirement Advisors",
  publisher: "PointOak Retirement Advisors",
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
    type: "website",
    locale: "en_US",
    url: "https://www.pointoak.com",
    siteName: "PointOak Retirement Advisors",
    title: "PointOak Retirement Advisors | Independent Fiduciary Wealth Management",
    description: "Independent, fee-only fiduciary wealth management for high-net-worth individuals and families. Over 50 years of collective experience in retirement planning, investment management, and tax-efficient strategies.",
    images: [
      {
        url: "/images/pointoak-logo.png",
        width: 1200,
        height: 630,
        alt: "PointOak Retirement Advisors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PointOak Retirement Advisors | Independent Fiduciary Wealth Management",
    description: "Independent, fee-only fiduciary wealth management for high-net-worth individuals and families. Retirement planning, investment management, and tax strategies.",
    images: ["/images/pointoak-logo.png"],
  },
  alternates: {
    canonical: "https://www.pointoak.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-verification-code",
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${poppins.variable} ${dmSans.variable} ${jakarta.variable}`}>
      <body className="font-outfit antialiased">
        <ConsultationModalProvider>
          {children}
        </ConsultationModalProvider>
      </body>
    </html>
  );
}
