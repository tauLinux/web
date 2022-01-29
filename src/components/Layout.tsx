import { globalCss } from '@nextui-org/react'
import Head from 'next/head'
import * as React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

const GlobalStyle = globalCss({
    body: {
        margin: 0,
        padding: 0,
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    html: {
        margin: 0,
        padding: 0,
        fontFamily: 'Roboto, sans-serif',
        height: '100%',
    },
    a: {
        color: 'inherit',
        textDecoration: 'none',
    },
})

export const Layout = ({
    title,
    children,
}: {
    title: string
    children: React.ReactFragment
}) => {
    // Update Title
    title = `${title} • tauOS`
    GlobalStyle()
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
                <meta name={'twitter:creator'} content={'@tauOS_'} />
                <meta name={'twitter:description'} content={''} />
                <meta name={'twitter:title'} content={title} />

                <link
                    rel="canonical"
                    href={
                        typeof window !== 'undefined'
                            ? `https://${window.location.host}${window.location.pathname}`
                            : ''
                    }
                />
            </Head>
            <Header />
            {/* shoot me why does this not work */}
            <div
                style={{
                    flex: '1 0 auto',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100vw',
                }}
            >
                {children}
            </div>
            <Footer />
        </>
    )
}
