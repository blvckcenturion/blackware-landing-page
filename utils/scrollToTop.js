import { useEffect } from 'react'
import { useRouter } from 'next/router'

const ScrollToTop = () => {
    const { pathname } = useRouter()
    useEffect(() => {
        
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 0)
    }, [pathname])
    return null
}

export default ScrollToTop