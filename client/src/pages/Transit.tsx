import { Link } from "react-router-dom";
import SchematicMap from "../transit/SchematicMap";
import TransitIntro from "../transit/TransitIntro";

export default function Transit() {
  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* Top bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Toronto Transit Map (Schematic Prototype)
            </h1>
            <p className="mt-1 text-sm text-white/70">
              Interactive layered schematic — built with React + TypeScript + SVG.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              ← Back to Home
            </Link>

            {/* Optional: link to repo */}
            <a
              href="https://github.com/dansk-i/Toronto-Transit-Map"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              View Code →
            </a>
          </div>
        </div>

        {/* Intro / write-up */}
        <div className="mt-6">
          <TransitIntro />
        </div>

        {/* Map frame */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-3">
          <div className="h-[70vh] w-full overflow-hidden rounded-xl border border-white/10 bg-black/30">
            <SchematicMap />
          </div>

          <p className="mt-3 text-xs text-white/60">
            Tip: Drag to pan, scroll to zoom (depending on your current controls).
          </p>
        </section>
      </div>
    </main>
  );
}
