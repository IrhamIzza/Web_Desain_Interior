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
    "/img/kategori/foto (1).jpg",
    "/img/kategori/foto (2).jpg",
    "/img/kategori/foto (3).jpg",
    "/img/kategori/foto (4).jpg",
    "/img/kategori/foto (5).jpg",
    "/img/kategori/foto (6).jpg",
    "/img/kategori/foto (7).jpg",
    "/img/kategori/foto (8).jpg",
    "/img/kategori/foto (9).jpg",
  ];

  return (
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
              <img src={img} className="max-w-[400px] h-[300px] object-cover rounded-xl" alt="" />
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
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}
          >
            <img
              src={img}
              className="object-cover rounded-lg cursor-pointer opacity-70 hover:opacity-100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
