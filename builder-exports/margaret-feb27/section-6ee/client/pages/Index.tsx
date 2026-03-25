const testimonials = [
  {
    quote:
      '"After rolling over my 401(k), I needed someone who could explain my options without all the jargon. PointOak made everything clear and straightforward. They took the time to understand what I was trying to accomplish and built a plan that actually makes sense for my retirement timeline."',
    name: "Jennifer M.",
    role: "Federal Employee, Arlington VA",
  },
  {
    quote:
      '"I was frustrated with my previous advisor\'s high fees and cookie-cutter approach. With PointOak, I finally have transparency and a strategy tailored to my situation. They respond quickly when I have questions and really know the ins and outs of retirement income planning."',
    name: "Robert K.",
    role: "Business Owner, McLean VA",
  },
  {
    quote:
      '"What stands out most is how accessible they are. I\'m not sitting on hold or emailing into the void. When I call, I get answers from people who know my situation. They\'ve taken so much off my plate, and I finally feel confident about my financial future."',
    name: "Michael & Sarah T.",
    role: "Pre-Retirees, Bethesda MD",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1.5L11.3175 6.195L16.5 6.9675L12.75 10.6275L13.635 15.795L9 13.3575L4.365 15.795L5.25 10.6275L1.5 6.9675L6.6825 6.195L9 1.5Z"
            fill="#003754"
            stroke="#003754"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div
      className="bg-white rounded-[7px] border border-[#F3F4F6] p-8 flex flex-col"
      style={{ minHeight: "369px" }}
    >
      <StarRating />
      <p
        className="text-[#707070] text-base leading-[25px] flex-1"
        style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, Roboto, Helvetica, sans-serif" }}
      >
        {quote}
      </p>
      <div className="mt-8">
        <p
          className="text-[#003754] text-lg font-medium leading-[30px]"
          style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, Roboto, Helvetica, sans-serif" }}
        >
          {name}
        </p>
        <p
          className="text-[#707070] text-base leading-[25px]"
          style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, Roboto, Helvetica, sans-serif" }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <section className="bg-[#EDF4F8] py-20 px-4">
      <div className="max-w-[1296px] mx-auto">
        {/* Section Heading */}
        <h2
          className="text-[#003754] mb-12"
          style={{
            fontFamily: "'Plus Jakarta Sans', -apple-system, Roboto, Helvetica, sans-serif",
            fontSize: "clamp(36px, 5vw, 68px)",
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          What Our Clients Say
        </h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button
            className="flex items-center gap-4 text-white font-medium text-base rounded-[7px] px-[17px] py-4"
            style={{
              background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)",
              fontFamily: "'Plus Jakarta Sans', -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 500,
            }}
          >
            <span>Schedule Your Consultation</span>
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1496 0.139911L15.3706 5.36096C15.4615 5.45187 15.5125 5.57516 15.5125 5.70372C15.5125 5.83228 15.4615 5.95557 15.3706 6.04648L10.1496 11.2675C10.0585 11.3575 9.93546 11.4078 9.8074 11.4074C9.67934 11.407 9.55664 11.356 9.46609 11.2655C9.37554 11.1749 9.32449 11.0522 9.3241 10.9241C9.32371 10.7961 9.37401 10.6731 9.46401 10.582L13.8575 6.18849L0.484769 6.18849C0.3562 6.18849 0.232897 6.13741 0.141986 6.0465C0.0510739 5.95559 2.54937e-07 5.83229 2.49317e-07 5.70372C2.43697e-07 5.57515 0.0510739 5.45185 0.141986 5.36094C0.232897 5.27002 0.3562 5.21895 0.484769 5.21895L13.8575 5.21895L9.46401 0.825464C9.37401 0.734365 9.32371 0.611355 9.3241 0.483298C9.32449 0.355239 9.37554 0.232537 9.46609 0.141985C9.55664 0.0514338 9.67934 0.000390308 9.8074 2.15673e-06C9.93546 -0.000386948 10.0585 0.0499108 10.1496 0.139911Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
