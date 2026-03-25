export default function IndustrySection() {
  return (
    <section className="bg-white py-20 md:py-24 border-t border-gray-100">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        {/* Heading */}
        <h2 className="font-brand text-brand-dark text-4xl md:text-5xl font-light text-center mb-14">
          Industry Associations
        </h2>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Logo 1 */}
          <div className="border border-gray-100 rounded-lg bg-white flex items-center justify-center p-5 h-[107px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/7aec6f38f0430c126f04bb6905d7e109e7009a73?width=252"
              alt="Industry association logo"
              className="max-w-full max-h-[49px] object-contain"
            />
          </div>

          {/* Logo 2 */}
          <div className="border border-gray-100 rounded-lg bg-white flex items-center justify-center p-5 h-[107px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9acdbdd5beed1db29d8dcb9a71a941a1439d3df4?width=266"
              alt="Industry association logo"
              className="max-w-full max-h-[38px] object-contain"
            />
          </div>

          {/* Logo 3 - NFP / middle logo */}
          <div className="border border-gray-100 rounded-lg bg-white flex items-center justify-center p-5 h-[107px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/59779e225964f243a0eb79d5a63368dbd69c10d7?width=234"
              alt="Industry association logo"
              className="max-w-full max-h-[43px] object-contain"
            />
          </div>

          {/* Logo 4 - SHRM */}
          <div className="border border-gray-100 rounded-lg bg-white flex items-center justify-center p-5 h-[107px]">
            <svg width="95" height="37" viewBox="0 0 95 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#shrm-clip)">
                <path d="M27.7485 0.454102H0V36.5445H27.7485V0.454102Z" fill="#016BA4"/>
                <path d="M94.0358 0.454102H62.4333V36.5445H94.0358V0.454102Z" fill="#016BA4"/>
                <path d="M62.4345 0.454102H27.7488V36.5445H62.4345V0.454102Z" fill="#003754"/>
                <path d="M58.0982 28.8988C57.4132 28.5695 57.2306 27.0873 57.3218 25.4815C57.5959 20.2526 55.1757 18.8527 51.6595 17.9058V17.8234C54.5364 17.5764 58.0982 16.7118 58.0982 12.3886C58.0982 10.9064 57.1849 7.53027 51.2943 7.53027H41.933V8.31255H44.1249V17.3706H35.6769V8.31255H37.8231V7.53027H30.0601V8.31255H32.2522V28.94H30.0601V29.7223H37.8231V28.94H35.6769V18.1116H44.1249V28.94H41.933V29.7223H49.97V28.94H47.5496V18.1116H49.011C52.8924 18.1116 53.1664 20.582 53.3033 22.1053C53.5317 24.0816 53.7145 26.799 53.8514 27.3756C54.2624 28.94 55.8606 30.1752 58.0525 30.1752C58.8744 30.134 59.742 29.9282 60.7924 29.5576V28.7343C59.7877 29.1459 58.6461 29.3107 58.0982 28.8988ZM48.8284 17.3706H47.5496V8.31255H50.0612C53.0295 8.31255 54.3081 9.30069 54.3081 12.5122C54.3081 17.0411 52.2074 17.3706 48.8284 17.3706Z" fill="white"/>
                <path d="M87.978 8.37366H90.4439V7.53027H83.64L78.3429 24.4402L73.0914 7.53027H66.2874V8.37366H68.7533V29.4162H66.2874V30.1752H72.3152V29.4162H69.8493V8.96404H69.895L76.562 30.1752H77.7036L84.4162 8.96404H84.5076V29.4162H82.0417V30.1752H90.4439V29.4162H87.978V8.37366Z" fill="white"/>
                <path d="M7.40982 28.5403C8.96241 29.5621 11.6109 30.1752 13.6658 30.1752C19.3282 30.1752 22.9815 27.1914 22.9815 23.5126C22.9815 20.6921 21.0635 18.5667 16.5883 17.3812C14.8988 16.9316 13.2092 16.5228 12.0676 16.1958C9.37338 15.4601 7.22715 14.52 7.22715 12.0266C7.22715 9.86016 9.87569 8.34778 12.6612 8.34778C17.045 8.34778 19.7849 10.9229 20.2872 13.9886H21.7027V7.85727H20.9265L19.2368 9.16529C17.2278 7.9799 15.3554 7.53027 12.7982 7.53027C8.23176 7.53027 4.80693 10.0645 4.80693 13.4572C4.80693 16.5228 7.22715 18.2805 11.337 19.1797C12.2046 19.3842 13.0722 19.6294 13.9855 19.8338C18.004 20.774 20.5613 21.7958 20.5613 24.7796C20.5613 27.4365 17.5016 29.3168 13.9855 29.3168C9.32772 29.3168 6.81616 26.4555 5.90289 23.3899H4.62427V29.8483H5.3549L7.40982 28.5403Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="shrm-clip">
                  <rect width="95" height="37" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Logo 5 */}
          <div className="border border-gray-100 rounded-lg bg-white flex items-center justify-center p-5 h-[107px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/7bd99951baf16b4c3eab0f6886ff66ceba83c832?width=224"
              alt="Industry association logo"
              className="max-w-full max-h-[50px] object-contain"
            />
          </div>

          {/* Logo 6 */}
          <div className="border border-gray-100 rounded-lg bg-white flex items-center justify-center p-5 h-[107px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/dad0767a5a67ac19b3b29f50cb40b21f877a97a0?width=154"
              alt="Industry association logo"
              className="max-w-full max-h-[62px] object-contain"
            />
          </div>
        </div>

        {/* Carousel dots */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="w-[9px] h-[9px] rounded-full bg-brand-blue-muted"></div>
          <div className="w-[9px] h-[9px] rounded-full bg-brand-blue-muted"></div>
          <div className="w-[16px] h-[16px] rounded-full bg-brand-dark"></div>
        </div>
      </div>
    </section>
  );
}
