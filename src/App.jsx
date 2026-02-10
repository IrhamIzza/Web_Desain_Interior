import Navbar from "./components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kategori from "./pages/Kategori";
import Pemesanan from "./pages/Pemesanan";
import DetailPemesanan from "./pages/DetailPemesanan";
import Pembayaran from "./pages/Pembayaran";
import Pembayaran2 from "./pages/Pembayaran2";
import Pembayaran3 from "./pages/Pembayaran3";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
    <Navbar>
    </Navbar>
        <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/pemesanan" element={<Pemesanan />} />
        <Route path="/pemesanan/detail_pemesanan" element={<DetailPemesanan />} />
        <Route path="/pemesanan/pembayaran" element={<Pembayaran />} />
        <Route path="/pemesanan/pembayaran2" element={<Pembayaran2 />} />
        <Route path="/pemesanan/pembayaran3" element={<Pembayaran3 />} />
      </Routes>
      <Toaster />
    </>
  );
}
export default App;