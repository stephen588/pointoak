"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Tabbed explorer for the private-wealth services: pick a service on the left, details on the right. */
export default function ServiceExplorer({
  items,
}: {
  items: { title: string; icon: ReactNode; panel: ReactNode; href?: string }[];
}) {
  const [active, setActive] = useState(0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      <div role="tablist" aria-label="Private wealth services" className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
        {items.map((it, i) => {
          const on = i === active;
          return (
            <button
              key={it.title}
              role="tab"
              aria-selected={on}
              aria-controls={`svc-panel-${i}`}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={`group flex items-center gap-4 rounded-[10px] px-4 py-3.5 text-left transition-all ${
                on ? "bg-navy text-white shadow-xl shadow-navy/20 translate-x-1" : "bg-white text-navy border border-[#E3E8EE] hover:border-navy/40"
              }`}
            >
              <span
                className={`w-10 aspect-[0.866] flex-shrink-0 flex items-center justify-center transition-colors ${on ? "bg-bright-blue text-white" : "bg-cloud-blue text-navy"}`}
                style={{ clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)" }}
              >
                {it.icon}
              </span>
              <span className="font-medium text-[15px] leading-snug flex-1">{it.title}</span>
              <ArrowRight className={`w-4 h-4 transition-opacity ${on ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />
            </button>
          );
        })}
      </div>
      {items.map((it, i) => (
        <div
          key={it.title}
          id={`svc-panel-${i}`}
          role="tabpanel"
          hidden={i !== active}
          className="lg:col-span-7 lg:sticky lg:top-24 self-start relative overflow-hidden rounded-[14px] bg-gradient-to-br from-navy via-[#014a70] to-[#0a6496] p-8 md:p-10 text-white"
        >
          <div aria-hidden className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-white/10" />
          <div aria-hidden className="absolute -right-4 -top-4 w-40 h-40 rounded-full border border-white/10" />
          <div className="relative flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <span
                className="w-14 aspect-[0.866] flex items-center justify-center bg-white text-navy"
                style={{ clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)" }}
              >
                {it.icon}
              </span>
              <h3 className="text-2xl md:text-3xl font-light leading-tight">{it.title}</h3>
            </div>
            {it.panel}
            {it.href && (
              <Link href={it.href} className="inline-flex items-center gap-2 font-medium text-white hover:text-white/80 mt-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
