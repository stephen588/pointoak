import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | PointOak Retirement Advisors",
  description:
    "Find answers to common questions about PointOak's retirement plan consulting services, fiduciary responsibilities, fees, investment management, and more.",
  openGraph: {
    title: "Frequently Asked Questions | PointOak Retirement Advisors",
    description:
      "Find answers to common questions about PointOak's retirement plan consulting services, fiduciary responsibilities, fees, investment management, and more.",
    url: "https://pointoak.com/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
