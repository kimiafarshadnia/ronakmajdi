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
      "برای ثبت سفارش کافیست محصول مورد نظر را به سبد خرید اضافه کرده و مراحل پرداخت را تکمیل کنید.",
  },
  {
    question: "مدت زمان ارسال سفارش چقدر است؟",
    answer: "سفارش‌ها معمولاً بین ۳ تا ۵ روز کاری به دست شما می‌رسند.",
  },
  {
    question: "آیا امکان بازگرداندن کالا وجود دارد؟",
    answer:
      "بله، تا ۷ روز پس از دریافت سفارش، امکان بازگشت کالا وجود دارد به شرطی که محصول استفاده نشده باشد.",
  },
  {
    question: "چطور می‌توانم با پشتیبانی تماس بگیرم؟",
    answer:
      "می‌توانید از طریق صفحه تماس با ما یا شماره پشتیبانی درج شده در سایت اقدام کنید.",
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
              <span className="text-lg">{faq.question}</span>
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
                <div className="p-4 text-gray-400 leading-relaxed">
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
