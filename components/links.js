import Image from "next/image"
import Link from "next/link"
import MailLogo from "../public/socials-logos/fluent_mail-16-filled.svg"
import GitLogo from "../public/socials-logos/github.svg"
import LinkedinLogo from "../public/socials-logos/linkedin.svg"

export default function Links() {
    return(
        <div className="hero-contact">
            <Link href={"https://www.github.com/ClemOurs"} target="_blank">
                <a>
                    <Image src={GitLogo} alt="logo mail" className="logo" width={32}/>
                </a>
            </Link>
            <Link href={"https://www.linkedin.com/in/clementduvivier"} target="_blank">
                <a>
                    <Image src={LinkedinLogo} alt="logo mail" className="logo" width={32}/>
                </a>
            </Link>
            <Link href={"/contact"}>
                <a>
                    <Image src={MailLogo} alt="logo mail" className="logo" width={32}/>
                </a>
            </Link>
        </div>
    )
}