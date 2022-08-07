import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

const Navigation = () => {
	const { user, error, isLoading } = useUser()

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>{error.message}</div>

	return (
		<nav className="border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 light:bg-gray-900">
			<div className="text-white font-semibold container flex flex-wrap justify-between items-center mx-auto">
				<Link href="/">
					<div className="flex items-center cursor-pointer">
						<img src="/sailing_ship.png" className="mr-3 h-6 sm:h-9" alt="Naval Wars Logo" />
						<span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
							Naval Wars
						</span>
					</div>
				</Link>

				<ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					{[
						['Play', '/play'],
						['Profile', '/profile'],
						['About', '/klemsen']
					].map(([title, url]) => (
						<li className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
							<Link href={url}>{title}</Link>
						</li>
					))}

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

				<div className="flex items-center md:order-2">
					<button
						type="button"
						className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
						id="user-menu-button"
						aria-expanded="false"
						data-dropdown-toggle="user-dropdown"
						data-dropdown-placement="bottom">
						<span className="sr-only">Open user menu</span>
						<img className="w-8 h-8 rounded-full" src="/sailing_ship.png" alt="User photo" />
					</button>
					<div
						className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
						id="user-dropdown">
						<div className="py-3 px-4">
							<span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
							<span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
								name@navalwars.com
							</span>
						</div>
						<ul className="py-1" aria-labelledby="user-menu-button">
							<li>
								<a
									href="#"
									className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
									Dashboard
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
									Settings
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
									Earnings
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
									Sign out
								</a>
							</li>
						</ul>
					</div>
					<button
						data-collapse-toggle="mobile-menu-2"
						type="button"
						className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="mobile-menu-2"
						aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"></path>
						</svg>
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
