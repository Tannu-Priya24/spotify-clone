import { createContext, useRef, useState } from "react";

import { songsData, albumsData } from "../assets/frontend-assets/assets";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();

    const [track, setTrack] = useState(songsData[0]);

    const playWithId = async (id) => {

        const selectedSong = songsData.find(
            (song) => song.id === id
        );

        setTrack(selectedSong);

        setTimeout(() => {
            audioRef.current.play();
        },100);
    };


    const contextValue = {
        audioRef,
        track,
        setTrack,
        songsData,
        albumsData,
        playWithId
    };


    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};


export { PlayerContext };

export default PlayerContextProvider;