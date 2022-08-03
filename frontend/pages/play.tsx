import { useUser } from '@auth0/nextjs-auth0'

function Play() {
	const { user, error, isLoading } = useUser()

	return (
		<>
			<p></p>
		</>
	)
}

export default Play
