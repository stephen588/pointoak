export default function AdvocateSection() {
  return (
    <section className="bg-brand-blue-light py-20 md:py-28">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual / Hexagon graphic */}
          <div className="relative flex items-center justify-center order-last lg:order-first">
            <div className="relative w-full max-w-md">
              {/* Three hexagon arrangement */}
              <svg viewBox="0 0 761 576" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Top hexagon - dark blue */}
                <path d="M514.253 294.4V147.465L386.626 74L259 147.465V294.4L386.626 367.865L514.253 294.4Z" fill="#003754"/>
                <path d="M416.985 192.51H353.757V196.973H416.985V192.51Z" fill="#F2F2F2"/>
                {/* Number 1 circle on top hex */}
                <circle cx="386" cy="220" r="30" fill="white" fillOpacity="0.15"/>
                <text x="386" y="226" textAnchor="middle" fill="white" fontSize="22" fontFamily="Outfit, sans-serif" fontWeight="700">1</text>

                {/* Bottom-left hexagon - light gray */}
                <path d="M380.253 440.4V293.465L252.626 220L125 293.465V440.4L252.626 513.865L380.253 440.4Z" fill="#F3F4F6"/>
                <path d="M283.563 318.438H220.336V322.902H283.563V318.438Z" fill="#003754"/>
                <circle cx="253" cy="366" r="30" fill="#003754" fillOpacity="0.1"/>
                <text x="253" y="372" textAnchor="middle" fill="#003754" fontSize="22" fontFamily="Outfit, sans-serif" fontWeight="700">2</text>

                {/* Bottom-right hexagon - slate */}
                <path d="M648.257 440.4V293.465L520.63 220L393 293.465V440.4L520.63 513.865L648.257 440.4Z" fill="#48586E"/>
                <path d="M423.348 318.438H360.121V322.902H423.348V318.438Z" fill="#F3F4F6"/>
                <circle cx="521" cy="366" r="30" fill="white" fillOpacity="0.15"/>
                <text x="521" y="372" textAnchor="middle" fill="white" fontSize="22" fontFamily="Outfit, sans-serif" fontWeight="700">3</text>

                {/* Connector lines */}
                <line x1="253" y1="332" x2="386" y2="220" stroke="#003754" strokeWidth="2" strokeOpacity="0.3"/>
                <line x1="521" y1="332" x2="386" y2="220" stroke="#48586E" strokeWidth="2" strokeOpacity="0.3"/>

                {/* Labels */}
                <text x="386" y="140" textAnchor="middle" fill="#003754" fontSize="14" fontFamily="Outfit, sans-serif" fontWeight="700">White-Glove Service</text>
                <text x="386" y="156" textAnchor="middle" fill="#707070" fontSize="10" fontFamily="DM Sans, sans-serif" fontStyle="italic">Personalized attention you deserve</text>

                <text x="120" y="516" textAnchor="middle" fill="#003754" fontSize="14" fontFamily="Outfit, sans-serif" fontWeight="700">Direct Partner Access</text>
                <text x="120" y="532" textAnchor="middle" fill="#707070" fontSize="10" fontFamily="DM Sans, sans-serif" fontStyle="italic">Work directly with decision-makers</text>

                <text x="652" y="516" textAnchor="middle" fill="#48586E" fontSize="14" fontFamily="Outfit, sans-serif" fontWeight="700">Proactive Guidance</text>
                <text x="652" y="532" textAnchor="middle" fill="#707070" fontSize="10" fontFamily="DM Sans, sans-serif" fontStyle="italic">We anticipate your needs</text>
              </svg>
            </div>
          </div>

          {/* Right: Text content */}
          <div>
            <h2 className="font-brand text-brand-dark text-3xl md:text-4xl font-light leading-snug mb-6">
              Your Personal Financial Advocate
            </h2>
            <div className="space-y-5 font-body text-brand-gray text-base leading-relaxed">
              <p>
                Our primary goal is to take things off your plate. We act as your advocate,
                identifying gaps in your planning, proactively solving problems, and streamlining
                every aspect of your financial life. By handling the heavy lifting, we ensure your
                experience is seamless, efficient, and focused on your long-term peace of mind.
              </p>
              <p>
                With just three partners managing over $1 billion, we offer intimacy and white-glove
                attention that's virtually impossible at larger firms. You're not another account
                number. You're a valued relationship. We're available when you need us, proactive in
                our guidance, and committed to your success.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="font-brand inline-flex items-center gap-2 bg-brand-dark text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-brand-dark/90 transition-colors"
              >
                Get Started
                <svg width="14" height="10" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1496 0.139911L15.3706 5.36096C15.4615 5.45187 15.5125 5.57516 15.5125 5.70372C15.5125 5.83228 15.4615 5.95557 15.3706 6.04648L10.1496 11.2675C10.0585 11.3575 9.93546 11.4078 9.8074 11.4074C9.67934 11.407 9.55664 11.356 9.46609 11.2655C9.37554 11.1749 9.32449 11.0522 9.3241 10.9241C9.32371 10.7961 9.37401 10.6731 9.46401 10.582L13.8575 6.18849L0.484769 6.18849C0.3562 6.18849 0.232897 6.13741 0.141986 6.0465C0.0510739 5.95559 0 5.83229 0 5.70372C0 5.57515 0.0510739 5.45185 0.141986 5.36094C0.232897 5.27002 0.3562 5.21895 0.484769 5.21895L13.8575 5.21895L9.46401 0.825464C9.37401 0.734365 9.32371 0.611355 9.3241 0.483298C9.32449 0.355239 9.37554 0.232537 9.46609 0.141985C9.55664 0.0514338 9.67934 0.000390308 9.8074 2.15673e-06C9.93546 -0.000386948 10.0585 0.0499108 10.1496 0.139911Z" fill="white"/>
                </svg>
              </a>
              <a
                href="/about"
                className="font-brand inline-flex items-center gap-2 text-brand-dark border border-brand-dark/30 hover:border-brand-dark px-7 py-3.5 rounded-md font-semibold text-sm transition-colors"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
