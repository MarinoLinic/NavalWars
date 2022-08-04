import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useState, useRef } from 'react'
import { characterImgAvatars } from '../utils/variables/character_avatars'
import { MAX_CHARACTERS } from '../utils/variables/global'

function Profile() {
	const { user, error, isLoading } = useUser()
	if (isLoading) return <div>Loading...</div> // Loading screen
	if (error) return <div>{error.message}</div>

	// useState hooks
	const [characterCreationIsShown, setCharacterCreationIsShown] = useState(false)
	const [edit, setEdit] = useState(false)
	const [profileName, setProfileName] = useState(user?.name)
	const [characterName, setCharacterName] = useState(user && user.name + "'s character")
	const [characterList, setCharacterList] = useState([]) as Array<any>
	const [numAvatar, setNumAvatar] = useState(Math.floor(Math.random() * characterImgAvatars.length))

	const inputRef = useRef(null) as any

	// Switch between available character avatars
	const numAvatarChange = (charForward: boolean) => {
		if (charForward && numAvatar < characterImgAvatars.length - 1) setNumAvatar(numAvatar + 1)
		else if (!charForward && numAvatar > 0) setNumAvatar(numAvatar - 1)

		if (charForward && numAvatar === characterImgAvatars.length - 1) setNumAvatar(0)
		else if (!charForward && numAvatar === 0) setNumAvatar(characterImgAvatars.length - 1)
	}

	// DOESN'T WORK YET | if the gmail profile picture is not available, use the default; nullish coalescing probably unnecessary
	let profilePicture = user?.picture || '/sailing_ship.png' // user?.picture == user && user.picture

	function setName(funct: Function, value: any) {
		funct(value)
		inputRef.current.value = '' // returning the text inside input field to empty
	}

	return (
		/* User profile */
		user && ( // if the left conditional is true, do right
			<div className="container">
				<img src={profilePicture} alt={'Profile image'} />
				<h2>{profileName}</h2>
				<label>
					Change name: ‎
					<input
						ref={inputRef}
						type="text"
						id="user-name"
						name="User name"
						autoComplete="off"
						placeholder="Write here..."
					/>
				</label>
				<button onClick={() => setName(setProfileName, inputRef.current.value)}>Confirm</button>
				<p className="bold">{user.email}</p>

				{/* Character list */}
				<div className="character-list">
					{characterList.map((item: any) => (
						<div key={item.id} className="character-individual">
							<div>Character: {item.name}</div>
							<img src={item.img} alt="Character image" height="100px" width="100px" />
							<div>Owner: {item.owner}</div>
							<button onClick={() => setEdit(true)}>Edit</button>

							{/* Character edit */}
							<div>
								{edit && (
									<label>
										Set character name: ‎
										<input
											type="text"
											name="Character name"
											autoComplete="off"
											placeholder="Set character name..."
											onChange={(e) => setCharacterName(e.target.value)}
										/>
										<button
											onClick={() => {
												if (characterName == '') alert(`Character name is empty.`)
												else {
													characterList[0].name = characterName
													setCharacterName('')
													setEdit(false)
												}
											}}>
											Submit
										</button>
									</label>
								)}
							</div>
						</div>
					))}
				</div>

				{/* Add a new character */}
				<button
					onClick={() => {
						setCharacterCreationIsShown(true)
						if (characterList.length > MAX_CHARACTERS) setTimeout(() => setCharacterCreationIsShown(false), 5000) // 5 second timer for warning to disappear
					}}>
					Add character
				</button>
				<div>
					{characterCreationIsShown && !edit && characterList.length <= MAX_CHARACTERS && (
						<div className="margin-test">
							<label>
								Set character name: ‎
								<input
									type="text"
									id="char-name"
									name="Character name"
									autoComplete="off"
									placeholder="Set character name..."
									onChange={(e) => setCharacterName(e.target.value)}
								/>
							</label>

							<p>Choose character avatar</p>
							<button onClick={() => numAvatarChange(false)}>{'<'}</button>
							<img src={characterImgAvatars[numAvatar]} alt="Character avatar" height="200px" width="200px"></img>
							<button onClick={() => numAvatarChange(true)}>{'>'}</button>

							<button
								onClick={() => {
									if (characterName == '') alert(`Character name is empty.`)
									else {
										setCharacterList([
											...characterList,
											{
												id: Math.floor(Math.random() * 10000000000000),
												name: characterName,
												img: characterImgAvatars[numAvatar],
												owner: user?.name
											}
										])
										setCharacterName('')
										setNumAvatar(Math.floor(Math.random() * characterImgAvatars.length))
										{
											console.log(numAvatar)
										}
										setCharacterCreationIsShown(false)
									}
								}}>
								Submit
							</button>
						</div>
					)}
				</div>
				<div>
					{characterCreationIsShown && characterList.length > MAX_CHARACTERS && (
						<p className="red">Character limit reached.</p>
					)}
				</div>
			</div>
		)
	)
}

export default withPageAuthRequired(Profile as any)
