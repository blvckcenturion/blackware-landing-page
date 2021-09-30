import { useEffect } from "react"
import Header from "../components/header"
import gsap from "gsap"
import { ABOUT_PAGE_POINTS } from "../utils/data"
import Image from "next/image"
const About = () => {

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to('body', {backgroundColor: '#F4F6F3', duration: 0})
    }, [])
    return (
        <div className="about-page">
            <Header />
            <div className="about-page__content">    
                <div className="about-page__heading">
                    <div className="about-page__heading-title">
                        <h1>
                            SOMOS BLACKWARE.
                        </h1>
                    </div>
                    
                    <div className="about-page__heading-content">
                        <div className="about-page__heading-content-p">
                            <p>
                            Creamos experiencias digitales hermosas a traves del uso de tecnologias vanguardistas que adaptan negocios al mundo digital.
                            </p>
                        </div>
                        <div className="about-page__heading-content-action">
                            <button>
                                Quiero una aplicacion web.
                            </button>
                        </div>
                    </div>  
                </div>
                <div className="about-page__enum">
                    {ABOUT_PAGE_POINTS.map((point, i) => <EnumeratedContainer key={i} n={i + 1} content={ point} />)}
                </div>
                <div className="about-page__objective">
                    <div className="about-page__objective-text">
                        <div className="objective-heading">
                            <h2>Nuestro Objetivo.</h2>
                        </div>
                        <div className="objective-parragraph">
                            <p>
                            Nos encargamos de traer al mundo  digital proyectos que operan de forma convencional, adaptando sus negocios a este mundo aplicando tecnologias de punta, para brindarle al cliente y al usuario una experiencia autenticamente innovadora.
                            </p>
                        </div>
                    </div>
                    <div className="about-page__objective-img">
                        <img className="objective-img" src="/images/cheemi.png" alt="Cheemi Website" layout="fill" />
                    </div>
                </div>
                <div className="about-page__belief">

                </div>
                <div className="about-page__projects">

                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default About


const EnumeratedContainer = ({ n, content}) => {
    return (
        <div className="enumerated-container">
            <div className="enumerated-container__number">
                <h4>
                    {n}.
                </h4>
            </div>
            <div className="enumerated-container__content">
                <p>
                    { content}
                </p>
            </div>
        </div>
    )
}