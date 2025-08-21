import { Link } from 'react-router-dom';
import './BackButton.css';

export default function BackButton() {
  return (
    <Link to="/" className="bg-neutral-800 border border-zinc-600 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg items-center">
      Back
    </Link>
  );
}