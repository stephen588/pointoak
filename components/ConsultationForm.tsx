"use client";

import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  ASSETS_QUESTION,
  ASSET_OPTIONS,
  NEED_OPTIONS,
  PLAN_ASSET_OPTIONS,
  PROMPT_OPTIONS,
  TIMING_OPTIONS,
  calendlyUrl,
  type LeadAnswers,
  type Route,
} from "@/lib/leadRouting";

// Qualifying consultation form (questions + routing per Darsh's 2026-10-07 reply; rules in lib/leadRouting.ts).
// Step 1: what they need. Step 2: questions for that path (personal + business only). Step 3: contact details.
// Participants skip step 2 and only give name + email: their Calendly event asks the rest.
// The server decides the route; qualified leads see the matching calendar, everyone else gets a neutral
// thank-you and goes to the inbox.

interface ConsultationFormProps {
  compact?: boolean; // true in the pop-up
  onSuccess?: (route: Route) => void;
}

type Result = { route: Route; calendar: string | null };

const STEP_LABELS = ["Your needs", "A few details", "Contact"];

export default function ConsultationForm({
  compact = false,
  onSuccess,
}: ConsultationFormProps) {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<LeadAnswers & { website?: string }>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const set = (k: keyof (LeadAnswers & { website?: string }), v: string) =>
    setA((p) => ({ ...p, [k]: v }));
  const label = compact
    ? "block text-xs font-medium text-navy mb-1"
    : "block text-sm font-medium text-navy mb-2";
  const input =
    (compact ? "py-2.5 px-3 text-sm" : "py-3 px-4 text-base") +
    " w-full border border-gray-200 rounded-[7px] text-dark-gray bg-white focus:border-medium-blue focus:ring-1 focus:ring-medium-blue focus:outline-none transition-colors";
  const gap = compact ? "space-y-4" : "space-y-5";

  // step 2 exists for these paths (and is shown in the progress bar until a path without it is chosen)
  const needsStep2 = !a.need || a.need === "personal" || a.need === "business";
  const participant = a.need === "participant";

  function validateStep(s: number): string {
    if (s === 0 && !a.need) return "Please choose what we can help you with.";
    if (
      s === 1 &&
      a.need === "personal" &&
      (!a.assets || !a.prompt || !a.timing)
    )
      return "Please answer each question.";
    if (
      s === 1 &&
      a.need === "business" &&
      (!a.company || !a.role || !a.employees || !a.planAssets)
    )
      return "Please add your company, role, number of employees, and plan assets.";
    return "";
  }
  function next() {
    const err = validateStep(step);
    if (err) return setError(err);
    setError("");
    setStep(step === 0 && !needsStep2 ? 2 : step + 1);
  }
  function back() {
    setError("");
    setStep(step === 2 && !needsStep2 ? 0 : step - 1);
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (participant ? !a.name || !a.email : !a.name || !a.email || !a.phone)
      return setError(
        participant
          ? "Please add your name and email."
          : "Please add your name, email, and phone.",
      );
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(a),
      });
      const data = await res.json();
      if (!data.success)
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );
      setResult({ route: data.route, calendar: data.calendar ?? null });
      onSuccess?.(data.route);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit. Please try again or contact us directly.",
      );
    } finally {
      setBusy(false);
    }
  }

  // ---------- result ----------
  if (result) {
    if (result.route !== "inbox") {
      const url = result.calendar
        ? calendlyUrl(result.calendar, result.route, a)
        : null;
      return (
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-navy text-xl font-semibold">
              Choose a time that works for you
            </h3>
            <p className="text-text-gray text-sm mt-1">
              Thanks, {a.name?.split(" ")[0]}. Pick a time below to book your
              consultation.
            </p>
          </div>
          {url ? (
            <iframe
              title="Schedule a consultation"
              src={url}
              className={`w-full rounded-[10px] border border-gray-200 ${compact ? "h-[560px]" : "h-[680px]"}`}
            />
          ) : (
            // Staging only: the Calendly links haven't been supplied yet (see lib/leadRouting.ts calendarUrl).
            <div className="rounded-[10px] border-2 border-dashed border-medium-blue/40 bg-cloud-blue p-6 text-center">
              <p className="text-navy font-semibold">Calendar goes here</p>
              <p className="text-text-gray text-sm mt-1">
                {result.route === "advisor-calendar" && "Darsh's Calendly"}
                {result.route === "team-calendar" && "Taylor's Calendly"}
                {result.route === "participant-calendar" &&
                  "Participant 30-minute Calendly"}{" "}
                appears here once the link is added.
              </p>
            </div>
          )}
        </div>
      );
    }
    return (
      <div
        className={
          compact
            ? "text-center py-6"
            : "bg-cloud-blue rounded-[12px] p-8 text-center"
        }
      >
        <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <Check className="w-7 h-7 text-navy" strokeWidth={2} />
        </div>
        <h3 className="text-xl font-semibold text-navy mb-2">Thank you</h3>
        <p className="text-text-gray text-sm">
          A member of our team will follow up.
        </p>
      </div>
    );
  }

  // ---------- steps ----------
  const visible = needsStep2 ? STEP_LABELS : [STEP_LABELS[0], STEP_LABELS[2]];
  const current = step === 2 && !needsStep2 ? 1 : step;

  return (
    <form onSubmit={submit} noValidate className={`relative ${gap}`}>
      {/* progress */}
      <ol className="flex items-center gap-2" aria-label="Form progress">
        {visible.map((l, i) => (
          <li key={l} className="flex items-center gap-2 flex-1 last:flex-none">
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
                i < current
                  ? "bg-medium-blue text-white"
                  : i === current
                    ? "bg-navy text-white"
                    : "bg-gray-100 text-text-gray"
              }`}
              aria-current={i === current ? "step" : undefined}
            >
              {i < current ? <Check className="w-3.5 h-3.5" /> : i + 1}
            </span>
            <span
              className={`text-xs whitespace-nowrap ${i === current ? "text-navy font-medium" : "text-text-gray"} ${compact ? "hidden sm:inline" : ""}`}
            >
              {l}
            </span>
            {i < visible.length - 1 && (
              <span className="h-px bg-gray-200 flex-1 min-w-3" aria-hidden />
            )}
          </li>
        ))}
      </ol>

      {/* honeypot: bots fill this, people never see it */}
      <div
        className="absolute -left-[9999px] w-px h-px overflow-hidden"
        aria-hidden
      >
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={a.website ?? ""}
            onChange={(e) => set("website", e.target.value)}
          />
        </label>
      </div>

      {step === 0 && (
        <fieldset className="space-y-2">
          <legend className={label}>
            What can we help you with? <span className="text-rust">*</span>
          </legend>
          {NEED_OPTIONS.map((o) => (
            <label
              key={o.value}
              className={`flex items-center gap-3 rounded-[8px] border px-4 ${compact ? "py-2.5" : "py-3"} cursor-pointer transition-colors ${
                a.need === o.value
                  ? "border-navy bg-cloud-blue"
                  : "border-gray-200 hover:border-navy/40"
              }`}
            >
              <input
                type="radio"
                name="need"
                value={o.value}
                checked={a.need === o.value}
                onChange={() => set("need", o.value)}
                className="accent-[#003754]"
              />
              <span
                className={`text-navy ${compact ? "text-sm" : "text-[15px]"}`}
              >
                {o.label}
              </span>
            </label>
          ))}
        </fieldset>
      )}

      {step === 1 && a.need === "personal" && (
        <div className={gap}>
          <div>
            <label htmlFor="q-assets" className={label}>
              {ASSETS_QUESTION} <span className="text-rust">*</span>
            </label>
            <select
              id="q-assets"
              className={input}
              value={a.assets ?? ""}
              onChange={(e) => set("assets", e.target.value)}
            >
              <option value="" disabled>
                Select a range
              </option>
              {ASSET_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="q-prompt" className={label}>
              What prompted you to reach out?{" "}
              <span className="text-rust">*</span>
            </label>
            <select
              id="q-prompt"
              className={input}
              value={a.prompt ?? ""}
              onChange={(e) => set("prompt", e.target.value)}
            >
              <option value="" disabled>
                Select one
              </option>
              {PROMPT_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <fieldset>
            <legend className={label}>
              When are you looking to make a change?{" "}
              <span className="text-rust">*</span>
            </legend>
            <div
              className={`grid grid-cols-2 ${compact ? "" : "sm:grid-cols-4"} gap-2`}
            >
              {TIMING_OPTIONS.map((o) => (
                <label
                  key={o}
                  className={`flex items-center justify-center text-center rounded-[8px] border px-3 py-2.5 cursor-pointer text-sm transition-colors ${
                    a.timing === o
                      ? "border-navy bg-cloud-blue text-navy font-medium"
                      : "border-gray-200 text-navy hover:border-navy/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="timing"
                    value={o}
                    checked={a.timing === o}
                    onChange={() => set("timing", o)}
                    className="sr-only"
                  />
                  {o}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {step === 1 && a.need === "business" && (
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4`}>
          <div className="sm:col-span-2">
            <label htmlFor="q-company" className={label}>
              Company name <span className="text-rust">*</span>
            </label>
            <input
              id="q-company"
              className={input}
              value={a.company ?? ""}
              onChange={(e) => set("company", e.target.value)}
              autoComplete="organization"
            />
          </div>
          <div>
            <label htmlFor="q-role" className={label}>
              Your role <span className="text-rust">*</span>
            </label>
            <input
              id="q-role"
              className={input}
              value={a.role ?? ""}
              onChange={(e) => set("role", e.target.value)}
              autoComplete="organization-title"
            />
          </div>
          <div>
            <label htmlFor="q-employees" className={label}>
              Number of employees <span className="text-rust">*</span>
            </label>
            <input
              id="q-employees"
              type="number"
              min={1}
              inputMode="numeric"
              className={input}
              value={a.employees ?? ""}
              onChange={(e) => set("employees", e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="q-provider" className={label}>
              Current plan provider{" "}
              <span className="text-text-gray font-normal">(optional)</span>
            </label>
            <input
              id="q-provider"
              className={input}
              value={a.provider ?? ""}
              onChange={(e) => set("provider", e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="q-plan-assets" className={label}>
              Approximate plan assets <span className="text-rust">*</span>
            </label>
            <select
              id="q-plan-assets"
              className={input}
              value={a.planAssets ?? ""}
              onChange={(e) => set("planAssets", e.target.value)}
            >
              <option value="" disabled>
                Select a range
              </option>
              {PLAN_ASSET_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className={gap}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label htmlFor="q-name" className={label}>
                Full name <span className="text-rust">*</span>
              </label>
              <input
                id="q-name"
                className={input}
                value={a.name ?? ""}
                onChange={(e) => set("name", e.target.value)}
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label htmlFor="q-email" className={label}>
                Email <span className="text-rust">*</span>
              </label>
              <input
                id="q-email"
                type="email"
                className={input}
                value={a.email ?? ""}
                onChange={(e) => set("email", e.target.value)}
                autoComplete="email"
                required
              />
            </div>
            {!participant && (
              <div>
                <label htmlFor="q-phone" className={label}>
                  Phone <span className="text-rust">*</span>
                </label>
                <input
                  id="q-phone"
                  type="tel"
                  className={input}
                  value={a.phone ?? ""}
                  onChange={(e) => set("phone", e.target.value)}
                  autoComplete="tel"
                  required
                />
              </div>
            )}
          </div>
          {!participant && (
            <div>
              <label htmlFor="q-message" className={label}>
                Message{" "}
                <span className="text-text-gray font-normal">(optional)</span>
              </label>
              <textarea
                id="q-message"
                rows={compact ? 3 : 4}
                className={`${input} resize-none`}
                value={a.message ?? ""}
                onChange={(e) => set("message", e.target.value)}
              />
            </div>
          )}
        </div>
      )}

      {error && (
        <p role="alert" className="text-rust text-sm">
          {error}
        </p>
      )}

      <div className="flex items-center gap-3 pt-1">
        {step > 0 && (
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-[7px] text-navy text-sm font-medium hover:bg-gray-50"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        )}
        {step < 2 ? (
          <button
            key="next"
            type="button"
            onClick={next}
            className="ml-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[7px] text-white font-medium transition-opacity hover:opacity-90 flex-1 sm:flex-none"
            style={{
              background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)",
            }}
          >
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            key="submit"
            type="submit"
            disabled={busy}
            className="ml-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[7px] text-white font-medium transition-opacity hover:opacity-90 disabled:opacity-60 flex-1 sm:flex-none"
            style={{
              background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)",
            }}
          >
            {busy ? "Sending…" : "Continue"}{" "}
            {!busy && <ArrowRight className="w-4 h-4" />}
          </button>
        )}
      </div>
    </form>
  );
}
