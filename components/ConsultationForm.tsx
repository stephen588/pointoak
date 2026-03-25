"use client";

import { useState, FormEvent } from "react";

const HELP_OPTIONS = [
  "Retirement income planning",
  "Investment management",
  "Tax-efficient strategies",
  "Comprehensive wealth planning",
  "Second opinion on my current portfolio",
];

interface ConsultationFormProps {
  compact?: boolean; // true for modal, false for contact page
  onSuccess?: () => void;
}

export default function ConsultationForm({ compact = false, onSuccess }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    assets: "",
    helpWith: [] as string[],
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleHelpOption = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      helpWith: prev.helpWith.includes(option)
        ? prev.helpWith.filter((o) => o !== option)
        : [...prev.helpWith, option],
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.helpWith.length === 0) {
      setSubmitStatus("error");
      setErrorMessage("Please select at least one area you need help with.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.helpWith.join(", "),
          message: formData.message || null,
          assets: formData.assets,
          helpWith: formData.helpWith,
          timeline: formData.timeline,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        onSuccess?.();
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Failed to submit. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className={`${compact ? "text-center py-6" : "bg-cloud-blue rounded-[12px] p-8 text-center"}`}>
        <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-outfit text-xl font-semibold text-navy mb-2">Thank You!</h3>
        <p className="font-outfit text-text-gray text-sm">We&apos;ll be in touch within one business day.</p>
        {!compact && (
          <button
            onClick={() => {
              setSubmitStatus("idle");
              setFormData({ name: "", email: "", assets: "", helpWith: [], timeline: "", message: "" });
            }}
            className="mt-4 font-outfit font-medium text-sm text-navy hover:text-medium-blue transition-colors"
          >
            Send Another Message
          </button>
        )}
      </div>
    );
  }

  const inputBase = compact
    ? "w-full border border-gray-200 rounded-[7px] py-2.5 px-3 font-outfit text-sm text-dark-gray focus:border-medium-blue focus:ring-1 focus:ring-medium-blue focus:outline-none transition-colors"
    : "w-full border border-gray-200 rounded-[7px] py-3 px-4 font-outfit text-base text-dark-gray focus:border-medium-blue focus:ring-1 focus:ring-medium-blue focus:outline-none transition-colors";

  const labelBase = compact
    ? "block font-outfit text-xs font-medium text-navy mb-1"
    : "block font-outfit text-sm font-medium text-navy mb-2";

  const spacing = compact ? "space-y-3" : "space-y-5";

  return (
    <form onSubmit={handleSubmit} className={spacing}>
      {/* Name & Email side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor={`${compact ? "modal" : "page"}-name`} className={labelBase}>
            Full Name <span className="text-rust">*</span>
          </label>
          <input
            type="text"
            id={`${compact ? "modal" : "page"}-name`}
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputBase}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor={`${compact ? "modal" : "page"}-email`} className={labelBase}>
            Email <span className="text-rust">*</span>
          </label>
          <input
            type="email"
            id={`${compact ? "modal" : "page"}-email`}
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputBase}
            placeholder="john@example.com"
          />
        </div>
      </div>

      {/* Investable Assets */}
      <div>
        <label htmlFor={`${compact ? "modal" : "page"}-assets`} className={labelBase}>
          Approximately how much do you have in investable assets? <span className="text-rust">*</span>
        </label>
        <select
          id={`${compact ? "modal" : "page"}-assets`}
          required
          value={formData.assets}
          onChange={(e) => setFormData({ ...formData, assets: e.target.value })}
          className={`${inputBase} ${!formData.assets ? "text-text-gray" : ""}`}
        >
          <option value="" disabled>Select a range</option>
          <option value="Under $250,000">Under $250,000</option>
          <option value="$250,000 – $500,000">$250,000 – $500,000</option>
          <option value="$500,000 – $1,000,000">$500,000 – $1,000,000</option>
          <option value="$1,000,000 – $3,000,000">$1,000,000 – $3,000,000</option>
          <option value="$3,000,000+">$3,000,000+</option>
        </select>
      </div>

      {/* What are you looking for help with — Checkboxes */}
      <div>
        <span className={labelBase}>
          What are you looking for help with? <span className="text-rust">*</span>
        </span>
        <div className={`grid grid-cols-1 gap-2 ${compact ? "mt-1" : "mt-2"}`}>
          {HELP_OPTIONS.map((option) => {
            const isChecked = formData.helpWith.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggleHelpOption(option)}
                className={`flex items-center gap-3 cursor-pointer group text-left ${compact ? "py-0.5" : "py-1"}`}
              >
                <div
                  className={`w-[18px] h-[18px] rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    isChecked
                      ? "bg-navy border-navy"
                      : "border-gray-300 group-hover:border-navy/50"
                  }`}
                >
                  {isChecked && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`font-outfit ${compact ? "text-xs" : "text-sm"} text-dark-gray`}>
                  {option}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor={`${compact ? "modal" : "page"}-timeline`} className={labelBase}>
          When are you looking to make a change? <span className="text-rust">*</span>
        </label>
        <select
          id={`${compact ? "modal" : "page"}-timeline`}
          required
          value={formData.timeline}
          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
          className={`${inputBase} ${!formData.timeline ? "text-text-gray" : ""}`}
        >
          <option value="" disabled>Select a timeframe</option>
          <option value="Immediately">Immediately</option>
          <option value="Within 3 months">Within 3 months</option>
          <option value="3–6 months">3–6 months</option>
          <option value="Just exploring options">Just exploring options</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor={`${compact ? "modal" : "page"}-message`} className={labelBase}>
          Message <span className="text-text-gray font-normal">(optional)</span>
        </label>
        <textarea
          id={`${compact ? "modal" : "page"}-message`}
          rows={compact ? 2 : 4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputBase} resize-none`}
          placeholder="Tell us about your situation..."
        />
      </div>

      {/* Error message */}
      {submitStatus === "error" && (
        <div className="bg-rust/10 border border-rust/20 rounded-[7px] p-2.5">
          <p className={`font-outfit ${compact ? "text-xs" : "text-sm"} text-rust`}>{errorMessage}</p>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-outfit font-medium ${compact ? "text-sm py-3" : "text-base py-3.5"} text-white rounded-[7px] transition-opacity disabled:opacity-50`}
        style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button>

      <p className={`font-outfit ${compact ? "text-[11px]" : "text-xs"} text-text-gray text-center leading-relaxed`}>
        We typically respond within one business day.
      </p>
    </form>
  );
}
