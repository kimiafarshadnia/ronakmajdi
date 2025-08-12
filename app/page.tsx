import {
  BackToTopButton,
  Divider,
  FAQSection,
  HeroSection,
  NewCollection,
  PackagingSection,
  ParallaxSection,
  SectionTwo,
  SomeProduct,
} from "@/component";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center  min-h-screen gap-16">
      <HeroSection />
      <SectionTwo />
      <Divider
        logos={[
          "/images/logo.svg",
          "/images/nameLogo.svg",
          "/images/logo.svg",
          "/images/nameLogo.svg",
          "/images/logo.svg",
          "/images/nameLogo.svg",
          "/images/logo.svg",
        ]}
      />
      <NewCollection />
      <ParallaxSection />
      {/* <SomeProduct /> */}
      <PackagingSection />
      <FAQSection />
      <BackToTopButton />
    </div>
  );
}
