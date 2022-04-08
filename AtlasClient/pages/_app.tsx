import '../styles/globals.css'
import type { AppProps } from 'next/app'

function HMAtlas({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default HMAtlas

