/* eslint-disable @next/next/no-img-element */
import {useEffect} from 'react'
import Header from '../components/header'
import gsap from 'gsap'
import Footer from '../components/footer'
import { CONTACT_PAGE_POINTS } from '../utils/data';
import EnumeratedContainer from '../components/enumeratedContainer';
import Heading from '../components/heading';

const Contact = () => {

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to('body', { backgroundColor: '#F4F6F3', overflow: 'hidden', duration: 0 })
            .to('.contact-page', {opacity: 1, duration: 0})
            .to('.contact-page__heading', {opacity:1, duration: 0})
            .fromTo('.heading_animated-2', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1,delay: 2, stagger: { amount: 1 }, ease: "power3.inOut" })
            .fromTo('.contact-page__offer', { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 1, ease: "power3.inOut" })
            .fromTo('.contact-page__offer-heading h2', { opacity: 0, y: 100, skewX: 20 }, { opacity: 1, y: 0, skewX: 0, duration: 1, ease: "power3.inOut" })
            .fromTo('.contact-page__offer-content', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1, ease: "power3.inOut" })
            .to('body', {overflow:'initial', duration: 0})
    }, [])

    const navigateToForm = () => {
        window.location.href = 'https://forms.gle/6yVXLRdWt4RMbSjf7'
    }

    return (
        <>
            <Header />
            <Heading title={"Contacto - BLACKWARE®"} description={"Desarrollamos aplicaciones web para negocios que brindan experiencias digitales hermosas a traves del uso de tecnologias vanguardistas que adaptan negocios al mundo digital."}/>
            <div className="noise"/>
            <div className="wrapper">
                <div className="contact-page">
                    <div className="contact-page__content">
                        <div className="contact-page__heading">
                            <h1 className="contact-page__title">{"A lo que vinimos.".split("").map((e, i) => <span className="heading_animated-2" key={ i }>{ e }</span>)}</h1>
                        </div>
                        <div className="contact-page__offer">
                            <div className="contact-page__offer-heading">
                                <h2>Que te ofrecemos?</h2>
                            </div>
                            <div className="contact-page__offer-content">
                                <div className="offer-setup">
                                    <div className="offer-setup__img">
                                        <img src="/images/contact/setup.png" alt="ipad pro website mockup"/>
                                    </div>
                                    <div className="offer-setup__content">
                                        <h3>Desarrollo & mantenimiento.</h3>
                                        <div className="offer-setup__content-p">
                                            <p>Nos encargamos del Desarrollo y Mantenimiento de incluir su negocio en línea, utilizando tecnologias de punta para el desarrollo de aplicaciones web, teniendo en cuenta todos y cada uno de los aspectos de los productos y/o los servicios que oferta su negocio, ofrecemos excelencia para satisfacer sus expectativas dentro del tiempo definido</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="offer-training">
                                    <div className="offer-training__img">
                                        <img src="/images/contact/mentor.jpeg" alt="training people image"/>
                                    </div>
                                    <div className="offer-training__content">
                                        <h3>Entrenamiento & mentorias.</h3>
                                        <div className="offer-training__content-p">
                                            <p>No solo apoyamos el desarrollo de su sitio web, somos mentores. Creemos en capacitar a nuestros clientes para mejorar sus habilidades técnicas. Brindamos capacitaciones y tutorías para mejorar su conocimiento técnico sobre las tecnologías que le brindamos, para que usted pueda sacarle el maximo provecho a las mismas.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-page__procedure">
                            <div className="contact-page__procedure-heading">
                                <h2>Como lo hacemos?</h2>
                            </div>
                        {CONTACT_PAGE_POINTS.map((point, i) => <EnumeratedContainer key={i} n={i + 1} content={ point} />)}
                        </div>
                        <div className="contact-page__free-quote">
                            <div className="contact-page__free-quote-heading">
                                <h2>Te damos una cuota gratuita.</h2>
                            </div>
                            <div className="contact-page__free-quote-content">
                                <div className="free-quote-content-p">
                                    <p>Nos interesa ayudarte. Por eso te damos una cuota para tu negocio gratuita, llena el siguiente formulario para ponernos en contacto y empezar con la evaluacion de tu negocio. </p>
                                </div>
                                <div className="free-quote-content-btn">
                                    <button onClick={ navigateToForm}>
                                        Ir al formulario.
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Contact
