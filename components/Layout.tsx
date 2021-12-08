//@ts-ignore  TypeScript Bug
import Head from '@innatical/inn.ts/head'
import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({
    title,
    children,
}: {
    title: string
    children: React.ReactFragment
}) => {
    title = `${title} • Tau Linux`
    return (
        <>
            <Head>
                <title>{title}</title>

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />

                <meta name={'description'} content={''} />
                <meta name={'og:title'} content={title} />
                <meta name={'og:description'} content={''} />
                <meta name={'og:type'} content={'website'} />
                <meta name={'og:image'} content={'/assets/images/icon.png'} />
                <meta name={'twitter:card'} content={'summary'} />
                <meta name={'twitter:creator'} content={'@tauLinux_'} />
                <meta name={'twitter:description'} content={''} />
                <meta name={'twitter:title'} content={title} />
                {/* 
                Generate a CSP later
                <meta httpEquiv="Content-Security-Policy" content={csp} /> */}
                <link
                    rel="canonical"
                    href={`https://${window.location.host}${window.location.pathname}`}
                />
            </Head>
            <Header />
            <div className={'container'}>{children}</div>
            <Footer />
        </>
    )
}
