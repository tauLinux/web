import React from 'react'
import { Home, Download, FileText, HelpCircle, Menu } from 'react-feather'
import './index.scss'
import { Mobile } from './mobile'

export const HeaderLinks = () => (
    <nav className={'nav-links'}>
        <a href="test">
            <Home size={18} /> Home
        </a>
        <a href="test">
            <Download size={18} /> Download
        </a>
        <a href="test">
            <FileText size={18} /> News
        </a>
        <a href="test">
            <HelpCircle size={18} /> Documentation
        </a>
    </nav>
)

export const Header = () => {
    const [isMenuOpen, setMenuOpen] = React.useState(true)
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
