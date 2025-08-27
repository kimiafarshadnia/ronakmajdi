import {
  BackToTopButton,
  FAQSection,
  HeroSection,
  ParallaxSection,
  AboutUs,
  RandomProduct,
} from "@/component";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <HeroSection />
      <RandomProduct title="کالکشن نو ، استایل نو" bgColor="bg-[#E5E1DA]" textColor="text-black"/>
      <AboutUs />
      <RandomProduct title="محبوب ترین ها" bgColor="bg-[#E5E1DA]" textColor="text-black"/>
      <ParallaxSection />
      <FAQSection />
      <BackToTopButton />
    </div>
  );
}
