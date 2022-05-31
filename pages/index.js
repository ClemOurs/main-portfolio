import Image from "next/image"
import Links from "../components/links"
import HeroInfo from "../components/heroInfo"
import MePicture from "../public/me.png"

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-container">
        <Links/>
        <Image src={MePicture} width={730} height={500}/>
        <HeroInfo/>
      </div>
    </section>
  )
}
