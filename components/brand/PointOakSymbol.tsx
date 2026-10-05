// PointOak symbol (the "P" hexagon), traced from the brand package Logo-01.svg (2026-02).
// Colors default to the brand palette; pass mono to render it in one color (e.g. white on navy).
export default function PointOakSymbol({ className, mono }: { className?: string; mono?: string }) {
  return (
    <svg viewBox="136 293 100 115" className={className} aria-hidden focusable="false">
      <polygon fill={mono ?? "#00A7EF"} points="175.46,398.89 175.67,388.34 186.3,394.48 224.88,372.47 225.1,328.04 186.74,305.65 148.16,327.66 147.94,372.09 152.77,375.12 152.57,385.67 138.48,377.55 138.71,322.2 186.74,294.72 234.56,322.58 234.34,377.93 186.52,405.28" />
      <path fill={mono ?? "#006AA3"} d="M159.5,365.54V334.2l27.24-15.48l27.03,15.86l-0.22,31.33l-27.03,15.35L159.5,365.54z M168.95,339.67v20.41 l17.35,10.4l17.79-10.02l0.22-20.41l-17.79-10.52L168.95,339.67z" />
      <polygon fill={mono ?? "#006FA3"} points="168.95,395.17 168.95,350 159.5,350 159.5,389.73" />
      <circle fill={mono ?? "#006AA3"} cx="186.52" cy="350.06" r="7.86" />
    </svg>
  );
}
