import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import Card from "@/components/Card";
import { Input } from "@/components/ui/input";

export default function Kategori() {
  const [search, setSearch] = useState("");
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
        <Input
          type="text"
          placeholder="Cari kategori"
          className="w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Card */}
      <div className="grid grid-cols-3 px-20   gap-10 mx-auto">
        {filteredCard.map((item, index) => (
          <Card key={index} title={item.title} img={item.img} />
        ))}
      </div>
    </div>
  );
}
