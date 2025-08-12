export default function AboutUs() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12">
        {/* متن سمت راست */}
        <div className="w-full lg:w-1/2 text-center lg:text-right space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold">درباره ما</h1>
          <h2 className="text-xl lg:text-2xl font-medium text-gray-700">
            ظرافتی بی‌انتها، الهام‌گرفته از سادگی
          </h2>
          <div className="space-y-4 text-gray-600 leading-loose">
            <p>
              در دنیایی پر از شلوغی و پیچیدگی، برند روناک مجدی با نگاهی مینیمال و رویکردی دقیق، تلاشی‌ست برای بازتعریف زیبایی.
            </p>
            <p>
              ما باور داریم که اصالت در سادگی نهفته است؛ جایی که هر خط، هر بافت و هر رنگ، با نگاهی آگاهانه و دل‌نشین انتخاب شده‌اند تا هماهنگ با روح و سبک زندگی شما باشند.
            </p>
            <p>
              طراحی‌های ما تنها یک محصول نیستند؛ روایتی از ذوق، ظرافت و احترامی عمیق به زنانگی و زیبایی درونی‌اند.
            </p>
            <p>
              این برند برای زنانی خلق شده که قدرت خود را در آرامش، و زیبایی‌شان را در سادگی می‌بینند. روناک مجدی تنها یک نام نیست؛ یک حس است.
            </p>
          </div>
        </div>

        {/* ویدیو سمت چپ */}
        <div className="w-full lg:w-1/2">
          <video
            src="/ronak.mp4"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            poster="/images/about.jpg"
            className="w-full h-[300px] lg:h-[550px] object-cover shadow-md rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}