import { useRouter } from "next/router";
import { useState } from "react";
import { http_fetch, characterAdd } from "../../utils/http_fetch";
import AvatarList from "./AvatarList";

interface props {
  editTrue?: boolean;
  session: object;
}

//TODO: Add limitation for maximum number of characters and try to add it in SQL too
export default function AddCharacter({ session }: props) {
  // TODO: make a custom hook for useRouter()?
  const router = useRouter();
  function refreshData(hardRefresh: boolean) {
    hardRefresh ? router.reload() : router.replace(router.asPath);
  }

  return (
    <div className="justify-center">
      {characterCreate(session, refreshData)}
    </div>
  );
}

function characterCreate(session: any, refreshData: Function) {
  const [characterName, setCharacterName] = useState("");
  const [characterAvatar, setCharacterAvatar] = useState("/avatars/1.png");
  return (
    <>
      <div className="flex justify-center w-full">
        <label>
          Set character name:
          <input
            type="text"
            name="Character name"
            value={characterName}
            autoComplete="off"
            placeholder="Set new character name..."
            onChange={(e) => setCharacterName(e.target.value)}
          />
          <button
            onClick={() => {
              // if (characterName === "") alert("Character name is empty!");
              // else {
              characterAdd(session?.id, session?.data?.user?.email, {
                name: characterName,
                avatar: characterAvatar,
              });
              // http_fetch.post("characters/create", {
              //   userEmail: session?.data?.user?.email,
              //   name: characterName,
              //   avatar: characterAvatar,
              // });
              setCharacterName("");
              refreshData(true);
              // }
            }}
          >
            Submit
          </button>
        </label>
      </div>

      <div className="flex justify-center">
        <AvatarList
          chosen={characterAvatar}
          chosenFunction={setCharacterAvatar}
        />
      </div>
    </>
  );
}
