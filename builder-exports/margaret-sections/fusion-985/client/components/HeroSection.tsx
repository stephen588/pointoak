export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-brand-dark flex items-center overflow-hidden">
      {/* Background decorative SVG */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <svg width="500" height="600" viewBox="0 0 385 444" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M148.333 418.128L149.167 375.981L191.667 400.602L346.25 312.135L347.083 133.951L193.75 43.8158L38.75 132.282L37.9167 310.466L57.5 322.985L56.6667 365.132L0 332.583L0.833333 110.165L193.75 0L385 111.835L384.167 333.835L192.5 444L148.333 418.128Z" fill="#6D798B"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M84.1602 284.177V158.571L193.327 96.3947L302.077 160.241L300.827 285.846L192.494 347.605L84.1602 284.177ZM122.077 180.271V262.06L191.66 303.789L262.91 263.729L263.744 181.523L192.494 139.376L122.077 180.271Z" fill="#6D798B"/>
          <path d="M122.077 403.105V222H84.1602V381.406L122.077 403.105Z" fill="#6D798B"/>
        </svg>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="relative max-w-[1170px] mx-auto px-6 xl:px-0 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
            <span className="font-brand text-white/80 text-xs font-medium tracking-wide uppercase">
              SEC-Registered • Fee-Only Fiduciary
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-brand text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8">
            Retirement Planning
            <br />
            <span className="font-medium">Built Around You</span>
          </h1>

          {/* Subtitle */}
          <p className="font-brand text-white/70 text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-xl">
            White-glove wealth management for those who've worked hard to build something meaningful. Partner-led. Fiduciary always.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="font-brand inline-flex items-center justify-center gap-3 text-brand-dark bg-white hover:bg-white/90 px-8 py-4 rounded-md font-semibold text-base transition-all duration-200"
            >
              Schedule Your Consultation
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1496 0.139911L15.3706 5.36096C15.4615 5.45187 15.5125 5.57516 15.5125 5.70372C15.5125 5.83228 15.4615 5.95557 15.3706 6.04648L10.1496 11.2675C10.0585 11.3575 9.93546 11.4078 9.8074 11.4074C9.67934 11.407 9.55664 11.356 9.46609 11.2655C9.37554 11.1749 9.32449 11.0522 9.3241 10.9241C9.32371 10.7961 9.37401 10.6731 9.46401 10.582L13.8575 6.18849L0.484769 6.18849C0.3562 6.18849 0.232897 6.13741 0.141986 6.0465C0.0510739 5.95559 0 5.83229 0 5.70372C0 5.57515 0.0510739 5.45185 0.141986 5.36094C0.232897 5.27002 0.3562 5.21895 0.484769 5.21895L13.8575 5.21895L9.46401 0.825464C9.37401 0.734365 9.32371 0.611355 9.3241 0.483298C9.32449 0.355239 9.37554 0.232537 9.46609 0.141985C9.55664 0.0514338 9.67934 0.000390308 9.8074 2.15673e-06C9.93546 -0.000386948 10.0585 0.0499108 10.1496 0.139911Z" fill="#003754"/>
              </svg>
            </a>
            <a
              href="#about"
              className="font-brand inline-flex items-center justify-center gap-2 text-white border border-white/30 hover:border-white/60 px-8 py-4 rounded-md font-medium text-base transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-6">
            {[
              { value: "$1.08B", label: "Assets Under Management" },
              { value: "50+", label: "Years Combined Experience" },
              { value: "2017", label: "Founded" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-brand text-white text-3xl font-semibold">{stat.value}</span>
                <span className="font-brand text-white/50 text-sm font-medium mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-dark/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
