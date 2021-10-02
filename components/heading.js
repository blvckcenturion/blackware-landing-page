import React from 'react'
import Head from 'next/head'
import { CURRENT_URL } from '../utils/data'
const Heading = ({ title, description, }) => {
    console.log('Made by @blvckcenturion')
    return (
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ description }/>
            <meta property="og:title" content={ title }/>
            <meta property="og:description" content={ description }/>
            <meta property="og:url" content="https://blackware.tech"/>
            <meta property="og:type" content="company" />
            <meta property="og:image" content="/seo/blackware-og.png" />
            <link rel="apple-touch-icon" sizes="57x57" href="/seo/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/seo/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/seo/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/seo/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/seo/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/seo/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/seo/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/seo/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/seo/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192"  href="/seo/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/seo/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/seo/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/seo/favicon-16x16.png"/>
            <link rel="manifest" href="/seo/manifest.json"/>
            <meta name="msapplication-TileColor" content="#F4F6F3"/>
            <meta name="msapplication-TileImage" content="/seo/ms-icon-144x144.png"/>
            <meta name="theme-color" content="#F4F6F3"/>
        </Head>
    )
}

export default Heading
