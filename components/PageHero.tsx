import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  breadcrumbs: Breadcrumb[];
  title: string;
  subtitle?: string;
}

export default function PageHero({ breadcrumbs, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative min-h-[380px] md:min-h-[440px] bg-gradient-to-br from-navy via-dark-navy to-navy flex items-end">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0 w-full pt-32 md:pt-36 pb-12 md:pb-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="text-white/60 text-sm hover:text-white/80 transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-white/60" />
              {crumb.href ? (
                <Link href={crumb.href} className="text-white/60 text-sm hover:text-white/80 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/60 text-sm">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* H1 */}
        <h1 className="text-white text-3xl md:text-4xl lg:text-[48px] font-bold font-outfit mb-6" style={{ lineHeight: '1.25' }}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/80 text-lg md:text-xl font-outfit leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
