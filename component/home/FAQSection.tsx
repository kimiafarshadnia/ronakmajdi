"use client";
import { useState } from "react";
import { Icon } from "../ui/Icon";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "چطور می‌توانم سفارش خود را ثبت کنم؟",
    answer:
      "برای ثبت سفارش، کافیست محصول مورد نظر خود را انتخاب کرده و از طریق واتساپ یا اینستاگرام با ما در تماس باشید تا مراحل سفارش و پرداخت برای شما به‌سادگی انجام شود.",
  },
  {
    question: "مدت زمان ارسال سفارش چقدر است؟",
    answer: "سفارش‌ها معمولاً بین ۷ تا ۱۰ روز کاری به دست شما می‌رسند.",
  },
  {
    question: "آیا امکان بازگرداندن کالا وجود دارد؟",
    answer: `مرجوع و یا تعویض کالا فقط و فقط در صورت اشتباه از مجموعه روناک مجدی با شرایط زیر امکان‌پذیر است:
      1. محصول استفاده نشده باشد.
      2. محصول هیچ‌گونه بوی ادکلن، بدن و … ندهد.
      3. اتیکت به محصول متصل باشد.
      4. مدت‌زمان درخواست مرجوعی و تعویض برای سفارشات تهران حداکثر ۷۲ ساعت‌کاری و برای شهرستان یک هفته کاری پس از ثبت سفارش می‌باشد.
      5. محصولات خریداری‌شده در فروش ویژه به هیچ عنوان تعویض و مرجوعی ندارند.`,
  },
  {
    question: "چطور می‌توانم با پشتیبانی تماس بگیرم؟",
    answer:
      "می‌توانید از طریق صفحه تماس با ما یا واتس آپ درج شده در سایت اقدام کنید.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        سوالات متداول
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-xl shadow bg-[#111111]">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-right cursor-pointer"
            >
              <span className="text-sm sm:text-base">{faq.question}</span>
              <Icon
                iconName={openIndex === index ? faChevronUp : faChevronDown}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="whitespace-pre-line p-4 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
