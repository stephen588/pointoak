/**
 * BBB Dynamic Seal and Darsh's rating line, which compliance requires directly under it and visible without hovering.
 * In the footer since 10-23, when the Professional Standards section came off About and Why PointOak (no approval for
 * the association logos). Dark (footer) = BBB's gray seal with white text (code emailed 10-23), so it sits on the navy
 * with no white card; light = the blue seal (code emailed 10-21). Dark uses BBB's largest gray file (293x61) shown at
 * 200x42 so it stays sharp on phones (Darsh 10-23); BBB serves nothing larger.
 */
const BBB_PROFILE = "https://www.bbb.org/us/va/mclean/profile/financial-services/pointoak-retirement-advisors-0241-236104016/#sealclick";
const SEALS = {
  dark: { src: "https://seal-dc-easternpa.bbb.org/seals/gray-seal-293-61-whitetxt-bbb-236104016.png", w: 200, h: 42 },
  light: { src: "https://seal-dc-easternpa.bbb.org/seals/blue-seal-250-52-bbb-236104016.png", w: 250, h: 52 },
};
// Darsh's final wording (10-23), including the period the rating covers.
const BBB_DISCLAIMER =
  "BBB rating as of the date shown, assigned by the Better Business Bureau based on information in BBB’s file on PointOak, including complaint history and time in business, through that date. PointOak pays an annual fee for BBB accreditation; no fee is paid for the rating itself. BBB ratings are not an indication of investment performance or of any client’s experience.";

export default function BbbSeal({ tone = "light" }: { tone?: "light" | "dark" }) {
  const seal = SEALS[tone];
  return (
    <div className="flex flex-col gap-3">
      <a href={BBB_PROFILE} target="_blank" rel="nofollow noopener" className="self-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={seal.src} width={seal.w} height={seal.h} style={{ border: 0, display: "block", width: seal.w, height: "auto" }} alt="PointOak Retirement Advisors BBB Business Review" />
      </a>
      <p className={`text-[13px] leading-[21px] max-w-[560px] ${tone === "dark" ? "font-outfit text-white/60" : "text-text-gray"}`}>{BBB_DISCLAIMER}</p>
    </div>
  );
}
