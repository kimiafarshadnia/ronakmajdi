export const PackagingSection = () => {
  return (
    <div className="py-12 w-full">
      <div className="flex justify-center items-center flex-col md:flex-row-reverse gap-16 container mx-auto px-4">
        <div className="basis-1/2 flex justify-start items-end relative">
          <div className="flex items-center justify-center w-[250px] h-[250px] shrink-0 shadow-md">
            <img
              src="/images/packaging.webp"
              alt="HERO_IMAGE"
              className="w-full h-full shrink-0 object-cover"
            />
          </div>
          {/* <div className="flex items-center justify-center w-[300px] lg:w-[400px] h-[500px] shrink-0 shadow-md">
            <img
              src="/images/jeen.jpg"
              alt="HERO_IMAGE"
              className="w-full h-full shrink-0 object-cover"
            />
          </div> */}
        </div>
        <div className="basis-1/2 flex flex-col items-center md:items-start gap-8">
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
