import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
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
						<Link href="/klemsen">About</Link>
					</li>

					<li className="nav-button">
						<Link href="/klemsen">Log out</Link>
					</li>
				</ul>
			</div>

			<Component {...pageProps} />
		</>
	)
}

export default MyApp
