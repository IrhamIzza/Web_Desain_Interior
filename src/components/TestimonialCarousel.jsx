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

export default function TestimonialSection() {
  return (
    <section className="">
      <div className="">
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
              <div className="flex rounded-xl p-8 py-12">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full max-w-[70%] object-cover shadow-[0_0_10px_rgba(0,0,0,0.9)] rounded-lg"
                />
                <div className="absolute max-h-[50%] bottom-2 left-[40%] mr-2 bg-[#FFF6E5] py-6 px-4 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.9)] overflow-visible">
                  <p className="text-gray-700 leading-relaxed text-sm mb-2">
                    {item.text}
                  </p>
                  <p className="font-semibold text-gray-900 text-center">
                    {item.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* RIGHT CAROUSEL */}
        {/* <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="relative"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-[#FFF6E5] rounded-xl p-8 shadow-lg">
              
                <span className="absolute -top-6 right-6 text-6xl text-[#E8D9B5] font-serif">
                  “
                </span>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {item.text}
                </p>
                <span className="font-semibold text-gray-900">
                  {item.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </section>
  );
}
