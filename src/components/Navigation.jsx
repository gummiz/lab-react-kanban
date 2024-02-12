import "../style/navigation.css"
import logo from "../assets/logo-ironhack-blue.png"

function Navigation() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          {/* Icon */}
          {/* <img src="" alt="Burger Icon" /> */}
          <h3>HackBoard</h3>
        </div>
          {/* Title */}
        {/* Logo */}
       
        <img src={logo} alt="Our Own Logo" className="navbar__logo"/>
      </div>
    </>
  );
}

export default Navigation;
