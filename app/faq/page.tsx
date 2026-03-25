"use client";

import { useState } from "react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const faqCategories = [
  {
    title: "About PointOak",
    questions: [
      {
        q: "What does PointOak Retirement Advisors do?",
        a: "PointOak is an independent retirement plan consulting firm. We specialize in helping plan sponsors manage, optimize, and oversee their workplace retirement plans — including 401(k), 403(b), 457, and pension plans. Our services span fiduciary support, investment analysis, fee benchmarking, plan design consulting, and participant education.",
      },
      {
        q: "Is PointOak a fiduciary?",
        a: "Yes. PointOak serves as an ERISA §3(21) co-fiduciary and can also serve as a §3(38) discretionary investment manager. As a fiduciary, we are legally required to act in the best interest of plan participants when providing investment recommendations.",
      },
      {
        q: "What types of retirement plans does PointOak work with?",
        a: "We work with defined contribution plans (401(k), 403(b), 457), defined benefit/pension plans, cash balance plans, and hybrid arrangements. Our clients range from organizations with $5 million to over $1 billion in plan assets.",
      },
      {
        q: "Where is PointOak located? Do you work with clients outside of Virginia?",
        a: "Our headquarters are in McLean, Virginia, but we serve clients nationwide. Our consulting model works effectively with in-person meetings, virtual conferences, and hybrid arrangements.",
      },
    ],
  },
  {
    title: "Fiduciary Services",
    questions: [
      {
        q: "What is a §3(21) fiduciary?",
        a: "An ERISA §3(21) fiduciary is a co-fiduciary advisor who provides investment recommendations to the plan's fiduciary committee. The committee retains final decision-making authority, while the §3(21) advisor shares fiduciary responsibility for the recommendations they provide.",
      },
      {
        q: "What is a §3(38) fiduciary?",
        a: "An ERISA §3(38) investment manager takes on full discretionary authority over plan investments. This means the §3(38) fiduciary — not the plan committee — makes the final decisions about which investments to include, remove, or replace in the plan's lineup.",
      },
      {
        q: "Which fiduciary model is right for our plan?",
        a: "It depends on your committee's experience, bandwidth, and comfort level with investment decisions. A §3(21) arrangement is appropriate when your committee wants professional guidance but prefers to make the final call. A §3(38) arrangement works well when the committee wants to delegate investment selection entirely to a specialist.",
      },
      {
        q: "How does PointOak help reduce our fiduciary liability?",
        a: "We document every step of the investment review process, maintain a clear paper trail for all recommendations, provide quarterly fiduciary reports, and ensure your Investment Policy Statement is followed consistently. This documentation is your best defense in the event of a DOL audit or participant lawsuit.",
      },
    ],
  },
  {
    title: "Investment Management",
    questions: [
      {
        q: "How does PointOak evaluate investments in our plan?",
        a: "We use a quantitative and qualitative scoring system that evaluates each fund across multiple criteria: performance relative to benchmarks and peer groups, expense ratios, risk-adjusted returns, manager tenure, and fund consistency. We evaluate over $120 billion in retirement plan assets quarterly.",
      },
      {
        q: "What happens if a fund in our plan underperforms?",
        a: "Underperforming funds are placed on a Watch List with specific criteria for review. If improvement targets aren't met within a defined timeline (typically 2-4 quarters), we recommend a replacement. The process is documented and follows your plan's Investment Policy Statement.",
      },
      {
        q: "Does PointOak recommend proprietary investment products?",
        a: "No. PointOak is fully independent. We have no proprietary funds, no revenue-sharing arrangements, and no financial incentives tied to any investment product. Our recommendations are based solely on what's best for your participants.",
      },
    ],
  },
  {
    title: "Fees & Benchmarking",
    questions: [
      {
        q: "How do I know if my plan's fees are reasonable?",
        a: "PointOak conducts detailed fee benchmarking studies that compare your plan's total costs — including recordkeeping, investment management, and advisory fees — against comparable plans in our database. We express fees in both basis points and per-participant dollar amounts so the comparison is clear and actionable.",
      },
      {
        q: "How often should we benchmark our plan fees?",
        a: "ERISA requires fiduciaries to ensure plan fees are reasonable, and best practice is to conduct a formal benchmarking study every 2-3 years, or whenever you're considering a change in service providers. PointOak provides ongoing fee monitoring as part of our standard consulting engagement.",
      },
      {
        q: "What is included in a PointOak fee benchmarking report?",
        a: "Our reports cover recordkeeper fees, investment management expenses, advisory costs, and any ancillary charges. We benchmark against peer plans of similar size and complexity, and provide a summary with clear action items — including negotiation strategies if fees are above market.",
      },
    ],
  },
  {
    title: "Education & Communications",
    questions: [
      {
        q: "What kind of employee education does PointOak provide?",
        a: "We offer a full range of participant education programs, including enrollment campaigns, investment basics workshops, retirement readiness assessments, and one-on-one financial wellness sessions. Programs are customized to your workforce demographics and can be delivered in person, virtually, or as a hybrid.",
      },
      {
        q: "Can PointOak help improve our plan participation rates?",
        a: "Absolutely. We analyze your current participation data, identify gaps, and design targeted communication and education strategies. Common recommendations include automatic enrollment, re-enrollment campaigns, match optimization messaging, and targeted outreach to under-participating demographics.",
      },
    ],
  },
  {
    title: "Working with PointOak",
    questions: [
      {
        q: "How does the engagement process begin?",
        a: "It starts with a discovery conversation — typically 30-45 minutes — where we learn about your plan, your current challenges, and your goals. From there, we provide a proposal outlining our recommended scope of services, timeline, and fees. There's no cost or obligation for the initial conversation.",
      },
      {
        q: "How long does it take to onboard a new client?",
        a: "Typical onboarding takes 30-60 days, depending on the complexity of your plan and how quickly we can gather the necessary documents and data. During onboarding, we conduct an initial plan assessment, establish your Investment Policy Statement, and set up recurring monitoring.",
      },
      {
        q: "What makes PointOak different from other retirement plan consultants?",
        a: "Three things: specialization, independence, and documentation. Over 90% of our revenue comes from retirement plan consulting — we're not a generalist wealth management firm that does plan consulting on the side. We have zero conflicts of interest. And we maintain rigorous documentation for every recommendation, creating a clear fiduciary audit trail.",
      },
    ],
  },
];

function FAQAccordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-outfit text-navy text-base font-medium pr-4 group-hover:text-navy/80 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-navy flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-outfit text-dark-gray text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  // Category filter state
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? faqCategories.filter((c) => c.title === activeCategory)
    : faqCategories;

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqCategories.flatMap((cat) =>
              cat.questions.map((q) => ({
                "@type": "Question",
                name: q.q,
                acceptedAnswer: { "@type": "Answer", text: q.a },
              }))
            ),
          }),
        }}
      />

      <PageHero
        breadcrumbs={[{ label: "FAQ" }]}
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about retirement plan consulting, fiduciary services, and working with PointOak."
      />

      {/* Category Filters */}
      <AnimateOnScroll>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 py-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`font-outfit text-sm px-4 py-2 rounded-full transition-colors ${
                activeCategory === null
                  ? "bg-navy text-white"
                  : "bg-cloud-blue text-navy hover:bg-navy/10"
              }`}
            >
              All Topics
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title === activeCategory ? null : cat.title)}
                className={`font-outfit text-sm px-4 py-2 rounded-full transition-colors ${
                  activeCategory === cat.title
                    ? "bg-navy text-white"
                    : "bg-cloud-blue text-navy hover:bg-navy/10"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* FAQ Content */}
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="max-w-3xl mx-auto">
            {filteredCategories.map((category) => (
              <div key={category.title} className="mb-12 last:mb-0">
                <h2 className="font-outfit text-navy text-2xl font-light mb-6 pb-2 border-b-2 border-navy/20">
                  {category.title}
                </h2>
                <div>
                  {category.questions.map((q, i) => (
                    <FAQAccordion key={i} question={q.q} answer={q.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Still Have Questions */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 text-center">
          <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
            Still Have Questions?
          </h2>
          <p className="font-outfit text-dark-gray text-base leading-relaxed max-w-2xl mx-auto mb-6">
            We&apos;re happy to answer any questions about retirement plan consulting, fiduciary services, or how PointOak can help your organization. Schedule a no-obligation consultation.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Disclaimer */}
      <AnimateOnScroll>
      <section className="bg-white py-6">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="font-outfit text-medium-gray text-xs leading-relaxed">
            Investment advisory services offered through PointOak Retirement Advisors, LLC. The information on this page is for general informational purposes and does not constitute investment advice.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </>
  );
}
