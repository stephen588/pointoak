import type { Metadata } from "next";
import { Outfit, Poppins, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ConsultationModalProvider from "@/components/ConsultationModalProvider";
import { SITE_URL, getPage } from "@/lib/content";
import { social } from "@/lib/seo";

const home = getPage("/")!;

// Google Analytics 4 (Darsh approved 10-23; the Website Privacy Policy, Section 5, names it, so it must be live at launch).
// Set NEXT_PUBLIC_GA_MEASUREMENT_ID on the Vercel production env only, so staging traffic stays out of the reports.
// No ad or tracking tags without asking Darsh first.
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
  // Defaults come from the homepage meta in Darsh's SEO map; every page sets its own.
  description: home.meta.description ?? undefined,
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
  ...social(home.meta.title ?? "PointOak Retirement Advisors", home.meta.description ?? undefined, SITE_URL + "/"),
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
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","${GA_ID}");`}
            </Script>
          </>
        )}
        {/* TKX review tool: loads only with ?review-tool in the URL. Session = "PointOak — Oct 2026 site rebuild".
            Changing this id hides existing comments (they stay under the old id in Supabase). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
  if(new URLSearchParams(window.location.search).has("review-tool")){
    window.__TKX_REVIEW_SESSION_ID="d9b4d709-ae6c-47e2-83d0-74acdff82d5f";
    var s=document.createElement("script");
    s.src="https://site-review-tool-five.vercel.app/review-widget.js?v="+Date.now();
    document.head.appendChild(s);
  }
`,
          }}
        />
      </body>
    </html>
  );
}
