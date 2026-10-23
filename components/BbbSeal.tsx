/**
 * BBB Dynamic Seal (code BBB emailed 10-21: Standard, blue, horizontal, with rating, 250x52) and Darsh's rating line,
 * which compliance requires directly under it and visible without hovering. In the footer since 10-23, when the
 * Professional Standards section came off About and Why PointOak (no approval for the association logos).
 */
const BBB_PROFILE = "https://www.bbb.org/us/va/mclean/profile/financial-services/pointoak-retirement-advisors-0241-236104016/#sealclick";
const BBB_SEAL = "https://seal-dc-easternpa.bbb.org/seals/blue-seal-250-52-bbb-236104016.png";
// TODO before launch: add back the period the rating covers, in the wording Darsh is confirming with BBB (10-23).
const BBB_DISCLAIMER =
  "BBB rating as of the date shown, assigned by the Better Business Bureau based on information in BBB’s files. PointOak pays an annual fee for BBB accreditation; no fee is paid for the rating itself. BBB ratings are not an indication of investment performance or of any client’s experience.";

export default function BbbSeal({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="flex flex-col gap-3">
      {/* The seal's rating half has a transparent background, so on dark backgrounds it sits on a white card. */}
      <a href={BBB_PROFILE} target="_blank" rel="nofollow noopener" className={`self-start ${tone === "dark" ? "rounded-lg bg-white p-2" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BBB_SEAL} width={250} height={52} style={{ border: 0, display: "block" }} alt="PointOak Retirement Advisors BBB Business Review" />
      </a>
      <p className={`text-xs leading-[19px] max-w-[560px] ${tone === "dark" ? "font-outfit text-white/60" : "text-text-gray"}`}>{BBB_DISCLAIMER}</p>
    </div>
  );
}
