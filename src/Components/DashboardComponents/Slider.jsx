import { Link } from "react-router-dom";

function Slider() {
  return (
    <div className="bg-gray-200 border-r-2 border-black min-h-screen ">
      <ul className="flex flex-col gap-2">
        <li>
          <Link to="/">overview</Link>
        </li>
        <li>
          <Link to="/">My products</Link>
        </li>
        <li>
          <Link to="/">Add Products</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button>Logout</button>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Slider;