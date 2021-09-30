import {useEffect} from 'react'
import Header from '../components/header'
import gsap from 'gsap'

const Contact = () => {

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to('body', {backgroundColor: '#F4F6F3', duration: 0})
    }, [])

    return (
        <div className="contact-page__wrapper">
            <Header/>
        </div>
    )
}

export default Contact
