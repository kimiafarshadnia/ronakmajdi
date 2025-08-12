import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12">
      <Image
        src="/images/404.png" // 👈 اگر نداری، بگو تا پیشنهاد بدم یا برات بسازم
        alt="صفحه مورد نظر یافت نشد"
        width={300}
        height={300}
        className="mb-8"
      />

      <h1 className="text-4xl font-bold mb-4"> صفحه پیدا نشد</h1>
      <p className="text-gray-600 text-lg mb-8">
        ما نتوانستیم صفحه‌ای را که به‌دنبال آن بودید پیدا کنیم. لطفاً آدرس (URL)
        را بررسی کنید یا به صفحه‌ای دیگر بروید. از بابت این مشکل پوزش می‌طلبیم.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition"
      >
        بازگشت به صفحه اصلی
      </Link>
    </section>
  );
}
