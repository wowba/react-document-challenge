import { people } from './data.js';
import { getImageUrl } from './utils.js';

function Item({ person }) {
  return (
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  )
}

export default function List() {
  const chemists = people.filter((item) => item.profession === 'chemist')
  const others = people.filter((item) => item.profession !== 'chemist')
  const chemistLists = chemists.map(person => <Item person={person} />);
  const otherLists = others.map(person => <Item person={person} />);
  return (
    <article>
      <h1>chemists</h1>
      <ul>{chemistLists}</ul>
      <h1>others</h1>
      <ul>{otherLists}</ul>
    </article>
  );
}
