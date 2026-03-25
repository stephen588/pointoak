import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark flex items-center justify-center py-32">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="font-brand text-brand-accent text-8xl font-light mb-6">404</div>
          <h1 className="font-brand text-white text-3xl font-medium mb-4">Page Not Found</h1>
          <p className="font-body text-white/60 text-base leading-relaxed mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="font-brand inline-flex items-center gap-2 bg-white text-brand-dark px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-white/90 transition-colors"
          >
            ← Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
