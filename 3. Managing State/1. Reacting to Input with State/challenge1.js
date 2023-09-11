import { useState } from "react"

export default function Picture() {
  const [divClass, setDivClass] = useState(["background", "background--active"])
  const [imgClass, setImgClass] = useState(["picture"])

  const handleClick = (e) => {
    e.stopPropagation()
    if (imgClass.includes("picture--active")) {
      setDivClass(["background", "background--active"])
      setImgClass(["picture"])
    } else {
      setImgClass(["picture", "picture--active"])
      setDivClass(["background"])
    }
  }

  return (
    <div className={divClass.join(" ")} onClick={handleClick}>
      <img
        className={imgClass.join(" ")}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={handleClick}
      />
    </div>
  );
}
