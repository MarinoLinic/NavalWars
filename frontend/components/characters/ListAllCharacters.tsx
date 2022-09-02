import { useState } from "react";
import { PrismaClient } from "@prisma/client";
import http_fetch from "../../utils/http_fetch";
import { useSession } from "next-auth/react";
import { Character } from "./character";
import Characters from "../../pages/characters";

export default function ListAllCharacters(characters: Character[]) {
  return (
    <div className="grid grid-cols-4 gap-4 items-center mx-32">
      {characters.map((character) => formatCharacter(character))}
    </div>
  );
}

function formatCharacter(character: Character) {
  return (
    <div key={character.id} className="justify-self-center">
      {characterInfo(character)}
      {characterEdit(character)}
    </div>
  );
}

function characterInfo(character: Character) {
  return (
    <>
      <div>Character: {character.name}</div>
      <img
        src={character.avatar}
        alt="Character image"
        height="100px"
        width="100px"
      />
      <div>Owner: {character.user}</div>
      <button
        className="mx-4"
        onClick={() => {
          //TODO: Implement edit button
        }}
      >
        Edit
      </button>
      <button
        className="mx-4"
        onClick={() => {
          //TODO: Implement delete button
        }}
      >
        Delete
      </button>
    </>
  );
}

function characterEdit(character: Character) {
  return (
    <label>
      Set character name:
      <input
        type="text"
        name="Character name"
        autoComplete="off"
        placeholder="Set character name..."
        //onChange={(e) => setCharacterName(e.target.value)}
      />
      <button
        onClick={() => {
          //TODO: Implement submit button;
        }}
      >
        Submit
      </button>
    </label>
  );
}

/*function ListAllCharacters(characters: Character[]) {
  const session = useSession();

  console.log(
    http_fetch.post("characters/get_user_characters", {
      userId: session.data?.user?.id,
    })
  );

  const [editKey, setEditKey] = useState();
  const [edit, setEdit] = useState(false);

  return (
    <div className="grid grid-cols-4 gap-4 items-center mx-32">
      {characters.map((character: Character) => (
        <div key={character.id} className="justify-self-center">
          <div>Character: {character.name}</div>
          <img
            src={character.img}
            alt="Character image"
            height="100px"
            width="100px"
          />
          <div>Owner: {character.owner}</div>
          <button
            className="mx-4"
            onClick={() => {
              setEdit(true);
              setEditKey(character.id);
            }}
          >
            Edit
          </button>
          <button
            className="mx-4"
            onClick={() => {
              for (let i = 0; i < characterList.length; i++) {
                if (characterList[i].id == character.id) {
                  setCharacterList(
                    characterList.filter(
                      (index: any) => index.id != character.id
                    )
                  );
                }
              }
            }}
          >
            Delete
          </button>

          {/* Character edit }
          <div>
            {edit && editKey === character.id && (
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
                    if (characterName == "") alert(`Character name is empty.`);
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
  );
}*/
