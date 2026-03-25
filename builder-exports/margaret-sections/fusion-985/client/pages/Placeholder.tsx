import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageTitles: Record<string, string> = {
  "/about": "About Us",
  "/services": "Our Services",
  "/corporate": "Corporate Retirement Plans",
  "/resources": "Resources",
};

export default function Placeholder() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "This Page";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white flex items-center justify-center py-32">
        <div className="max-w-lg mx-auto px-6 text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-brand-blue-light flex items-center justify-center mx-auto mb-8">
            <svg width="36" height="36" viewBox="0 0 385 444" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M148.333 418.128L149.167 375.981L191.667 400.602L346.25 312.135L347.083 133.951L193.75 43.8158L38.75 132.282L37.9167 310.466L57.5 322.985L56.6667 365.132L0 332.583L0.833333 110.165L193.75 0L385 111.835L384.167 333.835L192.5 444L148.333 418.128Z" fill="#016BA4"/>
            </svg>
          </div>

          <h1 className="font-brand text-brand-dark text-3xl font-semibold mb-4">
            {title} — Coming Soon
          </h1>
          <p className="font-body text-brand-gray text-base leading-relaxed mb-8">
            This page is being built out. Continue prompting to fill in this page's content, or{" "}
            <a href="#contact" className="text-brand-blue underline">schedule a consultation</a> to
            speak with our team directly.
          </p>
          <Link
            to="/"
            className="font-brand inline-flex items-center gap-2 bg-brand-dark text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-brand-dark/90 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
