import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useState } from 'react'
import { useRef } from 'react'

const Profile = () => {
	const { user, error, isLoading } = useUser()
	const [profileName, changeProfileName] = useState(user && user.name)
	const inputRef = useRef(null)

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>{error.message}</div>

	function nameChange() {
		changeProfileName(inputRef.current.value)
		inputRef.current.value = ''
	}

	return (
		user && (
			<div className="container">
				<img src={user.picture} alt={user.name} />
				<h2>{profileName}</h2>
				<label>
					Input name: ‎
					<input
						ref={inputRef}
						type="text"
						id="nameChange"
						name="Name change"
						autoComplete="off"
						placeholder="Write your name..."
					/>
				</label>
				<button onClick={nameChange}>Change name</button>
				<p>{user.email}</p>
			</div>
		)
	)
}

export default withPageAuthRequired(Profile)
