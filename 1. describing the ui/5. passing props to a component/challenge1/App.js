import { getImageUrl } from './utils.js/index.js';

function Profile({ size, person }) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(person.src)}
        alt={person.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          physicist and chemist
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>
          ({person.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovered}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        size={70}
        person={{
          name: 'Maria Skłodowska-Curie',
          src: 'szV5sdG',
          profession: `physicist and chemist`,
          awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry',
            'Davy Medal', 'Matteucci Medal'],
          discovered: `polonium (element)`
        }}
      />
      <Profile
        size={70}
        person={{
          name: 'Katsuko Saruhashi',
          src: 'YfeOqp2',
          profession: `geochemist`,
          awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
          discovered: `a method for measuring carbon dioxide in seawater`
        }}
      />
    </div>
  );
}
