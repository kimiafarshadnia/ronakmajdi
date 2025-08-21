import {
  BackToTopButton,
  Divider,
  FAQSection,
  HeroSection,
  MostLovedSection,
  NewCollection,
  ParallaxSection,
  AboutUs,
} from "@/component";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center  min-h-screen">
      <HeroSection />
      {/* <Divider
        logos={[
          "/images/logo.svg",
          "/images/nameLogo.svg",
          "/images/logo.svg",
          "/images/nameLogo.svg",
          "/images/logo.svg",
          "/images/nameLogo.svg",
          "/images/logo.svg",
        ]}
      /> */}
      <NewCollection />
      <AboutUs />
      <MostLovedSection />
      <ParallaxSection />
      <FAQSection />
      <BackToTopButton />
    </div>
  );
}
