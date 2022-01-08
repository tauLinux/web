import { GitHub, Twitter } from 'react-feather'
import { Trans, useTranslation } from 'react-i18next'
import './index.scss'

export const Footer = () => {
    const { t } = useTranslation()

    return (
        <>
            <footer>
                <span>
                    <p>
                        {t('global.footer.copyright', {
                            year: new Date().getFullYear(),
                        })}
                    </p>
                    <p>{t('global.footer.copyright_lower')}</p>
                </span>
                <div className={'footer-flex'}>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="test">
                                            {t('global.footer.legal')}
                                        </a>
                                    </td>
                                    <td>
                                        <a href="test">
                                            {t('global.footer.privacy')}
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <a href="https://github.com/tauLinux">
                            <GitHub size={24} />
                        </a>
                        <a href="https://twitter.com/tauLinux_">
                            <Twitter size={24} />
                        </a>
                    </div>
                    <p>
                        <Trans i18nKey={'global.footer.license'} t={t}>
                            0<a href="/legal/license">1</a>2
                        </Trans>
                    </p>
                </div>
            </footer>
        </>
    )
}
