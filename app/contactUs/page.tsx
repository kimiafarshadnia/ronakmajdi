import { Button, Icon } from "@/component";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="container mx-auto px-4 py-20 text-gray-800">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-right">
          <h1 className="text-4xl lg:text-5xl font-bold">تماس با ما</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            اگر سوالی دارید یا نیاز به مشاوره دارید، با ما در تماس باشید. تیم
            پشتیبانی ما با دقت و احترام پاسخ‌گوی شماست.
          </p>

          <form className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="نام کامل"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <input
                type="email"
                placeholder="ایمیل یا شماره تماس"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <textarea
              rows={5}
              placeholder="پیام شما"
              className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <Button type="submit">ارسال پیام</Button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 space-y-6 text-right">
          <div className="space-y-4 pt-4">
            <div>
              <h3 className="text-lg font-semibold">ایمیل:</h3>
              <p className="text-gray-600">info@ronakmajidi.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">شماره تماس:</h3>
              <p className="text-gray-600">۰۹۱۲۳۴۵۶۷۸۹</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">ساعت پاسخ‌گویی:</h3>
              <p className="text-gray-600">هر روز ۱۰:۰۰ - ۱۸:۰۰</p>
            </div>
            <div className="flex items-center gap-3 pt-2 justify-start">
              <Link
                href="https://wa.me/989123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  iconName={faWhatsapp}
                  size="xl"
                  className="hover:bg-[#DAD6CF] hover:animate-pulse rounded-full transition duration-300 px-1 py-2"
                />
              </Link>
              <Link
                href="https://instagram.com/ronakmajdi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  iconName={faInstagram}
                  size="xl"
                  className="hover:bg-[#DAD6CF] hover:animate-pulse rounded-full transition duration-300 px-1 py-2"
                />
              </Link>
              <Link href="mailto:farshadniakimia@gmail.com">
                <Icon
                  iconName={faEnvelope}
                  size="xl"
                  className="hover:bg-[#DAD6CF] hover:animate-pulse rounded-full transition duration-300 px-1 py-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
