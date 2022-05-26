import Image from "next/image"
import memojiPic from "../public/memojis/memoji_3.svg"

export default function Home() {
  return (
    // <div className={styles.container}>
    // </div>
    <div>
      <h1>Titre</h1>
      <h2>Titre</h2>
      <h3>Titre</h3>
      <h4>Titre</h4>
      <h5>Titre</h5>
      <p>texte</p>
      <Image src={memojiPic} alt="my avatar making peace pose"/>
    </div>
  )
}
