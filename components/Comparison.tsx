"use client";

// Inline CheckIcon component
interface CheckIconProps {
  size?: "sm" | "md";
}

function CheckIcon({ size = "md" }: CheckIconProps) {
  const dim = size === "sm" ? 14 : 18;
  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        d="M8.89429 17.7886C4.00243 17.7886 0 13.7861 0 8.89429C0 4.00243 4.00243 0 8.89429 0C13.7861 0 17.7886 4.00243 17.7886 8.89429C17.7886 13.7861 13.7861 17.7886 8.89429 17.7886ZM8.89429 1.48238C4.81774 1.48238 1.48238 4.81774 1.48238 8.89429C1.48238 12.9708 4.81774 16.3062 8.89429 16.3062C12.9708 16.3062 16.3062 12.9708 16.3062 8.89429C16.3062 4.81774 12.9708 1.48238 8.89429 1.48238Z"
        fill="#B9FFAA"
      />
      <path
        d="M13.8602 5.41083C13.5638 5.11436 13.1191 5.11436 12.8226 5.41083L7.41189 10.8215L4.96596 8.3756C4.66948 8.07912 4.22477 8.07912 3.92829 8.3756C3.63181 8.67207 3.63181 9.11679 3.92829 9.41326L6.89305 12.378C7.18953 12.6745 7.63424 12.6745 7.93072 12.378L13.8602 6.4485C14.1567 6.15202 14.1567 5.70731 13.8602 5.41083Z"
        fill="#B9FFAA"
      />
    </svg>
  );
}

// Inline XIcon component
interface XIconProps {
  size?: "sm" | "md";
}

function XIcon({ size = "md" }: XIconProps) {
  const dim = size === "sm" ? 14 : 18;
  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        d="M8.89435 17.7887C4.00246 17.7887 0 13.7862 0 8.89435C0 4.00246 4.00246 0 8.89435 0C13.7862 0 17.7887 4.00246 17.7887 8.89435C17.7887 13.7862 13.7862 17.7887 8.89435 17.7887ZM8.89435 1.48239C4.81777 1.48239 1.48239 4.81777 1.48239 8.89435C1.48239 12.9709 4.81777 16.3063 8.89435 16.3063C12.9709 16.3063 16.3063 12.9709 16.3063 8.89435C16.3063 4.81777 12.9709 1.48239 8.89435 1.48239Z"
        fill="#FF8888"
      />
      <path
        d="M11.1179 11.8593C10.8956 11.8593 10.7473 11.7851 10.5991 11.6369L8.89435 9.93214L7.1896 11.6369C6.89312 11.9334 6.4484 11.9334 6.15192 11.6369C5.85545 11.3404 5.85545 10.8957 6.15192 10.5992L7.85667 8.89447L6.15192 7.18972C5.85545 6.89324 5.85545 6.44852 6.15192 6.15205C6.4484 5.85557 6.89312 5.85557 7.1896 6.15205L8.89435 7.8568L10.5991 6.15205C10.8956 5.85557 11.3403 5.85557 11.6368 6.15205C11.9333 6.44852 11.9333 6.89324 11.6368 7.18972L9.93202 8.89447L11.6368 10.5992C12.0815 11.0439 11.785 11.8593 11.1179 11.8593Z"
        fill="#FF8888"
      />
    </svg>
  );
}

// Inline DecorativeVector component
function DecorativeVector() {
  return (
    <svg
      width="573"
      height="662"
      viewBox="0 0 573 662"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M333.625 331C333.625 357.132 312.541 378.286 286.496 378.286C261.07 378.286 239.986 357.132 239.986 331C239.986 305.491 261.07 284.336 286.496 284.336C312.541 284.336 333.625 305.491 333.625 331Z"
        fill="#335F76"
      />
      <path
        d="M220.766 623.425L222.007 560.585L285.26 597.293L515.328 465.391L516.568 199.72L288.36 65.3289L57.6721 197.231L56.4318 462.902L85.5779 481.568L84.3377 544.408L0 495.878L1.24026 164.256L288.36 0L573 166.744L571.76 497.744L286.5 662L220.766 623.425Z"
        fill="#335F76"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M125.257 423.705V236.428L287.731 143.724L449.585 238.917L447.724 426.194L286.49 518.276L125.257 423.705ZM181.688 268.782V390.729L285.25 452.947L391.292 393.218L392.533 270.648L286.49 207.808L181.688 268.782Z"
        fill="#335F76"
      />
      <path
        d="M181.688 601.026V331H125.257V568.673L181.688 601.026Z"
        fill="#335F76"
      />
    </svg>
  );
}

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

export default function Comparison() {
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
          <p className="font-outfit text-white font-normal leading-tight mb-3 text-2xl md:text-3xl">
            Why Independent Matters:
          </p>
          <h2 className="font-outfit text-white font-normal leading-none mb-7 text-4xl md:text-5xl lg:text-[65px]">
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
            <span className="font-outfit text-white font-bold text-lg md:text-[22px] block mb-1">
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
      <span className="font-outfit text-white font-semibold text-[20px] leading-[1.3]">
        {children}
      </span>
    </div>
  );
}

function FeatureCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-6 py-6 flex items-start">
      <span className="font-poppins text-[#EDEDED] font-bold text-[14px] leading-[22px]">
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
      <span className="font-poppins text-[#EDEDED] text-[13px] leading-[1.7]">
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
        <span className="text-white font-bold text-sm font-poppins">
          {row.feature}
        </span>
      </div>

      {/* PointOak row */}
      <div className="px-4 py-3 bg-white/[0.08] border-b border-white/10">
        <div className="flex items-center gap-2 mb-1">
          <CheckIcon size="sm" />
          <span className="font-outfit text-white font-semibold text-xs">
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
          <span className="font-outfit text-[#EDEDED] font-semibold text-xs">
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
          <span className="font-outfit text-[#EDEDED] font-semibold text-xs">
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
