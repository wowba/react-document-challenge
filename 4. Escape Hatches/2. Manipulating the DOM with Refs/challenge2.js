import { useRef } from 'react'

export default function Page() {
  let inputRef = useRef(null)

  const handleBtnClick = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <nav>
        <button onClick={handleBtnClick}>Search</button>
      </nav>
      <input ref={inputRef}
        placeholder="Looking for something?"
      />
    </>
  );
}
