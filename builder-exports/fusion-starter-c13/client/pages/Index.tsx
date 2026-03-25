import Navbar from "@/components/Navbar";
import WhoWeServeSection from "@/components/WhoWeServeSection";

export default function Index() {
  return (
    <div className="min-h-screen font-outfit" style={{ fontFamily: "Outfit, -apple-system, Roboto, Helvetica, sans-serif" }}>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "100vh", backgroundColor: "#003754" }}
      >
        {/* Subtle background texture / gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(1,107,164,0.25) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(0,30,50,0.6) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Hero Text */}
          <div className="flex-1 text-white max-w-2xl">
            <p
              className="font-outfit uppercase tracking-widest mb-6 opacity-70"
              style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em" }}
            >
              Wealth Management · DC Metro &amp; Nationwide
            </p>
            <h1
              className="font-outfit leading-tight mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 300, lineHeight: "1.1" }}
            >
              Sophisticated Guidance.{" "}
              <span style={{ fontWeight: 700 }}>Without the Jargon.</span>
            </h1>
            <p
              className="font-outfit mb-10 opacity-80"
              style={{ fontSize: "clamp(16px, 1.5vw, 18px)", fontWeight: 400, lineHeight: "1.7", maxWidth: "520px" }}
            >
              You've built wealth through your career, business, or inheritance. Now the financial decisions are more complex. We provide white-glove planning for high-net-worth individuals and families—retirement income, tax strategies, coordinated planning, and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="font-outfit px-8 py-3.5 rounded font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: "#016BA4", color: "#fff", fontSize: "15px", fontWeight: 500 }}
              >
                Schedule a Consultation
              </a>
              <a
                href="#who-we-serve"
                className="font-outfit px-8 py-3.5 rounded font-medium transition-all border"
                style={{
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 400,
                  backgroundColor: "rgba(255,255,255,0.07)",
                }}
              >
                Who We Serve
              </a>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="flex-shrink-0 flex flex-col gap-6 lg:gap-8">
            <StatCard value="25–75" label="Age Range of Clients Served" />
            <StatCard value="DC Metro" label="In-Person &amp; Virtual Nationwide" />
            <StatCard value="HNW" label="High-Net-Worth Focused" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-outfit text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-white opacity-50" />
        </div>
      </section>

      {/* Who We Serve Section */}
      <WhoWeServeSection />

      {/* Services Overview Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2
              className="font-outfit mb-4"
              style={{ color: "#003754", fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 400, lineHeight: "1.25" }}
            >
              Comprehensive Wealth Planning
            </h2>
            <p
              className="font-outfit"
              style={{ color: "#707070", fontSize: "16px", fontWeight: 400, lineHeight: "1.7" }}
            >
              Every client relationship is built on deep understanding of your goals, values, and the financial complexity you face.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-16 md:py-24"
        style={{ backgroundColor: "#003754" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-white max-w-xl">
            <h2
              className="font-outfit mb-4"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 400, lineHeight: "1.2" }}
            >
              Ready to simplify your financial future?
            </h2>
            <p
              className="font-outfit opacity-75"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: "1.7" }}
            >
              Whether you're in the DC metro area or connecting virtually from anywhere in the nation, we're here to provide the expertise and guidance you deserve.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="mailto:hello@meridianwealth.com"
              className="font-outfit px-8 py-4 rounded font-medium text-center transition-all hover:opacity-90"
              style={{ backgroundColor: "#016BA4", color: "#fff", fontSize: "15px", fontWeight: 500 }}
            >
              Schedule a Consultation
            </a>
            <a
              href="tel:+12025550100"
              className="font-outfit px-8 py-4 rounded font-medium text-center transition-all border"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 400,
                backgroundColor: "rgba(255,255,255,0.07)",
              }}
            >
              (202) 555-0100
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t" style={{ backgroundColor: "#002840", borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-outfit text-white font-bold tracking-wide" style={{ fontSize: "16px", letterSpacing: "0.05em" }}>
              MERIDIAN
            </p>
            <p className="font-outfit" style={{ color: "rgba(255,255,255,0.45)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Wealth Advisors
            </p>
          </div>
          <p className="font-outfit" style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
            © {new Date().getFullYear()} Meridian Wealth Advisors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-outfit text-xs hover:opacity-80 transition-opacity" style={{ color: "rgba(255,255,255,0.45)" }}>Privacy Policy</a>
            <a href="#" className="font-outfit text-xs hover:opacity-80 transition-opacity" style={{ color: "rgba(255,255,255,0.45)" }}>Disclosures</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="px-7 py-5 rounded"
      style={{
        backgroundColor: "rgba(255,255,255,0.07)",
        borderLeft: "3px solid #016BA4",
        backdropFilter: "blur(10px)",
        minWidth: "220px",
      }}
    >
      <p className="font-outfit text-white font-bold mb-1" style={{ fontSize: "22px", fontWeight: 700 }}>
        {value}
      </p>
      <p className="font-outfit opacity-65 text-white" style={{ fontSize: "13px", fontWeight: 400 }}>
        {label}
      </p>
    </div>
  );
}

const services = [
  {
    title: "Retirement Income Planning",
    description:
      "Build a sustainable withdrawal strategy that balances income needs with longevity protection throughout your retirement years.",
    icon: "📊",
  },
  {
    title: "Tax-Efficient Strategies",
    description:
      "Coordinate Roth conversions, tax-loss harvesting, and asset location to minimize your lifetime tax burden and maximize what you keep.",
    icon: "🏛️",
  },
  {
    title: "Investment Management",
    description:
      "Institutional-quality portfolios tailored to your risk tolerance, time horizon, and specific financial goals.",
    icon: "📈",
  },
  {
    title: "Estate & Legacy Planning",
    description:
      "Coordinate with your estate attorney and CPA to ensure your wealth transfers efficiently to the people and causes you care about.",
    icon: "🤝",
  },
  {
    title: "Business Owner Planning",
    description:
      "From exit planning and business valuation to after-tax wealth optimization, we serve entrepreneurs navigating complex transitions.",
    icon: "💼",
  },
  {
    title: "Comprehensive Financial Planning",
    description:
      "A holistic plan that integrates all dimensions of your financial life—insurance, cash flow, benefits, and more—into one coherent strategy.",
    icon: "🔎",
  },
];

function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div
      className="bg-white rounded p-7 flex flex-col gap-4 transition-shadow hover:shadow-md"
      style={{ boxShadow: "0 2px 16px 0 rgba(0,55,84,0.06)" }}
    >
      <span className="text-2xl">{icon}</span>
      <h3
        className="font-outfit"
        style={{ color: "#003754", fontSize: "17px", fontWeight: 600, lineHeight: "1.3" }}
      >
        {title}
      </h3>
      <p
        className="font-outfit"
        style={{ color: "#707070", fontSize: "14px", fontWeight: 400, lineHeight: "1.7" }}
      >
        {description}
      </p>
    </div>
  );
}
