import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Schedule a Consultation",
  description:
    "Get in touch with PointOak Retirement Advisors. Schedule a complimentary consultation to discuss your retirement planning, investment management, and wealth strategy needs. Serving DC, Maryland, Virginia, and nationwide.",
  alternates: {
    canonical: "https://www.pointoak.com/contact",
  },
  openGraph: {
    title: "Contact PointOak Retirement Advisors",
    description:
      "Schedule a complimentary consultation with our independent, fee-only fiduciary advisors. Serving the DC metro area and clients nationwide.",
    url: "https://www.pointoak.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
