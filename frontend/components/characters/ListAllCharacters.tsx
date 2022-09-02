import { useState } from "react";
import { PrismaClient } from "@prisma/client";
import http_fetch from "../../utils/http_fetch";
import { useSession } from "next-auth/react";

function ListAllCharacters() {
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
}

export default ListAllCharacters;
