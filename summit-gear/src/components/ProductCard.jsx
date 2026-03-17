import { Star, ExternalLink } from "lucide-react";

export default function ProductCard({ product }) {
  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating)
            ? "text-orange-400 fill-orange-400"
            : i < rating
            ? "text-orange-400 fill-orange-400/40"
            : "text-slate-700"
        }`}
      />
    ));

  return (
    <article className="group relative bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">

      {/* Image container */}
      <div className="relative overflow-hidden bg-slate-800 aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span
            className="bg-slate-950/80 backdrop-blur-sm border border-slate-700 text-slate-400 text-[9px] font-black tracking-[0.2em] uppercase px-2 py-1"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {product.category}
          </span>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">

        {/* Brand */}
        <span
          className="text-orange-500 text-[10px] font-black tracking-[0.25em] uppercase mb-1"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {product.brand}
        </span>

        {/* Name */}
        <h3
          className="text-white font-bold text-base leading-tight mb-2 group-hover:text-orange-50 transition-colors line-clamp-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-0.5">
            {renderStars(product.rating)}
          </div>
          <span className="text-slate-500 text-xs font-mono">{product.rating.toFixed(1)}</span>
        </div>

        {/* Description */}
        {product.description && (
          <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-4 flex-1"
            style={{ fontFamily: "'Barlow', sans-serif" }}>
            {product.description}
          </p>
        )}

        {/* Bottom: Price + CTA */}
        <div className="flex items-center justify-between gap-3 mt-auto pt-3 border-t border-slate-800">
          <span
            className="text-white font-black text-xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            ${product.price.toLocaleString("es-AR")}
          </span>
          <a
            href="#contacto"
            className="flex items-center gap-1.5 text-orange-500 hover:text-orange-400 font-black tracking-[0.1em] uppercase text-xs transition-colors duration-200 group"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Consultar
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-[2px] bg-gradient-to-r from-orange-600 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </article>
  );
}