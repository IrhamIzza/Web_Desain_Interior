export default function Card({ img, title }) {
  return (
    <div className="rounded-xl overflow-hidden cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.2)] p-2">
      <div className="">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="pt-2 text-center">
          <h2 className="text-md font-bold">{title}</h2>
        </div>
      </div>
    </div>
  );
}
