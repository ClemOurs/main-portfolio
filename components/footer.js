import Image from "next/image"
import MemojiFooter from "../public/memojis/memoji_2.svg"

const Footer = () => (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-hero">
                <div>
                    <ul>
                        <li><h5>find me</h5></li>
                        <li><a href="https://www.github.com/ClemOurs" target={"_blank"}>my github</a></li>
                        <li><a href="https://www.linkedin.com/in/clementduvivier" target={"_blank"}>my linkedin</a></li>
                        <li>my discord : <span>dusa#1069</span></li>
                        <li><address> <a href="mailto:duvivier.clem@gmail.com">get in touch</a></address></li>
                    </ul>
                    <ul>
                        <li><h5>about</h5></li>
                        <li><a href="https://www.iim.fr" target={"_blank"}>my school</a></li>
                        <li><a href="https://www.nouvellesdonnes.com" target={"_blank"}>where i work</a></li>
                    </ul>
                </div>
                <Image src={MemojiFooter} 
                    alt="footer avatar of me"
                    width={110}
                    height={104}
                />
            </div>
            <div className="footer-rights">
                <div className="border"></div>
                <div className="copyrights">
                    <p>Copyright © 2022 Clément Duvivier All rights reserved.</p>
                    <q>the force will be with you, always</q>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer