import { useEffect } from 'react'
import { useRouter } from 'next/router'

const ScrollToTop = () => {
    const { pathname } = useRouter()
    useEffect(() => {
        /* settimeout make sure this run after components have rendered. This will help fixing bug for some views where scroll to top not working perfectly */
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 0)
    }, [pathname])
    return null
}

export default ScrollToTop