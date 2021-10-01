import React from 'react'
import { Isotype } from "./Icons"
import { SOCIAL_MEDIA_LINKS } from "../utils/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import router, { useRouter } from 'next/router'

const Footer = () => {
    const router = useRouter()
    if(router.route !== '/') return (
        <div className="footer">
            <footer>
            <div className="footer-socials">
                    {SOCIAL_MEDIA_LINKS.map(({ href, icon }, i) => (
                        <a className="nav-social" key={i} href={href} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={icon} className="icon"/>
                        </a>
                    ))}
                </div>
                <div className="footer-logo">
                    <Isotype></Isotype>
                </div>
                
            </footer>
        </div>
    )
    else return null
    
}

export default Footer
