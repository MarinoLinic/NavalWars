import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'

function Play() {
	const { user, error, isLoading } = useUser()

	return (
		<>
			<p>This is the entire game. Enjoy. XD</p>
		</>
	)
}

export default withPageAuthRequired(Play as any)
