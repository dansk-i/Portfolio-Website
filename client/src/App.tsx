import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home     from './pages/Home';
import Projects from './pages/Projects';
import './App.css';
import './pages/Grid.css';

export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-900">
      {/* Grid background behind everything */}
      <div className="grid-background" />

      {/* Main app routing */}
      <div className="relative z-10">

        <BrowserRouter basename="/Portfolio-Website">
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/projects" element={<Projects />} />

            {/* Future pages */}
            <Route path="/about"    element={<p>About page coming soon…</p>} />
            <Route path="*"         element={<p>404 – Page Not Found</p>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}