export default function DifferenceTable() {
  const differences = [
    {
      what: "Specialization",
      deliver: "Over 90% of revenue from corporate retirement plans"
    },
    {
      what: "Fiduciary Commitment",
      deliver: "Named 3(21) or 3(38) fiduciary with every client"
    },
    {
      what: "Benchmarking Rigor",
      deliver: "10,000+ benchmarks/year with 450+ data points per bidder"
    },
    {
      what: "Investment Scale",
      deliver: "$120B+ in retirement plan assets evaluated quarterly"
    },
    {
      what: "Independence",
      deliver: "No parent company, no proprietary products, no conflicts"
    },
    {
      what: "Documentation",
      deliver: "Virtual 401(k) Fiduciary File for complete audit protection"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-5xl md:text-[68px] font-normal text-navy mb-12 text-center leading-tight">
            PointOak Difference at a Glance
          </h2>

          {/* Table */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            {/* Header Row */}
            <div className="grid grid-cols-2 bg-navy text-white">
              <div className="px-8 py-5 font-bold text-lg">What Matters</div>
              <div className="px-8 py-5 font-bold text-lg">What We Deliver</div>
            </div>

            {/* Data Rows */}
            {differences.map((item, index) => (
              <div 
                key={index}
                className={`grid grid-cols-2 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-cloud-blue'
                }`}
              >
                <div className="px-8 py-6 font-semibold text-navy border-b border-border-gray">
                  {item.what}
                </div>
                <div className="px-8 py-6 text-text-gray border-b border-border-gray">
                  {item.deliver}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
