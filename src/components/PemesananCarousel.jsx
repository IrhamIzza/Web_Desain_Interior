import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Thumbs } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export default function PemesananCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "/img/Kategori/foto (1).jpg",
    "/img/Kategori/foto (2).jpg",
    "/img/Kategori/foto (3).jpg",
    "/img/Kategori/foto (4).jpg",
    "/img/Kategori/foto (5).jpg",
    "/img/Kategori/foto (6).jpg",
    "/img/Kategori/foto (7).jpg",
    "/img/Kategori/foto (8).jpg",
    "/img/Kategori/foto (9).jpg",
  ];

  return (
    <div className="flex flex-col gap-6 pt-10 px-10 md:px-28 bg-linear-to-b from-gold to-white ">
      <div className="pemesanan ">
        {/* MAIN SLIDER */}
        <Swiper
          modules={[Navigation, Thumbs, Autoplay, Pagination]}
          thumbs={{ swiper: thumbsSwiper }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          className=" "
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className=" flex justify-center pb-10">
                <img
                  src={img}
                  className="max-w-[400px] h-[300px] object-cover rounded-xl"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* THUMBNAILS */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={6}
          spaceBetween={26}
          watchSlidesProgress
          className="thumbs-swiper"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                className="object-cover rounded-lg cursor-pointer opacity-60 transition-all duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
