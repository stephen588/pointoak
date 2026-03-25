import { Shield, FileCheck, BarChart3, Target, Lock } from "lucide-react";

export default function ValueProps() {
  const valueProps = [
    {
      icon: Shield,
      title: "Independence You Can Trust",
      description: "Independently owned, no parent company pushing products, no corporate revenue targets. We work for you, not a conglomerate."
    },
    {
      icon: FileCheck,
      title: "Named Fiduciary Protection",
      description: "Registered fiduciaries since day one. We serve as your 3(21) or 3(38) named fiduciary under ERISA, taking on legal responsibility alongside you."
    },
    {
      icon: BarChart3,
      title: "Benchmarking That Goes Deeper",
      description: "Proprietary Live Bid benchmarking with 450+ data points per bidder. We don't rely on industry averages—we get real competitive bids."
    },
    {
      icon: Target,
      title: "Investment Analysis Built for Retirement Plans",
      description: "Proprietary 10-point pass/fail scoring methodology. We evaluate 40,000+ funds and over $120B+ in retirement plan assets every quarter."
    },
    {
      icon: Lock,
      title: "A Process That Protects You",
      description: "Technology-driven process with our Virtual 401(k) Fiduciary File ensures complete documentation and audit protection for your committee."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl md:text-[68px] font-normal text-navy mb-6 leading-tight">
            Why Plan Sponsors Choose PointOak
          </h2>
          <p className="text-2xl text-text-gray font-normal leading-relaxed">
            Plan sponsors need more than good intentions—they need expertise, 
            independence, and protection.
          </p>
        </div>

        {/* Cards Grid - 2 column for longer content */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div key={index} className="bg-lighter-gray rounded-lg p-8">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6">
                  <Icon className="w-8 h-8 text-navy" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-navy mb-4 leading-snug">
                  {prop.title}
                </h3>
                <p className="text-base text-text-gray leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
