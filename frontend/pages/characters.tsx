import { useState } from "react";
import { useSession, getSession } from "next-auth/react";
import { MAX_CHARACTERS } from "../utils/variables/global";
import ListAllCharacters from "../components/characters/ListAllCharacters";
import AddCharacter from "../components/characters/AddCharacter";
import { prisma } from "../prisma";
import { Character } from "../components/characters/character";

interface props {
  associatedCharacters: Array<Character>;
}

function Characters({ associatedCharacters }: props) {
  const session = useSession();
  const [edit, setEdit] = useState(false);
  const [limit, setLimit] = useState(false);

  return (
    <>
      <ListAllCharacters characters={associatedCharacters} />

      <div className="mt-16 flex-row">
        <button
          className="bg-black text-white w-full"
          onClick={() => {
            if (associatedCharacters.length < MAX_CHARACTERS)
              edit ? setEdit(false) : setEdit(true);
            else {
              setEdit(false);
              setLimit(true);
              setTimeout(() => setLimit(false), 4000); // 4 second timer for warning to disappear
            }
          }}
        >
          Add a new character
        </button>

        <div className="mt-16">
          {edit && <AddCharacter editTrue={edit} session={session} />}
        </div>

        <div className="flex justify-center">
          {limit && (
            <p className="text-red-700">
              Maximum number of characters reached.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: object) {
  const session = await getSession(context);

  const associatedCharacters = await prisma.character.findMany({
    where: {
      userEmail: session?.user?.email as string,
    },
  });

  return {
    props: {
      associatedCharacters,
    },
  };
}

export default Characters;
