import { Link } from "react-router-dom";

export default function OptionBar() {
  return (
    <div className="mt-8 text-center">
      <Link to="/">
        <button className="hover-transition font-bold bg-white text-lg px-2 py-1 rounded-tl-md rounded-bl-md">
          Home
        </button>
      </Link>
      <Link to="/dokan">
        <button className="hover-transition font-bold bg-white text-lg px-4 py-1 border-l-2">Dokan</button>
      </Link>
      <Link to="/transaction">
        <button className="hover-transition font-bold bg-white text-lg px-4 py-1 border-l-2">
          Transaction
        </button>
      </Link>
      <Link to="/summary">
        <button className="hover-transition font-bold bg-white text-lg px-2 py-1 border-l-2 rounded-tr-md rounded-br-md">
          Summary
        </button>
      </Link>
    </div>
  );
}
