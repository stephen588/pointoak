const steps = [
  {
    number: 1,
    title: "Understand",
    description:
      "We start by listening. This includes understanding your goals, concerns, financial picture, and what prompted you to seek advice. Our focus is on clarity so both sides are aligned before any recommendations are made.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "We develop a customized strategy integrating investment management, retirement planning, and tax-aware considerations. Each recommendation is intentional, transparent, and tailored to your specific situation. No cookie-cutter approaches.",
  },
  {
    number: 3,
    title: "Implement & Monitor",
    description:
      "We put the plan into action and stay actively involved. This includes ongoing monitoring, regular check-ins, and adjustments as your life and goals evolve so your strategy remains aligned over time.",
  },
];

function HexDiagram() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square flex items-center justify-center select-none">
      {/* Labels */}
      <span className="absolute top-[22%] left-[4%] font-outfit text-brand-navy text-xl font-light tracking-tight">
        Understand
      </span>
      <span className="absolute bottom-[10%] left-[26%] font-outfit text-brand-navy text-xl font-light tracking-tight">
        Implement &amp; Monitor
      </span>
      <span className="absolute top-[43%] right-[4%] font-outfit text-brand-navy text-xl font-light tracking-tight">
        Design
      </span>

      {/* Main hexagon SVG */}
      <svg
        viewBox="0 0 345 398"
        fill="none"
        className="w-[70%] h-[70%]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200.874 199C200.874 214.71 188.179 227.429 172.497 227.429C157.189 227.429 144.494 214.71 144.494 199C144.494 183.663 157.189 170.945 172.497 170.945C188.179 170.945 200.874 183.663 200.874 199Z"
          fill="#003754"
        />
        <path
          d="M132.922 374.808L133.669 337.028L171.753 359.098L310.276 279.797L311.023 120.073L173.62 39.2763L34.724 118.577L33.9773 278.301L51.526 289.523L50.7792 327.303L0 298.126L0.746753 98.7519L173.62 0L345 100.248L344.253 299.248L172.5 398L132.922 374.808Z"
          fill="#003754"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M75.4163 254.735V142.143L173.241 86.4079L270.692 143.639L269.572 256.231L172.494 311.592L75.4163 254.735ZM109.394 161.594V234.91L171.747 272.316L235.595 236.406L236.342 162.716L172.494 124.936L109.394 161.594Z"
          fill="#003754"
        />
        <path
          d="M109.394 361.342V199H75.4163V341.891L109.394 361.342Z"
          fill="#003754"
        />
        <path
          d="M170.5 377.212L324.5 286.712V108.712L170 21.7119L16.5 110.712V295L41 307.5"
          stroke="white"
          strokeDasharray="2 2"
        />
      </svg>

      {/* Dashed outer hex border */}
      <svg
        viewBox="0 0 160 225"
        fill="none"
        className="absolute w-[32%] h-[32%] top-[12%] left-[28%]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M157.391 44.5039L159.13 45.5039H159.131L158.881 45.9365L159.5 46.293V47.0039H160V49.0029H159.5V51.0029H160V53.0029H159.5V55.0029H160V57.0029H159.5V59.0029H160V61.002H159.5V63.002H160V65.002H159.5V67.002H160V69.002H159.5V71.002H160V73.002H159.5V75.001H160V77.001H159.5V79.001H160V81.001H159.5V83.001H160V85.001H159.5V87H160V89H159.5V91H160V93H159.5V95H160V97H159.5V98.999H160V100.999H159.5V102.999H160V104.999H159.5V106.999H160V108.999H159.5V110.998H160V112.998H159.5V114.998H160V116.998H159.5V118.998H160V120.998H159.5V122.997H160V124.997H159.5V126.997H160V128.997H159.5V130.997H160V132.997H159.5V134.997H160V136.996H159.5V137.706L158.881 138.063L159.13 138.495L157.391 139.495L157.142 139.063L155.403 140.063L155.651 140.496L153.912 141.496L153.664 141.063L151.925 142.063L152.173 142.496L150.434 143.496L150.186 143.063L148.446 144.063L148.694 144.496L146.955 145.496L146.707 145.063L144.968 146.063L145.217 146.496L143.478 147.496L143.229 147.063L141.49 148.063L141.738 148.496L140 149.497L139.751 149.063L138.012 150.063L138.261 150.497L136.521 151.497L136.272 151.064L134.533 152.064L134.782 152.497L133.043 153.497L132.794 153.064L131.055 154.064L131.304 154.497L129.564 155.497L129.316 155.064L127.577 156.064L127.825 156.497L126.086 157.497L125.838 157.064L124.099 158.064L124.347 158.497L122.608 159.498L122.359 159.064L120.62 160.064L120.869 160.498L119.13 161.497L118.881 161.064L117.142 162.064L117.391 162.497L115.652 163.498L115.403 163.065L113.664 164.065L113.913 164.498L112.173 165.498L111.925 165.065L110.186 166.065L110.434 166.498L108.694 167.498L108.446 167.065L106.707 168.065L106.955 168.498L105.217 169.498L104.968 169.065L103.229 170.065L103.478 170.498L101.738 171.498L101.49 171.065L99.751 172.065L100 172.499L98.2607 173.499L98.0117 173.065L96.2725 174.065L96.5215 174.499L94.7822 175.499L94.5332 175.065L92.7939 176.066L93.0439 176.499L91.3047 177.499L91.0547 177.066L89.3164 178.066L89.5645 178.499L87.8252 179.499L87.5771 179.066L85.8379 180.066L86.0859 180.499L84.3467 181.499L84.0986 181.066L82.3594 182.066L82.6084 182.5L80.8691 183.5L80.6201 183.066L80 183.423L79.3799 183.066L79.1299 183.5L77.3906 182.5L77.6406 182.066L75.9014 181.066L75.6523 181.499L73.9131 180.499L74.1621 180.066L72.4229 179.066L72.1738 179.499L70.4346 178.499L70.6836 178.066L68.9453 177.066L68.6943 177.499L66.9551 176.499L67.2061 176.066L65.4668 175.065L65.2168 175.499L63.4775 174.499L63.7275 174.065L61.9883 173.065L61.7383 173.499L60 172.499L60.249 172.065L58.5098 171.065L58.2607 171.498L56.5215 170.498L56.7705 170.065L55.0322 169.065L54.7822 169.498L53.0439 168.498L53.293 168.065L51.5537 167.065L51.3047 167.498L49.5654 166.498L49.8145 166.065L48.0752 165.065L47.8262 165.498L46.0859 164.498L46.3359 164.065L44.5967 163.065L44.3467 163.498L42.6084 162.497L42.8584 162.064L41.1191 161.064L40.8691 161.497L39.1299 160.498L39.3799 160.064L37.6406 159.064L37.3906 159.498L35.6523 158.497L35.9014 158.064L34.1621 157.064L33.9131 157.497L32.1738 156.497L32.4229 156.064L30.6836 155.064L30.4346 155.497L28.6953 154.497L28.9453 154.064L27.2061 153.064L26.9561 153.497L25.2168 152.497L25.4668 152.064L23.7275 151.064L23.4775 151.497L21.7383 150.497L21.9883 150.063L20.249 149.063L20 149.497L18.2607 148.496L18.5098 148.063L16.7715 147.063L16.5215 147.496L14.7822 146.496L15.0322 146.063L13.293 145.063L13.0439 145.496L11.3047 144.496L11.5537 144.063L9.81445 143.063L9.56543 143.496L7.82617 142.496L8.0752 142.063L6.33594 141.063L6.08691 141.496L4.34766 140.496L4.59668 140.063L2.8584 139.063L2.6084 139.495L0.869141 138.495L1.11914 138.063L0.5 137.706V136.996H0V134.997H0.5V132.997H0V130.997H0.5V128.997H0V126.997H0.5V124.997H0V122.998H0.5V120.998H0V118.998H0.5V116.998H0V114.998H0.5V112.998H0V110.998H0.5V108.999H0V106.999H0.5V104.999H0V102.999H0.5V100.999H0V98.999H0.5V97H0V95H0.5V93H0V91H0.5V89H0V87H0.5V85.001H0V83.001H0.5V81.001H0V79.001H0.5V77.001H0V75.001H0.5V73.002H0V71.002H0.5V69.002H0V67.002H0.5V65.002H0V63.002H0.5V61.0029H0V59.0029H0.5V57.0029H0V55.0029H0.5V53.0029H0V51.0029H0.5V49.0029H0V47.0039H0.5V46.293L1.11914 45.9365L0.869141 45.5039L2.6084 44.5039L2.8584 44.9365L4.59668 43.9365L4.34766 43.5029L6.08691 42.5029L6.33594 42.9365L8.0752 41.9365L7.82617 41.5029L9.56543 40.5029L9.81445 40.9365L11.5537 39.9365L11.3047 39.5029L13.0439 38.5029L13.293 38.9365L15.0322 37.9365L14.7822 37.5029L16.5215 36.5029L16.7705 36.9365L18.5098 35.9365L18.2607 35.5029L20 34.5029L20.249 34.9365L21.9883 33.9365L21.7383 33.502L23.4775 32.502L23.7275 32.9355L25.4668 31.9355L25.2168 31.502L26.9561 30.502L27.2061 30.9355L28.9453 29.9355L28.6953 29.502L30.4346 28.502L30.6836 28.9355L32.4229 27.9355L32.1738 27.502L33.9131 26.502L34.1621 26.9355L35.9014 25.9355L35.6523 25.502L37.3906 24.501L37.6406 24.9355L39.3799 23.9355L39.1299 23.501L40.8691 22.502L41.1191 22.9355L42.8584 21.9355L42.6084 21.502L44.3467 20.501L44.5967 20.9346L46.3359 19.9346L46.0859 19.501L47.8262 18.501L48.0752 18.9346L49.8145 17.9346L49.5654 17.501L51.3047 16.501L51.5537 16.9346L53.293 15.9346L53.0439 15.501L54.7822 14.501L55.0322 14.9346L56.7705 13.9346L56.5215 13.501L58.2607 12.501L58.5098 12.9346L60.249 11.9346L60 11.501L61.7383 10.5L61.9883 10.9346L63.7275 9.93457L63.4775 9.5L65.2168 8.5L65.4668 8.93457L67.2061 7.93359L66.9561 7.50098L68.6943 6.5L68.9453 6.93359L70.6836 5.93359L70.4346 5.5L72.1738 4.5L72.4229 4.93359L74.1621 3.93359L73.9131 3.5L75.6523 2.5L75.9014 2.93359L77.6406 1.93359L77.3906 1.49902L79.1299 0.499023L79.3799 0.933594L80 0.576172L80.6201 0.933594L80.8691 0.5L82.6084 1.49902L82.3594 1.93359L84.0986 2.93359L84.3467 2.5L86.0859 3.5L85.8379 3.93359L87.5771 4.93359L87.8252 4.5L89.5645 5.5L89.3164 5.93359L91.0547 6.93359L91.3047 6.50098L93.0439 7.5L92.7939 7.93359L94.5332 8.93457L94.7822 8.5L96.5215 9.5L96.2725 9.93457L98.0117 10.9346L98.2607 10.5L100 11.501L99.751 11.9346L101.49 12.9346L101.738 12.501L103.478 13.501L103.229 13.9346L104.968 14.9346L105.217 14.501L106.955 15.501L106.707 15.9346L108.446 16.9346L108.694 16.501L110.434 17.501L110.186 17.9346L111.925 18.9346L112.173 18.501L113.913 19.501L113.664 19.9346L115.403 20.9346L115.652 20.502L117.391 21.502L117.142 21.9355L118.881 22.9355L119.13 22.502L120.869 23.501L120.62 23.9355L122.359 24.9355L122.608 24.501L124.347 25.502L124.099 25.9355L125.838 26.9355L126.086 26.502L127.825 27.502L127.577 27.9355L129.316 28.9355L129.564 28.502L131.304 29.502L131.055 29.9355L132.794 30.9355L133.043 30.502L134.782 31.502L134.533 31.9355L136.272 32.9355L136.521 32.502L138.261 33.502L138.012 33.9365L139.751 34.9365L140 34.5029L141.738 35.5029L141.49 35.9365L143.229 36.9365L143.478 36.5029L145.217 37.5029L144.968 37.9365L146.707 38.9365L146.955 38.5029L148.694 39.5029L148.446 39.9365L150.186 40.9365L150.434 40.5029L152.173 41.5029L151.925 41.9365L153.664 42.9365L153.912 42.5029L155.651 43.5029L155.403 43.9365L157.142 44.9365L157.391 44.5039Z"
          stroke="white"
          strokeDasharray="2 2"
        />
      </svg>

      {/* Step icon circles */}
      {/* Understand - top left */}
      <div className="absolute top-[18%] left-[8%] w-14 h-14 rounded-full bg-[#48586E] flex items-center justify-center shadow-lg">
        <svg width="30" height="30" viewBox="0 0 38 38" fill="none">
          <path d="M35.6834 12.2841C34.6863 5.70427 28.8041-0.015042 21.3774 2.97209e-05C13.1969 0.0170318 6.89963 6.7117 6.89963 14.5386V16.4288L2.14795 23.5894L3.44649 24.8879C4.38941 25.8308 5.59344 26.4606 6.89963 26.6911V33.471H13.5817V38H21.3774H29.1731V35.6223C29.1731 31.2198 30.6196 26.7988 33.4712 22.4833C35.443 19.5001 36.2282 15.8785 35.6834 12.2841Z" fill="#00A7EF"/>
          <path d="M29.1732 35.6223C29.1732 31.2198 30.6196 26.7988 33.4713 22.4833C35.4431 19.5001 36.2283 15.8785 35.6834 12.2841C34.6864 5.70435 28.804-0.015042 21.3774 2.97206e-05V38H29.1732V35.6223Z" fill="#D1D5DB"/>
          <path d="M22.4911 20.1069H21.3774H20.2637L18.0364 22.3343V23.448C18.0364 25.2903 19.5351 26.789 21.3774 26.789C23.2197 26.789 24.7184 25.2903 24.7184 23.448V22.3343L22.4911 20.1069Z" fill="#F3F5F9"/>
          <path d="M21.3775 8.97021C18.3072 8.97021 15.8091 11.4683 15.8091 14.5386C15.8091 15.7404 16.1897 16.8834 16.9108 17.8438C17.6363 18.8128 18.0364 20.0124 18.0364 21.2206V22.3343H21.3775L24.7185 22.3256V21.212C24.7185 19.9917 25.1067 18.8269 25.842 17.847C26.5641 16.8856 26.9458 15.7415 26.9458 14.5386C26.9458 11.4684 24.4477 8.97021 21.3775 8.97021Z" fill="#003754"/>
        </svg>
      </div>

      {/* Design - middle right */}
      <div className="absolute top-[42%] right-[8%] w-14 h-14 rounded-full bg-brand-navy flex items-center justify-center shadow-lg">
        <svg width="30" height="30" viewBox="0 0 38 38" fill="none">
          <g clipPath="url(#pencil1)">
            <path d="M17.2787 8.91657L15.4593 9.16156L15.7043 7.34216L12.4942 4.13206L10.6748 4.37698L10.9198 2.55758L8.36219 0L4.18115 4.18104L15.8513 22.1488L23.1812 14.819L17.2787 8.91657Z" fill="#BFEBFF"/>
            <path d="M34.3177 9.68262L19.0505 21.3038L6.4043 37.596C8.26802 37.928 10.0525 38.8135 11.4927 40.2535L38.1906 13.5556L34.3177 9.68262Z" fill="#00A7EF"/>
            <path d="M30.4447 5.80957L3.7467 32.5075C5.18684 33.9477 6.07226 35.7321 6.40424 37.5959L34.3176 9.68252L30.4447 5.80957Z" fill="#00A7EF"/>
            <path d="M38.1906 13.5555L44 7.74599L40.1271 3.87305L30.6716 9.68251L38.1906 13.5555Z" fill="#003754"/>
            <path d="M40.1271 3.87295L36.2542 0L30.4447 5.80946L32.4947 11.5054L40.1271 3.87295Z" fill="#2D3E53"/>
          </g>
          <defs>
            <clipPath id="pencil1"><rect width="38" height="38" fill="white"/></clipPath>
          </defs>
        </svg>
      </div>

      {/* Implement - bottom center */}
      <div className="absolute bottom-[15%] left-[38%] w-14 h-14 rounded-full bg-[#D1D5DB] flex items-center justify-center shadow-lg">
        <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
          <path d="M39.2188 23.4375V16.5625H35.7227C35.3091 14.6671 34.563 12.8961 33.5464 11.3147L36.0205 8.84094L31.1591 3.97949L28.6853 6.45355C27.1039 5.43701 25.3329 4.69086 23.4375 4.27734V0.78125H16.5625V4.27307C14.6643 4.68445 12.8906 5.42969 11.3068 6.44562L8.84094 3.97949L3.97949 8.84094L6.44135 11.3028C5.42114 12.887 4.67194 14.6622 4.25751 16.5625H0.78125V23.4375H4.25323C4.66583 25.3403 5.41382 27.1182 6.43341 28.7051L3.97949 31.1591L8.84094 36.0202L11.2949 33.5663C12.8818 34.5862 14.6594 35.3342 16.5625 35.7468V39.2188H23.4375V35.7425C25.3375 35.3278 27.1127 34.5789 28.6972 33.5587L31.1591 36.0202L36.0202 31.1591L33.5544 28.6929C34.5703 27.1094 35.3152 25.3357 35.7269 23.4375H39.2188Z" fill="#003754"/>
          <path d="M30.7562 19.9999C30.7562 25.9404 25.9406 30.7561 20 30.7561C14.0594 30.7561 9.24377 25.9404 9.24377 19.9999C9.24377 14.0593 14.0594 9.24365 20 9.24365C25.9406 9.24365 30.7562 14.0593 30.7562 19.9999Z" fill="white"/>
          <path d="M24.6875 20C24.6875 22.5888 22.5888 24.6875 20 24.6875C17.4112 24.6875 15.3125 22.5888 15.3125 20C15.3125 17.4112 17.4112 15.3125 20 15.3125C22.5888 15.3125 24.6875 17.4112 24.6875 20Z" fill="#003754"/>
          <path d="M2.65625 39.2188H18.125C19.1605 39.2188 20 38.3792 20 37.3438V24.8438C20 23.8083 19.1605 22.9688 18.125 22.9688H2.65625C1.62079 22.9688 0.78125 23.8083 0.78125 24.8438V37.3438C0.78125 38.3792 1.62079 39.2188 2.65625 39.2188Z" fill="#00A7EF"/>
        </svg>
      </div>

      {/* Decorative dots */}
      <div className="absolute top-[28%] left-[50%] w-3 h-3 rounded-full bg-[#D9D9D9]" />
      <div className="absolute top-[20%] left-[42%] w-2.5 h-2.5 rounded-full bg-[#D9D9D9]" />
      <div className="absolute top-[37%] left-[27%] w-2.5 h-2.5 rounded-full bg-[#D9D9D9]" />
      <div className="absolute top-[56%] left-[27%] w-2.5 h-2.5 rounded-full bg-[#D9D9D9]" />
      <div className="absolute top-[65%] left-[42%] w-2.5 h-2.5 rounded-full bg-[#D9D9D9]" />
      <div className="absolute top-[56%] left-[59%] w-2.5 h-2.5 rounded-full bg-[#D9D9D9]" />
      <div className="absolute top-[37%] left-[59%] w-2.5 h-2.5 rounded-full bg-[#D9D9D9]" />
      <div className="absolute top-[20%] left-[72%] w-3.5 h-3.5 rounded-full bg-[#D9D9D9]" />
      <div className="absolute top-[10%] left-[43%] w-3.5 h-3.5 rounded-full bg-[#D9D9D9]" />
      <div className="absolute top-[55%] left-[11%] w-3.5 h-3.5 rounded-full bg-[#D9D9D9]" />
      <div className="absolute top-[74%] left-[62%] w-3.5 h-3.5 rounded-full bg-[#D9D9D9]" />
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-16 lg:mb-20">
          <p className="font-outfit text-brand-navy text-2xl lg:text-[2rem] font-light leading-tight mb-3">
            How Working
          </p>
          <h2 className="font-outfit text-brand-navy text-5xl lg:text-6xl font-light leading-none">
            With Us Works
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: hex diagram */}
          <div className="hidden lg:block">
            <p className="font-outfit text-brand-gray text-base leading-relaxed max-w-sm mb-10 capitalize">
              We Follow A Proven Three-Step Process That Makes Complex Financial
              Planning Straightforward. From The First Conversation To Ongoing
              Monitoring, We're With You Every Step Of The Way.
            </p>
            <HexDiagram />
          </div>

          {/* Mobile description */}
          <p className="lg:hidden font-outfit text-brand-gray text-base leading-relaxed capitalize">
            We Follow A Proven Three-Step Process That Makes Complex Financial
            Planning Straightforward. From The First Conversation To Ongoing
            Monitoring, We're With You Every Step Of The Way.
          </p>

          {/* Right: step cards */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[27px] top-14 bottom-14 w-px bg-[#C1C5C9] hidden sm:block" />

            <div className="flex flex-col gap-0">
              {steps.map((step, idx) => (
                <div key={step.number} className="flex gap-6 sm:gap-8">
                  {/* Step number */}
                  <div className="flex flex-col items-center z-10 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
                      <span className="font-outfit font-semibold text-white text-xl leading-none">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step card */}
                  <div
                    className={`flex-1 border border-[#F3F4F6] rounded-md bg-white p-6 lg:p-8 ${
                      idx < steps.length - 1 ? "mb-6" : ""
                    }`}
                  >
                    <h3 className="font-outfit text-brand-navy text-xl lg:text-2xl font-light mb-4">
                      {step.title}
                    </h3>
                    <p className="font-poppins text-brand-gray text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
