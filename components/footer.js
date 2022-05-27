import Image from "next/image"
import MemojiFooter from "../public/memojis/memoji_2.svg"

const Footer = () => (
    <footer>
        <div>
                <ul>
                    <li>
                        find me
                        <li><a href="https://www.github.com/ClemOurs" target={"_blank"}>my github</a></li>
                        <li><a href="https://www.linkedin.com/in/clementduvivier" target={"_blank"}>my linkedin</a></li>
                        <li>my discord : <span>dusa#1069</span></li>
                        <li><address> <a href="mailto:duvivier.clem@gmail.com">get in touch</a></address></li>
                    </li>
                </ul>
                <ul>
                    <li>
                        about
                        <li><a href="https://www.iim.fr" target={"_blank"}>my school</a></li>
                        <li><a href="https://www.nouvellesdonnes.com" target={"_blank"}>where i work</a></li>
                    </li>
                </ul>
                <Image src={MemojiFooter} alt="footer avatar of me"/>
            </div>
        <div>
            <hr />
            <div>
                <p>Copyright © 2022 Clément Duvivier All rights reserved.</p>
                <q>the force will be with you, always</q>
            </div>
        </div>
    </footer>
)

export default Footer