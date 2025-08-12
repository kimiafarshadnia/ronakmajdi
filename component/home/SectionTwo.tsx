"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SectionTwo = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftImageRef = useRef<HTMLDivElement | null>(null);
  const rightImageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // موقعیت ثابت عکس‌ها اول
      gsap.set([leftImageRef.current, rightImageRef.current], {
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        zIndex: 5,
      });

      // حرکت افقی عکس‌ها هنگام اسکرول
      gsap.to(leftImageRef.current, {
        x: "-37vw",
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
        },
      });

      gsap.to(rightImageRef.current, {
        x: "37vw",
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
        },
      });

      // انیمیشن متن
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "top 100%",
            scrub: true,
          },
        }
      );
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.set([leftImageRef.current, rightImageRef.current], {
        clearProps: "all",
      });
      gsap.set(textRef.current, { clearProps: "all" });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 mx-auto relative min-h-[500px] w-full 
                 flex flex-col md:flex-row items-center justify-center gap-6 overflow-hidden"
    >
      <div
        ref={leftImageRef}
        className="w-full max-w-[350px] aspect-[4/5] relative overflow-hidden"
      >
        <img
          src="/images/setLea.jpg"
          alt="Luxury Left"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <div
        ref={textRef}
        className="w-full md:w-[300px] lg:w-[500px] flex flex-col justify-center items-center max-w-xl px-4 relative z-0 text-center"
      >
        <h2 className="text-3xl mb-4">ظرافتی لوکس در دل سادگی</h2>
        <p>
          روناک مجدی تجلی هنر طراحی مینیمال با نگاهی لوکس و متفاوت است. هر قطعه،
          با دقت در انتخاب متریال و توجه به جزئیات، برای بانویی خلق شده که
          زیبایی را در وقار، اصالت و سادگی می‌جوید.
        </p>
      </div>
      <div
        ref={rightImageRef}
        className="w-full max-w-[350px] aspect-[4/5] relative overflow-hidden"
      >
        <img
          src="/images/seaDress.jpg"
          alt="Luxury Right"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    </section>
  );
};
