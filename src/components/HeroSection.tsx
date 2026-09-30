import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100svh] min-h-[450px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image for Mobile */}
      <Image
        src="/images/HeroForPhone.jpg"
        alt="Camper Elegance"
        fill
        className="object-cover object-[center_top] md:hidden"
        priority
        unoptimized={true}
      />

      {/* Background Image for Desktop */}
      <Image
        src="/images/HeroForDesk.jpg"
        alt="Camper Elegance"
        fill
        className="hidden md:block object-cover object-[center_top] md:object-center"
        priority
        unoptimized={true}
      />

      {/* Official Logo Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 select-none px-6">
        <div className="relative w-full max-w-[220px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] aspect-[16/6] drop-shadow-xl">
          <Image
            src="/images/CamperLogoWhite.png"
            alt="Camper Official Logo"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 400px, 800px"
          />
        </div>
      </div>
    </section>
  );
}
