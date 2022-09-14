import { characterImgAvatars } from "../../utils/variables/Avatar";

interface props {
  chosen: string;
  chosenFunction: Function;
}

export default function AvatarList({ chosen, chosenFunction }: props) {
  return (
    <div className="mt-8 grid grid-cols-10 gap-2 justify-center w-5/12">
      {characterImgAvatars.map((avatar) => (
        <img
          key={avatar}
          className={`border-8 hover:opacity-90 hover:grayscale-0
          ${
            avatar === chosen
              ? "border-b-yellow-500"
              : "border-b-red-700 opacity-50 grayscale"
          }`}
          src={avatar}
          alt="Character image"
          onClick={() => {
            chosenFunction(avatar);
          }}
        />
      ))}
    </div>
  );
}
