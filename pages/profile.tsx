import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useState } from 'react'
import { useRef } from 'react'

const Profile = () => {
	const { user, error, isLoading } = useUser()
	const [profileName, changeProfileName] = useState(user && user.name)
	const [characterEditIsShown, setCharacterEditIsShown] = useState(false)
	const [characterName, changeCharacterName] = useState('Character')
	const inputRef = useRef(null) as any

	let profilePicture = (user && user.picture) || '/sailing_ship.png' // if the gmail profile picture is not available, use the default; nullish coalescing probably unnecessary

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>{error.message}</div>

	function setName(funct: Function, value: any) {
		funct(value)
		inputRef.current.value = '' // returning the text inside input field to empty
	}

	return (
		user && (
			<div className="container">
				<img src={profilePicture} alt={'Profile image'} />
				<h2>{profileName}</h2>
				<label>
					Change name: ‎
					<input
						ref={inputRef}
						type="text"
						id="nameChange"
						name="Name change"
						autoComplete="off"
						placeholder="Write here..."
					/>
				</label>
				<button
					onClick={() => setName(changeProfileName, inputRef.current.value)}
				>
					Confirm
				</button>
				<p>{user.email}</p>
				<button onClick={() => setCharacterEditIsShown(true)}>
					Add character
				</button>
				<div>
					{characterEditIsShown && (
						<>
							<label>
								Set character name: ‎
								<input
									ref={inputRef}
									type="text"
									autoComplete="off"
									placeholder="Set character name..."
								/>
							</label>

							<button
								onClick={() => {
									setCharacterEditIsShown(false)
									setName(changeCharacterName, inputRef.current.value)
								}}
							>
								Submit
							</button>
						</>
					)}
				</div>
			</div>
		)
	)
}

export default withPageAuthRequired(Profile as any)
