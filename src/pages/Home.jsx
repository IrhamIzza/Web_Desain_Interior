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
    </div>
  );
}
