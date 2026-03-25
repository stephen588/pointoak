"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceDetailFAQProps {
  faqs: FAQItem[];
}

export default function ServiceDetailFAQ({ faqs }: ServiceDetailFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#F3F4F6]">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between gap-4 py-6 text-left transition-colors hover:bg-[#F3F4F6]/30"
                aria-expanded={openIndex === index}
              >
                <span className="text-navy font-outfit text-lg font-medium pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-navy flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[1000px] pb-6" : "max-h-0"
                }`}
              >
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
