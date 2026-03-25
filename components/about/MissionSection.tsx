import { Search, Settings, CheckCircle } from "lucide-react";

export default function MissionSection() {
  const approachSteps = [
    {
      icon: Search,
      title: "Analyze",
      description: "Analyzing current plan structure, fees, investments, and processes to identify opportunities."
    },
    {
      icon: Settings,
      title: "Optimize",
      description: "Strategic recommendations on design, investments, and provider relationships to improve outcomes."
    },
    {
      icon: CheckCircle,
      title: "Implement",
      description: "Implement changes and provide ongoing monitoring, documented meticulously for your protection."
    }
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-5xl md:text-[68px] font-normal text-navy mb-12 text-center leading-tight">
            What Drives Us
          </h2>

          {/* Mission Statement - Emphasized Callout */}
          <div className="bg-white rounded-lg p-8 md:p-10 mb-12 border-l-4 border-bright-blue shadow-sm">
            <p className="text-2xl text-navy font-normal leading-relaxed italic">
              &ldquo;To help plan sponsors achieve successful retirement plan outcomes for 
              their company and employees by serving as advocates for plan fiduciaries 
              and protecting their best interests.&rdquo;
            </p>
          </div>

          {/* Approach Subheading */}
          <h3 className="text-3xl font-semibold text-navy mb-8 text-center">
            Our Approach: Analyze. Optimize. Implement.
          </h3>

          {/* Three-Column Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {approachSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 text-center">
                  {/* Icon in navy circular container */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-navy mb-4">
                    {step.title}
                  </h4>
                  <p className="text-base text-text-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
