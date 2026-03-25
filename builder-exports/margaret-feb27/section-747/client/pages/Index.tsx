import CheckIcon from "../components/comparison/CheckIcon";
import XIcon from "../components/comparison/XIcon";
import DecorativeVector from "../components/comparison/DecorativeVector";

const tableRows = [
  {
    feature: "Duty of Care",
    pointoak:
      "Fiduciary Standard: Legally obligated to act in your best interest at all times",
    broker:
      "Suitability Standard: Often only required to ensure products are suitable, not necessarily the best or lowest cost",
    wirehouse:
      "Suitability Standard: Often only required to ensure products are suitable, not necessarily the best or lowest cost",
  },
  {
    feature: "Product Selection",
    pointoak:
      "Open Architecture: Choose from entire marketplace to find best solutions",
    broker:
      "Semi-Open: More flexibility than wirehouses, but often steered toward preferred product lists and revenue-sharing partners",
    wirehouse:
      "Proprietary Focus: Incentivized or restricted to using firm's own investment products",
  },
  {
    feature: "Conflicts of Interest",
    pointoak: "Minimal: Fee-only model reduces incentive to sell products",
    broker:
      "Moderate: Commission-based compensation and revenue-sharing arrangements with product providers can influence recommendations",
    wirehouse:
      "Higher: Commissions and sales quotas create pressure to recommend specific funds or services",
  },
  {
    feature: "Service Model",
    pointoak: "High-touch: Boutique service with direct partner access",
    broker:
      "Variable: Representatives operate with some autonomy, but broker/dealer compliance and oversight can limit flexibility",
    wirehouse:
      "Standardized: Corporate policies and rigid one-size-fits-all frameworks",
  },
  {
    feature: "Accountability",
    pointoak:
      "Direct: Working with business owners, not branch employees",
    broker:
      "Split: Representatives operate semi-independently but answer to the broker/dealer's compliance structure",
    wirehouse: "Indirect: Branch representatives following corporate mandates",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#003754] relative overflow-hidden">
      {/* Decorative geometric vector — partially visible on left */}
      <div className="absolute -left-72 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:block opacity-100">
        <DecorativeVector />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-8 py-16 md:py-20 lg:py-24">
        {/* Section header */}
        <div className="mb-10 lg:mb-12">
          <p className="font-display text-white font-normal leading-tight mb-3 text-2xl md:text-3xl">
            Why Independent Matters:
          </p>
          <h2 className="font-display text-white font-normal leading-none mb-7 text-4xl md:text-5xl lg:text-[65px]">
            How PointOak Compares
          </h2>
          <p className="text-[#EDEDED] text-base lg:text-[18px] leading-[1.6] max-w-[1031px] capitalize">
            Operating as an independent firm offers structural advantages that
            directly benefit you. Unlike large national firms like Morgan Stanley
            or Merrill Lynch, we&apos;re bound by a fiduciary standard to act in
            your best interest at all times, not just recommend products that are
            considered suitable.
          </p>
        </div>

        {/* ── DESKTOP TABLE ── */}
        <div className="hidden md:block">
          <ComparisonTable />
        </div>

        {/* ── MOBILE CARDS ── */}
        <div className="md:hidden space-y-3">
          {tableRows.map((row) => (
            <MobileCard key={row.feature} row={row} />
          ))}
        </div>

        {/* Footer callout */}
        <div className="mt-10 lg:mt-14 max-w-[945px]">
          <p className="text-[#EDEDED] text-sm md:text-base leading-[1.65] capitalize">
            <span className="font-display text-white font-bold text-lg md:text-[22px] block mb-1">
              Why This Matters
            </span>
            Without corporate sales quotas or proprietary products to push, our
            advice is driven solely by your financial goals. Think of us as your
            advocate, scouting the entire market for the best solutions and
            protecting your interests at every turn.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Desktop comparison table
───────────────────────────────────────────── */
function ComparisonTable() {
  return (
    <div className="relative rounded-[7px] overflow-hidden">
      {/* Full-table background tint */}
      <div className="absolute inset-0 bg-white/[0.15] rounded-[7px] pointer-events-none" />

      {/* Highlighted PointOak column background */}
      <HighlightedColumnBg />

      {/* Header row with grid layout */}
      <div className="relative grid bg-white/[0.15]" style={{ gridTemplateColumns: "155px 269px 1fr 1fr" }}>
        <HeaderCell>Feature</HeaderCell>
        <HeaderCell>Independent RIA (PointOak)</HeaderCell>
        <HeaderCell>Independent Broker/Dealer</HeaderCell>
        <HeaderCell>Wirehouse Firms</HeaderCell>
      </div>

      {/* Data rows */}
      <div className="relative divide-y divide-white/10">
        {tableRows.map((row) => (
          <div key={row.feature} className="grid" style={{ gridTemplateColumns: "155px 269px 1fr 1fr" }}>
            <FeatureCell>{row.feature}</FeatureCell>
            <DataCell positive>{row.pointoak}</DataCell>
            <DataCell>{row.broker}</DataCell>
            <DataCell>{row.wirehouse}</DataCell>
          </div>
        ))}
      </div>
    </div>
  );
}

function HighlightedColumnBg() {
  return (
    <div
      className="absolute top-0 bottom-0 bg-white/[0.15] rounded-[7px] pointer-events-none"
      style={{ left: "155px", width: "269px" }}
    />
  );
}

function HeaderCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-6 py-5">
      <span className="font-display text-white font-semibold text-[20px] leading-[1.3]">
        {children}
      </span>
    </div>
  );
}

function FeatureCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-6 py-6 flex items-start">
      <span className="font-sans text-[#EDEDED] font-bold text-[14px] leading-[22px]">
        {children}
      </span>
    </div>
  );
}

function DataCell({ children, positive }: { children: React.ReactNode; positive?: boolean }) {
  return (
    <div className="px-6 py-6 flex items-start gap-3">
      <div className="flex-shrink-0 mt-0.5">
        {positive ? <CheckIcon /> : <XIcon />}
      </div>
      <span className="font-sans text-[#EDEDED] text-[13px] leading-[1.7]">
        {children}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Mobile card
───────────────────────────────────────────── */
function MobileCard({ row }: { row: (typeof tableRows)[0] }) {
  return (
    <div className="bg-white/[0.12] rounded-lg overflow-hidden">
      {/* Feature label */}
      <div className="bg-white/[0.15] px-4 py-3">
        <span className="text-white font-bold text-sm font-sans">
          {row.feature}
        </span>
      </div>

      {/* PointOak row */}
      <div className="px-4 py-3 bg-white/[0.08] border-b border-white/10">
        <div className="flex items-center gap-2 mb-1">
          <CheckIcon size="sm" />
          <span className="font-display text-white font-semibold text-xs">
            PointOak (Independent RIA)
          </span>
        </div>
        <p className="text-[#EDEDED] text-xs leading-relaxed pl-5">
          {row.pointoak}
        </p>
      </div>

      {/* Broker row */}
      <div className="px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2 mb-1">
          <XIcon size="sm" />
          <span className="font-display text-[#EDEDED] font-semibold text-xs">
            Independent Broker/Dealer
          </span>
        </div>
        <p className="text-[#EDEDED] text-xs leading-relaxed pl-5">
          {row.broker}
        </p>
      </div>

      {/* Wirehouse row */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 mb-1">
          <XIcon size="sm" />
          <span className="font-display text-[#EDEDED] font-semibold text-xs">
            Wirehouse Firms
          </span>
        </div>
        <p className="text-[#EDEDED] text-xs leading-relaxed pl-5">
          {row.wirehouse}
        </p>
      </div>
    </div>
  );
}
