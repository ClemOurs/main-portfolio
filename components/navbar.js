import Image from "next/image"
import Links from "../config/links.json"
import Link from "next/link"
import MemojiNav from "../public/memojis/memoji_1.svg"

const Navbar =() => (
    <nav>
        <Link href={"/"}><a><Image src={MemojiNav} alt="my avatar for nav"/></a></Link>
        <ul>
            { Links.map(link => {
                return(
                    <li><Link href={link.path}>{link.label}</Link></li>
                )}
            )}
        </ul>
    </nav>
)

export default Navbar