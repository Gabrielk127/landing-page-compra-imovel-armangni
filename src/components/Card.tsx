import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  icon: string | StaticImageData;
  title: string;
}

const Card: React.FC<CardProps> = ({ icon, title }) => {
  return (
    <main className="w-32 md:w-40 lg:w-44 xl:w-full">
      <div
        className="w-full h-36 bg-custom-background-card-two p-2 rounded-xl flex flex-col items-center border-2 border-[#F5F5DC]
        md:h-40 md:pt-4
        xl:h-52
      "
      >
        <div
          className="bg-[#ffc95411] p-4 rounded-full hover:border hover:border-cyan-700
            xl:p-6
        "
        >
          <Image src={icon} alt={title} className="w-8 md:w-10 xl:w-14" />
        </div>
        <p className="text-base font-bold text-white text-center mt-4">
          {title}
        </p>
      </div>
    </main>
  );
};

export default Card;
