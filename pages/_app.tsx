import Routes from 'inn:routes'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import '../styles/globals.scss'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
