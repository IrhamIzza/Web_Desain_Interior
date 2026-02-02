import React from "react";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" pt-10 pb-4 px-32 flex flex-col gap-20">
      {/* Landing Page */}
      <div className="flex  items-center gap-20">
        <div className="flex-1 flex flex-col gap-2 ">
          <h1 className="text-xl font-bold">Halo, Kami Adalah</h1>
          <h1 className="text-4xl font-bold ">Interior Designer</h1>
          <h3 className="text-xl font-bold ">
            Kami Menyediakan <span className="text-gold">Berbagai Macam Desain</span>{" "}
          </h3>

          <p className="mt-10 max-w-[460px]">
            Kami ingin membuat <span className="font-bold">Website Interior Design</span> menjadi forum yang dapat
            menjadi jembatan antara jasa desain inerior dan peminat desain
          </p>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 grid-rows-2 gap-5 h-[400px] flex-1">
          {/* BESAR */}
          <img src="/img/Head (1).jpg" className="row-span-2 w-full h-full object-cover rounded-lg" alt="" />
          {/* KECIL ATAS */}
          <img src="/img/Head (2).jpg" className="w-full h-full object-cover rounded-lg" alt="" />
          {/* KECIL BAWAH */}
          <img src="/img/Head (3).jpg" className="w-full h-full object-cover rounded-lg" alt="" />
        </div>
      </div>
      {/* Tentang Kami */}
      <div className="flex gap-24 items-center">
        <img src="/img/logo.jpg" className="max-w-[300px] rounded-full border-2 object-cover" />
        <div className="flex flex-col gap-12">
          <h1 className="text-3xl font-bold">
            <span className="text-gold">Tentang </span> Kami
          </h1>
          <p>
            Kami adalah studio desain interior yang berfokus pada gaya tropis, menghadirkan suasana hangat, alami, dan
            menyegarkan ke dalam setiap ruang. Dengan memadukan elemen alam, pencahayaan yang harmonis, serta palet
            warna lembut, kami menciptakan interior yang tidak hanya indah, tetapi juga nyaman dan menenangkan. Kami
            percaya bahwa hunian yang baik adalah ruang yang selaras dengan lingkungan dan gaya hidup penghuninya.
          </p>
        </div>
      </div>
      {/* Kategori */}
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-gold">Kategori</span> Kami
        </h1>
        <div className="flex justify-center gap-5 ">
          <div className="overflow-hidden rounded-md shadow-[0_0_10px_rgba(0,0,0,0.9)]">
            <img src="/img/Kategori1.jpg" alt="" />
            <div className="bg-gold p-2">
              <p className="font-medium text-lg text-white text-center">Public Places</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-md shadow-[0_0_10px_rgba(0,0,0,0.9)]">
            <img src="/img/Kategori2.jpg" alt="" />
            <div className="bg-gold p-2">
              <p className="font-medium text-lg text-white text-center">Private Places</p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimoni */}
      <div className="flex flex-col gap-6 md:px-48">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-gold">Testimoni</span> pengguna
        </h1>
        <TestimonialCarousel />
      </div>
      {/* Kontak Kami */}
      <div className="flex flex-col gap-6 px-24">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-gold">Kontak</span> kami
        </h1>
        <div className="flex justify-center gap-10">
          <div className="flex-1 flex flex-col gap-4">
            <p>Jl. Melati No.49, Kepanjen Kidul, Kec. Kepanjenkidul, Kota Blitar, Jawa Timur 66111</p>
            <div className="grid grid-cols-2 gap-y-1 text-sm w-48">
              <span>Senin</span>
              <span>: 08.30 - 17.00</span>
              <span>Selasa</span>
              <span>: 08.30 - 17.00</span>
              <span>Rabu</span>
              <span>: 08.30 - 17.00</span>
              <span>Kamis</span>
              <span>: 08.30 - 17.00</span>
              <span>Jum’at</span>
              <span>: 08.30 - 17.00</span>
              <span>Sabtu</span>
              <span>: 08.30 - 17.00</span>
              <span>Minggu</span>
              <span>: 08.30 - 17.00</span>
            </div>
            <div className="flex gap-4 text-3xl">
              <div className="flex bg-gray-100 rounded-full p-2 border-2 border-gray-400">
                <i class="ph ph-whatsapp-logo"></i>
              </div>
              <div className="flex bg-gray-100 rounded-full p-2 border-2 border-gray-400">
              <i class="ph ph-instagram-logo"></i>
              </div>
              <div className="flex bg-gray-100 rounded-full p-2 border-2 border-gray-400">
              <i class="ph ph-envelope"></i>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-300 w-full rounded-lg"></div>
        </div>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
