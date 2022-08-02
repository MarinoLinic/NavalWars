import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useState, useEffect, useRef } from 'react'

const Profile = () => {
	const { user, error, isLoading } = useUser()
	const [profileName, changeProfileName] = useState(user && user.name)
	const [characterEditIsShown, setCharacterEditIsShown] = useState(false)
	const [charNum, changeCharNum] = useState(Math.floor(Math.random() * 4))
	const [characterName, changeCharacterName] = useState(
		user && user.name + "'s character"
	)
	const [charList, setCharList] = useState([]) as any

	const inputRef = useRef(null) as any

	let chars = [
		'/avatars/1.png',
		'/avatars/2.png',
		'/avatars/3.png',
		'/avatars/4.png'
	]

	// var charList: any = []

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>{error.message}</div>

	const charNumChange = (charForward: boolean) => {
		if (charForward && charNum < chars.length - 1) changeCharNum(charNum + 1)
		else if (!charForward && charNum > 0) changeCharNum(charNum - 1)

		if (charForward && charNum === chars.length - 1) changeCharNum(0)
		else if (!charForward && charNum === 0) changeCharNum(chars.length - 1)
	}

	let profilePicture = (user && user.picture) || '/sailing_ship.png' // if the gmail profile picture is not available, use the default; nullish coalescing probably unnecessary

	function setName(funct: Function, value: any) {
		funct(value)
		inputRef.current.value = '' // returning the text inside input field to empty
	}

	// const handleAddCharacter = () => {
	// 	const newItem = {
	// 		itemName: 'i',
	// 		quantity: 1,
	// 		isSelected: false
	// 	}

	// 	const newItems = [...charList, newItem]

	// 	setCharList(newItems)
	// }

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
				<p className="bold">{user.email}</p>
				<div className="character-list">
					{charList.map((item: any) => (
						<div key={item.id} className="character-individual">
							<div>Character: {item.name}</div>
							<img
								src={item.img}
								alt="Character image"
								height="100px"
								width="100px"
							/>
							<div>Owner: {item.owner}</div>
						</div>
					))}
				</div>
				<button onClick={() => setCharacterEditIsShown(true)}>
					Add character
				</button>
				<div>
					{characterEditIsShown && charList.length <= 11 && (
						<div className="margin-test">
							<label>
								Set character name: ‎
								<input
									ref={inputRef}
									type="text"
									autoComplete="off"
									placeholder="Set character name..."
									onChange={(e) => changeCharacterName(e.target.value)}
								/>
							</label>

							<p>Choose character image</p>
							<button onClick={() => charNumChange(false)}>{'<'}</button>
							<img
								src={chars[charNum]}
								alt="Character image"
								height="200px"
								width="200px"
							></img>
							<button onClick={() => charNumChange(true)}>{'>'}</button>

							<button
								onClick={() => {
									setCharList([
										...charList,
										{
											id: Math.floor(Math.random() * 10000000000000),
											name: characterName,
											img: chars[charNum],
											owner: user && user.name
										}
									])
									setName(changeCharacterName, '')
									changeCharNum(Math.floor(Math.random() * 4))
									setCharacterEditIsShown(false)
								}}
							>
								Submit
							</button>
						</div>
					)}
				</div>
			</div>
		)
	)
}

export default withPageAuthRequired(Profile as any)
