import { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import http_fetch from "../utils/http_fetch";
import { Character } from "../components/characters/character";
import { characterImgAvatars } from "../utils/variables/Avatar";
import { MAX_CHARACTERS } from "../utils/variables/global";

function Characters() {
  const session = useSession();

  // useState hooks
  const [characterCreationIsShown, setCharacterCreationIsShown] =
    useState(false);
  const [edit, setEdit] = useState(false);
  const [characterName, setCharacterName] = useState(
    session.data?.user?.name + "'s character"
  );
  const [characterList, setCharacterList] = useState([]) as Array<any>;
  const [numAvatar, setNumAvatar] = useState(
    Math.floor(Math.random() * characterImgAvatars.length)
  );
  const [editKey, setEditKey] = useState(); // used for determining which character to manipulate when pressing button

  // Switch between available character avatars
  function avatarScroll(characterAvatarForward: boolean) {
    if (characterAvatarForward && numAvatar < characterImgAvatars.length - 1)
      setNumAvatar(numAvatar + 1);
    else if (!characterAvatarForward && numAvatar > 0)
      setNumAvatar(numAvatar - 1);

    if (characterAvatarForward && numAvatar === characterImgAvatars.length - 1)
      setNumAvatar(0);
    else if (!characterAvatarForward && numAvatar === 0)
      setNumAvatar(characterImgAvatars.length - 1);
  }

  return (
    <div className="mt-16 mb-8">
      <div className="grid grid-cols-4 gap-4 items-center mx-32">
        {characterList.map((item: any) => (
          <div key={item.id} className="justify-self-center">
            <div>Character: {item.name}</div>
            <img
              src={item.img}
              alt="Character image"
              height="100px"
              width="100px"
            />
            <div>Owner: {item.owner}</div>
            <button
              className="mx-4"
              onClick={() => {
                setEdit(true);
                setEditKey(item.id);
              }}
            >
              Edit
            </button>
            <button
              className="mx-4"
              onClick={() => {
                for (let i = 0; i < characterList.length; i++) {
                  if (characterList[i].id == item.id) {
                    setCharacterList(
                      characterList.filter((index: any) => index.id != item.id)
                    );
                  }
                }
              }}
            >
              Delete
            </button>

            {/* Character edit */}
            <div>
              {edit && editKey === item.id && (
                <label>
                  Set character name:
                  <input
                    type="text"
                    name="Character name"
                    autoComplete="off"
                    placeholder="Set character name..."
                    onChange={(e) => setCharacterName(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      if (characterName == "")
                        alert(`Character name is empty.`);
                      else {
                        for (let i = 0; i < characterList.length; i++) {
                          if (characterList[i].id == editKey)
                            characterList[i].name = characterName;
                        }
                        setCharacterName("");
                        setEdit(false);
                      }
                    }}
                  >
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
        className="mt-4 flex justify-center w-full"
        onClick={() => {
          setCharacterCreationIsShown(true);
          if (characterList.length > MAX_CHARACTERS)
            setTimeout(() => setCharacterCreationIsShown(false), 5000); // 5 second timer for warning to disappear
        }}
      >
        Add character
      </button>
      <div className="mt-4 flex justify-center w-full">
        {characterCreationIsShown &&
          !edit &&
          characterList.length <= MAX_CHARACTERS && (
            <div className="flex flex-col items-center">
              <label>
                Set character name:
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
              <img
                className="w-52 h-52"
                src={characterImgAvatars[numAvatar]}
                alt="Character avatar"
              ></img>
              <button onClick={() => avatarScroll(false)}>{"<"}</button>
              <button onClick={() => avatarScroll(true)}>{">"}</button>

              <button
                onClick={() => {
                  if (characterName == "") alert(`Character name is empty.`);
                  else {
                    setCharacterList([
                      ...characterList, // every element thus far in the list
                      {
                        id: Math.floor(Math.random() * 10000000000000), // that's 1 billion
                        name: characterName,
                        img: characterImgAvatars[numAvatar],
                        owner: session.data?.user?.name,
                      },
                    ]);
                    setCharacterName("");
                    setNumAvatar(
                      Math.floor(Math.random() * characterImgAvatars.length)
                    );
                    setCharacterCreationIsShown(false);
                  }
                }}
              >
                Submit
              </button>
            </div>
          )}
      </div>
      <div className="flex justify-center">
        {characterCreationIsShown && characterList.length > MAX_CHARACTERS && (
          <p className="text-red-700">Character limit reached.</p>
        )}
      </div>
    </div>
  );
}

export default Characters;
