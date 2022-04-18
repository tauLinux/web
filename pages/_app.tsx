import { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Script from "next/script";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        defer
        data-domain="tauos.co"
        src="https://analytics.fyralabs.com/js/plausible.js"
      />
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </>
  );
};

export default App;
