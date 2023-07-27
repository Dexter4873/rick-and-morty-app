import Card from './Card.jsx';

function LocationCard({ name, type }) {
  return <Card title={name} subtitle={type}></Card>;
}

export default LocationCard;
