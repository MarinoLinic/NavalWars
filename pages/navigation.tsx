import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

const Navigation = () => {
	const { user } = useUser()

	return (
		<div className="navigation text-white">
			<div className="nav-title pull-left">
				<Link href="/">Naval Wars</Link>
			</div>

			<ul className="pull-right">
				<li className="nav-button">
					<Link href="/klemsen">Play</Link>
				</li>

				<li className="nav-button">
					<Link href="/profile">User profile</Link>
				</li>

				<li className="nav-button">
					<Link href="/klemsen">About</Link>
				</li>

				{user && (
					<li className="nav-button">
						<Link href="/api/auth/logout">Log out</Link>
					</li>
				)}

				{!user && (
					<li className="nav-button">
						<Link href="/api/auth/login">Log In</Link>
					</li>
				)}
			</ul>
		</div>
	)
}

export default Navigation
