export const PackagingSection = () => {
  return (
    <div className="w-full bg-[#E5E1DA] pb-10 md:pb-0">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0">
        <div className="basis-1/2 w-full h-[300px] md:h-[500px] flex shrink-0">
          <img
            src="/images/packaging.jpg"
            alt="Packaging"
            className="w-full h-full"
          />
        </div>

        <div className="basis-1/2 flex flex-col justify-center items-center md:items-start gap-6 p-6">
          <h3 className="text-3xl md:text-4xl font-semibold text-center md:text-start">
            بسته‌بندی‌ای که تجربه‌ای متفاوت می‌سازد
          </h3>
          <p className="text-center md:text-start">
            هر سفارش تنها یک محصول نیست؛ بخشی از یک تجربه منحصربه‌فرد است.
          </p>
          <p className="text-center md:text-start">
            بسته‌بندی‌های خاص و مینیمال ما با طراحی چشم‌نواز، کیفیت بالا و
            الهام‌گرفته از زیبایی در سادگی، حس خاص بودن را از لحظه دریافت
            برایتان رقم می‌زند.
          </p>
          <p className="text-center md:text-start">
            مناسب برای هدیه دادن، مناسب برای شما.
          </p>
        </div>
      </div>
    </div>
  );
};
