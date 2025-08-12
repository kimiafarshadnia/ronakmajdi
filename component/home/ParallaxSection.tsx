export const ParallaxSection = () => {
  return (
    <section className="w-full parallax-section relative h-[400px] md:h-[500px]">
      <div className="absolute inset-0 bg-black/50 bg-opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <img src="/images/completeLogo.svg" alt="" className="fill"/>
      </div>
    </section>
  );
};