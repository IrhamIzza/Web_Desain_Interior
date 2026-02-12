import { Button } from "@/components/ui/button";
import Stepper from "@/components/pembayaran/Stepper";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function Pembayaran() {
  const dataPembayaran = [
    { label: "Nama", value: "Mulyo Basuki" },
    { label: "Email", value: "mulyobasuki@gmail.com" },
    { label: "Alamat", value: "Jl. Patimura No 30 Kota Blitar" },
    { label: "No. Telepon", value: "0811-1234-5678" },
    { label: "Negara", value: "Indonesia" },
    { label: "Tanggal Pemesanan", value: "28-11-2025" },
    { label: "Paket", value: "Basic" },
    { label: "Total Pembayaran", value: "Rp 5.000.000" },
  ];

  return (
    <div className="py-10 px-34">
      <h1 className="text-2xl font-bold mb-6">Metode Pembayaran</h1>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
        {/* Stepper */}
        <div className="lg:col-span-2 ">
          <div className="border rounded-lg p-6 flex items-center justify-between">
            <Stepper
              bg1="blue"
              bg2="blue"
              text1="blue"
              text2="blue"
              icon1="ph-check-circle"
              icon2="ph-check-circle"
            ></Stepper>
          </div>

          <h2 className="text-lg font-semibold py-4">Details Pembayaran</h2>
          <div className="border rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataPembayaran.map((item, index) => (
              <div key={index} className="rounded-md px-4 py-3">
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
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
            <Link to="/pemesanan">
              <Button
                variant="outline"
                className="absolute right-0 mt-6 font-bold"
                onClick={() => {
                  toast.promise(
                    () =>
                      new Promise((resolve) =>
                        setTimeout(() => resolve(), 2000),
                      ),
                    {
                      loading: "Loading...",
                      success: {
                        message: "Pembayaran Anda Telah Kami Konfirmasi 🎉",
                        description:
                          "Kami telah mengonfirmasi pembayaran Rp 5.000.000. Silakan cek Email atau WhatsApp Anda untuk link revisi desain.",
                      },
                      error: "Error",
                    },
                  );
                }}
              >
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
