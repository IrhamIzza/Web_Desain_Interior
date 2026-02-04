// components/TestimonialSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    img: "/img/Kategori1.jpg",
    name: "Pak Vincent",
    text: "“Says sangat puas dengan hasil desain interiornya! Ruangan terasa jauh lebih nyaman dan estetik, benar-benar sesuai dengan gaya tropis yang aku inginkan. Timnya ramah, komunikatif, dan proses revisinya juga cepat. Terima kasih sudah mengubah rumahku jadi lebih hidup!”",
  },
  {
    img: "/img/Kategori2.jpg",
    name: "Bu Rina",
    text: "“Says sangat puas dengan hasil desain interiornya! Ruangan terasa jauh lebih nyaman dan estetik, benar-benar sesuai dengan gaya tropis yang aku inginkan. Timnya ramah, komunikatif, dan proses revisinya juga cepat. Terima kasih sudah mengubah rumahku jadi lebih hidup!”",
  },
  {
    img: "/img/Kategori1.jpg",
    name: "Pak Vincent",
    text: "“Says sangat puas dengan hasil desain interiornya! Ruangan terasa jauh lebih nyaman dan estetik, benar-benar sesuai dengan gaya tropis yang aku inginkan. Timnya ramah, komunikatif, dan proses revisinya juga cepat. Terima kasih sudah mengubah rumahku jadi lebih hidup!”",
  },
  {
    img: "/img/Kategori2.jpg",
    name: "Bu Rina",
    text: "“Says sangat puas dengan hasil desain interiornya! Ruangan terasa jauh lebih nyaman dan estetik, benar-benar sesuai dengan gaya tropis yang aku inginkan. Timnya ramah, komunikatif, dan proses revisinya juga cepat. Terima kasih sudah mengubah rumahku jadi lebih hidup!”",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="">
      <div className="home-page">
        {/* LEFT CONTENT */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper relative"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex rounded-xl px-2 py-2 pb-12">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full max-w-[70%] object-cover shadow-[0_0_10px_rgba(0,0,0,0.6)] rounded-lg border-2 border-white"
                />
                <div className="absolute max-h-[50%] bottom-2 left-[40%] mr-2 bg-[#FFF5D2] py-6 px-4 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.6)] overflow-visible">
                  <p className=" leading-relaxed text-sm mb-2">{item.text}</p>
                  <p className="font-semibold text-gray-900 text-center">
                    {item.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
