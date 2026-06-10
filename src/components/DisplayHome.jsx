import React, { useContext } from "react";
import Navbar from "./Navbar";

import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

import { PlayerContext } from "../context/PlayerContext";


const DisplayHome = () => {

  const { songsData, albumsData } = useContext(PlayerContext);


  return (
    <>

      <Navbar />


      <div className="mb-4">

        <h1 className="my-5 font-bold text-2xl">
          Featured Charts
        </h1>


        <div className="flex overflow-auto">

          {albumsData.map((album) => (

            <AlbumItem

              key={album.id}

              name={album.name}

              desc={album.desc}

              image={album.image}

              id={album.id}

            />

          ))}

        </div>

      </div>


      <div className="mb-4">

        <h1 className="my-5 font-bold text-2xl">
          Today's Biggest Hits
        </h1>


        <div className="flex overflow-auto">

          {songsData.map((song) => (

            <SongItem

              key={song.id}

              id={song.id}

              name={song.name}

              desc={song.desc}

              image={song.image}

            />

          ))}

        </div>

      </div>


    </>
  );
};


export default DisplayHome;