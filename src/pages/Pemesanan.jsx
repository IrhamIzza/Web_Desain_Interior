import PemesananCarousel from "../components/PemesananCarousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Pemesanan() {
  return (
    <div className="flex flex-col gap-10 ">
      <PemesananCarousel />
      {/* Detail Desain*/}
      <div className="bg-white space-y-2 px-2 md:px-40 rounded-xl">
        <h1 className="text-3xl font-bold text-center text-black">
          Rusty Bakery
        </h1>
        <h1 className="text-3xl font-bold text-center text-gold">
          Kota Blitar
        </h1>
        <div className="flex flex-col gap-4 justify-between">
          <div className="space-y-1">
            <Label className="text-gold">Style</Label>
            <Input value="Bohemian" readOnly />
          </div>
          {/* Ukuran Tanah */}
          <div className="space-y-1">
            <Label className="text-gold">Ukuran Tanah</Label>
            <Input value="Lebar Depan 30m x Panjang 25m" readOnly />
          </div>
          {/* Deskripsi */}
          <div className="space-y-1">
            <Label className="text-gold">Deskripsi</Label>
            <Textarea
              readOnly
              className="min-h-[220px]"
              value={`Hai Sobat Inas Murtati! Kali ini kita akan melihat desain Rustic Bakery bergaya bohemian dengan ukuran ruang 25x30 meter—luas, hangat, dan penuh karakter. Begitu masuk, kalian langsung disambut front counter kayu rustic berpadu dekorasi rotan ala boho yang bikin suasana terasa natural dan estetik. Display pastry kaca tinggi, lampu gantung anyaman, serta aksen emas semakin mempercantik tampilan bakery ini. Area main seating dibuat cozy dengan kursi reclaimed wood, meja kecil, dan bantal bermotif tribal. Bukaan kaca besar di sisi ruangan membuat cahaya alami masuk maksimal, memperkuat vibes boho yang cerah dan ramah. Di sisi kiri ada photo spot dengan panel kayu tua, rak rotan, dan tanaman hijau gantung—dijamin jadi area incaran pelanggan. Sementara bagian open kitchen tampil rustic dengan bata ekspos dan kayu gelap, tetap fungsional namun artistik. Di bagian belakang terdapat workshop space untuk kelas baking atau coffee brewing, lengkap dengan meja kayu solid dan dekorasi etnik yang membuat suasana terasa kreatif dan inspiratif. Desain rustic-bohemian ini tidak hanya cantik, tapi juga menciptakan atmosfer bakery yang hangat dan bikin pelanggan ingin kembali lagi.`}
            />
          </div>
          {/* Fee */}
          <div className="space-y-1">
            <Label className="text-gold">Fee Desain Bangunnan</Label>
            <Input value="Rp. 2.500.000" readOnly />
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="flex justify-center gap-6">
        <Button className="text-white">Kembali</Button>
        <Link to="/pemesanan/detail_pemesanan">
          <Button variant="outline">Buat Pesanan</Button>
        </Link>
      </div>
      {/* Footer */}
      <div className="md:px-28">
        <Footer />
      </div>
    </div>
  );
}
