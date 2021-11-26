import { Home, Download, FileText, HelpCircle } from 'react-feather' 
import "./index.scss"

export const Header = () => (
    <>
        <header>
            <span>
                <img src="/assets/images/icon.png" width={24} height={24}/>
                <h1>
                    <span className={"text-tau"}>tau<span className={"text-linux"}>Linux</span></span>    
                </h1>
            </span>
            <nav>
                <a href="test"><Home size={18} /> Home</a>
                <a href="test"><Download size={18} /> Download</a>
                <a href="test"><FileText size={18} /> News</a>
                <a href="test"><HelpCircle size={18} /> Documentation</a>
            </nav>
        </header>
    </>
)