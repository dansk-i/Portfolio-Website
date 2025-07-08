import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home     from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/projects" element={<Projects />} />

        {/* Future pages */}
        <Route path="/about"    element={<p>About page coming soon…</p>} />
        <Route path="*"         element={<p>404 – Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}