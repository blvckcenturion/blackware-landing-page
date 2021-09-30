import { useEffect} from 'react'
import { Isotype } from './Icons'
import gsap from 'gsap'
import { useRouter } from 'next/router'

const Header = () => {

    const router = useRouter()
    console.log(router)

    useEffect(() => {
        const tl = gsap.timeline()
        tl
            .fromTo('.header', { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 1, ease: "power3.inOut" })
            .fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3.inOut" })
            .fromTo('.isotype-wrapper', { scale: 0,opacity: 0,  rotate: "-90deg" }, {  scale: 1,opacity: 1, rotate: "0deg",  duration: 1, ease: "power3.out"})
    }, [])
    
    return (
        <div className="header">
            <nav>
                <div className="isotype-wrapper">
                    <Isotype></Isotype>
                </div>

                <div className="contact-us">
                    {router.route !== '/contact' && (
                        <button>
                            Contratanos.
                        </button>
                    )
                    }
                    
                </div>
            </nav>
        </div>
    )
}

export default Header
