/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
  trailingSlash: true,
  // Keep *.vercel.app hosts (staging + previews) out of search; www.pointoak.com is unaffected.
  async headers() {
    return [{
      source: '/:path*',
      has: [{ type: 'host', value: '(?<vercelhost>.*\\.vercel\\.app)' }],
      headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
    }];
  },
  async redirects() {
    const r = (source, destination, permanent = true) => ({ source, destination, permanent });
    return [
      // Old WordPress-era service URLs -> new pages
      r('/fiduciary-support', '/corporate-retirement-plans/fiduciary-governance/'),
      r('/investment-analysis', '/corporate-retirement-plans/'),
      r('/education-and-communications-program', '/corporate-retirement-plans/participant-education-communication/'),
      r('/education-and-communication', '/corporate-retirement-plans/participant-education-communication/'),
      r('/plan-design', '/corporate-retirement-plans/'),
      r('/provider-and-fee-benchmarking', '/corporate-retirement-plans/'),
      r('/target-date-fund-tdf-consulting', '/corporate-retirement-plans/tdf-consulting/'),

      // Pre-2026 Next.js routes
      r('/our-services', '/corporate-retirement-plans/'),
      r('/services', '/services/wealth-management/'),
      r('/our-consulting-team', '/about/', false),
      r('/privacy', '/disclosures/privacy-statement.pdf', false),

      // Old login page -> external login
      r('/fiduciary-briefcase-login-pointoak-retirement-advisors', 'https://wealth.emaplan.com/ema/SignIn?ema%2fkestrafinancial%2fpointoak'),
    ];
  },
};

module.exports = nextConfig;
