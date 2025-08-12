import Image from "next/image";

interface DividerProps {
  logos: string[];
}

export const Divider = ({ logos }: DividerProps) => {
  return (
    <div className="bg-[#E5E1DA] w-full py-1 px-4 overflow-x-hidden">
      <div className="flex gap-4 items-center justify-between">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="shrink-0 h-5 lg:h-8 flex justify-center items-center"
          >
            <Image
              src={logo}
              alt={`brand_logo_${index}`}
              width={50}
              height={32}
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
