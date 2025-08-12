"use client"
import { Button, Icon } from "@/component";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation';

export const HeroSection = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col ">
      <div className="w-full py-8 flex justify-center items-center flex-col lg:flex-row gap-8 container mx-auto px-4">
        <div className="flex basis-1/2 justify-end">
          <div className="hidden lg:flex items-center justify-center  lg:w-[450px] h-[600px] shrink-0">
            <img
              src="/images/hero.jpg"
              alt="HERO_IMAGE"
              className="w-full h-full shrink-0 object-cover rounded-t-full"
            />
          </div>
        </div>
        <div className="basis-1/2 flex flex-col items-center justify-center lg:items-start lg:justify-start gap-8">
          <div className="flex justify-center shrink-0 ">
            <img
              src="/images/nameLogo.svg"
              className="w-full h-full object-cover"
              alt="BRAND_LOGO"
              loading="lazy"
            />
          </div>

          <div className="lg:hidden flex items-center justify-center max-[400px]:w-[300px] max-[500px]:w-[350px] h-[450px] sm:h-[500px] w-[400px] lg:h-[500px] shrink-0">
            <img
              src="/images/jeen.jpg"
              alt="HERO_IMAGE"
              className="w-full h-full shrink-0 object-cover rounded-t-full"
            />
          </div>
          <p className="text-base text-center lg:text-start lg:w-4/5">
            روناک مجدی، تلفیقی از طراحی مینیمال و ظرافت زنانه؛ برای آن‌هایی که
            به سبک، کیفیت و جزئیات اهمیت می‌دهند.
          </p>
          <Button className="" onClick={()=>router.push('/aboutUs')}>درباره ما</Button>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Icon iconName={faChevronDown}/>
      </div>
    </div>
  );
};
