import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);
  return (
    <div>
      {showHint && <p><i>Hint: Your favorite city?</i></p>}
      <Form />
      <button onClick={() => {
        if (showHint) setShowHint(false);
        if (!showHint) setShowHint(true);
      }}>Hide hint</button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}
