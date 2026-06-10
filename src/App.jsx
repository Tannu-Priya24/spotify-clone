import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {

  const context = useContext(PlayerContext);

  if (!context) {
    return (
      <div className="bg-black text-white h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const { audioRef, track } = context;

  return (
    <div className="h-screen bg-black">

      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>

      <Player />

      <audio
        ref={audioRef}
        src={track?.file || null}
        preload="auto"
      ></audio>

    </div>
  );
};

export default App;