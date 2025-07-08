import { Link } from 'react-router-dom';
import './BackButton.css';

export default function BackButton() {
  return (
    <Link to="/" className="back-btn">
      ← Back
    </Link>
  );
}