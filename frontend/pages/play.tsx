import { Player } from "@lottiefiles/react-lottie-player";

function Play() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1 justify-items-center items-center mt-16">
        <div className="md:justify-self-end font-extrabold md:text-4xl text-2xl">
          <h2 className="md:text-start text-center">JOIN NAVAL WARS</h2>
          <h1 className="md:text-5xl text-3xl">
            AND <span className="text-sky-700 font-black">RULE THE SEAS</span>
          </h1>
        </div>
        <div className="md:justify-self-start w-1/2">
          <Player
            src="https://assets5.lottiefiles.com/packages/lf20_ovcegRi7V6.json"
            className="player"
            loop
            autoplay
          />
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          className="text-cyan-500 text-5xl hover:text-white font-black
						px-8 py-3 bg-gray-200 hover:bg-gray-600"
        >
          PLAY
        </button>
      </div>
    </>
  );
}

export default Play;
