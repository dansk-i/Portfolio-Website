import { Link } from "react-router-dom";
import SchematicMap from "../transit/SchematicMap";

export default function Transit() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      {/* Fullscreen map */}
      <div className="h-full w-full">
        <SchematicMap />
      </div>

      {/* Optional: small overlay controls (can delete if you want pure map) */}
      <div className="pointer-events-none absolute right-4 top-4 z-50 flex gap-2">
        <Link
          to="/"
          className="pointer-events-auto rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-sm text-white backdrop-blur hover:bg-black/65"
        >
          ← Home
        </Link>

        <a
          href="https://github.com/dansk-i/Toronto-Transit-Map"
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-sm text-white backdrop-blur hover:bg-black/65"
        >
          Code →
        </a>
      </div>
    </div>
  );
}
