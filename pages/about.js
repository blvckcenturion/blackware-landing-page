import { useEffect } from "react"
import Header from "../components/header"
import gsap from "gsap"

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
                    <EnumeratedContainer />
                    <EnumeratedContainer />
                    <EnumeratedContainer />
                    <EnumeratedContainer />
                    <EnumeratedContainer />
                </div>
            </div>
        </div>
    )
}

export default About


const EnumeratedContainer = () => {
    return (
        <div className="enumerated-container">
            <div className="enumerated-container__number">
                <h4 className="enumerated-container__h4">
                    1.
                </h4>
            </div>
            <div className="enumerated-container__content">
                <p>
                Celebre estudio internacional de ingeniera de software impulsado por el enfoque extremo en el diseño y la experiencia del usuario.
                </p>
            </div>
        </div>
    )
}