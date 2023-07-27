import Card from './Card.jsx';

function EpisodeCard({ id, name, air_date }) {
  return <Card title={`Episode: ${id}: ${name}`} subtitle={air_date}></Card>;
}

export default EpisodeCard;
