"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Building2, LineChart, Lock, Upload, X } from "lucide-react";

// Darsh 10-19: links, leaving-site notice and upload text are his, word for word.
// The notice shows for the two third-party logins only; the upload link is PointOak's own SharePoint.

const HEX = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";

/** Flip to a URL when PointOak has the plan sponsor SharePoint site; null shows "Coming soon" with no link. */
const PLAN_SPONSOR_PORTAL_URL: string | null = null;
/** Darsh: hidden, or "Coming soon" without a link, until there is a URL. */
const SHOW_PLAN_SPONSOR_TILE = true;

type Tile = {
  id: string;
  title: string;
  body: string;
  cta: string;
  href: string | null;
  Icon: typeof Lock;
  /** Third-party operator named in the leaving-site notice. */
  operator?: string;
};

const TILES: Tile[] = [
  {
    id: "schwab",
    title: "Charles Schwab",
    body: "Log in to your Schwab account.",
    cta: "Log in to Schwab",
    href: "https://client.schwab.com/Areas/Access/Login",
    Icon: Lock,
    operator: "Charles Schwab & Co., Inc.",
  },
  {
    id: "rightcapital",
    title: "RightCapital",
    body: "Log in to your financial plan.",
    cta: "Log in to RightCapital",
    href: "https://app.rightcapital.com/account/login",
    Icon: LineChart,
    operator: "RightCapital",
  },
  {
    id: "upload",
    title: "Secure Document Upload",
    body: "Send documents to PointOak securely. Files go straight to a private PointOak folder; you won’t be able to see other uploads. Please don’t send account numbers or Social Security numbers by regular email.",
    cta: "Upload documents",
    href: "https://pointoak-my.sharepoint.com/:f:/p/dmakim/IgBKIw5nLk5mTrNF9ZMoQ-0pAZBZu0d3dg0DUFZnOF1Ko40",
    Icon: Upload,
  },
  ...(SHOW_PLAN_SPONSOR_TILE
    ? [
        {
          id: "plan-sponsor",
          title: "Plan Sponsor Portal",
          body: "A private site for retirement plan sponsor clients.",
          cta: "Coming soon",
          href: PLAN_SPONSOR_PORTAL_URL,
          Icon: Building2,
        },
      ]
    : []),
];

function LeavingNotice({ tile, onClose }: { tile: Tile; onClose: () => void }) {
  const continueRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    continueRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="presentation">
      <div className="absolute inset-0 bg-navy/70 backdrop-blur-[2px]" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="leaving-title"
        aria-describedby="leaving-body"
        className="relative w-full max-w-[520px] rounded-[16px] bg-white shadow-2xl shadow-black/30 p-6 sm:p-8"
      >
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 text-navy/50 hover:text-navy p-1">
          <X className="w-5 h-5" />
        </button>
        <h2 id="leaving-title" className="text-navy text-2xl font-semibold leading-tight pr-8">
          You’re leaving pointoak.com
        </h2>
        <p id="leaving-body" className="mt-4 text-[#3D4B5C] text-[15px] leading-[1.7]">
          You’re about to visit a website operated by {tile.operator}, which is not affiliated with PointOak Retirement
          Advisors, LLC. PointOak is not responsible for the content, security or privacy practices of third-party
          websites, and a link is not an endorsement. Please review that site’s own terms and privacy&nbsp;policy.
        </p>
        <div className="mt-7 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-[7px] border border-navy/20 text-navy text-[15px] font-medium hover:bg-cloud-blue transition-colors"
          >
            Cancel
          </button>
          <a
            ref={continueRef}
            href={tile.href!}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-[7px] text-white text-[15px] font-medium hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
          >
            Continue <ArrowRight className="w-4 h-4" strokeWidth={1.6} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ClientCenterTiles() {
  const [leaving, setLeaving] = useState<Tile | null>(null);

  return (
    <>
      <ul className={`grid grid-cols-1 sm:grid-cols-2 ${TILES.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-5`}>
        {TILES.map((t) => {
          const { Icon } = t;
          const live = Boolean(t.href);
          const btn =
            "mt-auto inline-flex items-center gap-2 self-start px-4 py-2.5 rounded-[7px] text-[15px] font-medium transition-opacity";
          return (
            <li
              key={t.id}
              className={`flex flex-col gap-4 rounded-[14px] border p-6 md:p-7 ${live ? "bg-white border-[#E3E8EE]" : "bg-white/60 border-dashed border-[#C9D3DE]"}`}
            >
              <span
                className={`w-12 aspect-[0.866] flex items-center justify-center flex-shrink-0 ${live ? "bg-navy" : "bg-[#9AA8B8]"}`}
                style={{ clipPath: HEX }}
              >
                <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
              </span>
              <h2 className="text-navy text-xl md:text-[22px] font-semibold leading-snug">{t.title}</h2>
              <p className="text-[#3D4B5C] text-[15px] leading-[1.65] mb-2">{t.body.replace(/ (\S+)$/, "\u00a0$1")}</p>
              {!live ? (
                <span className={`${btn} bg-[#E7ECF2] text-[#5B6B7D] cursor-default`}>{t.cta}</span>
              ) : t.operator ? (
                <button
                  onClick={() => setLeaving(t)}
                  className={`${btn} text-white hover:opacity-90`}
                  style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
                >
                  {t.cta} <ArrowRight className="w-4 h-4" strokeWidth={1.6} />
                </button>
              ) : (
                <a
                  href={t.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btn} text-white hover:opacity-90`}
                  style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
                >
                  {t.cta} <ArrowRight className="w-4 h-4" strokeWidth={1.6} />
                </a>
              )}
            </li>
          );
        })}
      </ul>
      {leaving && <LeavingNotice tile={leaving} onClose={() => setLeaving(null)} />}
    </>
  );
}
