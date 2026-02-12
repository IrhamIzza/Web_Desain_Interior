import Stepper from "@/components/pembayaran/Stepper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function Pembayaran2() {
  const dataPembayaran = [
    { label: "Shopee Pay", value: "/img/Logo/logo (1).png" },
    { label: "Bank BRI", value: "/img/Logo/logo (2).png" },
    { label: "Link Aja", value: "/img/Logo/logo (3).png" },
    { label: "Ovo", value: "/img/Logo/logo (4).png" },
    { label: "Dana", value: "/img/Logo/logo (5).png" },
    { label: "Gopay", value: "/img/Logo/logo (6).png" },
  ];
  return (
    <div className="py-10 px-34">
      <h1 className="text-2xl font-bold mb-6">Metode Pembayaran</h1>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
        {/* Stepper */}
        <div className="lg:col-span-2 ">
          <div className="border rounded-lg p-6 flex items-center justify-between">
            <Stepper bg1="blue" bg2="gray" text1="blue" text2="gray" icon1="ph-check-circle" icon2="ph-dots-three-circle"></Stepper>
          </div>

          <h2 className="text-lg font-semibold py-4">Pilih Metode Pembayaran</h2>
          <div className="border rounded-lg p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            {dataPembayaran.map((item, index) => (
              <div key={index} className="border rounded-md px-4 py-3">
                <p className="mb-1 text-xl text-center font-bold">{item.label}</p>
                <img src={item.value} alt="" className="w-full object-contain max-h-20 px-6 py-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Pemesanan */}
        <div className="border rounded-lg p-6 h-full">
          <h2 className="text-lg font-semibold mb-4 text-center">Pemesanan</h2>

          <div className="text-sm text-gray-600 space-y-6">
            <div className="flex justify-between">
              <span>Tanggal</span>
              <span>28-11-2025</span>
            </div>
            <div className="flex justify-between">
              <span>Waktu</span>
              <span>21.43</span>
            </div>
          </div>

          <hr className="my-4 mb-6" />

          <div className="text-sm space-y-6">
            <div className="flex justify-between font-medium">
              <span>Paket</span>
              <span>Basic</span>
            </div>
            <p className="text-xs text-gray-500">[1 Konsep + 3x revisi]</p>
          </div>

          <hr className="my-4 mb-6" />

          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rp 5.000.000</span>
            </div>
            <div className="flex justify-between space-y-8">
              <span>Diskon</span>
              <span>Rp 0</span>
            </div>
            <div className="flex justify-between font-semibold ">
              <span>Total</span>
              <span>Rp 5.000.000</span>
            </div>
          </div>

          <hr className="my-4" />

          <div className="relative">
            <Link to="/pemesanan/pembayaran3">
              <Button
                variant="outline"
                className="absolute right-0 mt-6 font-bold"
              >
                Lanjut
              </Button>
            </Link>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}
