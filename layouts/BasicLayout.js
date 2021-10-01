import React, {useEffect} from 'react';
import Head from 'next/head';
import { useWindowSize } from '../utils/useWindowSize';
import gsap from 'gsap';


const BasicLayout = ({ children }) => {
    
    const { width, height } = useWindowSize();
    useEffect(() => {
        gsap.to(".content", {
            duration: 0,
            width: width,
            height: height
        });
    })


    return (
        <>
            <div className="noise"/>
            <div className="content">
            { children }
            </div>
        </>
    )
}

export default BasicLayout
