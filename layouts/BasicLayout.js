import React, {useEffect} from 'react';
import Head from 'next/head';
import { useWindowSize } from '../utils/useWindowSize';
import gsap from 'gsap';


const BasicLayout = ({ children }) => {
    
    const { width, height } = useWindowSize();
    console.table(width, height);
    useEffect(() => {
        gsap.set('.main-content', {
            width: width,
            height: height
        })
    }, [width, height])


    return (
        <div className="main-content">
            <div className="noise"/>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preload" href="/fonts/PPNeueMachina-Regular.otf" as="font" crossOrigin=""/>
                <link rel="preload" href="/fonts/SFPRODISPLAYREGULAR.woff" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/SFPRODISPLAYBOLD.woff" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/SFPRODISPLAYBOLD.woff" as="font" crossOrigin="" />
            </Head>
            <div className="content">
            { children }
            </div>
        </div>
    )
}

export default BasicLayout
