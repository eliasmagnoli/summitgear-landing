import { ArrowRight, Shield, Zap, Wind } from "lucide-react";

const badges = [
  { icon: Shield, label: "Gear Certificado" },
  { icon: Zap, label: "Alta Performance" },
  { icon: Wind, label: "All-Weather" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-950">

      {/* Background image with parallax-style overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&auto=format&fit=crop&q=80"
          alt="Mountain landscape"
          className="w-full h-full object-cover object-center opacity-30"
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative vertical rule */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500/40 to-transparent hidden lg:block" />

      {/* Altitude indicator - decorative */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2 opacity-50">
        <span className="text-orange-400 text-[9px] font-black tracking-[0.3em] uppercase rotate-90 mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          Elevation
        </span>
        {[6962, 6893, 5895, 4808].map((alt) => (
          <div key={alt} className="flex items-center gap-2">
            <div className="w-3 h-px bg-orange-500/60" />
            <span className="text-slate-500 text-[9px] font-mono">{alt}m</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-orange-500" />
            <span
              className="text-orange-500 font-black tracking-[0.35em] uppercase text-xs"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Temporada 2025 — Nueva Colección
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-black uppercase leading-none tracking-tight mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            <span className="block text-white text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem]">
              Conquista
            </span>
            <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem]"
              style={{
                WebkitTextStroke: "2px #f97316",
                color: "transparent",
              }}
            >
              Cada Cumbre
            </span>
            <span className="block text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Con el Gear Correcto
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Equipo técnico de alto rendimiento para trekking y escalada. 
            Selección curada por alpinistas, para alpinistas. 
            <span className="text-slate-300"> Desde el Aconcagua hasta los Alpes.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#productos"
              className="group flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-black tracking-[0.1em] uppercase px-8 py-4 transition-all duration-200 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}
            >
              Explorar Ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#"
              className="flex items-center gap-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-bold tracking-[0.1em] uppercase px-8 py-4 transition-all duration-200"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}
            >
              Ver Lookbook
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 group">
                <div className="p-1.5 border border-slate-700 group-hover:border-orange-500/50 transition-colors duration-200">
                  <Icon className="w-3.5 h-3.5 text-orange-500" />
                </div>
                <span
                  className="text-slate-500 group-hover:text-slate-300 font-bold tracking-[0.15em] uppercase text-xs transition-colors duration-200"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent z-10" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-600 text-[9px] tracking-[0.3em] uppercase font-bold"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
