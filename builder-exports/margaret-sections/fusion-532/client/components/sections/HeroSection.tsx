export default function HeroSection() {
  return (
    <section className="min-h-screen bg-brand-navy flex items-center relative overflow-hidden pt-16 lg:pt-20">
      {/* Background decorative hexagon */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none">
        <svg width="700" height="700" viewBox="0 0 700 700" fill="none">
          <path
            d="M350 50L650 212.5V487.5L350 650L50 487.5V212.5L350 50Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M350 150L570 275V525L350 650L130 525V275L350 150Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="350" cy="350" r="80" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <p className="font-outfit text-brand-accent text-sm font-medium tracking-widest uppercase mb-4">
              Comprehensive Wealth Management
            </p>
            <h1 className="font-outfit text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Financial Clarity,{" "}
              <span className="text-brand-accent">Built Around</span>{" "}
              Your Life.
            </h1>
            <p className="font-outfit text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              We provide integrated financial guidance tailored to your specific
              situation. Our services work together to create a cohesive strategy
              aligned with your goals, values, and life stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-outfit font-medium text-sm px-7 py-3.5 rounded-sm hover:bg-white/90 transition-colors duration-200"
              >
                Schedule a Free Call
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-outfit font-medium text-sm px-7 py-3.5 rounded-sm hover:bg-white/10 transition-colors duration-200"
              >
                Explore Our Services
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M8.33333 0L0 8.33333M8.33333 0H0.833333M8.33333 0V7.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { value: "25+", label: "Years of Combined Experience" },
              { value: "$2B+", label: "Assets Under Advisement" },
              { value: "1,000+", label: "Participants Advised" },
              { value: "98%", label: "Client Retention Rate" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-sm p-6 lg:p-8"
              >
                <div className="font-outfit text-white text-3xl lg:text-4xl font-light mb-2">
                  {stat.value}
                </div>
                <div className="font-outfit text-white/50 text-sm leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
