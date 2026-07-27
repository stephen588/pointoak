import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Our Team & Philosophy",
  description:
    "Meet the PointOak team — independent, fee-only fiduciary advisors with over 50 years of collective experience in retirement planning and wealth management for high-net-worth individuals and families.",
  alternates: {
    canonical: "https://www.pointoak.com/about",
  },
  openGraph: {
    title: "About PointOak Retirement Advisors",
    description:
      "Meet the PointOak team — independent, fee-only fiduciary advisors with over 50 years of collective experience helping high-net-worth clients navigate retirement and wealth management.",
    url: "https://www.pointoak.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
