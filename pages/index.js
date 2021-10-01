import { useEffect } from "react"
import { Isotype } from "../components/Icons"
import { useWindowSize } from "../utils/useWindowSize"
import { SOCIAL_MEDIA_LINKS } from "../utils/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from 'next/router'
import gsap from "gsap"
import BasicLayout from "../layouts/BasicLayout"

const Home = () => {
  const { width, height } = useWindowSize()
  const widthPercentage = width / 100
  const router = useRouter()

  useEffect(() => {
    const tl = gsap.timeline()
    
    const enterScreen = { opacity: 1, duration: .1, ease: "power3.out" }
    const leaveScreen = { opacity: 0, duration: .1, ease: "power3.out" }

    tl
      .to('body', { backgroundColor: '#F4F6F3', duration: 0,})
      
      .fromTo(
        ".overlay-title__heading",
        { y: 200, opacity: 0.5, skewY: -30 },
        { y: 0, opacity: 1, skewY: 0, duration: 1, ease: "power3.out", delay: 1 }
      )
      .to(
        ".overlay-title__heading",
        { opacity: 0, duration: .5, ease: "power3.out", delay: 1 }
      )
      .to(['.h-4', '.h-5'], enterScreen)
      .to(['.h-3', '.h-6'], enterScreen)
      .to(['.h-2', '.h-7'], enterScreen)
      .to(['.h-1', '.h-8'], enterScreen)
      .to(['.h-4', '.h-5'], leaveScreen)
      .to(['.h-3', '.h-6'], leaveScreen)
      .to(['.h-2', '.h-7'], leaveScreen)
      .to(['.h-1', '.h-8'], leaveScreen)
      .to(['.h-1', '.h-8'], enterScreen)
      .to(['.h-2', '.h-7'], enterScreen)
      .to(['.h-1', '.h-8'], leaveScreen)
      .to(['.h-2', '.h-7'], leaveScreen)
      .to(['.h-1', '.h-8'], enterScreen)
      .to(['.h-2', '.h-7'], enterScreen)
      .to(['.h-3', '.h-6'], enterScreen)
      .to(['.h-4', '.h-5'], enterScreen)
      .to(['.h-1', '.h-8'], leaveScreen)
      .to(['.h-2', '.h-7'], leaveScreen)
      .to(['.h-3', '.h-6'], leaveScreen)
      .to(['.h-4', '.h-5'], leaveScreen)
      .to(['.h-1', '.h-8'], enterScreen)
      .to(['.h-2', '.h-7'], enterScreen)
      .to(['.h-1', '.h-8'], leaveScreen)
      .to(['.h-2', '.h-7'], leaveScreen)
      .to(['.h-1', '.h-3'], { ...enterScreen, duration: .25, ease: "power3.out" })
      .to(['.h-5', '.h-7'], { ...enterScreen, duration: .25, ease: "power3.out" })
      .to(['.h-2', '.h-4'], { ...enterScreen, duration: .25, ease: "power3.out" })
      .to(['.h-6', '.h-8'], { ...enterScreen, duration: .25, ease: "power3.out" })
      .to(['.h-1', '.h-3', '.h-5', '.h-7', '.h-2', '.h-4', '.h-6', '.h-8'], { ...leaveScreen, duration: 1, display: "none" })
      .to('.content-wrapper', {backgroundColor: '#0E1B16', duration:0}, )
      .to('.left-top', { x: "110%", duration: .5, ease: "power2.inOut"})
      .to('.right-top', { y: "110%", duration: .5, ease: "power2.inOutout" })
      .to('body', { backgroundColor: '#0E1B16', duration: 0 })
      
      .to('.right-bottom', {x: "-110%", duration: .5, ease: "power2.inOut"})
      .to('.left-bottom', { y: "-110%", duration: .5, ease: "power2.inOut" })
      .to('.overlay', {display: "none", duration:0})
      .fromTo('.isotype-wrapper', { scale: 0,opacity: 0,  rotate: "-90deg" }, {  scale: 1,opacity: 1, rotate: "0deg",  duration: 1, ease: "power3.out"})
      .fromTo('.logotype-wrapper', { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3.out" })
      .fromTo('.main-button', { opacity: 0, x: -200 }, { opacity: 1, x: 0, duration: .2, ease: "power3.out", stagger: { amount: .5 }, delay: -.5 })
      .fromTo('.socials-wrapper', { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3.out" })
      .fromTo(
        '.nav-social',
          { opacity: 0, x: 200, scale: 0},
          {stagger: { amount: 0.5 }, opacity:1, x:0, scale: 1, duration: 0.7, ease: "power3.inOut", delay: -0.5}
      )
  }, [])
  
  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(".box", {
      duration: 5,
      ease: "none",
      x: `+=${width/2}`,
      repeat: -1
      })
  }, [width])


  const navigateToAbout = (href) => {
    const tl = gsap.timeline();
    tl
      .to('body', { overflow: 'hidden', backgroundColor: "#F4F6F3", duration: 0 })
      .to('.about-wrapper', { width: '210vw', height: '210vw', duration: 1.5, ease: "power3.out" })
      .to('body', { backgroundColor: "#F4F6F3", duration: 0 })
      .to('.about-wrapper', { borderRadius: '0', duration: 1, delay: -1, ease: "power3.out" })
      .then(() => router.push(href))
  }

  return (
    <BasicLayout>
      <div className="content-wrapper">
        <div className="about-wrapper"/>
        <div className="contact-wrapper"/>
        <Overlay/>
        <div className="isotype-wrapper">
          <Isotype/>
        </div>
        <div className="logotype-wrapper">
          <InfiniteText/>
        </div>
        <div className="main-content-wrapper">
          <button className="main-button" onClick={ () => navigateToAbout('/about') }>
            Sobre Nosotros.
          </button>
          <button className="main-button" onClick={ () => navigateToAbout('/contact') }>
            Contratanos.
          </button>
        </div>
        <div className="socials-wrapper">
          {SOCIAL_MEDIA_LINKS.map(({ href, icon }, i) => (
                <a className="nav-social" key={i} href={href} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon} className="icon"/>
                </a>
            ))}
        </div>
        </div>
      </BasicLayout>
  )
} 
  


export default Home

const InfiniteText = () => {
  return (
    <div className="infinite-text">
      {[...Array(10)].map((_, i) => <div key={ i} className="box"><h1>BLACKWARE.</h1></div>)}
    </div>
  )
}

const Overlay = () => {
  return (
    <div className="overlay">
      <div className="overlay-container left">
        <div>
          <div className="overlay-container left-top"/>  
        </div>
        <div>
          <div className="overlay-container left-bottom"/>
        </div>
        
      </div>
      <div className="overlay-container right">
        <div>
        <div className="overlay-container right-top"/>
        </div>
        <div>
          <div className="overlay-container right-bottom"/>
        </div>
      </div>
      <div className="overlay-title">
          <h3 className="overlay-title__heading">Bienvenido a</h3>
        </div>
      <div className="overlay-content">
          <h1 className="heading h-1">BLACKWARE.</h1>
          <h1 className="heading h-2">BLACKWARE.</h1>
          <h1 className="heading h-3">BLACKWARE.</h1>
          <h1 className="heading h-4">BLACKWARE.</h1>
          <h1 className="heading h-5">BLACKWARE.</h1>
          <h1 className="heading h-6">BLACKWARE.</h1>
          <h1 className="heading h-7">BLACKWARE.</h1>
          <h1 className="heading h-8">BLACKWARE.</h1>
      </div>
    </div>
  )
}