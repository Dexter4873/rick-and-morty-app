function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <h1>Rick and Morty</h1>
      <div className="info">
        <h4>Characters: {props.charactersCount}</h4>
        <h4>Locations: {props.locationsCount}</h4>
        <h4>Episodes: {props.episodesCount}</h4>
      </div>
    </div>
  );
}

export default Jumbotron;
