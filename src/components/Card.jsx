import { Button } from "@/components/ui/button";
export default function Card({ img, title }) {
  return (
    <div className="group relative rounded-xl overflow-hidden cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.2)] p-2">
      <div className="">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="pt-2 text-center">
          <h2 className="text-md font-bold">{title}</h2>
        </div>

        {/* Overlay */}
        <div
          className="
        absolute inset-0
        bg-linear-to-t from-gold
        translate-y-full
        group-hover:translate-y-0
        transition-transform duration-300 ease-out
        flex items-end justify-center
      "
        >
          <Button
            variant="outline"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 px-4 py-2 bg-white "
          >
            Lihat Selengkapnya
          </Button>
        </div>
      </div>
    </div>
  );
}
