import { Twitter, GitHub } from 'react-feather'
import './index.scss'

export const Footer = () => (
    <>
        <footer>
            <span>
                <p>Copyright © 2021 Innatical</p>
                <p>Made with ❤️ in California, Minnesota, & Oregon</p>
            </span>
            <div className={'footer-flex'}>
                <div>
                    <table>
                        <td>
                            <a href="test">Legal</a>
                        </td>
                        <td>
                            <a href="test">Privacy</a>
                        </td>
                    </table>
                    <a href="https://github.com/tauLinux">
                        <GitHub size={24} />
                    </a>
                    <a href="https://twitter.com/tauLinux_">
                        <Twitter size={24} />
                    </a>
                </div>
                <p>
                    Content is available under{' '}
                    <a href="/legal/license">
                        Attribution-Share Alike 4.0 International
                    </a>{' '}
                    unless otherwise noted.
                </p>
            </div>
        </footer>
    </>
)
