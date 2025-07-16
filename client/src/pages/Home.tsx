import { Link } from 'react-router-dom';
import './Home.css'; // optional future styling

export default function Home() {
  return (
    <div className="home">
      <h1 className="text-4xl font-bold text-blue-500">Daniel Sobalski</h1>
      <p>
        Recent Computer Science graduate, aspiring graphics
        & full-stack developer.
      </p>

      {/* Navigation “cards” */}
      <section className="nav-cards">
        <Link to="/projects" className="nav-card">
          <h2>Projects</h2>
          <p>See my portfolio projects</p>
        </Link>

        {/* Placeholder for future pages */}
        <Link to="/about" className="nav-card">
          <h2>About Me</h2>
          <p>Background, skills, interests</p>
        </Link>
      </section>
    </div>
  );
}