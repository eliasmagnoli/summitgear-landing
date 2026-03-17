import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import { SlidersHorizontal, Mountain } from "lucide-react";

// Available categories derived from products
const ALL = "Todos";

export default function App() {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [sortBy, setSortBy] = useState("default");

  // Cart total items count
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Add product to cart (accumulates quantity)
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Unique categories from products
  const categories = useMemo(() => {
    const cats = [...new Set(products.map((p) => p.category))];
    return [ALL, ...cats];
  }, []);

  // Filtered + sorted products
  const filteredProducts = useMemo(() => {
    let list =
      activeCategory === ALL
        ? products
        : products.filter((p) => p.category === activeCategory);

    if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Google Fonts - Barlow Condensed */}
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <Navbar cartCount={cartCount} />
      <Hero />

      {/* Products Section */}
      <section id="productos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-orange-500" />
              <span
                className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Catálogo Completo
              </span>
            </div>
            <h2
              className="text-white font-black uppercase text-5xl sm:text-6xl leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Nuestro Gear
            </h2>
            <p className="text-slate-500 text-sm mt-2" style={{ fontFamily: "'Barlow', sans-serif" }}>
              {filteredProducts.length} productos disponibles
            </p>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-slate-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-slate-300 text-sm font-bold tracking-wider uppercase px-3 py-2 outline-none focus:border-orange-500 transition-colors cursor-pointer"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              <option value="default">Ordenar: Destacados</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="rating">Mejor Calificados</option>
            </select>
          </div>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-black tracking-[0.12em] uppercase text-xs px-4 py-2 border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "bg-transparent border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300"
              }`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Mountain className="w-12 h-12 text-slate-700 mb-4" strokeWidth={1} />
            <p className="text-slate-500 font-bold tracking-widest uppercase text-sm"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              No hay productos en esta categoría
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Mountain className="w-5 h-5 text-orange-500" strokeWidth={1.5} />
            <span
              className="text-slate-500 font-bold tracking-[0.2em] uppercase text-sm"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Summit Gear Co. — {new Date().getFullYear()}
            </span>
          </div>
          <p className="text-slate-700 text-xs tracking-wider uppercase font-bold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Equipo técnico para alta montaña
          </p>
        </div>
      </footer>
    </div>
  );
}
