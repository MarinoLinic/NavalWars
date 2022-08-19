import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/navigation'
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<Navigation />
			<Component {...pageProps} />
		</UserProvider>
	)
}

export default MyApp
