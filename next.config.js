/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      // === Old service pages → new services page ===
      { source: '/fiduciary-support', destination: '/our-services', permanent: true },
      { source: '/fiduciary-support/', destination: '/our-services', permanent: true },
      { source: '/investment-analysis', destination: '/our-services', permanent: true },
      { source: '/investment-analysis/', destination: '/our-services', permanent: true },
      { source: '/education-and-communications-program', destination: '/our-services', permanent: true },
      { source: '/education-and-communications-program/', destination: '/our-services', permanent: true },
      { source: '/education-and-communication', destination: '/our-services', permanent: true },
      { source: '/education-and-communication/', destination: '/our-services', permanent: true },
      { source: '/plan-design', destination: '/our-services', permanent: true },
      { source: '/plan-design/', destination: '/our-services', permanent: true },
      { source: '/provider-and-fee-benchmarking', destination: '/our-services', permanent: true },
      { source: '/provider-and-fee-benchmarking/', destination: '/our-services', permanent: true },
      { source: '/target-date-fund-tdf-consulting', destination: '/our-services', permanent: true },
      { source: '/target-date-fund-tdf-consulting/', destination: '/our-services', permanent: true },

      // === Old login page → external login ===
      { source: '/fiduciary-briefcase-login-pointoak-retirement-advisors', destination: 'https://wealth.emaplan.com/ema/SignIn?ema%2fkestrafinancial%2fpointoak', permanent: true },
      { source: '/fiduciary-briefcase-login-pointoak-retirement-advisors/', destination: 'https://wealth.emaplan.com/ema/SignIn?ema%2fkestrafinancial%2fpointoak', permanent: true },

      // === Old privacy URL → new privacy policy page ===
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/privacy/', destination: '/privacy-policy', permanent: true },

      // === Old team page → about (until team page is built) ===
      { source: '/our-consulting-team', destination: '/about', permanent: false },
      { source: '/our-consulting-team/', destination: '/about', permanent: false },
    ];
  },
};

module.exports = nextConfig;
