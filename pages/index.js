import Image from "next/image"
import memojiPic from "../public/memojis/memoji_3.svg"

export default function Home() {
  return (
    // <div className={styles.container}>
    // </div>
    <div>
      <h1>Titre</h1>
      <Image src={memojiPic} alt="my avatar making peace pose"/>
    </div>
  )
}
