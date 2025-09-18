"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="container mx-auto px-4 py-12">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 text-center lg:text-right space-y-6"
        >
          <h1 className="text-4xl lg:text-5xl font-bold">درباره ما</h1>
          <h2 className="text-xl lg:text-2xl font-medium text-gray-200">
            ظرافتی بی‌انتها، الهام‌گرفته از سادگی
          </h2>
          <div className="space-y-4 text-gray-200 leading-loose">
            <p>
              در دنیایی پر از شلوغی و پیچیدگی، برند روناک مجدی با نگاهی مینیمال
              و رویکردی دقیق، تلاشی‌ست برای بازتعریف زیبایی.
            </p>
            <p>
              ما باور داریم که اصالت در سادگی نهفته است؛ جایی که هر خط، هر بافت
              و هر رنگ، با نگاهی آگاهانه و دل‌نشین انتخاب شده‌اند تا هماهنگ با
              روح و سبک زندگی شما باشند.
            </p>
            <p>
              طراحی‌های ما تنها یک محصول نیستند؛ روایتی از ذوق، ظرافت و احترامی
              عمیق به زنانگی و زیبایی درونی‌اند.
            </p>
            <p>
              این برند برای زنانی خلق شده که قدرت خود را در آرامش، و زیبایی‌شان
              را در سادگی می‌بینند. روناک مجدی تنها یک نام نیست؛ یک حس است.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative border flex justify-start"
        >
          <div className="w-[250px] h-[300px] md:w-[350px] md:h-[420px] relative top-2 left-2 sm:top-5 sm:left-5">
            <Image
              src="/images/tarika.webp"
              alt="تصویر برند روناک مجدی"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
