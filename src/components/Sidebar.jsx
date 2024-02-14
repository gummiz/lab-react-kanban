import "../style/sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <h2>Projects</h2>
        <hr />
        <div className="sidebar__projectname">
          <ul>
            <li>
              <Link to="/">Demo Project </Link>
            </li>
            <li>
              <Link to="/404" className="inactive">Module 3</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar__subsection">
        <ul>
          <Link to="/about" className="about">
            About
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
