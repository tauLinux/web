import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import Head from '@innatical/inn.ts/head'

export const Layout = ({ children }: { children: React.ReactFragment }) => {
    return (
        <>
            <Head>
                <title>Tau</title>
            </Head>
            <Header />
            <div className={'container'}>{children}</div>
            <Footer />
        </>
    )
}
