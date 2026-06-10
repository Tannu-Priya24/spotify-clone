import React, { useContext, useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";

import { PlayerContext } from "../context/PlayerContext";

const Display = () => {

  const { albumsData } = useContext(PlayerContext);

  const displayRef = useRef();

  const location = useLocation();

  const isAlbum = location.pathname.includes("album");

  const albumId = location.pathname.split("/").pop();

  // Find current album safely
  const currentAlbum = albumsData?.find(
    (album) => album.id == albumId
  );

  // Dynamic background color
  const bgColor = currentAlbum
    ? currentAlbum.bgColor
    : "#121212";

  // Background effect
  useEffect(() => {

    if (displayRef.current) {

      if (isAlbum) {

        displayRef.current.style.background =
          `linear-gradient(${bgColor}, #121212)`;

      } else {

        displayRef.current.style.background = "#121212";

      }

    }

  }, [isAlbum, bgColor]);

  return (

    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded text-white overflow-auto lg:w-[75%] lg:ml-0"
    >

      <Routes>

        {/* Home Route */}
        <Route
          path="/"
          element={<DisplayHome />}
        />

        {/* Album Route */}
        <Route
          path="/album/:id"
          element={<DisplayAlbum />}
        />

      </Routes>

    </div>

  );
};

export default Display;