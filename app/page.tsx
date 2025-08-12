import {
  BackToTopButton,
  Divider,
  HeroSection,
  NewCollection,
  PackagingSection,
  SectionTwo,
  SomeProduct,
} from "@/component";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center  min-h-screen gap-16">
      <HeroSection />
      <SectionTwo />
      <NewCollection/>
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
      <SomeProduct />
      <PackagingSection />
      
      <BackToTopButton />
    </div>
  );
}
