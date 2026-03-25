import Image from "next/image";

export default function Leadership() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy to-deep-navy text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Professional Placeholder */}
          <div className="relative h-[500px] rounded-lg overflow-hidden bg-white/10">
            {/* Placeholder gradient for leader photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/20 to-navy/40 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white/60 text-sm">Leader Photo</p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <p className="text-sm font-semibold text-bright-blue tracking-widest mb-4 uppercase">
              OUR LEADERSHIP
            </p>
            <h2 className="text-5xl font-normal mb-8 leading-tight">
              Led by Expertise
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Darsh Makim, CRPC, AIF</h3>
                <p className="text-lg text-white/80 mb-4">Founder & Principal Advisor</p>
                <p className="text-base text-white/90 leading-relaxed">
                  With deep experience in ERISA compliance, investment due diligence, 
                  plan design, and provider management, Darsh brings institutional-level 
                  expertise to every client relationship. His focus on retirement plans 
                  is absolute—over 90% of PointOak&apos;s revenue comes from serving plan 
                  sponsors, not wealth management or insurance.
                </p>
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-base text-white/90 leading-relaxed">
                  When you work with PointOak, you work directly with experienced advisors—not 
                  junior associates or call centers. We limit our client base to ensure every 
                  plan sponsor receives the personal attention and expertise they deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
