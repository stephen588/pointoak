import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Wealth Management & Retirement Planning",
  description:
    "Comprehensive fiduciary wealth management services: retirement income planning, investment management, tax-efficient strategies, 401(k) rollover guidance, Social Security optimization, and financial planning for high-net-worth individuals.",
  alternates: {
    canonical: "https://www.pointoak.com/our-services",
  },
  openGraph: {
    title: "Wealth Management Services | PointOak Retirement Advisors",
    description:
      "Retirement income planning, investment management, tax strategies, 401(k) rollovers, Social Security optimization, and comprehensive financial planning from an independent fiduciary.",
    url: "https://www.pointoak.com/our-services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
