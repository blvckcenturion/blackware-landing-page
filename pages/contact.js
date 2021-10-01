import {useEffect} from 'react'
import Header from '../components/header'
import gsap from 'gsap'
import Footer from '../components/footer'
import { CONTACT_PAGE_POINTS } from '../utils/data';
import EnumeratedContainer from '../components/enumeratedContainer';

const Contact = () => {

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to('body', {backgroundColor: '#F4F6F3', duration: 0})
    }, [])

    return (
        <>
            <div className="noise"/>
            <div className="wrapper">
                <Header />
                <div className="contact-page">
                    <div className="contact-page__content">
                        <h1 className="contact-page__title">A lo que vinimos.</h1>
                    </div>
                    <div className="contact-page__offer">
                        <div className="contact-page__offer-heading">
                            <h2>Que te ofrecemos?</h2>
                        </div>
                        <div className="contact-page__offer-content">
                            <div className="offer-setup">
                                <div className="offer-setup__img"></div>
                                <div className="offer-setup__content">
                                    <h3>Desarrollo & mantenimiento.</h3>
                                    <div className="offer-setup__content-p">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="offer-training">
                            <div className="offer-training__img"></div>
                                <div className="offer-training__content">
                                    <h3>Entrenamiento & mentorias.</h3>
                                    <div className="offer-training__content-p">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-page__procedure">
                    {CONTACT_PAGE_POINTS.map((point, i) => <EnumeratedContainer key={i} n={i + 1} content={ point} />)}
                    </div>
                    <div className="contact-page__free-quote">

                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Contact
