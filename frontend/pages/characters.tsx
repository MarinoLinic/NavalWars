import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useState, useRef } from 'react'
import { characterImgAvatars } from '../utils/variables/character_avatars'
import { MAX_CHARACTERS } from '../utils/variables/global'

function Characters() {
	const { user, error, isLoading } = useUser()
	if (isLoading) return <div>Loading...</div> // Loading screen
	if (error) return <div>{error.message}</div>

	// useState hooks
	const [characterCreationIsShown, setCharacterCreationIsShown] = useState(false)
	const [edit, setEdit] = useState(false)
	const [characterName, setCharacterName] = useState(user && user.name + "'s character")
	const [characterList, setCharacterList] = useState([]) as Array<any>
	const [numAvatar, setNumAvatar] = useState(Math.floor(Math.random() * characterImgAvatars.length))
	const [editKey, setEditKey] = useState() // used for determining which character to manipulate when pressing button

	const inputRef = useRef(null) as any

	// Switch between available character avatars
	const avatarScroll = (characterAvatarForward: boolean) => {
		if (characterAvatarForward && numAvatar < characterImgAvatars.length - 1) setNumAvatar(numAvatar + 1)
		else if (!characterAvatarForward && numAvatar > 0) setNumAvatar(numAvatar - 1)

		if (characterAvatarForward && numAvatar === characterImgAvatars.length - 1) setNumAvatar(0)
		else if (!characterAvatarForward && numAvatar === 0) setNumAvatar(characterImgAvatars.length - 1)
	}

	function setName(funct: Function, value: any) {
		funct(value)
		inputRef.current.value = '' // returning the text inside input field to empty
	}

	return (
		<div className="character-list">
			{characterList.map((item: any) => (
				<div key={item.id} className="character-individual">
					<div>Character: {item.name}</div>
					<img src={item.img} alt="Character image" height="100px" width="100px" />
					<div>Owner: {item.owner}</div>
					<button
						onClick={() => {
							setEdit(true)
							setEditKey(item.id)
						}}>
						Edit
					</button>
					<button
						onClick={() => {
							for (let i = 0; i < characterList.length; i++) {
								if (characterList[i].id == item.id) {
									setCharacterList(characterList.filter((index: any) => index.id != item.id))
								}
							}
						}}>
						Delete
					</button>

					{/* Character edit */}
					<div>
						{edit && editKey === item.id && (
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
											for (let i = 0; i < characterList.length; i++) {
												if (characterList[i].id == editKey) characterList[i].name = characterName
											}
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

			{/* Add a new character */}
			<button
				onClick={() => {
					setCharacterCreationIsShown(true)
					if (characterList.length > MAX_CHARACTERS)
						setTimeout(() => setCharacterCreationIsShown(false), 5000) // 5 second timer for warning to disappear
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
						<button onClick={() => avatarScroll(false)}>{'<'}</button>
						<img
							src={characterImgAvatars[numAvatar]}
							alt="Character avatar"
							height="200px"
							width="200px"></img>
						<button onClick={() => avatarScroll(true)}>{'>'}</button>

						<button
							onClick={() => {
								if (characterName == '') alert(`Character name is empty.`)
								else {
									setCharacterList([
										...characterList, // every element thus far in the list
										{
											id: Math.floor(Math.random() * 10000000000000), // that's 1 billion
											name: characterName,
											img: characterImgAvatars[numAvatar],
											owner: user?.name
										}
									])
									setCharacterName('')
									setNumAvatar(Math.floor(Math.random() * characterImgAvatars.length))
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
}

export default withPageAuthRequired(Characters as any)
