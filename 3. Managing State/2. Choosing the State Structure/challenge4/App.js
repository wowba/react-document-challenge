import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [selectedIdArr, setSelectedIdArr] = useState([]);

  const selectedCount = selectedIdArr.length;

  function handleToggle(toggledId) {
    if (selectedIdArr.includes(toggledId)) {
      setSelectedIdArr([...selectedIdArr].filter(id => id !== toggledId))
    } else {
      setSelectedIdArr([...selectedIdArr, toggledId])
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedIdArr.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}
