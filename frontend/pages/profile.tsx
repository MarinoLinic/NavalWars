import { useSession } from "next-auth/react";
import { useState, useRef } from "react";
import http_fetch from "../utils/http_fetch";

function Profile() {
  const session = useSession();

  // useState hooks
  const [profileName, setProfileName] = useState(session.data?.user?.name);
  const [editProfile, setEditProfile] = useState(false);

  const inputRef = useRef(null) as any;

  let profilePicture = session.data?.user?.image || "/sailing_ship.png";

  function setName(funct: Function, value: string) {
    funct(value);
    inputRef.current.value = ""; // returning the text inside input field to empty
  }

  if (session.status === "loading") {
    return (
      <p className="text-center mt-8 text-red-800 font-bold">Loading...</p>
    );
  }

  if (session.status === "unauthenticated") {
    return (
      <p className="text-center mt-8 text-red-800 font-bold">Access Denied</p>
    );
  }

  return (
    /* User profile */
    <div className="flex flex-col items-center my-16">
      <img
        src={profilePicture}
        alt={"Profile image"}
        className="w-36 mb-4 rounded-full ring-8 ring-gray-200"
        referrerPolicy="no-referrer"
      />

      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        {
          /* if the frontend variable is empty after reload, fetch from db */
          profileName || session.data?.user?.name
        }
      </h2>

      <p className="text-xl font-semibold text-gray-700 mb-4">
        E-mail: {session.data?.user?.email}
      </p>

      <button className="mb-4" onClick={() => setEditProfile(true)}>
        Edit profile
      </button>

      {editProfile && (
        <>
          <label>
            Change name:
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
              http_fetch.post("users/change_name", {
                name: inputRef.current.value,
                email: session.data?.user?.email,
              });
              setName(setProfileName, inputRef.current.value);
              setEditProfile(false);
            }}
          >
            Confirm
          </button>
        </>
      )}
    </div>
  );
}

export default Profile;
