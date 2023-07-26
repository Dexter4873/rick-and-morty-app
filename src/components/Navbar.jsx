import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src="../../public/logo.png" alt="logo" />
      </Link>
      <div className="search-bar">
        <div className="search-input">
          <input type="text" />
          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <nav className="nav">
        <Link to="/characters">
          <i className="fa-solid fa-person"></i>Characters
        </Link>
        <Link to="/locations">
          <i className="fa-solid fa-map-location"></i>Locations
        </Link>
        <Link to="/episodes">
          <i className="fa-solid fa-list"></i>Episodes
        </Link>
      </nav>
    </nav>
  );
}

export default Navbar;
