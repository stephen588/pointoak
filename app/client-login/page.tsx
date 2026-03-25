import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Client Login | PointOak Retirement Advisors",
  description: "Access your PointOak client portals including Charles Schwab, RightCapital financial planning, and RPAG retirement plan tools.",
  alternates: {
    canonical: "https://www.pointoak.com/client-login/"
  }
};

const portals = [
  {
    name: "Charles Schwab",
    description: "Access your investment accounts, view statements, transfer funds, and manage your portfolio through the Schwab Advisor Services platform.",
    url: "#",
    icon: "💼",
  },
  {
    name: "RightCapital",
    description: "View your comprehensive financial plan, track progress toward your retirement goals, and explore planning scenarios.",
    url: "#",
    icon: "📊",
  },
  {
    name: "RPAG",
    description: "Access retirement plan analytics, investment monitoring reports, and fiduciary documentation for your company&apos;s retirement plan.",
    url: "#",
    icon: "📋",
  },
];

export default function ClientLoginPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Client Login" }]}
        title="Client Portal Access"
        subtitle="Log in to your accounts and financial planning tools through our secure partner portals."
      />

      {/* Portal Cards */}
      <AnimateOnScroll>
      <section className="py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid md:grid-cols-3 gap-8">
            {portals.map((portal, idx) => (
              <a
                key={idx}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-border-gray rounded-2xl p-8 hover:border-bright-blue hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{portal.icon}</div>
                <h2 className="font-outfit text-navy text-xl font-bold mb-3 group-hover:text-bright-blue transition-colors">
                  {portal.name}
                </h2>
                <p className="font-outfit text-text-gray text-sm leading-relaxed mb-6">
                  {portal.description}
                </p>
                <span className="inline-flex items-center gap-2 font-outfit text-bright-blue text-sm font-semibold">
                  Log In
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </a>
            ))}
          </div>


        </div>
      </section>
      </AnimateOnScroll>

      <Footer />
    </main>
  );
}
