import { useState } from "react";
import { useSession, getSession } from "next-auth/react";
import { MAX_CHARACTERS } from "../utils/variables/global";
import ListAllCharacters from "../components/characters/ListAllCharacters";
import AddCharacter from "../components/characters/AddCharacter";
import { prisma } from "../prisma";
import { useRouter } from "next/router";

function Characters({ associatedCharacters }: any) {
  const router = useRouter();
  function refreshData(hardRefresh: boolean) {
    hardRefresh ? router.reload() : router.replace(router.asPath);
  }

  const session = useSession();
  const [edit, setEdit] = useState(false);

  return (
    <>
      <ListAllCharacters characters={associatedCharacters} />

      <div className="mt-16 flex-row">
        <button
          className="bg-black text-white w-full"
          onClick={() => {
            edit ? setEdit(false) : setEdit(true);
          }}
        >
          Add a new character
        </button>

        <div className="mt-16">
          {edit && <AddCharacter editTrue={edit} session={session} />}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: object) {
  const session = await getSession(context);

  const associatedCharacters = await prisma.character.findMany({
    where: {
      userEmail: session?.user?.email as any,
    },
  });

  return {
    props: {
      associatedCharacters,
    },
  };
}

export default Characters;
