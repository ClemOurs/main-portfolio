import Image from "next/image"
import Links from "../config/links.json"
import Link from "next/link"
import MemojiNav from "../public/memojis/memoji_1.svg"

const Navbar =() => (
    <nav className="nav">
        <Link href={"/"}>
            <a>
                <Image 
                    className="homeButton"
                    src={MemojiNav} 
                    alt="my avatar for nav" 
                    width = {40} 
                    height = {50}
                />
            </a>
        </Link>
        <ul>
            { Links.map(link => {
                return(
                    <li key={link.id}><Link href={link.path}>{link.label}</Link></li>
                )}
            )}
        </ul>
    </nav>
)

export default Navbar