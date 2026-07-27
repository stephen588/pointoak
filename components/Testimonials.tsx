"use client";

const testimonials = [
  {
    quote:
      "After rolling over my 401(k), I needed someone who could explain my options without all the jargon. PointOak made everything clear and straightforward. They took the time to understand what I was trying to accomplish and built a plan that actually makes sense for my retirement timeline.",
    name: "Jennifer M.",
    role: "Federal Employee, Arlington VA",
  },
  {
    quote:
      "I was frustrated with my previous advisor's high fees and cookie-cutter approach. With PointOak, I finally have transparency and a strategy tailored to my situation. They respond quickly when I have questions and really know the ins and outs of retirement income planning.",
    name: "Robert K.",
    role: "Business Owner, McLean VA",
  },
  {
    quote:
      "What stands out most is how accessible they are. I'm not sitting on hold or emailing into the void. When I call, I get answers from people who know my situation. They've taken so much off my plate, and I finally feel confident about my financial future.",
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
      className="bg-white rounded-[7px] border border-[#F3F4F6] p-6 md:p-8 flex flex-col w-full"
    >
      <StarRating />
      <p
        className="text-text-gray font-outfit text-sm md:text-base leading-relaxed md:leading-[25px] flex-1"
        style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-8">
        <p
          className="text-navy font-outfit text-lg font-medium leading-[30px]"
        >
          {name}
        </p>
        <p
          className="text-text-gray font-outfit text-base leading-[25px]"
        >
          {role}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#EDF4F8] py-12 md:py-20">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        {/* Section Heading */}
        <h2
          className="text-navy font-outfit mb-6 md:mb-12 text-3xl md:text-4xl lg:text-[44px] font-light leading-tight"
        >
          What Our Clients Say
        </h2>

        {/* Testimonial Cards - horizontal scroll on mobile, grid on desktop */}
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        <div className="lg:grid lg:grid-cols-3 lg:gap-5 hidden">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        <div className="flex lg:hidden gap-5 overflow-x-auto hide-scrollbar pb-2" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="w-[85vw] max-w-[85vw] flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
