import "../style/sidebar.css"

function Sidebar() {
  return (
 <div className="sidebar">
        <div className="sidebar__projectname">
            <ul>
                <li>Project1</li>
            </ul>
        </div>
        <div className="sidebar__subsection">
            <ul>
                <li>About</li>    
            </ul>
        </div>
 </div>
  )
}

export default Sidebar;
