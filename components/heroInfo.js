import Link from "next/link"

export default function Links() {
    return(
        <div className="hero-infos">
            <h2 className="textWhite">Hello There,<br/><span className="gradient">I'm Clément Duvivier</span></h2>
            <h4 className="textWhite uppercase">fullstack developer</h4>
            <Link href="/about">
                <a className="button">learn more about me</a>
            </Link>
        </div>
    )
}