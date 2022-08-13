import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const Navigation = () => {
	const { user, error, isLoading } = useUser()

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>{error.message}</div>

	// Variables
	// DOESN'T WORK YET | if the gmail profile picture is not available, use the default; nullish coalescing probably unnecessary
	let profilePicture = user?.picture || '/sailing_ship.png' // user?.picture == user && user.picture

	return (
		<nav
			className="
		sticky top-0 flex flex-col items-center py-4 border-gray-200 
		bg-gradient-to-r from-black to-gray-900
		">
			<div className="flex flex-wrap text-white font-semibold container justify-between mx-auto">
				<Link href="/">
					<div className="flex w-1/3 items-center cursor-pointer">
						<img src="/sailing_ship.png" className="mr-3 h-6 sm:h-9" alt="Naval Wars Logo" />
						<span className="self-center text-3xl font-bold whitespace-nowrap">Naval Wars</span>
					</div>
				</Link>

				<div
					className="
				flex flex-row w-1/3 items-center justify-center
				">
					<Link href="/play">
						<button
							className="
						text-cyan-500 hover:text-white text-3xl font-bold
						px-8 py-3 bg-gray-800 rounded-2xl hover:bg-gray-600
						">
							PLAY
						</button>
					</Link>
				</div>

				<div className="flex flex-row w-1/3 items-center justify-end">
					{[
						['News', '/klemsen'],
						['Rankings', '/klemsen'],
						['About', '/about']
					].map(([title, url]) => (
						<div className="mx-5 text-gray-500 hover:text-white">
							<Link href={url}>{title}</Link>
						</div>
					))}

					{!user && (
						<div className="mx-5 text-gray-500 hover:text-white">
							<Link href="/api/auth/login">Log In</Link>
						</div>
					)}

					{user && (
						<DropdownMenu.Root>
							<DropdownMenu.Trigger>
								<div
									className="flex mx-5 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
									id="profile-menu-button">
									<span className="sr-only">Open user menu</span>
									<img
										className="w-10 h-10 rounded-full"
										src={profilePicture}
										alt="User photo"
										referrerPolicy="no-referrer"
									/>
								</div>
							</DropdownMenu.Trigger>
							{/* Portals the content into the body */}
							<DropdownMenu.Portal>
								<DropdownMenu.Content
									loop
									sticky="always"
									align="center"
									side="bottom"
									sideOffset={10}
									className="mx-8 py-1 bg-gray-800 text-white flex items-center md:order-2">
									<DropdownMenu.Group className="flex flex-col items-center mx-3">
										<DropdownMenu.Item>
											<img className="w-12 h-12" src={profilePicture} alt="User photo" />
										</DropdownMenu.Item>
										<DropdownMenu.Item>{user?.name}</DropdownMenu.Item>
									</DropdownMenu.Group>
									<DropdownMenu.Group className="flex flex-col">
										{[
											['Profile', '/profile'],
											['Characters', '/characters']
										].map(([title, url]) => (
											<Link href={url}>
												<DropdownMenu.Item className="block py-2 px-4 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
													{title}
												</DropdownMenu.Item>
											</Link>
										))}
										<DropdownMenu.Separator className="my-1 border-t-2 border-gray-400" />
										<Link href="/api/auth/logout">
											<DropdownMenu.Item className="block py-2 px-4 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
												Log out
											</DropdownMenu.Item>
										</Link>
									</DropdownMenu.Group>
								</DropdownMenu.Content>
							</DropdownMenu.Portal>
						</DropdownMenu.Root>
					)}
				</div>
			</div>
		</nav>
	)
}

export default Navigation
