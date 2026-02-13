import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navClass = ({ isActive }) =>
    `relative pb-[1px] transition-colors duration-300
     ${isActive ? "text-gold" : "text-black hover:text-gold"}
     after:absolute after:left-1/2 after:-bottom-1
     after:h-[2px] after:bg-gold after:rounded-full
     after:-translate-x-1/2
     after:transition-all after:duration-300
     ${isActive ? "after:w-[85%]" : "after:w-0 hover:after:w-[85%]"}`;

  return (
    <nav className="p-4 border-b-2  border-gray-400 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-gold text-3xl font-bold">Desain Interior</div>

        {/* Menu */}
        <ul className="hidden sm:flex gap-10 font-medium text-[20px] tracking-wide">
          <li>
            <NavLink to="/" end className={navClass}>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to="/tentang" className={navClass}>
              Tentang
            </NavLink>
          </li>
          <li>
            <NavLink to="/kategori" className={navClass}>
              Kategori
            </NavLink>
          </li>
          <li>
            <NavLink to="/testimoni" className={navClass}>
              Testimoni
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontak" className={navClass}>
              Kontak
            </NavLink>
          </li>
          <li>
            <NavLink to="/pemesanan" className={navClass}>
              Pemesanan
            </NavLink>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block sm:hidden text-black focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <i className="ph ph-x text-2xl"></i>
          ) : (
            <i className="ph ph-list text-2xl"></i>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`transition-all duration-300 sm:hidden mt-3 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 text-black">
          <li>
            <Link
              to="/"
              className="block px-2 py-1 hover:bg-blue-500 rounded"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="/tentang"
              className="block px-2 py-1 hover:bg-blue-500 rounded"
              onClick={() => setIsOpen(false)}
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              to="/kategori"
              className="block px-2 py-1 hover:bg-blue-500 rounded"
              onClick={() => setIsOpen(false)}
            >
              Kategori
            </Link>
          </li>
          <li>
            <Link
              to="/testimoni"
              className="block px-2 py-1 hover:bg-blue-500 rounded"
              onClick={() => setIsOpen(false)}
            >
              Testimoni
            </Link>
          </li>
          <li>
            <Link
              to="/kontak"
              className="block px-2 py-1 hover:bg-blue-500 rounded"
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </Link>
          </li>
          <li>
            <Link
              to="/pemesanan"
              className="block px-2 py-1 hover:bg-blue-500 rounded"
              onClick={() => setIsOpen(false)}
            >
              Pemesanan
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
