import { Link } from 'react-router-dom';

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <h1>Rick and Morty</h1>
      <div className="info">
        <h4>
          <Link to="/characters">Characters: {props.charactersCount}</Link>
        </h4>
        <h4>
          <Link to="/locations">Locations: {props.locationsCount}</Link>
        </h4>
        <h4>
          <Link to="/episodes">Episodes: {props.episodesCount}</Link>
        </h4>
      </div>
    </div>
  );
}

export default Jumbotron;
