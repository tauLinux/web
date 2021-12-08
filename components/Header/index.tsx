import React from 'react'
import { Home, Download, FileText, HelpCircle, Menu } from 'react-feather'
import './index.scss'
import { Mobile } from './mobile'

export const HeaderLinks = () => (
    <nav className={'nav-links'}>
        <a href="/">
            <Home size={18} /> Home
        </a>
        <a href="/download">
            <Download size={18} /> Download
        </a>
        <a href="/news">
            <FileText size={18} /> News
        </a>
        <a href="https://docs.tau.innatical.com">
            <HelpCircle size={18} /> Documentation
        </a>
    </nav>
)

export const Header = () => {
    const [isMenuOpen, setMenuOpen] = React.useState(false)
    return (
        <>
            <header>
                <span>
                    <img src="/assets/images/icon.png" width={24} height={24} />
                    <h1>
                        <span className={'text-tau'}>
                            tau<span className={'text-linux'}>Linux</span>
                        </span>
                    </h1>
                </span>
                <HeaderLinks />
                <nav className={'mobile-button'}>
                    <button onClick={() => setMenuOpen(!isMenuOpen)}>
                        <Menu size={24} />
                    </button>
                </nav>
            </header>
            <Mobile visible={isMenuOpen} />
        </>
    )
}
