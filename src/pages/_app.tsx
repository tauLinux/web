import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import { TauTheme } from '../theme/theme'

function App({ Component, pageProps }: AppProps) {
    return (
        <NextUIProvider theme={TauTheme}>
            <Component {...pageProps} />
        </NextUIProvider>
    )
}

export default App
