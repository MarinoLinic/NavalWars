import { useState } from "react";
import http_fetch from "../../utils/http_fetch";
import { Character } from "./character";
import { useRouter } from "next/router";

interface props {
  characters: Character[];
}

interface EditTrue {
  edit: boolean;
  id?: number;
}

export default function ListAllCharacters({ characters }: props) {
  const [editTrue, setEditTrue] = useState({ edit: false, id: 1 });

  // TODO: refactorize? we need to either create a custom hook or make a tsx https://reactjs.org/docs/hooks-rules.html
  const router = useRouter();
  function refreshData(hardRefresh: boolean) {
    hardRefresh ? router.reload() : router.replace(router.asPath);
  }

  return (
    <div className="grid grid-cols-4 gap-4 items-center mx-32">
      {/* EXPLORE: Why is it able to map through an object?*/}
      {characters.map((character: Character) =>
        formatCharacter(character, editTrue, setEditTrue, refreshData)
      )}
    </div>
  );
}

function formatCharacter(
  character: Character,
  editTrue: EditTrue,
  setEditTrue: Function,
  refreshData: Function
) {
  return (
    <div key={character.id} className="justify-self-center">
      {characterInfo(character, editTrue, setEditTrue, refreshData)}
      {characterEdit(character, editTrue, setEditTrue, refreshData)}
    </div>
  );
}

function characterInfo(
  character: Character,
  editTrue: EditTrue,
  setEditTrue: Function,
  refreshData: Function
) {
  return (
    <div className="mt-4">
      <div>Character: {character.name}</div>
      <img
        src={character.avatar}
        alt="Character image"
        height="100px"
        width="100px"
      />
      <button
        className="mx-4"
        onClick={() => {
          editTrue.edit
            ? setEditTrue({ edit: false })
            : setEditTrue({ edit: true, id: character.id });
        }}
      >
        Edit
      </button>
      <button
        className="mx-4"
        onClick={() => {
          http_fetch.delete("characters/delete", { id: character.id });
          refreshData(true);
        }}
      >
        Delete
      </button>
    </div>
  );
}

function characterEdit(
  character: Character,
  editTrue: EditTrue,
  setEditTrue: Function,
  refreshData: Function
) {
  const [characterNameChange, setCharacterNameChange] = useState("");
  return (
    <div>
      {editTrue.edit && editTrue.id === character.id && (
        <label>
          Set character name:
          <input
            type="text"
            name="Character name"
            value={characterNameChange}
            autoComplete="off"
            placeholder="Set new character name..."
            onChange={(e) => setCharacterNameChange(e.target.value)}
          />
          <button
            onClick={() => {
              http_fetch.put("characters/change", {
                name: characterNameChange,
                id: character.id,
              });
              setCharacterNameChange("");
              refreshData();
              setEditTrue({ edit: false });
            }}
          >
            Submit
          </button>
        </label>
      )}
    </div>
  );
}
