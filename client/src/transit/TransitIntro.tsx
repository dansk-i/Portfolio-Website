export default function TransitIntro() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="text-lg font-semibold">Why this project matters</h2>

      <p className="mt-2 text-sm text-white/75 leading-relaxed">
        This prototype explores how complex transit networks can be communicated through
        clear schematic design and interactive layers. It’s an evolving map system that
        separates “current service” from “in-development” and “proposed” networks, helping
        users understand not just where transit is, but where it’s going.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <h3 className="text-sm font-semibold">What it demonstrates</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-white/70 space-y-1">
            <li>Layered transit visualization (subway / GO / proposed / construction)</li>
            <li>SVG rendering with scalable styling + interaction</li>
            <li>Reusable data-driven map structure (lines + stations)</li>
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <h3 className="text-sm font-semibold">Next steps</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-white/70 space-y-1">
            <li>Rebuild the real-world MapLibre version cleanly</li>
            <li>Improve station interactions (tooltips, filtering, search)</li>
            <li>Refine schematic geometry + accessibility</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
