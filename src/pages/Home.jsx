export default function Home() {
  return (
    <div className=" py-10 px-32 flex flex-col gap-20">
      {/* Landing Page */}
      <div className="flex  items-center gap-20">
        <div className="flex-1 flex flex-col gap-2 ">
          <h1 className="text-xl font-bold">Halo, Kami Adalah</h1>
          <h1 className="text-4xl font-bold ">Interior Designer</h1>
          <h3 className="text-xl font-bold ">
            Kami Menyediakan{" "}
            <span className="text-gold">Berbagai Macam Desain</span>{" "}
          </h3>

          <p className="mt-10 max-w-[460px]">
            Kami ingin membuat{" "}
            <span className="font-bold">Website Interior Design</span> menjadi
            forum yang dapat menjadi jembatan antara jasa desain inerior dan
            peminat desain
          </p>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 grid-rows-2 gap-5 h-[400px] flex-1">
          {/* BESAR */}
          <img
            src="/img/Head (1).jpg"
            className="row-span-2 w-full h-full object-cover rounded-lg"
            alt=""
          />
          {/* KECIL ATAS */}
          <img
            src="/img/Head (2).jpg"
            className="w-full h-full object-cover rounded-lg"
            alt=""
          />
          {/* KECIL BAWAH */}
          <img
            src="/img/Head (3).jpg"
            className="w-full h-full object-cover rounded-lg"
            alt=""
          />
        </div>
      </div>
      {/* Tentang Kami */}
      <div className="flex gap-24 items-center">
        <img
          src="/img/logo.jpg"
          className="max-w-[300px] rounded-full border-2 object-cover"
        />
        <div className="flex flex-col gap-12">
          <h1 className="text-3xl font-bold">
            <span className="text-gold">Tentang </span> Kami
          </h1>
          <p>
            Kami adalah studio desain interior yang berfokus pada gaya tropis,
            menghadirkan suasana hangat, alami, dan menyegarkan ke dalam setiap
            ruang. Dengan memadukan elemen alam, pencahayaan yang harmonis,
            serta palet warna lembut, kami menciptakan interior yang tidak hanya
            indah, tetapi juga nyaman dan menenangkan. Kami percaya bahwa hunian
            yang baik adalah ruang yang selaras dengan lingkungan dan gaya hidup
            penghuninya.
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
              <p className="font-medium text-lg text-white text-center">
                Public Places
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-md shadow-[0_0_10px_rgba(0,0,0,0.9)]">
            <img src="/img/Kategori2.jpg" alt="" />
            <div className="bg-gold p-2">
              <p className="font-medium text-lg text-white text-center">
                Private Places
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
