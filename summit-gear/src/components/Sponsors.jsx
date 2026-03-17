const sponsors = [
  { name: "Black Diamond", abbr: "BD" },
  { name: "Petzl", abbr: "PTZ" },
  { name: "Osprey", abbr: "OSP" },
  { name: "La Sportiva", abbr: "LS" },
  { name: "Marmot", abbr: "MRM" },
  { name: "Arc'teryx", abbr: "ARC" },
  { name: "Salewa", abbr: "SLW" },
  { name: "Mammut", abbr: "MMT" },
];

// Duplicamos para el loop infinito sin salto
const track = [...sponsors, ...sponsors];

export default function Sponsors() {
  return (
    <div className="border-y border-slate-800 bg-slate-950 py-5 overflow-hidden">
      {/* Label lateral */}
      <div className="flex items-center gap-6">
        <span
          className="shrink-0 pl-6 sm:pl-10 text-slate-700 font-black tracking-[0.25em] uppercase text-[10px] pr-6 border-r border-slate-800"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Partners
        </span>

        {/* Marquee track */}
        <div className="relative flex-1 overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10" />

          <div
            className="flex items-center gap-10 w-max"
            style={{ animation: "marquee 28s linear infinite" }}
          >
            {track.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 group cursor-default select-none"
              >
                {/* Monogram badge */}
                <div className="w-7 h-7 border border-slate-700 group-hover:border-orange-500/50 flex items-center justify-center transition-colors duration-200 shrink-0">
                  <span
                    className="text-slate-600 group-hover:text-orange-500 font-black text-[8px] tracking-tight transition-colors duration-200"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {s.abbr}
                  </span>
                </div>
                {/* Name */}
                <span
                  className="text-slate-600 group-hover:text-slate-400 font-bold tracking-[0.15em] uppercase text-xs whitespace-nowrap transition-colors duration-200"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {s.name}
                </span>
                {/* Separator dot */}
                <span className="text-slate-800 text-xs ml-2">◆</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe inyectado inline para no requerir config extra de Tailwind */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
