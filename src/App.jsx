import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kategori from "./pages/Kategori";


function App() {
  return (
    <>
    <Navbar>
    </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kategori" element={<Kategori />} />
      </Routes>
    </>
  );
}
export default App;