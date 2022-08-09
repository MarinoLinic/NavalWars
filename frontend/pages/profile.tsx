import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useState, useRef } from 'react'
import { characterImgAvatars } from '../utils/variables/character_avatars'

function Profile() {
	const { user, error, isLoading } = useUser()
	if (isLoading) return <div>Loading...</div> // Loading screen
	if (error) return <div>{error.message}</div>

	// useState hooks
	const [profileName, setProfileName] = useState(user?.name)
	const [editProfile, setEditProfile] = useState(false)

	const inputRef = useRef(null) as any

	// Variables
	// DOESN'T WORK YET | if the gmail profile picture is not available, use the default; nullish coalescing probably unnecessary
	let profilePicture = user?.picture || '/sailing_ship.png' // user?.picture == user && user.picture

	function setName(funct: Function, value: any) {
		funct(value)
		inputRef.current.value = '' // returning the text inside input field to empty
	}

	return (
		/* User profile */
		user && ( // if the left conditional is true, do right
			<div className="flex flex-col items-center my-16">
				<img
					src={profilePicture}
					alt={'Profile image'}
					className="w-36 mb-4 rounded-full ring-8 ring-gray-200"
				/>
				<h2 className="text-2xl font-bold text-gray-700 mb-4">{profileName}</h2>
				<p className="text-xl font-semibold text-gray-700 mb-4">E-mail: {user.email}</p>
				<button className="mb-4" onClick={() => setEditProfile(true)}>
					Edit profile
				</button>
				{editProfile && (
					<>
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
						<button
							onClick={() => {
								setName(setProfileName, inputRef.current.value)
								setEditProfile(false)
							}}>
							Confirm
						</button>
					</>
				)}
			</div>
		)
	)
}

export default withPageAuthRequired(Profile as any)
