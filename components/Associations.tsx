import Image from "next/image";

const logos = [
  { src: "/images/associations/image1.png", alt: "Industry Association", width: 300, height: 102 },
  { src: "/images/associations/image2.png", alt: "Industry Association", width: 410, height: 123 },
  { src: "/images/associations/image3.png", alt: "Industry Association", width: 820, height: 820 },
  { src: "/images/associations/image4.png", alt: "Industry Association", width: 321, height: 157 },
  { src: "/images/associations/image5.png", alt: "Industry Association", width: 364, height: 300 },
  { src: "/images/associations/image6.png", alt: "Industry Association", width: 300, height: 168 },
  { src: "/images/associations/image7.png", alt: "Industry Association", width: 355, height: 142 },
  { src: "/images/associations/image8.png", alt: "Industry Association", width: 1024, height: 1024 },
  { src: "/images/associations/image9.jpg", alt: "Industry Association", width: 2500, height: 919 },
  { src: "/images/associations/image10.png", alt: "Industry Association", width: 2379, height: 1331 },
  { src: "/images/associations/image11.png", alt: "Industry Association", width: 600, height: 89 },
];

export default function Associations() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24 border-t border-gray-100">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        {/* Heading */}
        <h2 className="font-outfit text-navy text-4xl md:text-5xl font-light text-center mb-8 md:mb-14">
          Industry Associations
        </h2>

        {/* Logo grid — all visible, multi-row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-lg bg-white flex items-center justify-center p-5 h-[107px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="max-w-full max-h-[80px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
