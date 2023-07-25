import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav>
      <p>Logo</p>
      <div className="search-bar">
        <input type="text" />
      </div>
      <nav>
        <Link to="/characters">
          <i className="fa-solid fa-person"></i> Characters
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
