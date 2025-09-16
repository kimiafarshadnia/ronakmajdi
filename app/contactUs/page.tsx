"use client";

import { useState, useRef, useEffect } from "react";
import { Button, Icon } from "@/component";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          setLoading(false);
          alert("خطا در ارسال پیام: " + error.text);
        }
      );
  };

  return (
    <section
      ref={sectionRef}
      className={`container mx-auto px-4 py-20 text-white transition-opacity duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-right">
          <h1 className="text-4xl lg:text-5xl font-bold">تماس با ما</h1>
          <p className="text-white text-lg leading-relaxed">
            اگر سوالی دارید یا نیاز به مشاوره دارید، با ما در تماس باشید. تیم
            پشتیبانی ما با دقت و احترام پاسخ‌گوی شماست.
          </p>

          <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="نام کامل"
                className="w-full border border-[#E5E1DA] p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="ایمیل یا شماره تماس"
                className="w-full border border-[#E5E1DA] p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <textarea
              name="message"
              rows={5}
              placeholder="پیام شما"
              className="w-full border border-[#E5E1DA] p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <Button type="submit" disabled={loading}>
              {loading ? "در حال ارسال..." : "ارسال پیام"}
            </Button>
            {success && (
              <p className="mt-4 text-green-400 animate-pulse font-medium">
                پیام شما با موفقیت ارسال شد!
              </p>
            )}
          </form>
        </div>

        <div className="w-full lg:w-1/2 space-y-6 text-right">
          <div className="space-y-4 pt-4">
            <div>
              <h3 className="text-lg font-semibold">ایمیل:</h3>
              <p className="text-white">info@ronakmajidi.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">شماره تماس:</h3>
              <p className="text-white" dir="ltr">+98 903 523 4156</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">ساعت پاسخ‌گویی:</h3>
              <p className="text-white">هر روز ۱۰:۰۰ - ۱۸:۰۰</p>
            </div>
            <div className="flex items-center gap-3 pt-2 justify-start">
              <Link
                href="https://wa.me/989035234156"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  iconName={faWhatsapp}
                  size="xl"
                  className="hover:bg-[#DAD6CF] hover:text-black hover:animate-pulse rounded-full transition duration-300 px-1 py-2"
                />
              </Link>
              <Link
                href="https://instagram.com/ronak.majdi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  iconName={faInstagram}
                  size="xl"
                  className="hover:bg-[#DAD6CF] hover:text-black hover:animate-pulse rounded-full transition duration-300 px-1 py-2"
                />
              </Link>
              <Link href="mailto:farshadniakimia@gmail.com">
                <Icon
                  iconName={faEnvelope}
                  size="xl"
                  className="hover:bg-[#DAD6CF] hover:text-black hover:animate-pulse rounded-full transition duration-300 px-1 py-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
