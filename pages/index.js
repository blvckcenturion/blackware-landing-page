import { useEffect } from "react"
import { Isotype } from "../components/Icons"
import { useWindowSize } from "../utils/useWindowSize"
import { SOCIAL_MEDIA_LINKS } from "../utils/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import gsap from "gsap"
const Home = () => {
  const {width} = useWindowSize()
  console.log(width)

  useEffect(() => {
    gsap.to(".box", {
      duration: 15,
      ease: "none",
      x: `+=${width}`, //move each box 500px to right
      repeat: -1
    });
    
  }, [width])

  return (
    <div className="content-wrapper">
      <div className="isotype-wrapper">
        <Isotype/>
      </div>
      <div className="logotype-wrapper">
        <InfiniteText/>
      </div>
      <div className="main-content-wrapper">
        <button>
          Sobre Nosotros.
        </button>
        <button>
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