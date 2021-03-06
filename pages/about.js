/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react"
import Header from "../components/header"
import gsap from "gsap"
import { ABOUT_PAGE_POINTS, CASES } from "../utils/data"
import Link from "next/link"
import Image from 'next/image'
import { Isotype } from "../components/Icons"
import { SOCIAL_MEDIA_LINKS } from "../utils/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from '../components/footer'
import { useRouter } from 'next/router'
import EnumeratedContainer from "../components/enumeratedContainer"
import Heading from "../components/heading"
import ScrollToTop from "../utils/scrollToTop"

const About = () => {

    const router = useRouter()
    useEffect(() => {
        window.scrollTo(0, 0)
        const tl = gsap.timeline()
        tl
            
            .to('body', { backgroundColor: "#F4F6F3", overflow: "hidden", duration: 0 })
            .to('.about-page', { opacity: 1, duration: 0 })
            .fromTo('.heading_animated-1', { opacity: 0, scale: 0}, { opacity: 1, scale:1, duration: .8, stagger: { amount: 1.5}, delay: 2, ease: "power3.inOut" })
            .fromTo('.about-page__heading-content-p', { opacity: 0, x: -100, skewY: 10 }, { opacity: 1, x: 0, skewY: 0, duration: .8, delay: -.5, ease: "power3.inOut" })
            .fromTo('.about-page__heading-content-action button', { opacity: 0, x: 100, skewY: -10 }, { opacity: 1, x: 0, skewY: 0, duration: .5, ease: "power3.inOut" })
            .fromTo('.about-page__enum', { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 1, ease: "power3.inOut" })
            
            .to('body', {  overflow: 'initial', duration: 0 })
    }, [])

    const goToContact = () => {
        const tl = gsap.timeline()
        tl
            .to('body', { duration: 0, overflow: 'initial'})
            .to('.wrapper', { opacity: 0, duration: 1 })
            .then(() => router.push('/contact', undefined, {scroll: true}))
            
     }
    return (
        <>
        <ScrollToTop/>
        <Heading title={"Sobre Nosotros - BLACKWARE??"} description={"Desarrollamos aplicaciones web para negocios que brindan experiencias digitales hermosas a traves del uso de tecnologias vanguardistas que adaptan negocios al mundo digital."}/>
        <div className="noise"/>
        <div className="wrapper">
                <Header contact={ goToContact }/>
        <div className="about-page">
            <div className="about-page__content">    
                <div className="about-page__heading">
                    <div className="about-page__heading-title">
                        <h1>
                                    {"SOMOS BLACKWARE.".split("").map((e, i) => <span className="heading_animated-1" key={i}>{e}</span>)}
                        </h1>
                    </div>
                    <div className="about-page__heading-content">
                        <div className="about-page__heading-content-p">
                            <p>
                            Creamos aplicaciones web que brindan experiencias digitales hermosas a traves del uso de tecnologias vanguardistas que adaptan negocios al mundo digital.
                            </p>
                        </div>
                        <div className="about-page__heading-content-action">
                            <button onClick={ goToContact}>
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
                <div className="about-page__belief-text">
                        <div className="belief-heading">
                            <h2>Nuestra Creencia.</h2>
                        </div>
                        <div className="belief-parragraph">
                            <p>
                            Somos un  grupo de rebeldes creativos que creen que el software y el dise??o pueden empoderar a cualquier negocio, especialmente en esta era digital.
basandonos en la experiencia perfeccionada para empoderar a las personas, las empresas y el mundo digital en general. a traves de aplicaciones web que permiten establecer una fuerte conexion digital con sus usuarios y/o clientes.

                            </p>
                        </div>
                    </div>
                    <div className="about-page__belief-img">
                        <img className="belief-img" src="/images/acrnm.png" alt="ACRNM Website" layout="fill" />
                    </div>
                </div>
                <div className="about-page__projects">
                    <div className="about-page__projects-heading">
                        <h2>Algunos de nuestros proyectos.</h2>
                    </div>
                            {CASES.map((e, i) => <ProjectContainer key={i} project={ e } />)}
                    </div>
                <div className="about-page__cta">
                    <div className="about-page__cta-heading">
                        <h2>Digitaliza tu negocio con nosotros.</h2>
                        </div>
                    <div className="about-page__cta-content">
                        <div className="cta-parragraph">
                            <p>Proporcione un efecto elegante y din??mico en su negocio a trav??s de incre??bles dise??os web y ejecute un plan de negocios perfecto a trav??s de nuestras t??cnicas de desarrollo web de alta tecnolog??a. Permitimos que su idea llegue al p??blico objetivo de una manera personalizada, amigable y aut??ntica.</p>
                        </div>
                            <button onClick={ goToContact }>
                            Comenzemos.    
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
            </div>
            </>
    )
}

export default About



const ProjectContainer = ({ project}) => {
    const { name, url, mobileImg, desktopImg, alt } = project;
    return (
        <div className="about-page__projects-proj">
            <div className="proj-heading">
                <div className="proj-name">
                    <h3>{ name }</h3>
                </div>
                <div className="proj-url">
                    <Link href={url} >
                        <a target="_blank">Ver proyecto.</a>
                    </Link>
                </div>
            </div>
            <div className="proj-img">
                <div className="proj-img__mobile">
                    <img src={`/images/jobs/${mobileImg}`} alt={`${alt} Mobile`}/>
                </div>
                <div className="proj-img__desktop">
                    <img src={`/images/jobs/${desktopImg}`} alt={`${alt} Desktop`}  />
                </div>
            </div>
        </div>
    )
}

