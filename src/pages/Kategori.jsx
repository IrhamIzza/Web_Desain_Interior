import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import Card from "@/components/Card";
import { Input } from "@/components/ui/input";

export default function Kategori() {
  const [search, setSearch] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const menuDesain = [
    "Minimalis",
    "Skandinavia",
    "industrial",
    "Modern",
    "Kontemporer",
    "Bohemian",
    "Klasik",
    "Rustic",
    "Tropis",
  ];
  const menujenisBangunan = [
    "Coffee Shop",
    "Restaurant",
    "Salon & Barbershop",
    "Klinik Kecantikan",
    "Fitness Center",
    "Co-Working Space",
    "Butik/Toko Pakaian",
    "Mini Market",
    "Lobby Hotel",
    "Ruang Tunggu",
  ];

  const card = [
    { title: "Barley", img: "/img/Kategori/foto (1).jpg" },
    { title: "Bakery", img: "/img/Kategori/foto (2).jpg" },
    { title: "Salon & Barbershop", img: "/img/Kategori/foto (3).jpg" },
    { title: "Tibal Garden", img: "/img/Kategori/foto (4).jpg" },
    { title: "Oemar Bakery", img: "/img/Kategori/foto (5).jpg" },
    { title: "Coffe and Eatery", img: "/img/Kategori/foto (6).jpg" },
    { title: "Rumah Makan Bakmie", img: "/img/Kategori/foto (7).jpg" },
    { title: "Barley Store", img: "/img/Kategori/foto (8).jpg" },
    { title: "DBN Enterprise", img: "/img/Kategori/foto (9).jpg" },
  ];

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
        {/* Search */}
        <div className="relative w-full">
          <i className="ph ph-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2  text-lg"></i>

          <Input
            type="text"
            placeholder="Cari kategori"
            className="w-full pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {/* Card */}
      <div className="grid grid-cols-3 px-20 gap-10 mx-auto">
        {filteredCard.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(item)}
            className="cursor-pointer"
          >
            <Card title={item.title} img={item.img} />
          </div>
        ))}
      </div>
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSelectedCard(null)}
          ></div>

          {/* Modal box */}
          <div
            className="relative bg-white rounded-xl p-6 w-[40vw] shadow-lg z-10              
              animate-jump-in animate-delay-200 animate-once"
          >
            <div>
              <h2 className="text-lg font-bold text-center">
                {selectedCard.title}
              </h2>
              <p className="text-lg font-bold text-center mb-4">Kota Blitar</p>
            </div>

            <div className="rounded-lg overflow-hidden mb-4">
              <img
                src={selectedCard.img}
                alt={selectedCard.title}
                className="w-full object-cover"
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setSelectedCard(null)}
                className="px-4 py-2 border rounded-md text-sm cursor-pointer"
              >
                Kembali
              </button>

              <button className="px-4 py-2 bg-black text-white rounded-md text-sm cursor-pointer">
                Lihat Hasil Konstruksi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
