import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<div className="navigation text-white">
				<div className="nav-title pull-left">
					<Link href="/">Naval Wars</Link>
				</div>
				<ul className="pull-right">
					<li className="nav-button">
						<Link href="/klemsen">Play</Link>
					</li>

					<li className="nav-button">
						<Link href="/klemsen">User profile</Link>
					</li>

					<li className="nav-button">
						<Link href="/api/auth/login">Log In</Link>
					</li>

					<li className="nav-button">
						<Link href="/api/auth/logout">Log out</Link>
					</li>
				</ul>
			</div>

			<Component {...pageProps} />
		</UserProvider>
	)
}

export default MyApp
