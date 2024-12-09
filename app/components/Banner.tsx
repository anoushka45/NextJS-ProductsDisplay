"use client";
import Image from "next/image";
import React, { useState } from "react";

const Banner: React.FC = () => {
  const [mainImage, setMainImage] = useState<string>("/main/banner.png");

  const thumbnails = [
    "/main/st.png",
    "/main/st.png",
    "/main/st.png",
    "/main/st.png",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* Left Section: Images */}
        <div className="relative border bg-[#F8F6F4] ">
          {/* Main Image */}
          <img
            src={mainImage}
            alt="Main product"
            className="w-[552px] h-[552px] rounded-lg bg-[#F8F6F4] p-4 mx-auto"
          />
          {/* Thumbnails */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className={` rounded-lg cursor-pointer border-2 ${
                  mainImage === thumb ? "border-blue-500" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        <div className=" px-2 rounded-lg">
          <div className="font-serif text-3xl leading-[37.5px] text-left flex justify-between items-center mb-2">
            <span className="font-PlayfairDisplay">Cheese – appareil à raclette 1/2 roue</span>
            <Image
              src="/navbar/heart.svg"
              alt="Favourites Icon"
              width={28}
              height={25}
            />
          </div>
          <div className="">
            <p className="text-[#111928] text-[24px] font-normal font-geist">
              39,50€{" "}
              <span className="text-[#9C9C9C] text-[14px]">/pièce</span>
            </p>
          </div>
          <hr />
          <div className="flex justify-between items-center mb-4 mt-3">
            <div className="flex items-center gap-4">
              <Image
                src="/main/scale.svg"
                alt="scale"
                width={24}
                height={24}
              />
              <span className="text-[16px] font-normal font-geist">
                20<sup className="text-[12px]">cm</sup>
              </span>
              <Image
                src="/main/Oval.svg"
                alt="oval"
                width={24}
                height={24}
              />
              <span className="text-[16px] font-normal font-geist ">
                50<sup className="text-[12px]">cm</sup>
              </span>
            </div>
            <p className="text-[#9C9C9C] font-medium text-[12px]">RÉF : VABGN5</p>
          </div>

          <hr />

          <div className="text-[#5D5D5D] text-[14px] leading-[18.2px] mt-3 font-geist">
            <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue </p>
            <p>Réglable en hauteur</p>
            <p>Appareil à raclette professionnel</p>
            <p>Boîtier de chauffe horizontal réglable en hauteur</p>
            <p className="mt-3">220V</p>
            <p>900W</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
