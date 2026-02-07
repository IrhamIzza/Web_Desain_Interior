import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kategori from "./pages/Kategori";
import Pemesanan from "./pages/Pemesanan";
import DetailPemesanan from "./pages/DetailPemesanan";
import Pembayaran from "./pages/Pembayaran";

function App() {
  return (
    <>
    <Navbar>
    </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/pemesanan" element={<Pemesanan />} />
        <Route path="/pemesanan/detail_pemesanan" element={<DetailPemesanan />} />
        <Route path="/pemesanan/pembayaran" element={<Pembayaran />} />
      </Routes>
    </>
  );
}
export default App;