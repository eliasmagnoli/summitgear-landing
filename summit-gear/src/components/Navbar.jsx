import { useState, useEffect } from "react";
import { Mountain, Search, Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Trekking", "Escalada", "Campamento", "Accesorios", "Outlet"];

  return (
    <>
      {/* Top bar */}
      <div className="bg-orange-600 text-slate-950 text-xs font-bold tracking-[0.2em] uppercase text-center py-1.5">
        ⛰ Envío gratis en compras +$150.000 &nbsp;|&nbsp; Asesoramiento técnico sin cargo
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.6)] border-b border-slate-800"
            : "bg-slate-950 border-b border-slate-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 rounded blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                <Mountain className="relative w-7 h-7 text-orange-500" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-white font-black tracking-[0.15em] uppercase text-lg"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Summit
                </span>
                <span
                  className="text-orange-500 font-bold tracking-[0.4em] uppercase text-[9px]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Gear Co.
                </span>
              </div>
            </a>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="relative px-3 py-1.5 text-slate-400 hover:text-orange-400 text-sm font-semibold tracking-widest uppercase transition-colors duration-200 group"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
                  >
                    {link}
                    <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-slate-400 hover:text-orange-400 transition-colors duration-200"
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 text-slate-400 hover:text-orange-400 transition-colors duration-200"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Search bar expandable */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              searchOpen ? "max-h-16 pb-3 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Buscar equipo, marca, categoría..."
                className="w-full bg-slate-900 border border-slate-700 focus:border-orange-500 text-slate-200 placeholder-slate-600 pl-10 pr-4 py-2.5 rounded text-sm outline-none transition-colors duration-200"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
              />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-slate-800 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-slate-900 px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="flex items-center justify-between px-3 py-2.5 text-slate-300 hover:text-orange-400 hover:bg-slate-800 rounded transition-all duration-150 font-bold tracking-widest uppercase text-sm group"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {link}
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-orange-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}