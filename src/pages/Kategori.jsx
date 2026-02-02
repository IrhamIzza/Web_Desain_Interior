
import Dropdown from "@/components/Dropdown";

import { Input } from "@/components/ui/input";

export default function Kategori() {
  const filteredCard = card.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-10 py-10 px-20">
      <h1 className="text-3xl font-bold text-center">
        Desain Interior <span className="text-gold">Public Places</span>
      </h1>
      {/* Dropdown */}
      <div className="flex gap-6 mx-auto">
        <Dropdown nama="Jenis Desain Interior" items={menuDesain}></Dropdown>
        <Dropdown nama="Jenis Bangunan" items={menujenisBangunan}></Dropdown>
      </div>
      {/* Card */}
    </div>
  );
}
