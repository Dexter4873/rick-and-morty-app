import Card from './Card.jsx';

function CharacterCard({ name, status, image }) {
  return <Card title={name} subtitle={status} img={image}></Card>;
}

export default CharacterCard;
