import React from 'react'
import { Download, FileText, HelpCircle, Home, Menu } from 'react-feather'
import { useTranslation } from 'react-i18next'
import { TauOS } from '../tauOS'
import './index.scss'
import { Mobile } from './mobile'

export const HeaderLinks = () => {
    const { t } = useTranslation()

    return (
        <nav className={'nav-links'}>
            <a href="/">
                <Home size={18} /> {t('global.header.home')}
            </a>
            <a href="/download">
                <Download size={18} /> {t('global.header.download')}
            </a>
            <a href="/news">
                <FileText size={18} /> {t('global.header.news')}
            </a>
            <a href="https://docs.tau.innatical.com">
                <HelpCircle size={18} /> {t('global.header.documentation')}
            </a>
        </nav>
    )
}
export const Header = () => {
    const [isMenuOpen, setMenuOpen] = React.useState(false)
    return (
        <>
            <header>
                <span>
                    <img src="/assets/images/icon.png" width={24} height={24} />
                    <h1>
                        <TauOS />
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
