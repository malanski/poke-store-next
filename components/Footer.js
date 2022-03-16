import Image from 'next/image'
import logo from '../public/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faGithubAlt, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
export default function Footer () {
    return(
        <div>
            <footer>
                <Image className='logo'
                    src={logo}
                    alt="logo"
                    width='200px'    
                    height='100%'
                    // blurDataURL="data:..." automatically provided
                    placeholder="blur" // Optional blur-up while loading
                />
                <ul className="social">
                    <li>
                        <a href="https://github.com/malanski" title="Github Profile">
                            <FontAwesomeIcon icon={faGithubAlt} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ulisses-malanski/" title="Linkedin Profile">
                            <FontAwesomeIcon icon={faLinkedin} />

                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/ulisses.malanski" title="FaceBook Profile">
                            <FontAwesomeIcon icon={faFacebookSquare} />

                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/ulisses.malanski" title="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>                
                </ul>
            </footer>
            
            <div className='bottom-signature'>
                <p>Developed by Ulisses Malanski at Awari School</p>
            </div>
        </div>
    )
}
