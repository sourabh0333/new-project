"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { IoShareSocial } from "react-icons/io5";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const SecLogoSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const images = ["/headerImg.jpg", "/headerImg1.png", "/headerImg.jpg"];

  return (
    <div className="bg-white shadow pb-3">
      {/* Swiper Slider */}
      <div className="w-full relative h-40">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, EffectFade, Pagination]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full relative">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Autoplay progress indicator */}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
      {/* End Swiper Slider */}

      <div className="relative px-4 mt-2 z-50">
        <div className="absolute -top-11 left-4 w-28 h-18 flex justify-center items-center border-4 border-white overflow-hidden shadow bg-white rounded-sm">
          <Image
            src="/sample10.png"
            alt="Logo"
            width={110}
            height={110}
            className="object-contain"
          />
        </div>
        <div className="flex justify-end">
          <Link
            href="#"
            className="flex gap-1 items-center bg-blue-500 text-white text-sm px-3 py-1.5 rounded-sm shadow hover:bg-blue-600 transition"
          >
            <IoShareSocial size={15} className="mr-1" />
            Share
          </Link>
        </div>

        <div className="pt-2 flex justify-between items-center">
          <div>
            <h2 className="text-base font-semibold text-gray-800 leading-tight">
              Ribbons & Balloons
            </h2>
            <p className="text-sm text-gray-600">
              Cake ho ya mood dono yahin bante hain!
            </p>
          </div>

          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <FaYoutube size={26} className="text-red-600" />
            <FaInstagram size={26} className="text-pink-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecLogoSection;
