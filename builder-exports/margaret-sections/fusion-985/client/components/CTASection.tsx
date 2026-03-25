export default function CTASection() {
  return (
    <section id="contact" className="bg-brand-dark py-20 md:py-28 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
        <svg width="400" height="460" viewBox="0 0 385 444" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M224.164 222C224.164 239.526 209.997 253.714 192.497 253.714C175.414 253.714 161.247 239.526 161.247 222C161.247 204.891 175.414 190.703 192.497 190.703C209.997 190.703 224.164 204.891 224.164 222Z" fill="#6D798B"/>
          <path d="M148.333 418.128L149.167 375.981L191.667 400.602L346.25 312.135L347.083 133.951L193.75 43.8158L38.75 132.282L37.9167 310.466L57.5 322.985L56.6667 365.132L0 332.583L0.833333 110.165L193.75 0L385 111.835L384.167 333.835L192.5 444L148.333 418.128Z" fill="#6D798B"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M84.1602 284.177V158.571L193.327 96.3947L302.077 160.241L300.827 285.846L192.494 347.605L84.1602 284.177ZM122.077 180.271V262.06L191.66 303.789L262.91 263.729L263.744 181.523L192.494 139.376L122.077 180.271Z" fill="#6D798B"/>
          <path d="M122.077 403.105V222H84.1602V381.406L122.077 403.105Z" fill="#6D798B"/>
        </svg>
      </div>

      <div className="max-w-[1170px] mx-auto px-6 xl:px-0 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-brand text-white text-4xl md:text-5xl lg:text-[68px] font-light leading-tight mb-6">
            Ready to Simplify Your Financial Life?
          </h2>
          <p className="font-brand text-white/75 text-xl md:text-2xl font-light leading-relaxed max-w-[760px] mx-auto mb-10">
            Schedule a complimentary consultation to discuss your financial goals and how we can help.
            There's no cost for the initial meeting. No obligation. Just a conversation to see if we're
            the right fit for your needs.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white/40 hover:border-white text-white font-brand font-medium text-base px-8 py-3.5 rounded-md transition-all duration-200 hover:bg-white/10"
          >
            Schedule Your Consultation
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1496 0.139911L15.3706 5.36096C15.4615 5.45187 15.5125 5.57516 15.5125 5.70372C15.5125 5.83228 15.4615 5.95557 15.3706 6.04648L10.1496 11.2675C10.0585 11.3575 9.93546 11.4078 9.8074 11.4074C9.67934 11.407 9.55664 11.356 9.46609 11.2655C9.37554 11.1749 9.32449 11.0522 9.3241 10.9241C9.32371 10.7961 9.37401 10.6731 9.46401 10.582L13.8575 6.18849L0.484769 6.18849C0.3562 6.18849 0.232897 6.13741 0.141986 6.0465C0.0510739 5.95559 0 5.83229 0 5.70372C0 5.57515 0.0510739 5.45185 0.141986 5.36094C0.232897 5.27002 0.3562 5.21895 0.484769 5.21895L13.8575 5.21895L9.46401 0.825464C9.37401 0.734365 9.32371 0.611355 9.3241 0.483298C9.32449 0.355239 9.37554 0.232537 9.46609 0.141985C9.55664 0.0514338 9.67934 0.000390308 9.8074 2.15673e-06C9.93546 -0.000386948 10.0585 0.0499108 10.1496 0.139911Z" fill="white"/>
            </svg>
          </a>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {/* Call Us */}
          <div className="bg-white/[0.07] border border-white/10 rounded-lg p-8 flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5375 7.29167C9.625 8.58958 9.84375 9.85833 10.1937 11.0688L8.44375 12.8188C7.84583 11.0687 7.46667 9.21667 7.33542 7.29167H9.5375ZM23.9167 24.8208C25.1562 25.1708 26.425 25.3896 27.7083 25.4771V27.65C25.7833 27.5187 23.9312 27.1396 22.1667 26.5562L23.9167 24.8208ZM10.9375 4.375H5.83333C5.03125 4.375 4.375 5.03125 4.375 5.83333C4.375 19.5271 15.4729 30.625 29.1667 30.625C29.9688 30.625 30.625 29.9688 30.625 29.1667V24.0771C30.625 23.275 29.9688 22.6188 29.1667 22.6188C27.3583 22.6188 25.5938 22.3271 23.9604 21.7875C23.8146 21.7292 23.6542 21.7146 23.5083 21.7146C23.1292 21.7146 22.7646 21.8604 22.4729 22.1375L19.2646 25.3458C15.1375 23.2312 11.7542 19.8625 9.65417 15.7354L12.8625 12.5271C13.2708 12.1188 13.3875 11.55 13.2271 11.0396C12.6875 9.40625 12.3958 7.65625 12.3958 5.83333C12.3958 5.03125 11.7396 4.375 10.9375 4.375Z" fill="white"/>
              </svg>
            </div>
            <div>
              <div className="font-brand text-white font-bold text-lg mb-1">Call Us</div>
              <div className="font-brand text-white/80 text-base">(703) 595-4444</div>
            </div>
          </div>

          {/* Email Us */}
          <div className="bg-white/[0.07] border border-white/10 rounded-lg p-8 flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.1666 5.83301H5.83329C4.22913 5.83301 2.93121 7.14551 2.93121 8.74967L2.91663 26.2497C2.91663 27.8538 4.22913 29.1663 5.83329 29.1663H29.1666C30.7708 29.1663 32.0833 27.8538 32.0833 26.2497V8.74967C32.0833 7.14551 30.7708 5.83301 29.1666 5.83301ZM29.1666 26.2497H5.83329V11.6663L17.5 18.958L29.1666 11.6663V26.2497ZM17.5 16.0413L5.83329 8.74967H29.1666L17.5 16.0413Z" fill="white"/>
              </svg>
            </div>
            <div>
              <div className="font-brand text-white font-bold text-lg mb-1">Email Us</div>
              <div className="font-brand text-white/80 text-base">info@pointoak.com</div>
            </div>
          </div>

          {/* Visit */}
          <div className="bg-white/[0.07] border border-white/10 rounded-lg p-8 flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 2.91699C11.8563 2.91699 7.29169 7.48158 7.29169 13.1253C7.29169 20.7816 17.5 32.0837 17.5 32.0837C17.5 32.0837 27.7084 20.7816 27.7084 13.1253C27.7084 7.48158 23.1438 2.91699 17.5 2.91699ZM10.2084 13.1253C10.2084 9.10033 13.475 5.83366 17.5 5.83366C21.525 5.83366 24.7917 9.10033 24.7917 13.1253C24.7917 17.3253 20.5917 23.6107 17.5 27.5337C14.4667 23.6399 10.2084 17.2816 10.2084 13.1253Z" fill="white"/>
                <path d="M17.5 16.7712C19.5136 16.7712 21.1459 15.1389 21.1459 13.1253C21.1459 11.1118 19.5136 9.47949 17.5 9.47949C15.4865 9.47949 13.8542 11.1118 13.8542 13.1253C13.8542 15.1389 15.4865 16.7712 17.5 16.7712Z" fill="white"/>
              </svg>
            </div>
            <div>
              <div className="font-brand text-white font-bold text-lg mb-1">Visit</div>
              <div className="font-brand text-white/80 text-base leading-snug">
                1751 Pinnacle Drive, Suite 600<br />McLean, VA 22102
              </div>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="border-t border-white/10 pt-10">
          <h3 className="font-brand text-white font-bold text-xl mb-2">What To Expect</h3>
          <p className="font-brand text-white/70 text-base leading-relaxed max-w-2xl">
            Our initial consultation typically lasts 30–45 minutes. We'll discuss your goals, current
            situation, and how we might work together. Come prepared with questions.
          </p>
        </div>
      </div>
    </section>
  );
}
