import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DropdownPemesanan from "@/components/DropdownPemesanan";

// Data dropdown
const jenisBangunan = ["Rumah", "Coffee Shop", "Klinik Kecantikan"];
const jenisPaketHarga = ["Paket 5 juta", "Paket 10 juta", "Paket 20 juta"];
const jenisDesain = [
  "Minimalis",
  "Skandinavia",
  "Industrial",
  "Modern",
  "Kontemporer",
  "Bohemian",
];

export default function DetailPemesanan() {
  // State terpisah untuk tiap dropdown
  const [bangunan, setBangunan] = useState("");
  const [paket, setPaket] = useState("");
  const [desain, setDesain] = useState("");

  return (
    <div className="gap-10 px-64 pt-10">
      <div className="flex flex-col border py-8 px-8 gap-5 border-gray-400 text-center">
        <h1 className="text-3xl font-bold text-gold">
          Pemesanan <span className="text-black">Jasa Desain</span>
        </h1>
        <Input type="text" placeholder="Nama Desain" className="w-full border-gray-400" />
        <Input type="text" placeholder="Alamat" className="w-full border-gray-400" />
        <Input type="text" placeholder="No. Telepon" className="w-full border-gray-400" />
        <Input type="text" placeholder="Email" className="w-full border-gray-400" />
        <Input type="text" placeholder="No. HP" className="w-full border-gray-400" />
        <Input type="text" placeholder="No. Telp" className="w-full border-gray-400" />

        {/* Dropdown */}
        <DropdownPemesanan
          value={bangunan}
          onChange={setBangunan}
          placeholder="Jenis Bangunan"
          items={jenisBangunan}
        />

        <DropdownPemesanan
          value={paket}
          onChange={setPaket}
          placeholder="Paket Harga"
          items={jenisPaketHarga}
        />

        <DropdownPemesanan
          value={desain}
          onChange={setDesain}
          placeholder="Jenis Desain"
          items={jenisDesain}
        />

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <Button className="text-white">Kembali</Button>
          <Link to="/pemesanan/pembayaran">
            <Button variant="outline">Buat Pesanan</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
