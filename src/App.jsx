import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kategori from "./pages/Kategori";
import Pemesanan from "./pages/Pemesanan";

function App() {
  return (
    <>
    <Navbar>
    </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/pemesanan" element={<Pemesanan />} />
      </Routes>
    </>
  );
}
export default App;