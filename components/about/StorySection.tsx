export default function StorySection() {
  const stats = [
    {
      value: "90%+",
      label: "Revenue from Corporate Retirement Plans"
    },
    {
      value: "$120B+",
      label: "Retirement Plan Assets Evaluated Quarterly"
    },
    {
      value: "10,000+",
      label: "Benchmarks Performed Per Year"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text Content */}
          <div>
            <p className="text-sm font-semibold text-bright-blue tracking-widest mb-4 uppercase">
              OUR STORY
            </p>
            <h2 className="text-5xl font-normal text-navy mb-8 leading-tight">
              Retirement Plan Specialists from Day One
            </h2>
            <div className="space-y-4">
              <p className="text-base text-text-gray leading-relaxed">
                PointOak Retirement Advisors was built on a simple premise: plan sponsors 
                deserve advisors who are fully immersed in the retirement plan industry, 
                not dabbling in it between wealth management clients and insurance products.
              </p>
              <p className="text-base text-text-gray leading-relaxed">
                We&apos;ve been advising plan sponsors and participants since the very first 
                day of our practice. We didn&apos;t pivot into retirement plans when the 
                market got crowded. We started here, and we&apos;ve stayed here, because 
                this work requires the kind of deep focus that generalists simply can&apos;t 
                provide.
              </p>
              <p className="text-base text-text-gray leading-relaxed">
                That focus shows up in everything we do. Over 90% of our revenue comes from 
                working with corporate retirement plans. Our investment methodology is used 
                to evaluate over $120 billion in retirement plan assets every quarter. We 
                perform more than 10,000 benchmarks per year.
              </p>
            </div>
          </div>

          {/* Right: Stat Cards Stacked */}
          <div className="flex flex-col gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-cloud-blue rounded-lg p-6">
                <p className="text-4xl font-bold text-navy mb-2">{stat.value}</p>
                <p className="text-sm text-text-gray font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
