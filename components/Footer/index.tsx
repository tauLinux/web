import { Twitter, GitHub } from 'react-feather'
import './index.scss'

export const Footer = () => (
    <>
        <footer>
            <span>
                <p>Copyright © 2021 Innatical</p>
                <p>Made with ❤️ in California, Minnesota, & Oregon</p>
            </span>
            <div>
                <table>
                    <td>
                        <a href="test">Legal</a>
                    </td>
                    <td>
                        <a href="test">Privacy</a>
                    </td>
                </table>
                <a href="test">
                    <GitHub size={24} />
                </a>
                <a href="test">
                    <Twitter size={24} />
                </a>
            </div>
        </footer>
    </>
)
