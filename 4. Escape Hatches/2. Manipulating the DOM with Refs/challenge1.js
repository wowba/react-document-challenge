import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null)

  function handleClick() {
    if (!isPlaying) videoRef.current.play()
    if (isPlaying) videoRef.current.pause()
    setIsPlaying(!isPlaying);

  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video ref={videoRef} width="250" onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
