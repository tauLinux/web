import React from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({ children }: { children: React.ReactFragment}) => {
    return (
        <>
            <Header />
            <div className={"container"}>
                {children}
            </div>
            <Footer />
        </>
    )
}