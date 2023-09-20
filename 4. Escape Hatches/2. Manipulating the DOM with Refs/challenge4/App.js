import { useRef } from 'react'
import SearchButton from './SearchButton.js';
import SearchInput from './SearchInput.js';

export default function Page() {
  let inputRef = useRef(null)

  return (
    <>
      <nav>
        <SearchButton onClick={() => inputRef.current.focus()} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}
