import Image from "next/image";
export const NoItem = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full flex flex-col gap-8 items-center justify-center">
        <Image src="/images/empty-hanger.webp" alt="NO_DATA" width={200} height={200} />
        <p>محصولی در این دسته موجود نیست.</p>
      </div>
    </div>
  );
};
