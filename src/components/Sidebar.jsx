import "../style/sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__projectname">
        <ul>
        <Link to="/">Project 1</Link>
        </ul>
      </div>
      <div className="sidebar__subsection">
        <ul>
          <li>
            <Link to="/about" className="about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
