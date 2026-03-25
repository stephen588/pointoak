import { Briefcase, DollarSign, Users, ClipboardList, TrendingUp, MapPin } from "lucide-react";

export default function WhoWeServeAbout() {
  const audiences = [
    { icon: Briefcase, label: "Business Owners" },
    { icon: DollarSign, label: "CFOs" },
    { icon: Users, label: "HR Directors" },
    { icon: ClipboardList, label: "Benefits Administrators" },
    { icon: TrendingUp, label: "Investment Committee Members" }
  ];

  return (
    <section className="section-padding bg-lighter-gray">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-5xl md:text-[68px] font-normal text-navy mb-8 leading-tight">
            Who We Serve
          </h2>
          
          {/* Body Text */}
          <p className="text-xl text-text-gray leading-relaxed mb-12">
            PointOak serves plan sponsors across the United States—business owners, 
            CFOs, HR directors, benefits administrators, and Investment Committee 
            members at mid-sized to large organizations who want a retirement plan 
            advisor fully dedicated to their success.
          </p>

          {/* Audience Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white mb-4 shadow-sm">
                    <Icon className="w-10 h-10 text-navy" />
                  </div>
                  <p className="text-sm font-semibold text-navy text-center">
                    {audience.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Location Callout */}
          <div className="bg-white rounded-lg p-8 inline-flex items-center gap-4 shadow-sm">
            <MapPin className="w-8 h-8 text-bright-blue flex-shrink-0" />
            <p className="text-lg text-navy">
              <span className="font-semibold">From our office in McLean, Virginia,</span>
              {" "}we serve clients nationwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
